---
id: operator-2025/053-securing-a-tyk-oas-api-7
deck_id: operator-2025
order: 53
slug: securing-a-tyk-oas-api-7
title: "Securing a Tyk OAS API"
summary: "```bash Step 5: Test your secured API Try calling the API without an API key: curl -v \"http://TYK_GATEWAY_URL/petstore/store/inventory\" Replace TYK_GATEWAY_URL with your actual Tyk"
standalone_safe: true
reusable: true
requires_context: []
builds_on: []
recommended_next: [operator-2025/054-module-5-advanced-tyk-operator-advanced-features-of-tyk-operator]
customer_visible: true
notes_visibility: customer-safe
---
---
layout: default
---

# Securing a Tyk OAS API

```bash
Step 5: Test your secured API
Try calling the API without an API key:
curl -v "http://TYK_GATEWAY_URL/petstore/store/inventory"
Replace TYK_GATEWAY_URL with your actual Tyk Gateway URL.
You should get 401 Unauthorized because the API now requires a key.
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
