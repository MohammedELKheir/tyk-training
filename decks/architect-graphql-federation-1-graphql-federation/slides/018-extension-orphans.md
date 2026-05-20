---
id: architect-graphql-federation-1-graphql-federation/018-extension-orphans
deck_id: architect-graphql-federation-1-graphql-federation
order: 18
slug: extension-orphans
title: "Extension Orphans"
summary: "Orphans occur when extensions are unresolved in federation Happens if base type is missing or defined in multiple subgraphs Example error: extending a type defined in zero or multi"
standalone_safe: true
reusable: true
requires_context: []
builds_on: []
recommended_next: []
customer_visible: true
notes_visibility: customer-safe
---
---
layout: default
---

<h2 style="color:#5900CB; font-size:1.8rem; font-weight:bold; margin-bottom:1rem;">Extension Orphans</h2>

<ul style="font-size:1.05rem; line-height:1.7; color:#03031C; padding-left:1.2rem; margin-bottom:1rem;">
  <li>Orphans occur when extensions are unresolved in federation</li>
  <li>Happens if base type is missing or defined in multiple subgraphs</li>
  <li>Example error: extending a type defined in zero or multiple subgraphs</li>
</ul>

<div style="background:#1a1a2e; border-radius:6px; padding:10px 14px; max-width:500px; margin-bottom:0.8rem;">
  <pre style="color:#e0e0e0; font-size:0.65rem; margin:0; font-family:monospace; line-height:1.5; white-space:pre;">extend type Person {
  name: String!
}</pre>
</div>

<p style="font-size:1.05rem; color:#DC2626; font-weight:600;">Federation fails with an error</p>

<!-- Notes: An extension orphan is an unresolved extension causing federation failure. This happens if you extend a type that isn't defined in exactly one subgraph. Make sure every type extension has a clear base type in only one subgraph to avoid errors. For example, the type named Person does not need to be defined in Subgraph 1, but it must be defined in exactly one subgraph (see Shared Types: extension of shared types is not possible, so extending a type that is defined in multiple subgraphs will produce an error). -->
