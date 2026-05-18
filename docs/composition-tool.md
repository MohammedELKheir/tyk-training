# Customer deck composition tool

The repository now includes a repo-local composition entrypoint at `tools/compose/main.mjs` for building a customer-specific Slidev deck from canonical source slides.

## What it does

Given a JSON requirements file, the tool:

1. loads validated deck and slide metadata from the canonical repo
2. selects reusable, customer-visible slides that match the requested taxonomy filters
3. expands `requires_context` and `builds_on` dependencies so the result stays coherent
4. preserves source provenance for every selected slide
5. copies referenced assets into the generated output tree
6. writes a reviewable, repo-ready deck bundle

## Inputs

The CLI expects a JSON file passed with `--requirements`.

Example:

```json
{
  "customer": "Acme",
  "deck_slug": "acme-architecture-onboarding",
  "title": "Acme Architecture Onboarding",
  "topics": ["architecture"],
  "audiences": ["solutions-architect"],
  "use_cases": ["onboarding"],
  "products": ["tyk-gateway"],
  "include_slide_ids": [],
  "exclude_slide_ids": []
}
```

Supported fields:

- `customer` — human-readable customer name used in generated metadata
- `deck_slug` — output directory slug
- `title` — generated deck title
- `topics`, `categories`, `audiences`, `use_cases`, `products` — taxonomy filters; when provided, a directly matched slide must intersect each requested dimension
- `include_slide_ids` — explicit slide IDs to force-include as direct matches
- `exclude_slide_ids` — explicit slide IDs to block from selection; the tool fails if a selected slide depends on an excluded slide
- `notes` — optional free-form notes stored in provenance

## Usage

Run from the repository root:

```bash
node tools/compose/main.mjs \
  --requirements ./requirements/acme.json \
  --output ./generated-customer-decks
```

Optional flags:

- `--repo <path>` — compose from a different canonical repo root
- `--output <path>` — choose the parent directory for generated deck folders

The command prints a JSON summary to stdout with the generated deck path and selected slide counts.

## End-to-end example fixture

The repository includes a reusable composition fixture under `tests/fixtures/composition/acme-architecture-onboarding/`:

- `requirements.json` — sample customer onboarding request for the compose CLI
- `expected-output.json` — expected direct matches, dependency closure, and slide provenance

`tests/compose/compose.test.mjs` uses this fixture to verify that the CLI produces a coherent `slides.md` deck, matching `composition.json`, `requirements.json`, copied review fragments, and a real successful Slidev build of the generated output.

## Output layout

For a deck slug like `acme-architecture-onboarding`, the tool writes:

```text
generated-customer-decks/
└── acme-architecture-onboarding/
    ├── README.md
    ├── requirements.json
    ├── composition.json
    ├── slides.md
    ├── slides/
    │   └── 001-...md
    └── assets/
        └── <deck-id>/...
```

Artifacts:

- `slides.md` — assembled Slidev deck file for downstream use
- `slides/` — copied canonical slide fragments for review and traceability
- `composition.json` — provenance, requirements, direct matches, dependency-added slides, and copied assets
- `requirements.json` — normalized copy of the request that generated the deck
- `assets/` — copied files referenced by slide metadata `assets`

## Selection rules

Direct matches must satisfy all requested taxonomy dimensions that were provided. For example, if a request specifies `topics`, `audiences`, and `use_cases`, a slide must overlap all three to count as a direct match.

After direct matching, the tool recursively includes:

- `requires_context`
- `builds_on`

Those added slides are marked as dependency-driven in `composition.json` and the generated README.

## Asset handling

Assets are copied only when a slide declares them in frontmatter via `assets`. Asset references are resolved relative to either:

- `decks/<deck-id>/<asset-path>`
- `decks/<deck-id>/assets/<asset-path>`

If a referenced asset cannot be found, composition fails.

## Guardrails

- Slides with `reusable: false` are not selected as direct matches.
- Slides with `customer_visible: false` are not selected as direct matches.
- Unknown taxonomy values in the requirements file fail fast.
- Dependency closure cannot be silently broken by exclusions.

## Recommended workflow

1. run `npm run validate`
2. create or review the requirements JSON
3. run the compose command
4. inspect `composition.json` and `slides.md`
5. optionally run `npm exec -- slidev build generated-customer-decks/<deck-slug>/slides.md --out <tmp-dir>` to validate the generated deck directly
6. review the generated bundle in the target onboarding repo before publishing
