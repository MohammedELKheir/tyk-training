---
id: graphql-2025/079-rest-datasource-overview-4
deck_id: graphql-2025
order: 79
slug: rest-datasource-overview-4
title: "REST Datasource Overview"
summary: "Auto-generate REST DataSource via OAS Use Tyk Dashboard API Endpoint: POST /api/data-graphs/data-sources/import Request Body: { \"type\": \"string\", \"data\": \"string\" } type is an enum"
standalone_safe: true
reusable: true
requires_context: []
builds_on: []
recommended_next: [graphql-2025/080-rest-datasource-overview-5]
customer_visible: true
notes_visibility: customer-safe
---
---
layout: default
---

<h2 style="color:#5900CB; font-size:1.8rem; font-weight:bold; margin-bottom:1rem;">REST Datasource Overview</h2>



<div style="background:#1a1a2e; border-radius:8px; padding:12px 16px; margin-top:0.5rem; overflow:auto;">
  <pre style="color:#e0e0e0; font-size:0.6rem; margin:0; font-family:monospace; line-height:1.5; white-space:pre;">Auto-generate REST DataSource via OAS
Use Tyk Dashboard API
Endpoint: POST /api/data-graphs/data-sources/import
Request Body:
{
    "type": "string",
    "data": "string"
}
type is an enum with the following possible values:
openapi
Asyncapi
To import an OAS specification you need to choose openapi</pre>
</div>

<!-- Notes: To save time, Tyk allows you to auto-generate DataSource configurations from an OpenAPI (OAS) document. Just call the Dashboard API with the OAS content, and Tyk will generate and publish the corresponding GraphQL configuration. This is particularly useful for onboarding large REST APIs quickly. -->
