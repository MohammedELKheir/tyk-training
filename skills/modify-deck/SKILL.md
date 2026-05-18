---
name: modify-deck
description: Use when updating an existing canonical deck while preserving manifest, taxonomy, ordering, and generated-artifact contracts.
version: 1.0.0
author: Hermes Agent
license: MIT
metadata:
  hermes:
    tags: [slides, decks, maintenance, taxonomy, validation]
    related_skills: [add-deck, update-catalog, build-customer-subdeck]
---

# Modify an existing deck

## Overview

Use this skill when a task changes an existing canonical deck under `decks/<deck-slug>/`. The goal is to keep deck source authoritative while preserving metadata correctness, stable identifiers, and reproducible generated outputs.

## When to use

Use this skill for:
- editing slide content in an existing deck
- reordering, adding, or removing slides inside an existing deck
- changing deck metadata in `manifest.yaml`
- updating dependencies, standalone-safety flags, or taxonomy on existing slides

Do not use this skill for:
- creating a brand-new deck from scratch; use `skills/add-deck/SKILL.md`
- changing only generated catalog artifacts without source edits
- building a customer-specific extracted subset; use `skills/build-customer-subdeck/SKILL.md`

## Files to inspect first

1. `docs/architecture.md`
2. `docs/taxonomy.md`
3. `docs/metadata-schema.md`
4. `decks/<deck-slug>/manifest.yaml`
5. `decks/<deck-slug>/slides/`
6. `decks/<deck-slug>/notes/` if present

## Workflow

### 1. Understand the current deck contract

Confirm:
- deck `id` and `slug`
- slide filename order and `canonical_order`
- current deck taxonomy defaults
- any existing dependencies between slides
- whether the task changes source content, metadata, or both

### 2. Edit source files first

- Update slide markdown under `decks/<deck-slug>/slides/`.
- Keep zero-padded slide filenames stable unless reordering is intentional.
- If you add, remove, or rename slide files, update `canonical_order` in `manifest.yaml`.
- If slide purpose changes, update frontmatter fields such as `title`, `summary`, `topics`, `audiences`, `standalone_safe`, and `dependencies`.

### 3. Preserve metadata integrity

- Keep `deck_id` aligned with the parent manifest `id`.
- Do not casually rename slide IDs once other slides may depend on them.
- Prefer deck-level taxonomy defaults when most slides share the same classification.
- Add slide-level overrides only when they materially improve discovery or reuse.
- Keep dependency relationships explicit in frontmatter.

### 4. Regenerate and verify when needed

Run:

```bash
npm run validate
npm run build:catalog
npm test
```

Also run this if the site-visible output should change:

```bash
npm run build
```

Docs-only notes within a deck may not require catalog or site rebuilds, but any metadata or slide-source change usually does.

### 5. Prepare the handoff

Include:
- changed deck slug
- whether slide ordering changed
- whether taxonomy or dependency metadata changed
- commands run and pass/fail status
- whether generated artifacts were refreshed

## Common pitfalls

1. Editing generated catalog files without updating the source deck.
2. Renaming slide files but forgetting to update `canonical_order`.
3. Changing taxonomy on several slides when the deck-level defaults should have been updated instead.
4. Removing a slide that another slide lists as a dependency.
5. Claiming a deck is reusable without updating `standalone_safe` or dependency metadata.

## Verification checklist

- [ ] Source edits were made under `decks/<deck-slug>/`
- [ ] `manifest.yaml` still matches the slide set
- [ ] Zero-padded filenames and `canonical_order` agree
- [ ] Taxonomy identifiers come from `catalog/taxonomy.json`
- [ ] Dependency and standalone-safety metadata still make sense
- [ ] `npm run validate` passed
- [ ] `npm run build:catalog` ran if source metadata changed
- [ ] `npm test` passed
- [ ] `npm run build` ran if site-visible artifacts changed
