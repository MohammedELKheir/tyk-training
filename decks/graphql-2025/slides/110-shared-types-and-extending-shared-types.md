---
id: graphql-2025/110-shared-types-and-extending-shared-types
deck_id: graphql-2025
order: 110
slug: shared-types-and-extending-shared-types
title: "Shared Types & Extending Shared Types"
summary: "Shared types have the same name and structure in multiple subgraphs Extensions allowed only if normalized resolutions are identical Example enums with extensions: Subgraph 1 enum E"
standalone_safe: true
reusable: true
requires_context: []
builds_on: []
recommended_next: [graphql-2025/111-extension-orphans]
customer_visible: true
notes_visibility: customer-safe
---
---
layout: default
---

<h2 style="color:#5900CB; font-size:1.8rem; font-weight:bold; margin-bottom:1rem;">Shared Types &amp; Extending Shared Types</h2>



<div style="background:#1a1a2e; border-radius:8px; padding:12px 16px; margin-top:0.5rem; overflow:auto;">
  <pre style="color:#e0e0e0; font-size:0.6rem; margin:0; font-family:monospace; line-height:1.5; white-space:pre;">Shared types have the same name and structure in multiple subgraphs
Extensions allowed only if normalized resolutions are identical
Example enums with extensions:
Subgraph 1
enum Example { A, B }
extend enum Example { C }
Subgraph 2:
enum Example { A, B, C }</pre>
</div>

<!-- Notes: Shared types must be consistent across subgraphs for federation to work.
You can extend shared types, like enums, only if all subgraphs resolve identically after normalization.
Any inconsistency will cause federation to fail. -->
