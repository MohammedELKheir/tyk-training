---
id: graphql-2025/053-key-concepts-field-mappings
deck_id: graphql-2025
order: 53
slug: key-concepts-field-mappings
title: "Key Concepts - Field Mappings"
summary: "Field Mappings – When Are They Needed Automatic Field Mapping When the GraphQL schema mirrors the REST API response, no manual field mapping is required. Example REST response: { \""
standalone_safe: true
reusable: true
requires_context: []
builds_on: []
recommended_next: [graphql-2025/054-key-concepts-field-mappings-2]
customer_visible: true
notes_visibility: customer-safe
---
---
layout: default
---

<h2 style="color:#5900CB; font-size:1.8rem; font-weight:bold; margin-bottom:1rem;">Key Concepts - Field Mappings</h2>

<div style="display:flex; gap:1.5rem;">
  <div style="flex:1.2; font-size:0.95rem; line-height:1.7; color:#03031C;">
    Field Mappings – When Are They Needed
Automatic Field Mapping
When the GraphQL schema mirrors the REST API response, no manual field mapping is required.
Example REST response:
{
  "id": 1,
  "name": "Martin Buhr"
}
  </div>
  <div style="flex:1; background:#1a1a2e; border-radius:8px; padding:12px 16px; overflow:auto;">
    <pre style="color:#e0e0e0; font-size:0.6rem; margin:0; font-family:monospace; line-height:1.5; white-space:pre;">Matching GraphQL schema:
type Query {
    user(id: Int!): User
}
type User {
    id: Int!
    name: String
}</pre>
  </div>
</div>

<!-- Notes: In Universal Data Graph, field mappings are automatic if your GraphQL schema matches the structure of your REST API’s JSON response.
This is the ideal scenario. As shown here, if the API returns id and name, and those fields are present in your GraphQL schema, no extra configuration is required — UDG will resolve them automatically. -->
