---
id: architect-graphql-8-introspection/004-introspection-queries
deck_id: architect-graphql-8-introspection
order: 4
slug: introspection-queries
title: "Introspection Queries"
summary: "Any GraphQL API can be explored using introspection queries. Introspection queries reveal detailed schema information. Example: Introspecting all types in the schema. query { __sch"
standalone_safe: true
reusable: true
requires_context: []
builds_on: []
recommended_next: [architect-graphql-8-introspection/005-introspection-queries-types]
customer_visible: true
notes_visibility: customer-safe
---
---
layout: default
---

# Introspection Queries

<div style="display:flex; gap:1.35rem; margin-top:0.58rem;">
  <div style="flex:0 0 44%; padding-left:0.18rem; padding-top:1.52rem;">
    <ul style="margin:0; padding-left:1.52rem; color:#111827; font-size:1rem; line-height:1.78;">
      <li style="margin-bottom:0.9rem;">Any GraphQL API can be explored using introspection queries.</li>
      <li style="margin-bottom:0.9rem;">Introspection queries reveal detailed schema information.</li>
      <li>Example: Introspecting all types in the schema.</li>
    </ul>
  </div>
  <div style="flex:0 0 35%; display:flex; justify-content:center; padding-top:0.72rem;">
    <div style="width:100%; display:flex; justify-content:center;">
      <pre style="color:#6a6a6a; font-size:0.78rem; font-weight:400; margin:0; font-family:'SFMono-Regular',Menlo,Monaco,Consolas,'Liberation Mono','Courier New',monospace; line-height:1.3; letter-spacing:0; white-space:pre; overflow:hidden; background:transparent;">query {
  __schema {
    types {
      name
      description
      kind
    }
    queryType {
      fields {
        name
        description
      }
    }
  }
}</pre>
    </div>
  </div>
</div>

<div style="position:absolute; right:1.1rem; bottom:1rem; background:#03031C; border-radius:12px; padding:0.56rem 0.72rem; display:flex; align-items:center; justify-content:center;">
  <img src="./public/icons/tyk-logo.png" style="width:3.35rem;" />
</div>

<!-- Notes: Any GraphQL API can be explored using introspection queries.
These special queries allow clients to discover detailed information about the schema — including types, fields, and relationships — without prior knowledge.
For example, you can run an introspection query that lists all types in the schema.
This capability is powerful for tools like API explorers or clients that need to dynamically understand the API structure. -->
