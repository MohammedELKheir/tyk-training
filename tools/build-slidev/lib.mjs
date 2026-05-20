export const GLOBAL_DECK_BUILD_TRIGGERS = [
  'package.json',
  'package-lock.json',
  'tools/build-slidev/',
  'themes/',
];

export function defaultOptions() {
  return {
    changedOnly: false,
    concurrency: 2,
  };
}

export function parseBuildDeckOptions(argv = []) {
  const options = defaultOptions();

  for (const arg of argv) {
    if (arg === '--changed') {
      options.changedOnly = true;
      continue;
    }

    if (arg === '--all') {
      options.changedOnly = false;
      continue;
    }

    if (arg.startsWith('--concurrency=')) {
      const value = Number.parseInt(arg.slice('--concurrency='.length), 10);
      if (!Number.isInteger(value) || value < 1) {
        throw new Error(`Invalid --concurrency value: ${arg}`);
      }
      options.concurrency = value;
      continue;
    }
  }

  return options;
}

export function selectDecksToBuild({ repository, options, changedFiles = [] }) {
  if (!options.changedOnly) {
    return repository.decks;
  }

  const normalizedChangedFiles = changedFiles.map(normalizePath);
  if (normalizedChangedFiles.some(isGlobalDeckBuildTrigger)) {
    return repository.decks;
  }

  const changedDecks = new Set();
  for (const file of normalizedChangedFiles) {
    const match = file.match(/^decks\/([^/]+)\//);
    if (match) {
      changedDecks.add(match[1]);
    }
  }

  return repository.decks.filter((deck) => changedDecks.has(deck.slug));
}

export function normalizePath(filePath) {
  return filePath.replaceAll('\\', '/').replace(/^\.\//, '');
}

function isGlobalDeckBuildTrigger(filePath) {
  return GLOBAL_DECK_BUILD_TRIGGERS.some((prefix) => filePath === prefix || filePath.startsWith(prefix));
}
