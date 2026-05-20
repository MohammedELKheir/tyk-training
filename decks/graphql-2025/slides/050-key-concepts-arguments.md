---
id: graphql-2025/050-key-concepts-arguments
deck_id: graphql-2025
order: 50
slug: key-concepts-arguments
title: "Key Concepts - Arguments"
summary: "GraphQL Arguments → REST Calls Schema example: type Query { user(id: Int!): User } type User { id: Int! name: String } Goal: Map the id argument in a GraphQL query to the correct R"
standalone_safe: true
reusable: true
requires_context: []
builds_on: []
recommended_next: [graphql-2025/051-key-concepts-arguments-2]
customer_visible: true
notes_visibility: customer-safe
---
---
layout: default
---

<h2 style="color:#5900CB; font-size:1.8rem; font-weight:bold; margin-bottom:1rem;">Key Concepts - Arguments</h2>



<div style="background:#1a1a2e; border-radius:8px; padding:12px 16px; margin-top:0.5rem; overflow:auto;">
  <pre style="color:#e0e0e0; font-size:0.6rem; margin:0; font-family:monospace; line-height:1.5; white-space:pre;">GraphQL Arguments → REST Calls
Schema example:
type Query {
    user(id: Int!): User
}
type User {
    id: Int!
    name: String
}
Goal: Map the id argument in a GraphQL query to the correct REST API path</pre>
</div>

<!-- Notes: Let’s revisit a common use case: querying a user by ID.
In GraphQL, we define a field like user(id: Int!) that returns a User object.
The question is — how do we take that id argument and pass it into our REST API URL?
This is where Tyk’s Universal Data Graph (UDG) becomes powerful. It allows you to inject GraphQL arguments directly into the REST call using simple templating. -->
