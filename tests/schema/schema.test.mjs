import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

for (const file of [
  'schemas/deck.schema.json',
  'schemas/slide.schema.json',
  'schemas/taxonomy.schema.json',
]) {
  test(`JSON parses: ${file}`, async () => {
    const parsed = JSON.parse(await readFile(new URL(`../../${file}`, import.meta.url), 'utf8'));
    assert.equal(typeof parsed, 'object');
  });
}
