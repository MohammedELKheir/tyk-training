---
id: operator-2025/038-onboarding-a-tyk-oas-api-6
deck_id: operator-2025
order: 38
slug: onboarding-a-tyk-oas-api-6
title: "Onboarding a Tyk OAS API"
summary: "```json Create a file called oas-api-definition.json with your API definition, including the Tyk extension x-tyk-api-gateway. For example: { \"info\": { \"title\": \"Petstore\", \"version"
standalone_safe: true
reusable: true
requires_context: []
builds_on: []
recommended_next: [operator-2025/039-onboarding-a-tyk-oas-api-7]
customer_visible: true
notes_visibility: customer-safe
---
---
layout: default
---

# Onboarding a Tyk OAS API

```json
Create a file called oas-api-definition.json with your API definition, including the Tyk extension x-tyk-api-gateway. For example:
{
  "info": {
    "title": "Petstore",
    "version": "1.0.0"
  },
  "openapi": "3.0.3",
  "components": {},
  "paths": {},
  "x-tyk-api-gateway": {
    "info": {
      "name": "petstore",
      "state": {
        "active": true
      }
    },
    "upstream": {
      "url": "https://petstore.swagger.io/v2"
    },
    "server": {
      "listenPath": {
        "value": "/petstore/",
        "strip": true
      }
    }
  }
}
```

<!-- Notes: "When you need to update your API configuration, the process is straightforward and fully declarative."
Update your OAS file:
Make changes directly in your OpenAPI Specification file (oas-api-definition.json), such as updating endpoints, adding new paths, or changing metadata.

Update the ConfigMap:
Use the command to replace the existing ConfigMap with your updated OAS file:

 lua
CopyEdit
kubectl create configmap tyk-oas-api-config --from-file=oas-api-definition.json -n tyk --dry-run=client -o yaml | kubectl replace -f -
This command creates the updated ConfigMap manifest on-the-fly and replaces the existing one in Kubernetes.

What happens next:
The Tyk Operator detects the ConfigMap update.

It automatically reconciles the changes, updating the API in Tyk accordingly.

No manual intervention needed in the Dashboard or Gateway.

"This declarative approach keeps your API lifecycle consistent, version-controlled, and fully automated—perfect for GitOps workflows." -->
