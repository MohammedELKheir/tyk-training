---
id: architect-universal-data-graph-2-data-sources/017-rest-datasource-overview-attaching-tyk-rest-api-select-the-field-choose
deck_id: architect-universal-data-graph-2-data-sources
order: 17
slug: rest-datasource-overview-attaching-tyk-rest-api-select-the-field-choose
title: "REST Datasource Overview Attaching Tyk REST API Select the field Choose REST | T"
summary: "yk from the dropdown Pick from existing Tyk APIs Provide endpoint and method Optional headers and mapping Save and Generate Resolver Click \"Save & Update API\" Resolver is auto-gene"
standalone_safe: true
reusable: true
requires_context: []
builds_on: []
recommended_next: [architect-universal-data-graph-2-data-sources/018-rest-datasource-overview-auto-generate-rest-datasource-via-oas-use-tyk-d]
customer_visible: true
notes_visibility: customer-safe
---
---
layout: default
---

<div style="position:relative; width:100%; height:100%; overflow:hidden; background:white; color:#101018;">
  <h1 style="position:absolute; left:36px; top:24px; margin:0; color:#5c21d4; font-size:2.8rem; line-height:1.05; font-weight:800;">REST Datasource Overview</h1>

  <div style="position:absolute; left:43px; top:110px; width:382px; font-size:0.88rem; line-height:1.34; color:#101018;">
    <div style="font-weight:700; margin-bottom:0.16rem;">Attaching Tyk REST API</div>
    <ul style="margin:0 0 0.3rem 0; padding-left:1.35rem;">
      <li>Select the field</li>
      <li>Choose REST | Tyk from the dropdown</li>
      <li>Pick from existing Tyk APIs</li>
      <li>Provide endpoint and method</li>
      <li>Optional headers and mapping</li>
    </ul>

    <div style="font-weight:700; margin-bottom:0.16rem;">Save and Generate Resolver</div>
    <ul style="margin:0; padding-left:1.35rem;">
      <li>Click &quot;Save &amp; Update API&quot;</li>
      <li>Resolver is auto-generated</li>
      <li>GraphQL runtime will call the REST endpoint when the field is queried</li>
    </ul>
  </div>

  <img src="./public/screenshots/slide-017-5.png" style="position:absolute; left:406px; top:174px; width:555px; height:182px; object-fit:contain;" />

  <TykCornerBadge />
</div>

<!-- Notes: If your REST API is already managed by Tyk, the integration is even easier. Choose from the list of available Tyk APIs in the dropdown, then configure which endpoint and method to use. This method promotes reuse of existing API definitions and policies.

Once the DataSource configuration is complete, saving it will generate a resolver function under the hood. This resolver ensures that when your GraphQL field is queried, Tyk knows exactly how to fetch that data from the REST API. -->
