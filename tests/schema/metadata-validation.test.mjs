import test from 'node:test';
import assert from 'node:assert/strict';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { execFile } from 'node:child_process';
import { promisify } from 'node:util';

import {
  ValidationError,
  loadRepositoryMetadata,
  validateRepositoryMetadata,
} from '../../tools/validate/metadata.mjs';

const execFileAsync = promisify(execFile);
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const fixturesRoot = path.resolve(__dirname, '..', 'fixtures', 'metadata-repos');

const fixture = (...parts) => path.join(fixturesRoot, ...parts);

test('loadRepositoryMetadata resolves inherited slide metadata and sequence context', async () => {
  const repo = await loadRepositoryMetadata(fixture('valid-inheritance'));

  assert.equal(repo.decks.length, 1);
  assert.equal(repo.decks[0].id, 'gateway-fundamentals');
  assert.equal(repo.slides.length, 3);

  const middleSlide = repo.slides.find((slide) => slide.slug === 'traffic-flow');
  assert.ok(middleSlide);
  assert.deepEqual(middleSlide.topics, ['api-gateway']);
  assert.deepEqual(middleSlide.categories, ['fundamentals']);
  assert.deepEqual(middleSlide.audiences, ['solutions-architect']);
  assert.deepEqual(middleSlide.use_cases, ['onboarding']);
  assert.equal(middleSlide.standalone_safe, false);
  assert.equal(middleSlide.sequence_group, 'gateway-core-flow');
  assert.equal(middleSlide.sequence_role, 'middle');
  assert.deepEqual(middleSlide.requires_context, ['gateway-fundamentals/001-title']);

  assert.deepEqual(repo.sequenceGroups.get('gateway-fundamentals::gateway-core-flow').map((slide) => slide.slug), [
    'title',
    'traffic-flow',
    'request-lifecycle',
  ]);
});

test('validateRepositoryMetadata rejects unknown taxonomy ids', async () => {
  await assert.rejects(
    validateRepositoryMetadata(fixture('invalid-taxonomy')),
    (error) => {
      assert.ok(error instanceof ValidationError);
      assert.match(error.message, /unknown taxonomy id/i);
      assert.match(error.message, /totally-unknown-topic/);
      return true;
    },
  );
});

test('validateRepositoryMetadata rejects contradictory sequence roles', async () => {
  await assert.rejects(
    validateRepositoryMetadata(fixture('invalid-sequence')),
    (error) => {
      assert.ok(error instanceof ValidationError);
      assert.match(error.message, /sequence group/i);
      assert.match(error.message, /must contain exactly one start/i);
      return true;
    },
  );
});

test('validateRepositoryMetadata rejects unresolved hard dependencies', async () => {
  await assert.rejects(
    validateRepositoryMetadata(fixture('invalid-dependency')),
    (error) => {
      assert.ok(error instanceof ValidationError);
      assert.match(error.message, /requires_context/i);
      assert.match(error.message, /does not exist/i);
      return true;
    },
  );
});

test('validate CLI succeeds for valid fixture repo', async () => {
  const { stdout } = await execFileAsync('node', ['tools/validate/main.mjs', fixture('valid-inheritance')], {
    cwd: path.resolve(__dirname, '..', '..'),
  });

  assert.match(stdout, /validation passed/i);
});

test('validate CLI exits non-zero for invalid fixture repo', async () => {
  await assert.rejects(
    execFileAsync('node', ['tools/validate/main.mjs', fixture('invalid-taxonomy')], {
      cwd: path.resolve(__dirname, '..', '..'),
    }),
    (error) => {
      assert.equal(error.code, 1);
      assert.match(error.stderr, /unknown taxonomy id/i);
      return true;
    },
  );
});
