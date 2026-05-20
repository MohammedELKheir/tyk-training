import test from 'node:test';
import assert from 'node:assert/strict';

import {
  GLOBAL_DECK_BUILD_TRIGGERS,
  defaultOptions,
  parseBuildDeckOptions,
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
