---
id: graphql-2025/111-extension-orphans
deck_id: graphql-2025
order: 111
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



<div style="background:#1a1a2e; border-radius:8px; padding:12px 16px; margin-top:0.5rem; overflow:auto;">
  <pre style="color:#e0e0e0; font-size:0.6rem; margin:0; font-family:monospace; line-height:1.5; white-space:pre;">Orphans occur when extensions are unresolved in federation
Happens if base type is missing or defined in multiple subgraphs
Example error: extending a type defined in zero or multiple subgraphs
extend type Person {
  name: String!
}
Federation fails with an error</pre>
</div>

<!-- Notes: An extension orphan is an unresolved extension causing federation failure.
This happens if you extend a type that isn’t defined in exactly one subgraph.
Make sure every type extension has a clear base type in only one subgraph to avoid errors.
For example, the type named Person does not need to be defined in Subgraph 1, but it must be defined in exactly one subgraph (see Shared Types: extension of shared types is not possible, so extending a type that is defined in multiple subgraphs will produce an error). -->
