---
id: architect-universal-data-graph-2-data-sources/005-graphql-datasource-overview-rest-vs-graphql-rest-apis-do-not-wrap-respon
deck_id: architect-universal-data-graph-2-data-sources
order: 5
slug: graphql-datasource-overview-rest-vs-graphql-rest-apis-do-not-wrap-respon
title: "GraphQL Datasource Overview REST vs GraphQL REST APIs do not wrap responses Grap"
summary: "hQL APIs wrap responses in root fields (like data, employee) GraphQL field mapping is enabled by default Why Use GraphQL Datasource? Specification-compliant GraphQL requests Suppor"
standalone_safe: true
reusable: true
requires_context: []
builds_on: []
recommended_next: [architect-universal-data-graph-2-data-sources/006-graphql-datasource-overview-summary-tyk-supports-full-graphql-datasource]
customer_visible: true
notes_visibility: customer-safe
---
---
layout: default
---

<div style="position:relative; width:100%; height:100%; overflow:hidden; background:white; color:#101018;">
  <h1 style="position:absolute; left:36px; top:24px; margin:0; color:#5c21d4; font-size:2.8rem; line-height:1.05; font-weight:800;">GraphQL Datasource Overview</h1>

  <div style="position:absolute; left:43px; top:110px; width:783px; font-size:0.91rem; line-height:1.38; color:#101018;">
    <div style="font-weight:700; margin-bottom:0.18rem;">REST vs GraphQL</div>
    <ul style="margin:0 0 0.5rem 0; padding-left:1.35rem;">
      <li>REST APIs do not wrap responses</li>
      <li>GraphQL APIs wrap responses in root fields (like data, employee)</li>
      <li>GraphQL field mapping is enabled by default</li>
    </ul>

    <div style="font-weight:700; margin:0.35rem 0 0.18rem 0;">Why Use GraphQL Datasource?</div>
    <ul style="margin:0 0 0.5rem 0; padding-left:1.35rem;">
      <li>Specification-compliant GraphQL requests</li>
      <li>Supports nested REST &amp; GraphQL APIs in a single schema</li>
      <li>Query planner sends correct queries to upstreams</li>
    </ul>

    <div style="font-weight:700; margin:0.35rem 0 0.18rem 0;">How the Query Planner Works</div>
    <ul style="margin:0; padding-left:1.35rem;">
      <li>Checks if a field has a datasource</li>
      <li>That datasource resolves the field and its children</li>
      <li>If a nested field has its own datasource, ownership shifts</li>
    </ul>
  </div>

  <TykCornerBadge />
</div>

<!-- Notes: One key takeaway: GraphQL responses include a wrapping field, while REST typically does not. Because of this, GraphQL field mapping is turned on by default.
Tyk’s GraphQL engine sends standard-compliant queries. You can mix multiple REST and GraphQL datasources—even nested—and Tyk will handle query composition and resolution automatically.
The query planner follows field ownership: when it hits a field with a datasource, that datasource becomes responsible for resolving that field and its children until ownership shifts again. -->
