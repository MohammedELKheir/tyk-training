# Metadata schema

The repository uses structured metadata for deck and slide validation.

## Deck manifest baseline

Required deck fields:
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

Recommended deck fields:
- `products`
- `prerequisites`
- `related_decks`
- `canonical_order`
- `extraction_defaults`
- `publishing`

## Slide metadata baseline

Expected slide fields:
- `id`
- `deck_id`
- `order`
- `slug`
- `title`
- `summary`
- `topics`
- `categories`
- `audiences`
- `use_cases`
- `standalone_safe`
- `dependencies`

The JSON schemas in `schemas/` are intentionally conservative placeholders for phase 1. Follow-up schema work can tighten enums, cross-file references, and advanced extraction constraints.
