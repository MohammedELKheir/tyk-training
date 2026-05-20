---
id: architect-universal-data-graph-2-data-sources/003-graphql-datasource-overview-makes-graphql-queries-to-upstream-graphql-se
deck_id: architect-universal-data-graph-2-data-sources
order: 3
slug: graphql-datasource-overview-makes-graphql-queries-to-upstream-graphql-se
title: "GraphQL Datasource Overview Makes GraphQL queries to upstream GraphQL services C"
summary: "onfigured similarly to REST Datasource Handles query and response specifics automatically Schema Example: type Query { employee(id: Int!): Employee } type Employee { id: Int! name:"
standalone_safe: true
reusable: true
requires_context: []
builds_on: []
recommended_next: [architect-universal-data-graph-2-data-sources/004-graphql-datasource-overview-graphql-response-parsing-actual-response-dat]
customer_visible: true
notes_visibility: customer-safe
---
---
layout: default
---

<div style="position:relative; width:100%; height:100%; overflow:hidden; background:white; color:#101018;">
  <h1 style="position:absolute; left:36px; top:24px; margin:0; color:#5c21d4; font-size:2.8rem; line-height:1.05; font-weight:800;">GraphQL Datasource Overview</h1>

  <div style="position:absolute; left:43px; top:110px; width:783px; font-size:0.93rem; line-height:1.45; color:#101018;">
    <ul style="margin:0; padding-left:1.35rem;">
      <li>Makes GraphQL queries to upstream GraphQL services</li>
      <li>Configured similarly to REST Datasource</li>
      <li>Handles query and response specifics automatically</li>
    </ul>
  </div>

  <div style="position:absolute; left:67px; top:214px; width:254px; color:#101018;">
    <div style="font-size:0.92rem; margin-bottom:0.3rem;">Schema Example:</div>
    <pre v-pre style="margin:0; white-space:pre; font-size:0.84rem; line-height:1.34;">type Query {
    employee(id: Int!): Employee
}
type Employee {
    id: Int!
    name: String!
}</pre>
  </div>

  <div style="position:absolute; left:336px; top:214px; width:254px; color:#101018;">
    <div style="font-size:0.92rem; margin-bottom:0.3rem;">Example Query:</div>
    <pre v-pre style="margin:0; white-space:pre; font-size:0.84rem; line-height:1.34;">query TykCEO {
    employee(id: 1) {
        id
        name
    }
}</pre>
  </div>

  <TykCornerBadge />
</div>

<!-- Notes: Tyk supports GraphQL Datasources which allow querying upstream GraphQL services. While the configuration is nearly identical to REST Datasources, there's a subtle but key difference in how GraphQL responses are handled, which we’ll explore next.
Let’s walk through a typical example. This schema and query target an employee by ID. The query asks for id and name fields. -->
