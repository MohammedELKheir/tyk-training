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
    diffRange: '',
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

    if (arg.startsWith('--diff=')) {
      options.diffRange = arg.slice('--diff='.length).trim();
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

export function resolveChangedFileSource({ env = {}, options = defaultOptions() } = {}) {
  if (options.diffRange) {
    return {
      type: 'diff',
      range: options.diffRange,
      label: `explicit diff ${options.diffRange}`,
    };
  }

  if (env.GITHUB_EVENT_NAME === 'pull_request' && env.GITHUB_BASE_REF) {
    return {
      type: 'diff',
      range: `origin/${env.GITHUB_BASE_REF}...HEAD`,
      label: `pull request diff against origin/${env.GITHUB_BASE_REF}`,
    };
  }

  if (env.GITHUB_EVENT_NAME === 'push' && env.GITHUB_EVENT_BEFORE && !isZeroSha(env.GITHUB_EVENT_BEFORE)) {
    const head = env.GITHUB_SHA || 'HEAD';
    return {
      type: 'diff',
      range: `${env.GITHUB_EVENT_BEFORE}...${head}`,
      label: `push diff ${env.GITHUB_EVENT_BEFORE}...${head}`,
    };
  }

  return {
    type: 'status',
    label: 'local git status',
  };
}

function isGlobalDeckBuildTrigger(filePath) {
  return GLOBAL_DECK_BUILD_TRIGGERS.some((prefix) => filePath === prefix || filePath.startsWith(prefix));
}

function isZeroSha(value) {
  return /^0+$/.test(value);
}
