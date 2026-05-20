---
id: architect-graphql-1-graphql-introduction/005-graphql-4
deck_id: architect-graphql-1-graphql-introduction
order: 5
slug: graphql-4
title: "GraphQL"
summary: "GraphQL is schema-based, so you can: Add new fields: type User { age: Int # Added later } Deprecate old fields: email: String @deprecated(reason: \"Use contactEmail\") No breaking ch"
standalone_safe: true
reusable: true
requires_context: []
builds_on: []
recommended_next: [architect-graphql-1-graphql-introduction/006-graphql-with-tyk]
customer_visible: true
notes_visibility: customer-safe
---
---
layout: default
---

# GraphQL

<div style="margin-top:1rem;">

<p style="font-size:0.95rem; margin-bottom:0.8rem;">GraphQL is schema-based, so you can:</p>

<p style="font-weight:600; margin-bottom:0.3rem;">Add new fields:</p>
<pre v-pre style="background:#1a1a2e; border-radius:6px; padding:10px 14px; color:#e0e0e0; font-size:0.65rem; font-family:monospace; line-height:1.5; white-space:pre; margin-bottom:0.8rem;">type User {
  age: Int   # Added later
}</pre>

<p style="font-weight:600; margin-bottom:0.3rem;">Deprecate old fields:</p>
<pre style="background:#1a1a2e; border-radius:6px; padding:10px 14px; color:#e0e0e0; font-size:0.65rem; font-family:monospace; line-height:1.5; white-space:pre; margin-bottom:0.8rem;">email: String @deprecated(reason: "Use contactEmail")</pre>

<ul style="font-size:0.95rem; color:#333; padding-left:1rem; margin-top:0.5rem;">
  <li>No breaking changes</li>
  <li>Versionless API evolution</li>
  <li>Better long-term maintainability</li>
</ul>

</div>

<!-- Notes: GraphQL supports non-breaking evolution of your API.
If you need to add a field, you just add it to the schema — clients won't break because they only query what they need.
If you want to deprecate something, you can mark it in the schema — tools will even warn developers not to use it.
This reduces the need for strict versioning like in REST — making long-term maintenance much easier and safer. -->
