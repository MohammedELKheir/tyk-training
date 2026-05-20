---
id: architect-graphql-federation-1-graphql-federation/016-entities-entity-stubs
deck_id: architect-graphql-federation-1-graphql-federation
order: 16
slug: entities-entity-stubs
title: "Entities – Entity Stubs"
summary: "Stubs reference an entity without adding fields Minimal info needed to identify the entity Example: extend type MyEntity @key(fields: \"id\") { id: ID! @external }"
standalone_safe: true
reusable: true
requires_context: []
builds_on: []
recommended_next: [architect-graphql-federation-1-graphql-federation/017-shared-types-and-extending-shared-types]
customer_visible: true
notes_visibility: customer-safe
---
---
layout: default
---

<h2 style="color:#5900CB; font-size:1.8rem; font-weight:bold; margin-bottom:1rem;">Entities – Entity Stubs</h2>

<ul style="font-size:1.05rem; line-height:1.7; color:#03031C; padding-left:1.2rem; margin-bottom:1rem;">
  <li>Stubs reference an entity without adding fields</li>
  <li>Minimal info needed to identify the entity</li>
</ul>

<p style="font-size:0.95rem; font-weight:600; color:#333; margin-bottom:0.5rem;">Example:</p>

<div style="background:#1a1a2e; border-radius:6px; padding:10px 14px; max-width:600px;">
  <pre style="color:#e0e0e0; font-size:0.65rem; margin:0; font-family:monospace; line-height:1.5; white-space:pre;">extend type MyEntity @key(fields: "id") {
  id: ID! @external
}</pre>
</div>

<!-- Notes: Sometimes a subgraph only needs to reference an entity without adding new fields; this is called a stub. It ensures the subgraph can refer to the entity while maintaining schema integrity in the supergraph. -->
