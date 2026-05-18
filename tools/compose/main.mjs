import path from 'node:path';
import { readFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';

import { composeDeck, writeComposedDeck } from './lib.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const defaultRepoRoot = path.resolve(__dirname, '..', '..');

try {
  const args = parseArgs(process.argv.slice(2));
  const requirements = JSON.parse(await readFile(args.requirements, 'utf8'));
  const plan = await composeDeck({
    repoRoot: args.repo,
    requirements,
  });
  const output = await writeComposedDeck(plan, { outputRoot: args.output });

  console.log(
    JSON.stringify(
      {
        deck_slug: plan.requirements.deck_slug,
        title: plan.requirements.title,
        customer: plan.requirements.customer,
        deck_dir: output.deckDir,
        total_selected_slides: plan.summary.totalSelectedSlides,
        direct_match_slide_ids: plan.directMatchSlideIds,
        dependency_added_slide_ids: plan.dependencyAddedSlideIds,
      },
      null,
      2,
    ),
  );
} catch (error) {
  console.error(error instanceof Error ? error.message : String(error));
  process.exitCode = 1;
}

function parseArgs(argv) {
  const args = {
    repo: defaultRepoRoot,
    output: path.resolve(defaultRepoRoot, 'generated-customer-decks'),
    requirements: null,
  };

  for (let index = 0; index < argv.length; index += 1) {
    const token = argv[index];
    switch (token) {
      case '--repo':
        args.repo = path.resolve(argv[++index]);
        break;
      case '--output':
        args.output = path.resolve(argv[++index]);
        break;
      case '--requirements':
        args.requirements = path.resolve(argv[++index]);
        break;
      case '--help':
        printHelp();
        process.exit(0);
        break;
      default:
        throw new Error(`Unknown argument: ${token}`);
    }
  }

  if (!args.requirements) {
    throw new Error('Missing required --requirements <path-to-json> argument.');
  }

  return args;
}

function printHelp() {
  console.log(`Usage: node tools/compose/main.mjs --requirements requirements.json [--repo <repo-root>] [--output <dir>]\n`);
}
