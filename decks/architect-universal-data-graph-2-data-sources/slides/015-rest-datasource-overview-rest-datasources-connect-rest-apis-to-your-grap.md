---
id: architect-universal-data-graph-2-data-sources/015-rest-datasource-overview-rest-datasources-connect-rest-apis-to-your-grap
deck_id: architect-universal-data-graph-2-data-sources
order: 15
slug: rest-datasource-overview-rest-datasources-connect-rest-apis-to-your-grap
title: "REST Datasource Overview REST DataSources connect REST APIs to your GraphQL sche"
summary: "ma Enables field-level resolution via REST endpoints Supported for both external APIs and Tyk-managed APIs"
standalone_safe: true
reusable: true
requires_context: []
builds_on: []
recommended_next: [architect-universal-data-graph-2-data-sources/016-rest-datasource-overview-select-the-field-in-your-schema-configure-as-ex]
customer_visible: true
notes_visibility: customer-safe
---
---
layout: default
---

<div style="position:relative; width:100%; height:100%; overflow:hidden; background:white; color:#101018;">
  <h1 style="position:absolute; left:36px; top:24px; margin:0; color:#5c21d4; font-size:2.8rem; line-height:1.05; font-weight:800;">REST Datasource Overview</h1>

  <div style="position:absolute; left:43px; top:110px; width:783px; font-size:0.94rem; line-height:1.5; color:#101018;">
    <ul style="margin:0; padding-left:1.35rem;">
      <li>REST DataSources connect REST APIs to your GraphQL schema</li>
      <li>Enables field-level resolution via REST endpoints</li>
      <li>Supported for both external APIs and Tyk-managed APIs</li>
    </ul>
  </div>

  <TykCornerBadge />
</div>

<!-- Notes: REST DataSources act as connectors between your GraphQL schema and existing REST endpoints. Instead of rewriting your APIs, you attach a REST DataSource to a GraphQL field, allowing that field to be resolved via a REST call. These can be external APIs or APIs already managed in your Tyk Gateway. -->
