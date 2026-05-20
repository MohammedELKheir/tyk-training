---
id: architect-universal-data-graph-2-data-sources/018-rest-datasource-overview-auto-generate-rest-datasource-via-oas-use-tyk-d
deck_id: architect-universal-data-graph-2-data-sources
order: 18
slug: rest-datasource-overview-auto-generate-rest-datasource-via-oas-use-tyk-d
title: "REST Datasource Overview Auto-generate REST DataSource via OAS Use Tyk Dashboard"
summary: "API Endpoint: POST /api/data-graphs/data-sources/import Request Body: { \"type\": \"string\", \"data\": \"string\" } type is an enum with the following possible values: openapi Asyncapi To"
standalone_safe: true
reusable: true
requires_context: []
builds_on: []
recommended_next: [architect-universal-data-graph-2-data-sources/019-rest-datasource-overview-summary-rest-datasources-make-it-easy-to-integr]
customer_visible: true
notes_visibility: customer-safe
---
---
layout: default
---

<div style="position:relative; width:100%; height:100%; overflow:hidden; background:white; color:#101018;">
  <h1 style="position:absolute; left:36px; top:24px; margin:0; color:#5c21d4; font-size:2.8rem; line-height:1.05; font-weight:800;">REST Datasource Overview</h1>

  <div style="position:absolute; left:43px; top:110px; width:671px; font-size:0.84rem; line-height:1.32; color:#101018;">
    <div style="font-weight:700; margin-bottom:0.16rem;">Auto-generate REST DataSource via OAS</div>
    <ul style="margin:0 0 0.22rem 0; padding-left:1.35rem;">
      <li>Use Tyk Dashboard API</li>
      <li>Endpoint: <code>POST /api/data-graphs/data-sources/import</code></li>
      <li>Request Body:</li>
    </ul>
    <pre v-pre style="margin:0 0 0.22rem 1.35rem; white-space:pre; font-size:0.78rem; line-height:1.24;">{
    "type": "string",
    "data": "string"
}</pre>
    <div style="margin:0 0 0.1rem 0;">type is an enum with the following possible values:</div>
    <ul style="margin:0 0 0.2rem 0; padding-left:1.35rem;">
      <li>openapi</li>
      <li>Asyncapi</li>
    </ul>
    <div>To import an OAS specification you need to choose <code>openapi</code></div>
  </div>

  <TykCornerBadge />
</div>

<!-- Notes: To save time, Tyk allows you to auto-generate DataSource configurations from an OpenAPI (OAS) document. Just call the Dashboard API with the OAS content, and Tyk will generate and publish the corresponding GraphQL configuration. This is particularly useful for onboarding large REST APIs quickly. -->
