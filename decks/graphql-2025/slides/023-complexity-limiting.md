---
id: graphql-2025/023-complexity-limiting
deck_id: graphql-2025
order: 23
slug: complexity-limiting
title: "Complexity Limiting"
summary: "GraphQL Complexity Limiting Even with a simple schema, deeply nested or resource-heavy operations can overload your upstream services. type Query { continents: [Continent!]! } type"
standalone_safe: true
reusable: true
requires_context: []
builds_on: []
recommended_next: [graphql-2025/024-complexity-limiting-2]
customer_visible: true
notes_visibility: customer-safe
---
---
layout: default
---

<h2 style="color:#5900CB; font-size:1.8rem; font-weight:bold; margin-bottom:1rem;">Complexity Limiting</h2>

<div style="display:flex; gap:1.5rem;">
  <div style="flex:1.2; font-size:0.95rem; line-height:1.7; color:#03031C;">
    GraphQL Complexity Limiting
Even with a simple schema, deeply nested or resource-heavy operations can overload your upstream services.
  </div>
  <div style="flex:1; background:#1a1a2e; border-radius:8px; padding:12px 16px; overflow:auto;">
    <pre style="color:#e0e0e0; font-size:0.6rem; margin:0; font-family:monospace; line-height:1.5; white-space:pre;">type Query {
  continents: [Continent!]!
}
type Continent {
  name: String!
  countries: [Country!]!
}
type Country {
  name: String!
  continent: Continent!
}</pre>
  </div>
</div>

<!-- Notes: "GraphQL is incredibly powerful and flexible, allowing clients to request exactly the data they need. However, this flexibility comes with a risk — even with a simple schema, clients can craft deeply nested queries or request large amounts of data in a single operation.
Such complex or resource-heavy queries can put significant strain on your upstream services, leading to slow response times, increased server load, and potentially downtime.
To prevent this, GraphQL complexity limiting is a vital safeguard. It helps us define thresholds for query depth and resource usage, effectively protecting our backend from expensive or malicious queries.
By enforcing complexity limits, we ensure our API remains responsive and stable for all users, while still giving clients the flexibility they need.
In the next section, we’ll explore how Tyk Universal Data Graph lets you set and enforce these complexity limits easily." -->
