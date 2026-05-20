---
id: graphql-2025/078-rest-datasource-overview-3
deck_id: graphql-2025
order: 78
slug: rest-datasource-overview-3
title: "REST Datasource Overview"
summary: "Attaching Tyk REST API Select the field Choose REST | Tyk from the dropdown Pick from existing Tyk APIs Provide endpoint and method Optional headers and mapping Save and Generate R"
standalone_safe: true
reusable: true
requires_context: []
builds_on: []
recommended_next: [graphql-2025/079-rest-datasource-overview-4]
customer_visible: true
notes_visibility: customer-safe
---
---
layout: default
---

# REST Datasource Overview

Attaching Tyk REST API
Select the field
Choose REST | Tyk from the dropdown
Pick from existing Tyk APIs
Provide endpoint and method
Optional headers and mapping
Save and Generate Resolver
Click "Save &amp; Update API"
Resolver is auto-generated
GraphQL runtime will call the REST endpoint when the field is queried

<!-- Notes: If your REST API is already managed by Tyk, the integration is even easier. Choose from the list of available Tyk APIs in the dropdown, then configure which endpoint and method to use. This method promotes reuse of existing API definitions and policies.

Once the DataSource configuration is complete, saving it will generate a resolver function under the hood. This resolver ensures that when your GraphQL field is queried, the corresponding REST call is made to retrieve the data dynamically. -->
