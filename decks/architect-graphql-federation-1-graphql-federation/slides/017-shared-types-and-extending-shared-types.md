---
id: architect-graphql-federation-1-graphql-federation/017-shared-types-and-extending-shared-types
deck_id: architect-graphql-federation-1-graphql-federation
order: 17
slug: shared-types-and-extending-shared-types
title: "Shared Types & Extending Shared Types"
summary: "Shared types have the same name and structure in multiple subgraphs Extensions allowed only if normalized resolutions are identical Example enums with extensions: Subgraph 1 enum E"
standalone_safe: true
reusable: true
requires_context: []
builds_on: []
recommended_next: [architect-graphql-federation-1-graphql-federation/018-extension-orphans]
customer_visible: true
notes_visibility: customer-safe
---
---
layout: default
---

<h2 style="color:#5900CB; font-size:1.8rem; font-weight:bold; margin-bottom:1rem;">Shared Types &amp; Extending Shared Types</h2>

<ul style="font-size:1.05rem; line-height:1.7; color:#03031C; padding-left:1.2rem; margin-bottom:1rem;">
  <li>Shared types have the same name and structure in multiple subgraphs</li>
  <li>Extensions allowed only if normalized resolutions are identical</li>
</ul>

<p style="font-size:0.95rem; font-weight:600; color:#333; margin-bottom:0.5rem;">Example enums with extensions:</p>

<div style="display:flex; gap:1.2rem; margin-top:0.25rem; align-items:flex-start; max-width:820px;">
  <div style="flex:1; padding:0;">
    <p style="color:#111827; font-size:0.9rem; font-weight:400; margin:0 0 0.45rem 0;">Subgraph 1</p>
    <pre style="color:#4b5563; font-size:0.8rem; margin:0; font-family:monospace; line-height:1.55; white-space:pre;">enum Example { A, B }
extend enum Example { C }</pre>
  </div>

  <div style="flex:1; padding:0;">
    <p style="color:#111827; font-size:0.9rem; font-weight:400; margin:0 0 0.45rem 0;">Subgraph 2</p>
    <pre style="color:#4b5563; font-size:0.8rem; margin:0; font-family:monospace; line-height:1.55; white-space:pre;">enum Example { A, B, C }</pre>
  </div>
</div>

<!-- Notes: Shared types must be consistent across subgraphs for federation to work. You can extend shared types, like enums, only if all subgraphs resolve identically after normalization. Any inconsistency will cause federation to fail. -->
