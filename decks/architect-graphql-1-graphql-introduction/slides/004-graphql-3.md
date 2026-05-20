---
id: architect-graphql-1-graphql-introduction/004-graphql-3
deck_id: architect-graphql-1-graphql-introduction
order: 4
slug: graphql-3
title: "GraphQL"
summary: "GraphQL uses a type system to define your API. type User {\\n id: ID!\\n name: String!\\n email: String!\\n posts: [Post!]!\\n}\\n\\ntype Post {\\n title: String!\\n publishedAt: String!\\n}"
standalone_safe: true
reusable: true
requires_context: []
builds_on: []
recommended_next: [architect-graphql-1-graphql-introduction/005-graphql-4]
customer_visible: true
notes_visibility: customer-safe
---
---
layout: default
---

# GraphQL

<div style="display:flex; gap:1.5rem; margin-top:1rem;">
  <div style="flex:1;">
    <p style="font-size:0.95rem; margin-bottom:0.5rem;">GraphQL uses a type system to define your API.</p>
    <div v-html="`<pre style='color:#e0e0e0; font-size:0.55rem; font-family:monospace; line-height:1.5; white-space:pre; margin:0;background:#1a1a2e; border-radius:6px; padding:10px 14px;'>type User {\n  id: ID!\n  name: String!\n  email: String!\n  posts: [Post!]!\n}\n\ntype Post {\n  title: String!\n  publishedAt: String!\n}</pre>`" />
  </div>

  <div style="flex:1;">
    <ul style="font-size:0.95rem; color:#333; padding-left:1rem; line-height:1.8; margin-top:0.5rem;">
      <li>String! means it's required</li>
      <li>Relationships (e.g. posts) are embedded</li>
      <li>Tools can auto-generate documentation</li>
      <li>Clients get predictable responses</li>
      <li>Catches errors at development time</li>
    </ul>
  </div>
</div>

<!-- Notes: GraphQL APIs are built around a schema — it's like a contract between the backend and frontend.
This schema is typed, meaning we define the structure of data: what a User is, what fields are required, and how it links to Post.
With this, you get things like auto-generated documentation, type-safe clients, and clear errors when queries go wrong.
It's especially helpful in larger teams where backend and frontend are developed in parallel. -->
