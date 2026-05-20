---
id: graphql-2025/025-complexity-limiting-3
deck_id: graphql-2025
order: 25
slug: complexity-limiting-3
title: "Complexity Limiting"
summary: "Query Depth = 2 { continents { name } } Query Depth = 3 { continents { countries { name } } } When Depth Limit is Exceeded: Tyk will block the query and respond with: { \"error\": \"d"
standalone_safe: true
reusable: true
requires_context: []
builds_on: []
recommended_next: [graphql-2025/026-introspection]
customer_visible: true
notes_visibility: customer-safe
---
---
layout: default
---

# Complexity Limiting

Query Depth = 2
{
  continents {
    name
  }
}
Query Depth = 3
{
  continents {
    countries {
      name
    }
  }
}
When Depth Limit is Exceeded:
Tyk will block the query and respond with:
{
  "error": "depth limit exceeded"
}
Limit query depth by setting a max depth in:
A Policy
An Individual Key

<!-- Notes: To protect your GraphQL API from overly complex or expensive queries, you can limit the query depth.
This helps prevent performance issues and potential abuse.
You can set a maximum query depth in two places:
At the Policy level, which applies to all keys associated with that policy.

Or at the individual API Key level, for more granular control.

Setting these limits ensures your API stays performant and secure by restricting how deeply clients can nest their queries. -->
