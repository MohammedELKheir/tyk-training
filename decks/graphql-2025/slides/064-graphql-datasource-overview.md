---
id: graphql-2025/064-graphql-datasource-overview
deck_id: graphql-2025
order: 64
slug: graphql-datasource-overview
title: "GraphQL Datasource Overview"
summary: "Makes GraphQL queries to upstream GraphQL services Configured similarly to REST Datasource Handles query and response specifics automatically Example Query: query TykCEO { employee"
standalone_safe: true
reusable: true
requires_context: []
builds_on: []
recommended_next: [graphql-2025/065-graphql-datasource-overview-2]
customer_visible: true
notes_visibility: customer-safe
---
---
layout: default
---

<h2 style="color:#5900CB; font-size:1.8rem; font-weight:bold; margin-bottom:1rem;">GraphQL Datasource Overview</h2>

<div style="display:flex; gap:1.5rem;">
  <div style="flex:1.2; font-size:0.95rem; line-height:1.7; color:#03031C;">
    Makes GraphQL queries to upstream GraphQL services
Configured similarly to REST Datasource
Handles query and response specifics automatically<br/>
Example Query:
query TykCEO {
    employee(id: 1) {
        id
        name
    }
}
  </div>
  <div style="flex:1; background:#1a1a2e; border-radius:8px; padding:12px 16px; overflow:auto;">
    <pre style="color:#e0e0e0; font-size:0.6rem; margin:0; font-family:monospace; line-height:1.5; white-space:pre;">Schema Example:
type Query {
    employee(id: Int!): Employee
}
type Employee {
    id: Int!
    name: String!
}</pre>
  </div>
</div>

<!-- Notes: Tyk supports GraphQL Datasources which allow querying upstream GraphQL services. While the configuration is nearly identical to REST Datasources, there's a subtle but key difference in how GraphQL responses are handled, which we’ll explore next.
Let’s walk through a typical example. This schema and query target an employee by ID. The query asks for id and name fields. -->
