---
id: operator-2025/032-onboarding-a-tyk-oas-api
deck_id: operator-2025
order: 32
slug: onboarding-a-tyk-oas-api
title: "Onboarding a Tyk OAS API"
summary: "``` Prepare the Tyk OAS API Definition Create an OAS-compliant file (e.g., oas-api-definition.json) Include Tyk extensions: \"x-tyk-api-gateway\": { \"info\": { \"name\": \"Petstore\", \"st"
standalone_safe: true
reusable: true
requires_context: []
builds_on: []
recommended_next: [operator-2025/033-onboarding-a-tyk-oas-api-2]
customer_visible: true
notes_visibility: customer-safe
---
---
layout: default
---

# Onboarding a Tyk OAS API

```
Prepare the Tyk OAS API Definition
Create an OAS-compliant file (e.g., oas-api-definition.json)
Include Tyk extensions:
"x-tyk-api-gateway": {
"info": { "name": "Petstore", "state": { "active": true }},
"upstream": { "url": "https://petstore.swagger.io/v2" },
"server": { "listenPath": { "value": "/petstore/", "strip": true }}
}
Tip:
Generate and export this from the Tyk Dashboard > API > Actions > View API Definition
```

<!-- Notes: "First, you’ll need an OAS-compliant file — for example, oas-api-definition.json — that defines your API in the OpenAPI Specification format."
"But to make it work with Tyk, you also need to include Tyk-specific extensions using the x-tyk-api-gateway field."
What goes in x-tyk-api-gateway:
"This section allows you to declaratively define how the API behaves in the gateway. For example:"
json
CopyEdit
"x-tyk-api-gateway": {
  "info": { "name": "Petstore", "state": { "active": true }},
  "upstream": { "url": "https://petstore.swagger.io/v2" },
  "server": { "listenPath": { "value": "/petstore/", "strip": true }}
}
"info" defines the name and active state of the API.

"upstream" tells Tyk where to forward traffic.

"server" configures the listen path and whether to strip the prefix.

Tip:
"If you already have APIs in Tyk, the easiest way to get this structure is by going to the Tyk Dashboard → API → Actions → View API Definition."
"You can export an existing API from the Dashboard as an OAS file with the correct extensions — and then use it directly with the Operator."
"This step ensures that your API configuration is both OpenAPI-compliant and Tyk-ready." -->
