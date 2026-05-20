import test from 'node:test';
import assert from 'node:assert/strict';
import { access, readFile } from 'node:fs/promises';
import { execFile } from 'node:child_process';
import { promisify } from 'node:util';

const execFileAsync = promisify(execFile);

test('site build creates a lightweight redirect landing page and published deck assets', async () => {
  await execFileAsync('npm', ['run', 'build:catalog'], {
    cwd: new URL('../../', import.meta.url),
  });
  await execFileAsync('npm', ['run', 'build:site'], {
    cwd: new URL('../../', import.meta.url),
  });

  const html = await readFile(new URL('../../site/dist/index.html', import.meta.url), 'utf8');
  assert.match(html, /Redirecting to the README deck index/);
  assert.match(html, /github\.com\/MohammedELKheir\/tyk-training#deck-inventory/);
  assert.doesNotMatch(html, /Find relevant content/);
  assert.doesNotMatch(html, /Search decks and slides/);

  await access(new URL('../../site/dist/decks/api-gateway-fundamentals/deck.md', import.meta.url));
  await access(new URL('../../site/dist/decks/api-gateway-fundamentals/presentation/index.html', import.meta.url));
  await access(new URL('../../site/dist/decks/foundational-onboarding/manifest.yaml', import.meta.url));
  await access(new URL('../../site/dist/decks/foundational-onboarding/presentation/index.html', import.meta.url));
  await access(new URL('../../site/dist/decks/graphql-2025/manifest.yaml', import.meta.url));
  await access(new URL('../../site/dist/decks/graphql-2025/presentation/index.html', import.meta.url));
});
