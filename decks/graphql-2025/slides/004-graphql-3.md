---
id: graphql-2025/004-graphql-3
deck_id: graphql-2025
order: 4
slug: graphql-3
title: "GraphQL"
summary: "The GraphQL Advantage: Traditional REST API Call To load user info + their posts: GET /user/123 GET /user/123/posts Multiple round-trips Over-fetching / under-fetching GraphQL quer"
standalone_safe: true
reusable: true
requires_context: []
builds_on: []
recommended_next: [graphql-2025/005-graphql-4]
customer_visible: true
notes_visibility: customer-safe
---
---
layout: default
---

<h2 style="color:#5900CB; font-size:1.8rem; font-weight:bold; margin-bottom:1rem;">GraphQL</h2>

<div style="display:flex; gap:1rem; margin-top:0.5rem; align-items:flex-start;">
  <div style="flex:1; background:#1a1a2e; border-radius:8px; padding:12px 16px; overflow:auto;">
    <pre style="color:#e0e0e0; font-size:0.55rem; margin:0; font-family:monospace; line-height:1.5; white-space:pre;">The GraphQL Advantage:
Traditional REST API Call
To load user info + their posts:
GET /user/123
GET /user/123/posts
Multiple round-trips
Over-fetching / under-fetching</pre>
  </div>
  <div style="flex:1; background:#1a1a2e; border-radius:8px; padding:12px 16px; overflow:auto;">
    <pre style="color:#e0e0e0; font-size:0.55rem; margin:0; font-family:monospace; line-height:1.5; white-space:pre;">GraphQL
query {
  user(id: "123") {
    name
    posts {
      title
      publishedAt
    }
  }
}
One request
Only the data needed
Structured JSON response</pre>
  </div>
</div>

<!-- Notes: Let’s start by understanding how GraphQL differs from REST.
 In REST, getting related data often means making multiple requests — one for user info, another for posts, etc. This causes over-fetching, especially for mobile devices with limited bandwidth.
With GraphQL, you can ask for exactly what you need in one request — here, both user details and their posts — and get back only that data.
This eliminates redundant calls and makes the API feel snappier and more efficient.

One of GraphQL’s biggest advantages is its flexibility for different frontends.
A mobile app can request just a user's name, while an admin dashboard might want full details — all using the same endpoint.
This means backend developers don’t need to build different versions of the same endpoint — the frontend drives the shape of the response.
That’s why GraphQL is so popular in mobile and microservices environments. -->
