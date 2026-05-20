---
id: graphql-2025/091-udg-countries-enriched-overview-2
deck_id: graphql-2025
order: 91
slug: udg-countries-enriched-overview-2
title: "UDG Countries Enriched — Overview"
summary: "GraphQL schema type Country { code: ID! name: String! pop: Int! # This comes from the REST API } type Query { country(code: ID!): Country } How it works When you make a query like:"
standalone_safe: true
reusable: true
requires_context: []
builds_on: []
recommended_next: [graphql-2025/092-udg-countries-enriched-how-it-works]
customer_visible: true
notes_visibility: customer-safe
---
---
layout: default
---

<h2 style="color:#5900CB; font-size:1.8rem; font-weight:bold; margin-bottom:1rem;">UDG Countries Enriched — Overview</h2>



<div style="background:#1a1a2e; border-radius:8px; padding:12px 16px; margin-top:0.5rem; overflow:auto;">
  <pre style="color:#e0e0e0; font-size:0.6rem; margin:0; font-family:monospace; line-height:1.5; white-space:pre;">GraphQL schema
type Country {
  code: ID!
  name: String!
  pop: Int!    # This comes from the REST API
}
type Query {
  country(code: ID!): Country
}
How it works
When you make a query like:
query {
  country(code: "GB") {
    code
    name
    pop
  }
}</pre>
</div>

<!-- Notes: Let's look at the GraphQL schema that defines this unified API.
We have a simple Country type with three fields: code, which is an ID; name, which is a string; and pop, which is an integer representing population. Notice that pop comes from the REST API, while code and name come from the GraphQL API.
The Query type has a single field called country that takes a country code as an argument and returns a Country object.
When a client makes a query like this - asking for the country with code 'GB', requesting the code, name, and pop fields - they're making what looks like a simple, single GraphQL query. But behind the scenes, Tyk is going to do something much more sophisticated. -->
