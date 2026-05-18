import { readdir, readFile } from 'node:fs/promises';
import path from 'node:path';

const TAXONOMY_DIMENSIONS = ['topics', 'categories', 'audiences', 'use_cases'];
const OPTIONAL_TAXONOMY_DIMENSIONS = ['products'];
const SLIDE_RELATION_LISTS = ['requires_context', 'builds_on', 'recommended_next', 'assets'];
const SLUG_PATTERN = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
const SLIDE_FILE_PATTERN = /^(\d+)-([a-z0-9]+(?:-[a-z0-9]+)*)\.md$/;

export class ValidationError extends Error {
  constructor(message, { errors = [], warnings = [] } = {}) {
    super(message);
    this.name = 'ValidationError';
    this.errors = errors;
    this.warnings = warnings;
  }
}

export async function loadRepositoryMetadata(rootDir) {
  const repository = await collectRepositoryMetadata(rootDir);

  if (repository.errors.length) {
    throw new ValidationError(formatValidationIssues(repository.errors, repository.warnings), repository);
  }

  return repository;
}

export async function validateRepositoryMetadata(rootDir) {
  return loadRepositoryMetadata(rootDir);
}

async function collectRepositoryMetadata(rootDir) {
  const taxonomyPath = path.join(rootDir, 'catalog', 'taxonomy.json');
  const decksRoot = path.join(rootDir, 'decks');

  const taxonomy = JSON.parse(await readFile(taxonomyPath, 'utf8'));
  const deckEntries = await readdir(decksRoot, { withFileTypes: true });
  const deckDirs = deckEntries.filter((entry) => entry.isDirectory()).map((entry) => entry.name).sort();

  const errors = [];
  const warnings = [];
  const decks = [];
  const slides = [];
  const slideById = new Map();
  const sequenceGroups = new Map();

  validateTaxonomyRegistry(taxonomy, errors);

  for (const deckSlug of deckDirs) {
    const deckPath = path.join(decksRoot, deckSlug);
    const manifestPath = path.join(deckPath, 'manifest.yaml');
    const slidesDir = path.join(deckPath, 'slides');
    const manifest = parseSimpleYaml(await readFile(manifestPath, 'utf8'));
    const slideFiles = (await readdir(slidesDir, { withFileTypes: true }))
      .filter((entry) => entry.isFile() && entry.name.endsWith('.md'))
      .map((entry) => entry.name)
      .sort();

    const deck = normalizeDeck(manifest, { deckSlug, manifestPath, taxonomy, errors });
    const deckSlides = [];

    for (const slideFile of slideFiles) {
      const slidePath = path.join(slidesDir, slideFile);
      const rawSlide = await readSlideFrontmatter(slidePath);
      const slide = normalizeSlide(rawSlide, {
        deck,
        slideFile,
        slidePath,
        taxonomy,
        errors,
      });

      slides.push(slide);
      deckSlides.push(slide);
      slideById.set(slide.id, slide);

      if (slide.sequence_group) {
        const groupKey = `${deck.id}::${slide.sequence_group}`;
        if (!sequenceGroups.has(groupKey)) {
          sequenceGroups.set(groupKey, []);
        }
        sequenceGroups.get(groupKey).push(slide);
      }
    }

    validateCanonicalOrder(deck, deckSlides, errors);
    decks.push({ ...deck, slides: deckSlides });
  }

  validateSlideRelationships(slides, slideById, errors);
  validateSequenceGroups(sequenceGroups, errors, warnings);

  return {
    rootDir,
    taxonomy,
    decks,
    slides,
    slideById,
    sequenceGroups,
    errors,
    warnings,
  };
}

function validateTaxonomyRegistry(taxonomy, errors) {
  for (const dimension of [...TAXONOMY_DIMENSIONS, ...OPTIONAL_TAXONOMY_DIMENSIONS]) {
    const value = taxonomy[dimension];
    if (value === undefined) {
      if (OPTIONAL_TAXONOMY_DIMENSIONS.includes(dimension)) {
        continue;
      }
      errors.push(`taxonomy.json is missing required dimension '${dimension}'`);
      continue;
    }

    if (!isPlainObject(value)) {
      errors.push(`taxonomy.json dimension '${dimension}' must be an object keyed by taxonomy id`);
      continue;
    }

    for (const id of Object.keys(value)) {
      if (!SLUG_PATTERN.test(id)) {
        errors.push(`taxonomy.json dimension '${dimension}' contains invalid id '${id}'`);
      }
    }
  }
}

function normalizeDeck(manifest, { deckSlug, manifestPath, taxonomy, errors }) {
  const requiredFields = ['id', 'slug', 'title', 'status', 'version', 'owners', 'summary', ...TAXONOMY_DIMENSIONS];

  for (const field of requiredFields) {
    if (manifest[field] === undefined) {
      errors.push(`${relativeFromRepo(manifestPath, manifestPath)} is missing required field '${field}'`);
    }
  }

  if (manifest.id && manifest.id !== deckSlug) {
    errors.push(`${relativeFromRepo(manifestPath, manifestPath)} field 'id' must match deck directory slug '${deckSlug}'`);
  }

  if (manifest.slug && manifest.slug !== deckSlug) {
    errors.push(`${relativeFromRepo(manifestPath, manifestPath)} field 'slug' must match deck directory slug '${deckSlug}'`);
  }

  if (!['active', 'draft', 'deprecated', 'archived'].includes(manifest.status)) {
    errors.push(`${relativeFromRepo(manifestPath, manifestPath)} field 'status' must be one of active|draft|deprecated|archived`);
  }

  if (!Number.isInteger(manifest.version) || manifest.version < 1) {
    errors.push(`${relativeFromRepo(manifestPath, manifestPath)} field 'version' must be an integer >= 1`);
  }

  if (!Array.isArray(manifest.owners) || manifest.owners.length === 0) {
    errors.push(`${relativeFromRepo(manifestPath, manifestPath)} field 'owners' must be a non-empty array`);
  }

  for (const dimension of TAXONOMY_DIMENSIONS) {
    validateTaxonomyRefs(manifest[dimension], dimension, taxonomy, manifestPath, errors);
  }
  validateTaxonomyRefs(manifest.products ?? [], 'products', taxonomy, manifestPath, errors, { optional: true });

  const canonicalOrder = ensureArray(manifest.canonical_order, `${relativeFromRepo(manifestPath, manifestPath)} field 'canonical_order'`, errors);
  const extractionDefaults = isPlainObject(manifest.extraction_defaults) ? manifest.extraction_defaults : {};

  return {
    ...manifest,
    slug: manifest.slug ?? deckSlug,
    canonical_order: canonicalOrder,
    products: ensureOptionalArray(manifest.products, `${relativeFromRepo(manifestPath, manifestPath)} field 'products'`, errors),
    prerequisites: ensureOptionalArray(manifest.prerequisites, `${relativeFromRepo(manifestPath, manifestPath)} field 'prerequisites'`, errors),
    related_decks: ensureOptionalArray(manifest.related_decks, `${relativeFromRepo(manifestPath, manifestPath)} field 'related_decks'`, errors),
    extraction_defaults: {
      standalone_safe_default: extractionDefaults.standalone_safe_default,
      inherit_deck_tags: extractionDefaults.inherit_deck_tags !== false,
    },
    publishing: isPlainObject(manifest.publishing) ? manifest.publishing : {},
  };
}

function normalizeSlide(rawSlide, { deck, slideFile, slidePath, taxonomy, errors }) {
  const slideMatch = slideFile.match(SLIDE_FILE_PATTERN);
  if (!slideMatch) {
    errors.push(`${relativeFromRepo(deck.id, slidePath)} slide filename must match NNN-slug.md`);
  }

  const [, orderDigits = '', filenameSlug = ''] = slideMatch ?? [];
  const orderFromFilename = orderDigits ? Number.parseInt(orderDigits, 10) : undefined;
  const inheritedTagsEnabled = deck.extraction_defaults?.inherit_deck_tags !== false;

  const resolved = { ...rawSlide };
  for (const dimension of TAXONOMY_DIMENSIONS) {
    if (resolved[dimension] === undefined && inheritedTagsEnabled) {
      resolved[dimension] = deck[dimension];
    }
  }

  if (resolved.standalone_safe === undefined && deck.extraction_defaults?.standalone_safe_default !== undefined) {
    resolved.standalone_safe = deck.extraction_defaults.standalone_safe_default;
  }

  resolved.requires_context = ensureOptionalArray(rawSlide.requires_context ?? rawSlide.dependencies, `${slidePath} field 'requires_context'`, errors);
  resolved.builds_on = ensureOptionalArray(rawSlide.builds_on, `${slidePath} field 'builds_on'`, errors);
  resolved.recommended_next = ensureOptionalArray(rawSlide.recommended_next, `${slidePath} field 'recommended_next'`, errors);
  resolved.assets = ensureOptionalArray(rawSlide.assets, `${slidePath} field 'assets'`, errors);

  if (resolved.deck_id === undefined) {
    resolved.deck_id = deck.id;
  }

  const requiredFields = ['id', 'slug', 'title', 'order', 'summary', 'reusable', ...TAXONOMY_DIMENSIONS, 'standalone_safe'];
  for (const field of requiredFields) {
    if (resolved[field] === undefined) {
      errors.push(`${relativeFromRepo(deck.id, slidePath)} is missing required field '${field}'`);
    }
  }

  if (resolved.deck_id !== deck.id) {
    errors.push(`${relativeFromRepo(deck.id, slidePath)} field 'deck_id' must equal '${deck.id}'`);
  }

  if (!Number.isInteger(resolved.order) || resolved.order < 1) {
    errors.push(`${relativeFromRepo(deck.id, slidePath)} field 'order' must be an integer >= 1`);
  }

  if (orderFromFilename !== undefined && resolved.order !== orderFromFilename) {
    errors.push(`${relativeFromRepo(deck.id, slidePath)} field 'order' (${resolved.order}) must match filename prefix ${orderFromFilename}`);
  }

  if (filenameSlug && resolved.slug !== filenameSlug) {
    errors.push(`${relativeFromRepo(deck.id, slidePath)} field 'slug' must match filename slug '${filenameSlug}'`);
  }

  if (resolved.id !== `${deck.id}/${slideFile.replace(/\.md$/, '')}`) {
    errors.push(`${relativeFromRepo(deck.id, slidePath)} field 'id' must equal '${deck.id}/${slideFile.replace(/\.md$/, '')}'`);
  }

  for (const dimension of TAXONOMY_DIMENSIONS) {
    validateTaxonomyRefs(resolved[dimension], dimension, taxonomy, slidePath, errors);
  }
  validateTaxonomyRefs(resolved.products ?? [], 'products', taxonomy, slidePath, errors, { optional: true });

  if (typeof resolved.standalone_safe !== 'boolean') {
    errors.push(`${relativeFromRepo(deck.id, slidePath)} field 'standalone_safe' must resolve to a boolean`);
  }

  if (typeof resolved.reusable !== 'boolean') {
    errors.push(`${relativeFromRepo(deck.id, slidePath)} field 'reusable' must be a boolean`);
  }

  if (!resolved.standalone_safe && resolved.requires_context.length === 0) {
    errors.push(`${relativeFromRepo(deck.id, slidePath)} field 'requires_context' must list at least one slide when standalone_safe is false`);
  }

  if (resolved.sequence_group !== undefined && !SLUG_PATTERN.test(resolved.sequence_group)) {
    errors.push(`${relativeFromRepo(deck.id, slidePath)} field 'sequence_group' must be a lowercase hyphenated identifier`);
  }

  if (
    resolved.sequence_role !== undefined &&
    !['start', 'middle', 'end', 'single'].includes(resolved.sequence_role)
  ) {
    errors.push(`${relativeFromRepo(deck.id, slidePath)} field 'sequence_role' must be one of start|middle|end|single`);
  }

  return {
    ...resolved,
    file: relativeFromRepo(deck.id, slidePath),
    source_path: slidePath,
  };
}

function validateCanonicalOrder(deck, deckSlides, errors) {
  const byOrder = [...deckSlides]
    .sort((a, b) => a.order - b.order)
    .map((slide) => `${String(slide.order).padStart(3, '0')}-${slide.slug}`);

  if (deck.canonical_order.length !== byOrder.length) {
    errors.push(`decks/${deck.slug}/manifest.yaml field 'canonical_order' must list exactly ${byOrder.length} slide ids`);
    return;
  }

  for (let index = 0; index < byOrder.length; index += 1) {
    if (deck.canonical_order[index] !== byOrder[index]) {
      errors.push(
        `decks/${deck.slug}/manifest.yaml field 'canonical_order' mismatch at position ${index + 1}: expected '${byOrder[index]}', got '${deck.canonical_order[index]}'`,
      );
    }
  }
}

function validateSlideRelationships(slides, slideById, errors) {
  for (const slide of slides) {
    for (const field of ['requires_context', 'builds_on', 'recommended_next']) {
      for (const ref of slide[field] ?? []) {
        if (!slideById.has(ref)) {
          errors.push(`${slide.file} field '${field}' references '${ref}', which does not exist`);
        }
      }
    }
  }

  const visiting = new Set();
  const visited = new Set();

  const visit = (slideId, trail = []) => {
    if (visiting.has(slideId)) {
      const cycleStart = trail.indexOf(slideId);
      const cycle = [...trail.slice(cycleStart), slideId].join(' -> ');
      errors.push(`requires_context contains a cycle: ${cycle}`);
      return;
    }

    if (visited.has(slideId) || !slideById.has(slideId)) {
      return;
    }

    visiting.add(slideId);
    const slide = slideById.get(slideId);
    for (const ref of slide.requires_context ?? []) {
      visit(ref, [...trail, slideId]);
    }
    visiting.delete(slideId);
    visited.add(slideId);
  };

  for (const slide of slides) {
    visit(slide.id);
  }
}

function validateSequenceGroups(sequenceGroups, errors, warnings) {
  for (const [groupKey, groupSlides] of sequenceGroups.entries()) {
    const ordered = [...groupSlides].sort((a, b) => a.order - b.order);
    const roles = ordered.map((slide) => slide.sequence_role).filter(Boolean);
    const roleCounts = countBy(roles);

    if (ordered.length === 1) {
      const [only] = ordered;
      if (only.sequence_role && only.sequence_role !== 'single') {
        warnings.push(`sequence group '${groupKey}' has one slide but role '${only.sequence_role}'; consider using 'single'`);
      }
      continue;
    }

    if (roleCounts.single) {
      errors.push(`sequence group '${groupKey}' cannot mix role 'single' with multi-slide flow`);
    }

    if ((roleCounts.start ?? 0) !== 1) {
      errors.push(`sequence group '${groupKey}' must contain exactly one start role`);
    }

    if ((roleCounts.end ?? 0) !== 1) {
      errors.push(`sequence group '${groupKey}' must contain exactly one end role`);
    }

    const allowedMiddleCount = ordered.length - 2;
    if ((roleCounts.middle ?? 0) > allowedMiddleCount) {
      errors.push(`sequence group '${groupKey}' has too many middle roles`);
    }
  }
}

async function readSlideFrontmatter(slidePath) {
  const source = await readFile(slidePath, 'utf8');
  const match = source.match(/^---\n([\s\S]*?)\n---\n?/);
  if (!match) {
    throw new ValidationError(`${slidePath} is missing YAML frontmatter`);
  }
  return parseSimpleYaml(match[1]);
}

function parseSimpleYaml(source) {
  const root = {};
  const stack = [{ indent: -1, container: root, type: 'object' }];

  for (const rawLine of source.split(/\r?\n/)) {
    if (!rawLine.trim() || rawLine.trimStart().startsWith('#')) {
      continue;
    }

    const indent = rawLine.match(/^ */)[0].length;
    const line = rawLine.trim();

    while (stack.length > 1 && indent <= stack[stack.length - 1].indent) {
      stack.pop();
    }

    const parent = stack[stack.length - 1];

    if (line.startsWith('- ')) {
      if (parent.type !== 'array') {
        throw new Error(`Invalid YAML list item: ${rawLine}`);
      }
      parent.container.push(parseScalar(line.slice(2).trim()));
      continue;
    }

    const separatorIndex = line.indexOf(':');
    if (separatorIndex === -1) {
      throw new Error(`Invalid YAML mapping line: ${rawLine}`);
    }

    const key = line.slice(0, separatorIndex).trim();
    const rawValue = line.slice(separatorIndex + 1).trim();

    if (rawValue === '') {
      const nextContainer = inferChildContainer(source, rawLine, key);
      parent.container[key] = nextContainer.type === 'array' ? [] : {};
      stack.push({ indent, container: parent.container[key], type: nextContainer.type });
      continue;
    }

    parent.container[key] = parseScalar(rawValue);
  }

  return root;
}

function inferChildContainer(source, rawLine, key) {
  const lines = source.split(/\r?\n/);
  const currentIndex = lines.indexOf(rawLine);
  const currentIndent = rawLine.match(/^ */)[0].length;

  for (let index = currentIndex + 1; index < lines.length; index += 1) {
    const candidate = lines[index];
    if (!candidate.trim() || candidate.trimStart().startsWith('#')) {
      continue;
    }

    const indent = candidate.match(/^ */)[0].length;
    if (indent <= currentIndent) {
      break;
    }

    return { type: candidate.trim().startsWith('- ') ? 'array' : 'object', key };
  }

  return { type: 'object', key };
}

function parseScalar(value) {
  if (value === 'true') return true;
  if (value === 'false') return false;
  if (value === 'null') return null;
  if (value === '[]') return [];
  if (value === '{}') return {};
  if (/^-?\d+$/.test(value)) return Number.parseInt(value, 10);
  if (/^\[.*\]$/.test(value)) {
    const inner = value.slice(1, -1).trim();
    if (!inner) return [];
    return inner.split(',').map((item) => parseScalar(item.trim()));
  }
  if ((value.startsWith('"') && value.endsWith('"')) || (value.startsWith("'") && value.endsWith("'"))) {
    return value.slice(1, -1);
  }
  return value;
}

function validateTaxonomyRefs(values, dimension, taxonomy, sourcePath, errors, { optional = false } = {}) {
  if (values === undefined) {
    if (!optional) {
      errors.push(`${relativeFromRepo(sourcePath, sourcePath)} is missing required taxonomy field '${dimension}'`);
    }
    return;
  }

  if (!Array.isArray(values) || values.length === 0) {
    if (optional && Array.isArray(values) && values.length === 0) {
      return;
    }
    errors.push(`${relativeFromRepo(sourcePath, sourcePath)} field '${dimension}' must be a non-empty array`);
    return;
  }

  const registry = taxonomy[dimension] ?? {};
  for (const value of values) {
    if (typeof value !== 'string') {
      errors.push(`${relativeFromRepo(sourcePath, sourcePath)} field '${dimension}' must contain only strings`);
      continue;
    }
    if (!registry[value]) {
      errors.push(`${relativeFromRepo(sourcePath, sourcePath)} field '${dimension}' uses unknown taxonomy id '${value}'`);
    }
  }
}

function ensureArray(value, label, errors) {
  if (!Array.isArray(value)) {
    errors.push(`${label} must be an array`);
    return [];
  }
  return value;
}

function ensureOptionalArray(value, label, errors) {
  if (value === undefined) {
    return [];
  }
  if (!Array.isArray(value)) {
    errors.push(`${label} must be an array`);
    return [];
  }
  return value;
}

function countBy(values) {
  return values.reduce((counts, value) => {
    counts[value] = (counts[value] ?? 0) + 1;
    return counts;
  }, {});
}

function isPlainObject(value) {
  return value !== null && typeof value === 'object' && !Array.isArray(value);
}

function formatValidationIssues(errors, warnings) {
  const lines = [...errors.map((issue) => `ERROR: ${issue}`)];
  if (warnings.length) {
    lines.push(...warnings.map((issue) => `WARNING: ${issue}`));
  }
  return lines.join('\n');
}

function relativeFromRepo(deckIdOrPath, absolutePath) {
  if (absolutePath.includes(`${path.sep}decks${path.sep}`)) {
    const [, relative] = absolutePath.split(`${path.sep}decks${path.sep}`);
    return `decks/${relative}`;
  }
  if (absolutePath.includes(`${path.sep}catalog${path.sep}`)) {
    const [, relative] = absolutePath.split(`${path.sep}catalog${path.sep}`);
    return `catalog/${relative}`;
  }
  return absolutePath === deckIdOrPath ? absolutePath : absolutePath;
}
