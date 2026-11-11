import { createHash } from 'node:crypto';
import { constants } from 'node:fs';
import { lstat, mkdir, open, readFile, readdir } from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const modesRoot = fileURLToPath(new URL('../../modes/', import.meta.url));
const identifierPattern = /^[a-z0-9](?:[a-z0-9-]{0,62}[a-z0-9])?$/;

function identifier(value, label) {
  if (typeof value !== 'string' || !identifierPattern.test(value)) {
    throw new Error(`${label} must contain 1–64 lowercase letters, numbers or hyphens, and start and end with a letter or number`);
  }
  return value;
}

export function resolveDataRoot(value = process.env.YORHA_HOME || path.join(os.homedir(), '.local', 'share', 'yorha')) {
  if (typeof value !== 'string' || !path.isAbsolute(value)) {
    throw new Error('data root must be an absolute path');
  }
  return path.resolve(value);
}

async function modeDefinition(modeId) {
  identifier(modeId, 'mode');
  const contents = await readFile(path.join(modesRoot, modeId, 'mode.json'));
  const mode = JSON.parse(contents.toString('utf8'));
  if (mode.schemaVersion !== 1 || mode.id !== modeId || !Array.isArray(mode.dshVersions)) {
    throw new Error(`invalid mode definition: ${modeId}`);
  }
  return { mode, sha256: createHash('sha256').update(contents).digest('hex') };
}

export async function planInstance({ id, mode: modeId = 'official', dshVersion = '0.2.1-rc.5', resources = [], dataRoot }) {
  identifier(id, 'instance id');
  const root = resolveDataRoot(dataRoot);
  if (!Array.isArray(resources) || resources.some((resource) => typeof resource !== 'string' || !path.isAbsolute(resource))) {
    throw new Error('resources must be absolute paths');
  }
  const { mode, sha256 } = await modeDefinition(modeId);
  if (!mode.dshVersions.includes(dshVersion)) {
    throw new Error(`mode ${modeId} does not declare support for DSH ${dshVersion}`);
  }
  return {
    schemaVersion: 1,
    instance: { id, directory: path.join(root, 'instances', id) },
    mode: { definition: mode, sha256 },
    dsh: { version: dshVersion, installed: false, compatibility: mode.verification },
    resources: resources.map((resource) => ({ path: path.resolve(resource), ownership: 'external-reference' })),
    operations: ['create instance draft', 'record configuration snapshot'],
    pending: ['install DSH', 'apply and verify patches', 'configure capabilities', 'start runtime'],
  };
}

async function realDirectory(directory) {
  const info = await lstat(directory);
  if (!info.isDirectory() || info.isSymbolicLink()) {
    throw new Error(`expected a non-symlink directory: ${directory}`);
  }
}

async function ensureInstancesRoot(root) {
  await mkdir(root, { recursive: true, mode: 0o700 });
  await realDirectory(root);
  const instances = path.join(root, 'instances');
  try {
    await mkdir(instances, { mode: 0o700 });
  } catch (error) {
    if (error.code !== 'EEXIST') throw error;
  }
  await realDirectory(instances);
  return instances;
}

async function readManifest(directory) {
  await realDirectory(directory);
  const handle = await open(path.join(directory, 'instance.json'), constants.O_RDONLY | (constants.O_NOFOLLOW || 0));
  try {
    return JSON.parse(await handle.readFile({ encoding: 'utf8' }));
  } finally {
    await handle.close();
  }
}

export async function createDraft(plan) {
  if (plan?.schemaVersion !== 1 || !plan.instance || !plan.mode || !plan.dsh || !Array.isArray(plan.resources)) {
    throw new Error('invalid instance plan');
  }
  const id = identifier(plan.instance.id, 'instance id');
  const directory = path.resolve(plan.instance.directory);
  if (path.basename(directory) !== id || path.basename(path.dirname(directory)) !== 'instances') {
    throw new Error('invalid planned instance directory');
  }
  const root = path.dirname(path.dirname(directory));
  const instances = await ensureInstancesRoot(root);
  await mkdir(path.join(instances, id), { mode: 0o700 });
  const manifest = {
    schemaVersion: 1,
    id,
    state: 'draft',
    createdAt: new Date().toISOString(),
    mode: plan.mode,
    dsh: plan.dsh,
    resources: plan.resources,
    pending: plan.pending,
  };
  const handle = await open(path.join(directory, 'instance.json'), 'wx', 0o600);
  try {
    await handle.writeFile(JSON.stringify(manifest, null, 2) + '\n');
  } finally {
    await handle.close();
  }
  return manifest;
}

export async function getDraft(id, dataRoot) {
  identifier(id, 'instance id');
  const root = resolveDataRoot(dataRoot);
  await realDirectory(path.join(root, 'instances'));
  const manifest = await readManifest(path.join(root, 'instances', id));
  if (manifest.id !== id || manifest.schemaVersion !== 1) throw new Error(`invalid manifest: ${id}`);
  return manifest;
}

export async function listDrafts(dataRoot) {
  const root = resolveDataRoot(dataRoot);
  const instances = path.join(root, 'instances');
  try {
    await realDirectory(instances);
  } catch (error) {
    if (error.code === 'ENOENT') return [];
    throw error;
  }
  const entries = await readdir(instances, { withFileTypes: true });
  const results = [];
  for (const entry of entries.sort((a, b) => a.name.localeCompare(b.name))) {
    if (!entry.isDirectory()) continue;
    try {
      const manifest = await getDraft(entry.name, root);
      results.push({ id: manifest.id, state: manifest.state, mode: manifest.mode.definition.id });
    } catch (error) {
      results.push({ id: entry.name, state: 'invalid', error: error.message });
    }
  }
  return results;
}
