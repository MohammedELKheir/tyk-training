import path from 'node:path';
import { fileURLToPath } from 'node:url';

import { validateRepositoryMetadata, ValidationError } from './metadata.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const defaultRoot = path.resolve(__dirname, '..', '..');
const targetRoot = process.argv[2] ? path.resolve(process.argv[2]) : defaultRoot;

try {
  const repository = await validateRepositoryMetadata(targetRoot);
  const summary = `Validation passed for ${repository.decks.length} deck(s) and ${repository.slides.length} slide(s) in ${targetRoot}`;
  console.log(summary);

  if (repository.warnings.length) {
    for (const warning of repository.warnings) {
      console.warn(`WARNING: ${warning}`);
    }
  }
} catch (error) {
  if (error instanceof ValidationError) {
    console.error(error.message);
    process.exit(1);
  }

  console.error(error);
  process.exit(1);
}
