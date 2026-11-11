#!/usr/bin/env node
import { createDraft, getDraft, listDrafts, planInstance } from '../../packages/instance-manager/index.mjs';

const usage = `yorha — DSH Agent Workbench (development)

Usage:
  yorha plan  --id ID [--mode official|purge] [--dsh-version VERSION] [--resource ABS_PATH]... [--data-root ABS_PATH]
  yorha draft --id ID [--mode official|purge] [--dsh-version VERSION] [--resource ABS_PATH]... [--data-root ABS_PATH]
  yorha list  [--data-root ABS_PATH]
  yorha show  --id ID [--data-root ABS_PATH]

A draft records configuration only. It does not install, patch or start DSH.
`;

function parseOptions(args, allowed) {
  const values = { resources: [] };
  const names = { '--id': 'id', '--mode': 'mode', '--dsh-version': 'dshVersion', '--resource': 'resources', '--data-root': 'dataRoot' };
  for (let i = 0; i < args.length; i += 1) {
    const name = args[i];
    const key = names[name];
    if (!key || !allowed.includes(key)) throw new Error(`unknown option: ${name}`);
    const value = args[++i];
    if (!value || value.startsWith('--')) throw new Error(`missing value for ${name}`);
    if (key === 'resources') values.resources.push(value);
    else {
      if (values[key] !== undefined) throw new Error(`duplicate option: ${name}`);
      values[key] = value;
    }
  }
  return values;
}

async function main(args) {
  const command = args[0];
  if (!command || command === '--help' || command === '-h') {
    process.stdout.write(usage);
    return;
  }
  const allowed = {
    plan: ['id', 'mode', 'dshVersion', 'resources', 'dataRoot'],
    draft: ['id', 'mode', 'dshVersion', 'resources', 'dataRoot'],
    list: ['dataRoot'],
    show: ['id', 'dataRoot'],
  };
  if (!Object.hasOwn(allowed, command)) throw new Error(`unknown command: ${command}`);
  const options = parseOptions(args.slice(1), allowed[command]);
  let result;
  if (command === 'list') result = await listDrafts(options.dataRoot);
  else if (command === 'show') result = await getDraft(options.id, options.dataRoot);
  else {
    const plan = await planInstance(options);
    result = command === 'plan' ? plan : await createDraft(plan);
  }
  process.stdout.write(`${JSON.stringify(result, null, 2)}\n`);
}

try {
  await main(process.argv.slice(2));
} catch (error) {
  process.stderr.write(`yorha: ${error.message}\n`);
  process.exitCode = 1;
}
