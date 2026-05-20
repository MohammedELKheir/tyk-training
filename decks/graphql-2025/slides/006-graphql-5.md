---
id: graphql-2025/006-graphql-5
deck_id: graphql-2025
order: 6
slug: graphql-5
title: "GraphQL"
summary: "GraphQL is schema-based, so you can: Add new fields: type User { age: Int # Added later } Deprecate old fields: email: String @deprecated(reason: \"Use contactEmail\") No breaking ch"
standalone_safe: true
reusable: true
requires_context: []
builds_on: []
recommended_next: [graphql-2025/007-graphql-with-tyk]
customer_visible: true
notes_visibility: customer-safe
---
---
layout: default
---

<h2 style="color:#5900CB; font-size:1.8rem; font-weight:bold; margin-bottom:1rem;">GraphQL</h2>



<div style="background:#1a1a2e; border-radius:8px; padding:12px 16px; margin-top:0.5rem; overflow:auto;">
  <pre style="color:#e0e0e0; font-size:0.6rem; margin:0; font-family:monospace; line-height:1.5; white-space:pre;">GraphQL is schema-based, so you can:
Add new fields:
type User {
  age: Int   # Added later
}
Deprecate old fields:
email: String @deprecated(reason: "Use contactEmail")
No breaking changes
Versionless API evolution
Better long-term maintainability</pre>
</div>

<!-- Notes: GraphQL supports non-breaking evolution of your API.
If you need to add a field, you just add it to the schema — clients won’t break because they only query what they need.
If you want to deprecate something, you can mark it in the schema — tools will even warn developers not to use it.
This reduces the need for strict versioning like in REST — making long-term maintenance much easier and safer. -->
