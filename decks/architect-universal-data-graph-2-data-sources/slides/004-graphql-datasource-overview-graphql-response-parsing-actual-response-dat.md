---
id: architect-universal-data-graph-2-data-sources/004-graphql-datasource-overview-graphql-response-parsing-actual-response-dat
deck_id: architect-universal-data-graph-2-data-sources
order: 4
slug: graphql-datasource-overview-graphql-response-parsing-actual-response-dat
title: "GraphQL Datasource Overview GraphQL Response Parsing Actual Response: { \"data\":"
summary: "{ \"employee\": { \"id\": 1, \"name\": \"Martin Buhr\" } } } Tyk Extracts: { \"employee\": { \"id\": 1, \"name\": \"Martin Buhr\" } }"
standalone_safe: true
reusable: true
requires_context: []
builds_on: []
recommended_next: [architect-universal-data-graph-2-data-sources/005-graphql-datasource-overview-rest-vs-graphql-rest-apis-do-not-wrap-respon]
customer_visible: true
notes_visibility: customer-safe
---
---
layout: default
---

<div style="position:relative; width:100%; height:100%; overflow:hidden; background:white; color:#101018;">
  <h1 style="position:absolute; left:36px; top:24px; margin:0; color:#5c21d4; font-size:2.8rem; line-height:1.05; font-weight:800;">GraphQL Datasource Overview</h1>

  <div style="position:absolute; left:43px; top:110px; width:783px; font-size:0.93rem; line-height:1.45; color:#101018; font-weight:700;">GraphQL Response Parsing</div>

  <div style="position:absolute; left:67px; top:165px; width:254px; color:#101018;">
    <div style="font-size:0.92rem; margin-bottom:0.3rem;">Actual Response:</div>
    <pre v-pre style="margin:0; white-space:pre; font-size:0.84rem; line-height:1.34;">{
  "data": {
    "employee": {
        "id": 1,
        "name": "Martin Buhr"
    }
  }
}</pre>
  </div>

  <div style="position:absolute; left:344px; top:165px; width:254px; color:#101018;">
    <div style="font-size:0.92rem; margin-bottom:0.3rem;">Tyk Extracts:</div>
    <pre v-pre style="margin:0; white-space:pre; font-size:0.84rem; line-height:1.34;">{
  "employee": {
    "id": 1,
    "name": "Martin Buhr"
  }
}</pre>
  </div>

  <TykCornerBadge />
</div>

<!-- Notes: Unlike REST, GraphQL wraps responses inside a data object. Tyk automatically unwraps this for you, simplifying field mapping. -->
