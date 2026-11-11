import assert from 'node:assert/strict';
import { mkdtemp, mkdir, readFile, rm, symlink, writeFile } from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';
import { afterEach, beforeEach, test } from 'node:test';
import { spawnSync } from 'node:child_process';
import { createDraft, getDraft, listDrafts, planInstance } from '../packages/instance-manager/index.mjs';

let scratch;
beforeEach(async () => { scratch = await mkdtemp(path.join(os.tmpdir(), 'yorha-test-')); });
afterEach(async () => { await rm(scratch, { recursive: true, force: true }); });

test('planning records versions and references without creating runtime data', async () => {
  const root = path.join(scratch, 'data');
  const resource = path.join(scratch, 'external');
  const plan = await planInstance({ id: 'ctf-training', mode: 'purge', dataRoot: root, resources: [resource] });
  assert.equal(plan.mode.definition.patches[0].id, 'dsh-purge');
  assert.match(plan.mode.sha256, /^[a-f0-9]{64}$/);
  assert.deepEqual(plan.resources, [{ path: resource, ownership: 'external-reference' }]);
  assert.equal(plan.dsh.compatibility, 'unverified');
  await assert.rejects(readFile(root), { code: 'ENOENT' });
});

test('a draft is isolated, inspectable and cannot overwrite an existing instance', async () => {
  const root = path.join(scratch, 'data');
  const external = path.join(scratch, 'external');
  await writeFile(external, 'untouched');
  const first = await planInstance({ id: 'first', dataRoot: root, resources: [external] });
  const second = await planInstance({ id: 'second', mode: 'purge', dataRoot: root });
  await createDraft(first);
  await createDraft(second);
  await assert.rejects(createDraft(first), { code: 'EEXIST' });
  assert.equal((await getDraft('first', root)).state, 'draft');
  assert.deepEqual((await listDrafts(root)).map((item) => item.id), ['first', 'second']);
  assert.equal(await readFile(external, 'utf8'), 'untouched');
});

test('rejects traversal, relative resources and unsupported version', async () => {
  await assert.rejects(planInstance({ id: '../escape', dataRoot: scratch }), /instance id/);
  await assert.rejects(planInstance({ id: 'ok', dataRoot: scratch, resources: ['relative'] }), /absolute/);
  await assert.rejects(planInstance({ id: 'ok', dataRoot: scratch, dshVersion: '99.0' }), /does not declare/);
  await assert.rejects(planInstance({ id: 'ok', dataRoot: 'relative' }), /absolute/);
});

test('rejects a symlinked instances directory and does not write through it', async () => {
  const root = path.join(scratch, 'data');
  const external = path.join(scratch, 'external');
  await mkdir(root);
  await mkdir(external);
  await symlink(external, path.join(root, 'instances'));
  const plan = await planInstance({ id: 'example', dataRoot: root });
  await assert.rejects(createDraft(plan), /non-symlink directory/);
  await assert.rejects(readFile(path.join(external, 'example', 'instance.json')), { code: 'ENOENT' });
});

test('CLI rejects unknown flags and prints a plan as JSON', () => {
  const executable = path.resolve('apps/cli/yorha.mjs');
  const good = spawnSync(process.execPath, [executable, 'plan', '--id', 'demo', '--data-root', scratch], { encoding: 'utf8' });
  assert.equal(good.status, 0, good.stderr);
  assert.equal(JSON.parse(good.stdout).instance.id, 'demo');
  const bad = spawnSync(process.execPath, [executable, 'plan', '--id', 'demo', '--bogus', 'x'], { encoding: 'utf8' });
  assert.notEqual(bad.status, 0);
  assert.match(bad.stderr, /unknown option/);
});
