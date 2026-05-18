---
name: add-deck
description: Use when creating a new canonical deck in the slide library with the required structure, metadata, and verification steps.
version: 1.0.0
author: Hermes Agent
license: MIT
metadata:
  hermes:
    tags: [slides, decks, scaffolding, taxonomy, validation]
    related_skills: [modify-deck, update-catalog, build-customer-subdeck]
---

# Add a new deck

## Overview

Use this skill when a task introduces a brand-new canonical deck under `decks/`. A new deck must be structurally complete, metadata-complete enough for automation, and consistent with the repository's deck-centric architecture.

## When to use

Use this skill for:
- adding a new shared training deck
- migrating an external Slidev or PPTX-derived deck into canonical repo structure
- seeding a new deck that future extraction/composition workflows will depend on

Do not use this skill for:
- modifying an existing deck in place
- creating a one-off customer-specific output that should stay derived instead of canonical

## Required directory structure

Create `decks/<deck-slug>/` with at least:

```text
decks/<deck-slug>/
├── manifest.yaml
├── slides/
└── assets/
```

Optional but encouraged:

- `notes/` for migration notes, source references, or review context
- `deck.md` if the deck needs a deck-level Slidev wrapper/entrypoint

## Workflow

### 1. Choose stable identifiers

- Pick a kebab-case deck slug.
- Set `id` and `slug` deliberately in `manifest.yaml`.
- Assume downstream catalog consumers may rely on those identifiers.

### 2. Create the manifest

Seed required fields from `docs/metadata-schema.md`:
- `id`
- `slug`
- `title`
- `status`
- `version`
- `owners`
- `summary`
- `topics`
- `categories`
- `audiences`
- `use_cases`

Populate recommended fields when known:
- `products`
- `prerequisites`
- `related_decks`
- `canonical_order`
- `extraction_defaults`
- `publishing`

### 3. Add slide source files

- Create zero-padded slide filenames such as `001-title.md`, `002-overview.md`.
- Add frontmatter to each slide with stable `id`, `deck_id`, `order`, `slug`, `title`, and reuse metadata.
- Keep slide `order`, filename sequence, and manifest `canonical_order` aligned.

### 4. Tag the deck correctly

- Use taxonomy identifiers from `catalog/taxonomy.json`.
- Put broad tags in the manifest.
- Add slide-level overrides only when a slide is meaningfully more specific or more reusable than the rest of the deck.

### 5. Regenerate outputs

Run:

```bash
npm run validate
npm run build:catalog
npm run build
npm test
```

For a new deck, all four commands are recommended because the deck affects structure, catalog outputs, and the browse surface.

## Handoff expectations

A good handoff names:
- the new deck slug and title
- whether the deck is migrated, drafted, or production-ready
- any new taxonomy identifiers introduced
- generated outputs refreshed
- verification commands run and results

## Common pitfalls

1. Creating slide files without adding them to `canonical_order`.
2. Using customer names in canonical deck metadata instead of reusable audience/use-case tags.
3. Skipping slide frontmatter because the deck manifest already exists.
4. Leaving placeholder taxonomy values that do not exist in `catalog/taxonomy.json`.
5. Treating `assets/` or `notes/` as the place to hide essential metadata.

## Verification checklist

- [ ] New deck lives under `decks/<deck-slug>/`
- [ ] `manifest.yaml` contains the required baseline fields
- [ ] Slide filenames are zero-padded and ordered
- [ ] Slide IDs use the deck ID namespace consistently
- [ ] `canonical_order` matches the actual slide files
- [ ] Taxonomy identifiers come from the shared registry
- [ ] `npm run validate` passed
- [ ] `npm run build:catalog` passed
- [ ] `npm run build` passed
- [ ] `npm test` passed
