---
id: operator-2025/049-securing-a-tyk-oas-api-3
deck_id: operator-2025
order: 49
slug: securing-a-tyk-oas-api-3
title: "Securing a Tyk OAS API"
summary: "``` Step 1: Update your oas-api-definition.json Changes from the previous example: Add API key authentication to your OAS under components.securitySchemes Add global security requi"
standalone_safe: true
reusable: true
requires_context: []
builds_on: []
recommended_next: [operator-2025/050-securing-a-tyk-oas-api-4]
customer_visible: true
notes_visibility: customer-safe
---
---
layout: default
---

# Securing a Tyk OAS API

```
Step 1: Update your oas-api-definition.json
Changes from the previous example:
Add API key authentication to your OAS under components.securitySchemes

Add global security requirement in security

Enable authentication in the Tyk extension x-tyk-api-gateway.server.authentication
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
