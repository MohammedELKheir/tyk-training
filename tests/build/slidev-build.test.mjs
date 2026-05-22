import test from 'node:test';
import assert from 'node:assert/strict';

import {
  GLOBAL_DECK_BUILD_TRIGGERS,
  defaultOptions,
  parseBuildDeckOptions,
  resolveChangedFileSource,
  selectDecksToBuild,
} from '../../tools/build-slidev/lib.mjs';

const repository = {
  decks: [
    { slug: 'deck-a' },
    { slug: 'deck-b' },
    { slug: 'deck-c' },
  ],
};

test('parseBuildDeckOptions defaults to full sequential build intent with safe concurrency', () => {
  assert.deepEqual(parseBuildDeckOptions([]), defaultOptions());
});

test('parseBuildDeckOptions reads changed flag and explicit concurrency', () => {
  assert.deepEqual(parseBuildDeckOptions(['--changed', '--concurrency=3']), {
    changedOnly: true,
    concurrency: 3,
    diffRange: '',
  });
});

test('parseBuildDeckOptions accepts an explicit diff range', () => {
  assert.deepEqual(parseBuildDeckOptions(['--changed', '--diff=main...HEAD']), {
    changedOnly: true,
    concurrency: 2,
    diffRange: 'main...HEAD',
  });
});

test('selectDecksToBuild returns all decks for full builds', () => {
  const selected = selectDecksToBuild({
    repository,
    options: defaultOptions(),
    changedFiles: ['decks/deck-a/slides/001-intro.md'],
  });

  assert.deepEqual(selected.map((deck) => deck.slug), ['deck-a', 'deck-b', 'deck-c']);
});

test('selectDecksToBuild narrows to changed decks for deck-local edits', () => {
  const selected = selectDecksToBuild({
    repository,
    options: { changedOnly: true, concurrency: 2 },
    changedFiles: [
      'decks/deck-a/slides/001-intro.md',
      'decks/deck-c/public/icons/logo.png',
      'site/src/main.js',
    ],
  });

  assert.deepEqual(selected.map((deck) => deck.slug), ['deck-a', 'deck-c']);
});

test('selectDecksToBuild returns all decks when a global trigger changes', () => {
  const trigger = GLOBAL_DECK_BUILD_TRIGGERS[0];
  const selected = selectDecksToBuild({
    repository,
    options: { changedOnly: true, concurrency: 2 },
    changedFiles: [trigger],
  });

  assert.deepEqual(selected.map((deck) => deck.slug), ['deck-a', 'deck-b', 'deck-c']);
});

test('selectDecksToBuild returns no decks when changed-only mode finds no relevant changes', () => {
  const selected = selectDecksToBuild({
    repository,
    options: { changedOnly: true, concurrency: 2 },
    changedFiles: ['site/src/main.js', 'catalog/decks-index.json'],
  });

  assert.deepEqual(selected, []);
});

test('resolveChangedFileSource uses explicit diff before environment inference', () => {
  assert.deepEqual(resolveChangedFileSource({
    env: { GITHUB_EVENT_NAME: 'pull_request', GITHUB_BASE_REF: 'main' },
    options: { ...defaultOptions(), changedOnly: true, diffRange: 'release...HEAD' },
  }), {
    type: 'diff',
    range: 'release...HEAD',
    label: 'explicit diff release...HEAD',
  });
});

test('resolveChangedFileSource uses pull request base branch in GitHub Actions', () => {
  assert.deepEqual(resolveChangedFileSource({
    env: { GITHUB_EVENT_NAME: 'pull_request', GITHUB_BASE_REF: 'main' },
    options: { ...defaultOptions(), changedOnly: true },
  }), {
    type: 'diff',
    range: 'origin/main...HEAD',
    label: 'pull request diff against origin/main',
  });
});

test('resolveChangedFileSource uses push before and sha in GitHub Actions', () => {
  assert.deepEqual(resolveChangedFileSource({
    env: {
      GITHUB_EVENT_NAME: 'push',
      GITHUB_EVENT_BEFORE: 'abc123',
      GITHUB_SHA: 'def456',
    },
    options: { ...defaultOptions(), changedOnly: true },
  }), {
    type: 'diff',
    range: 'abc123...def456',
    label: 'push diff abc123...def456',
  });
});

test('resolveChangedFileSource falls back to local status for first push events', () => {
  assert.deepEqual(resolveChangedFileSource({
    env: {
      GITHUB_EVENT_NAME: 'push',
      GITHUB_EVENT_BEFORE: '0000000000000000000000000000000000000000',
      GITHUB_SHA: 'def456',
    },
    options: { ...defaultOptions(), changedOnly: true },
  }), {
    type: 'status',
    label: 'local git status',
  });
});
