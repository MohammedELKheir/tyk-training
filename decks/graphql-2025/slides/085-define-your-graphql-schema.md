---
id: graphql-2025/085-define-your-graphql-schema
deck_id: graphql-2025
order: 85
slug: define-your-graphql-schema
title: "Define Your GraphQL Schema"
summary: "In the Schema tab, replace the default schema with: type Mutation { default: String } type Query { user(id: String): User } type Review { id: String text: String userId: String use"
standalone_safe: true
reusable: true
requires_context: []
builds_on: []
recommended_next: [graphql-2025/086-connect-the-user-query-to-the-users-rest-api]
customer_visible: true
notes_visibility: customer-safe
---
---
layout: default
---

<h2 style="color:#5900CB; font-size:1.8rem; font-weight:bold; margin-bottom:1rem;">Define Your GraphQL Schema</h2>



<div style="background:#1a1a2e; border-radius:8px; padding:12px 16px; margin-top:0.5rem; overflow:auto;">
  <pre style="color:#e0e0e0; font-size:0.6rem; margin:0; font-family:monospace; line-height:1.5; white-space:pre;">In the Schema tab, replace the default schema with:
type Mutation {
  default: String
}
type Query {
  user(id: String): User
}
type Review {
  id: String
  text: String
  userId: String
  user: User
}
type User {
  id: String
  username: String
  reviews: [Review]
}</pre>
</div>
