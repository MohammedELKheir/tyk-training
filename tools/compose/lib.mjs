import path from 'node:path';
import { mkdir, readFile, writeFile, copyFile } from 'node:fs/promises';

import { loadRepositoryMetadata, ValidationError } from '../validate/metadata.mjs';

const FILTER_DIMENSIONS = ['topics', 'categories', 'audiences', 'use_cases', 'products'];

export async function composeDeck({ repoRoot, requirements }) {
  if (!repoRoot) {
    throw new Error('composeDeck requires repoRoot');
  }

  const normalizedRequirements = normalizeRequirements(requirements);
  const repository = await loadRepositoryMetadata(repoRoot);
  validateRequirementTaxonomy(normalizedRequirements, repository.taxonomy);

  const directMatches = [];
  const excludedIds = new Set(normalizedRequirements.exclude_slide_ids);
  const includedIds = new Set(normalizedRequirements.include_slide_ids);
  const deckById = new Map(repository.decks.map((deck) => [deck.id, deck]));

  for (const slide of repository.slides) {
    if (excludedIds.has(slide.id)) {
      continue;
    }

    const selection = scoreSlide(slide, normalizedRequirements, includedIds, deckById);
    if (selection.matched) {
      directMatches.push({ ...slide, selection });
    }
  }

  if (directMatches.length === 0) {
    throw new Error(`No reusable slides matched the supplied requirements for deck '${normalizedRequirements.deck_slug}'.`);
  }

  const slideById = repository.slideById;
  const selected = new Map();
  const dependencyAddedIds = new Set();

  const visit = (slide, reason = 'direct_match') => {
    if (excludedIds.has(slide.id)) {
      throw new Error(`Selected slide '${slide.id}' depends on excluded slide '${slide.id}'. Remove the exclusion or choose different slides.`);
    }

    if (!selected.has(slide.id)) {
      selected.set(slide.id, {
        ...slide,
        inclusion_reason: reason,
      });
    } else if (reason === 'direct_match') {
      selected.get(slide.id).inclusion_reason = 'direct_match';
    }

    for (const dependencyId of [...(slide.requires_context ?? []), ...(slide.builds_on ?? [])]) {
      if (excludedIds.has(dependencyId)) {
        throw new Error(`Selected slide '${slide.id}' depends on excluded slide '${dependencyId}'. Remove the exclusion or choose different slides.`);
      }
      const dependency = slideById.get(dependencyId);
      if (!dependency) {
        throw new ValidationError(`Selected slide '${slide.id}' references missing dependency '${dependencyId}'.`);
      }
      if (!selected.has(dependencyId)) {
        dependencyAddedIds.add(dependencyId);
      }
      visit(dependency, 'dependency');
    }
  };

  for (const slide of directMatches) {
    visit(slide, 'direct_match');
  }

  const orderedSlides = orderSlides([...selected.values()], repository.decks);
  const directMatchSlideIds = orderSlides(
    orderedSlides.filter((slide) => slide.inclusion_reason === 'direct_match'),
    repository.decks,
  ).map((slide) => slide.id);
  const dependencyAddedSlideIds = orderedSlides
    .filter((slide) => dependencyAddedIds.has(slide.id) && !directMatchSlideIds.includes(slide.id))
    .map((slide) => slide.id);

  return {
    repoRoot,
    repository,
    requirements: normalizedRequirements,
    selectedSlides: orderedSlides,
    directMatchSlideIds,
    dependencyAddedSlideIds,
    summary: {
      totalSelectedSlides: orderedSlides.length,
      totalDirectMatches: directMatchSlideIds.length,
      totalDependencyAdds: dependencyAddedSlideIds.length,
      sourceDeckIds: [...new Set(orderedSlides.map((slide) => slide.deck_id))],
    },
  };
}

export async function writeComposedDeck(plan, { outputRoot }) {
  if (!outputRoot) {
    throw new Error('writeComposedDeck requires outputRoot');
  }

  const deckDir = path.resolve(outputRoot, plan.requirements.deck_slug);
  const slidesDir = path.join(deckDir, 'slides');
  const assetsDir = path.join(deckDir, 'assets');
  await mkdir(slidesDir, { recursive: true });
  await mkdir(assetsDir, { recursive: true });

  const slideFiles = [];
  const copiedAssets = [];

  for (const [index, slide] of plan.selectedSlides.entries()) {
    const slideFileName = `${String(index + 1).padStart(3, '0')}-${slide.deck_id}-${slide.slug}.md`;
    const targetPath = path.join(slidesDir, slideFileName);
    const rawSlide = await readFile(slide.source_path, 'utf8');
    await writeFile(targetPath, rawSlide);
    slideFiles.push({
      file: path.relative(deckDir, targetPath),
      source_slide_id: slide.id,
      source_file: slide.file,
      inclusion_reason: slide.inclusion_reason,
    });

    for (const assetReference of slide.assets ?? []) {
      const copied = await copyReferencedAsset({ repoRoot: plan.repoRoot, slide, deckDir, assetReference });
      copiedAssets.push(copied);
    }
  }

  const slidesMarkdown = await buildSlidesMarkdown(plan);
  const provenance = {
    generated_at: new Date().toISOString(),
    customer: plan.requirements.customer,
    deck_slug: plan.requirements.deck_slug,
    title: plan.requirements.title,
    requirements: plan.requirements,
    total_selected_slides: plan.summary.totalSelectedSlides,
    direct_match_slide_ids: plan.directMatchSlideIds,
    dependency_added_slide_ids: plan.dependencyAddedSlideIds,
    selected_slides: plan.selectedSlides.map((slide) => ({
      id: slide.id,
      deck_id: slide.deck_id,
      title: slide.title,
      source_file: slide.file,
      inclusion_reason: slide.inclusion_reason,
      requires_context: slide.requires_context ?? [],
      builds_on: slide.builds_on ?? [],
      standalone_safe: slide.standalone_safe,
      assets: slide.assets ?? [],
    })),
    output_files: slideFiles,
    copied_assets: copiedAssets,
  };

  await writeFile(path.join(deckDir, 'slides.md'), slidesMarkdown);
  await writeFile(path.join(deckDir, 'composition.json'), JSON.stringify(provenance, null, 2) + '\n');
  await writeFile(path.join(deckDir, 'requirements.json'), JSON.stringify(plan.requirements, null, 2) + '\n');
  await writeFile(path.join(deckDir, 'README.md'), buildReadme(plan, slideFiles, copiedAssets));

  return {
    deckDir,
    slidesDir,
    slideFiles,
    copiedAssets,
    summary: {
      deck_slug: plan.requirements.deck_slug,
      total_selected_slides: plan.summary.totalSelectedSlides,
      deck_dir: deckDir,
    },
  };
}

function normalizeRequirements(requirements = {}) {
  const customer = requirements.customer?.trim();
  const deckSlug = slugify(requirements.deck_slug ?? `${customer ?? 'customer'}-deck`);
  return {
    customer: customer ?? 'Customer',
    title: requirements.title?.trim() ?? titleize(deckSlug),
    deck_slug: deckSlug,
    topics: normalizeStringArray(requirements.topics),
    categories: normalizeStringArray(requirements.categories),
    audiences: normalizeStringArray(requirements.audiences),
    use_cases: normalizeStringArray(requirements.use_cases),
    products: normalizeStringArray(requirements.products),
    include_slide_ids: normalizeStringArray(requirements.include_slide_ids),
    exclude_slide_ids: normalizeStringArray(requirements.exclude_slide_ids),
    notes: requirements.notes?.trim() ?? '',
  };
}

function validateRequirementTaxonomy(requirements, taxonomy) {
  for (const dimension of FILTER_DIMENSIONS) {
    const registry = taxonomy[dimension] ?? {};
    for (const value of requirements[dimension]) {
      if (!(value in registry)) {
        throw new Error(`Unknown ${dimension.slice(0, -1)} '${value}' in requirements.`);
      }
    }
  }
}

function scoreSlide(slide, requirements, includedIds, deckById) {
  if (slide.reusable === false || slide.customer_visible === false) {
    return { matched: false, score: 0, reasons: [] };
  }

  if (includedIds.has(slide.id)) {
    return { matched: true, score: 100, reasons: ['explicitly included'] };
  }

  const reasons = [];
  let score = 0;
  const sourceDeck = deckById.get(slide.deck_id);

  for (const dimension of FILTER_DIMENSIONS) {
    const requested = requirements[dimension];
    if (requested.length === 0) {
      continue;
    }

    const slideValues = effectiveSlideValues(slide, sourceDeck, dimension);
    const overlap = requested.filter((value) => slideValues.includes(value));
    if (overlap.length === 0) {
      return { matched: false, score: 0, reasons: [] };
    }

    reasons.push(`${dimension}:${overlap.join(',')}`);
    score += overlap.length;
  }

  return {
    matched: reasons.length > 0,
    score,
    reasons,
  };
}

function orderSlides(slides, decks) {
  const deckOrder = new Map(decks.map((deck, index) => [deck.id, index]));
  return [...slides].sort((left, right) => {
    const leftDeckOrder = deckOrder.get(left.deck_id) ?? Number.MAX_SAFE_INTEGER;
    const rightDeckOrder = deckOrder.get(right.deck_id) ?? Number.MAX_SAFE_INTEGER;
    if (leftDeckOrder !== rightDeckOrder) {
      return leftDeckOrder - rightDeckOrder;
    }
    if (left.order !== right.order) {
      return left.order - right.order;
    }
    return left.id.localeCompare(right.id);
  });
}

function effectiveSlideValues(slide, sourceDeck, dimension) {
  const slideValues = Array.isArray(slide[dimension]) ? slide[dimension] : [];
  if (slideValues.length > 0) {
    return slideValues;
  }

  const deckValues = Array.isArray(sourceDeck?.[dimension]) ? sourceDeck[dimension] : [];
  return deckValues;
}

async function buildSlidesMarkdown(plan) {
  const sections = [
    '---',
    `title: ${yamlScalar(plan.requirements.title)}`,
    `info: ${yamlScalar(`Generated for ${plan.requirements.customer} from canonical Tyk training slides.`)}`,
    'theme: default',
    '---',
    '',
    `# ${plan.requirements.title}`,
    '',
    `Generated for ${plan.requirements.customer}. Source slides are listed in composition.json.`,
  ];

  for (const slide of plan.selectedSlides) {
    const { frontmatter, body } = splitFrontmatter(await readFile(slide.source_path, 'utf8'));
    sections.push('', '---', '---');
    sections.push(frontmatter.trimEnd());
    sections.push(`source_slide_id: ${slide.id}`);
    sections.push(`source_file: ${slide.file}`);
    sections.push(`inclusion_reason: ${slide.inclusion_reason}`);
    sections.push('---', '');
    sections.push(body.trim());
  }

  sections.push('');
  return sections.join('\n');
}

async function copyReferencedAsset({ repoRoot, slide, deckDir, assetReference }) {
  const deckRoot = path.join(repoRoot, 'decks', slide.deck_id);
  const candidateSources = [
    path.join(deckRoot, assetReference),
    path.join(deckRoot, 'assets', assetReference),
  ];
  const sourcePath = await firstExisting(candidateSources);
  if (!sourcePath) {
    throw new Error(`Asset '${assetReference}' referenced by slide '${slide.id}' was not found under deck '${slide.deck_id}'.`);
  }

  const targetPath = path.join(deckDir, 'assets', slide.deck_id, assetReference);
  await mkdir(path.dirname(targetPath), { recursive: true });
  await copyFile(sourcePath, targetPath);

  return {
    source_slide_id: slide.id,
    source_path: path.relative(repoRoot, sourcePath),
    target_path: path.relative(deckDir, targetPath),
  };
}

async function firstExisting(paths) {
  for (const candidate of paths) {
    try {
      await readFile(candidate);
      return candidate;
    } catch {
      // continue
    }
  }
  return null;
}

function splitFrontmatter(raw) {
  if (!raw.startsWith('---\n')) {
    return {
      frontmatter: '',
      body: raw,
    };
  }

  const endMarker = raw.indexOf('\n---\n', 4);
  if (endMarker === -1) {
    return {
      frontmatter: '',
      body: raw,
    };
  }

  return {
    frontmatter: raw.slice(4, endMarker),
    body: raw.slice(endMarker + 5),
  };
}

function buildReadme(plan, slideFiles, copiedAssets) {
  const lines = [
    `# ${plan.requirements.title}`,
    '',
    'Generated customer-specific deck composed from canonical training slides.',
    '',
    `Customer: ${plan.requirements.customer}`,
    `Deck slug: ${plan.requirements.deck_slug}`,
    '',
    'Artifacts:',
    '- slides.md — assembled Slidev deck file',
    '- composition.json — provenance and selection details',
    '- requirements.json — normalized composition requirements',
    '- slides/ — copied source slide fragments for review',
    '- assets/ — copied assets referenced in slide metadata',
    '',
    'Selected slides:',
    ...slideFiles.map((slide) => `- ${slide.source_slide_id} -> ${slide.file} (${slide.inclusion_reason})`),
  ];

  if (copiedAssets.length > 0) {
    lines.push('', 'Copied assets:', ...copiedAssets.map((asset) => `- ${asset.source_path} -> ${asset.target_path}`));
  }

  lines.push('');
  return lines.join('\n');
}

function normalizeStringArray(value) {
  if (!value) {
    return [];
  }
  return [...new Set((Array.isArray(value) ? value : [value]).map((entry) => String(entry).trim()).filter(Boolean))];
}

function slugify(value) {
  return String(value)
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '') || 'customer-deck';
}

function titleize(slug) {
  return slug
    .split('-')
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(' ');
}

function yamlScalar(value) {
  return JSON.stringify(String(value));
}
