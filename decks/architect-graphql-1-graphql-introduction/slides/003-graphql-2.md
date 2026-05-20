---
id: architect-graphql-1-graphql-introduction/003-graphql-2
deck_id: architect-graphql-1-graphql-introduction
order: 3
slug: graphql-2
title: "GraphQL"
summary: "The GraphQL Advantage: Traditional REST API Call To load user info + their posts: GET /user/123 GET /user/123/posts Multiple round-trips Over-fetching / under-fetching GraphQL quer"
standalone_safe: true
reusable: true
requires_context: []
builds_on: []
recommended_next: [architect-graphql-1-graphql-introduction/004-graphql-3]
customer_visible: true
notes_visibility: customer-safe
---
---
layout: default
---

# GraphQL

<div style="display:flex; gap:1.5rem; margin-top:1rem;">
  <div style="flex:1;">
    <p style="color:#2CA597; font-weight:bold; font-size:1rem; margin-bottom:0.5rem;">The GraphQL Advantage:</p>
    <p style="font-weight:600; margin-bottom:0.3rem;">Traditional REST API Call</p>
    <p style="font-size:0.9rem; margin-bottom:0.3rem;">To load user info + their posts:</p>
    <pre style="background:#1a1a2e; border-radius:6px; padding:10px 14px; color:#e0e0e0; font-size:0.65rem; font-family:monospace; line-height:1.5; white-space:pre; margin-bottom:0.5rem;">GET /user/123
GET /user/123/posts</pre>
    <ul style="font-size:0.9rem; color:#333; padding-left:1rem; margin:0;">
      <li>Multiple round-trips</li>
      <li>Over-fetching / under-fetching</li>
    </ul>
  </div>

  <div style="flex:1;">
    <p style="color:#8438FA; font-weight:bold; font-size:1rem; margin-bottom:0.5rem;">GraphQL</p>
    <pre v-pre style="background:#1a1a2e; border-radius:6px; padding:10px 14px; color:#e0e0e0; font-size:0.6rem; font-family:monospace; line-height:1.5; white-space:pre; margin-bottom:0.5rem;">query {
  user(id: "123") {
    name
    posts {
      title
      publishedAt
    }
  }
}</pre>
    <ul style="font-size:0.9rem; color:#333; padding-left:1rem; margin:0;">
      <li>One request</li>
      <li>Only the data needed</li>
      <li>Structured JSON response</li>
    </ul>
  </div>
</div>

<!-- Notes: Let's start by understanding how GraphQL differs from REST.
In REST, getting related data often means making multiple requests — one for user info, another for posts, etc. This causes over-fetching, especially for mobile devices with limited bandwidth.
With GraphQL, you can ask for exactly what you need in one request — here, both user details and their posts — and get back only that data.
This eliminates redundant calls and makes the API feel snappier and more efficient.

One of GraphQL's biggest advantages is its flexibility for different frontends.
A mobile app can request just a user's name, while an admin dashboard might want full details — all using the same endpoint.
This means backend developers don't need to build different versions of the same endpoint — the frontend drives the shape of the response.
That's why GraphQL is so popular in mobile and microservices environments. -->
