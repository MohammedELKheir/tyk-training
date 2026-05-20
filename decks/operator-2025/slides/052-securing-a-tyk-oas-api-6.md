---
id: operator-2025/052-securing-a-tyk-oas-api-6
deck_id: operator-2025
order: 52
slug: securing-a-tyk-oas-api-6
title: "Securing a Tyk OAS API"
summary: "```bash Step 4: Verify the API update status Check the TykOasApiDefinition resource status: kubectl get tykoasapidefinition petstore -o yaml Look for: status: latestTransaction: st"
standalone_safe: true
reusable: true
requires_context: []
builds_on: []
recommended_next: [operator-2025/053-securing-a-tyk-oas-api-7]
customer_visible: true
notes_visibility: customer-safe
---
---
layout: default
---

# Securing a Tyk OAS API

```bash
Step 4: Verify the API update status
Check the TykOasApiDefinition resource status:
kubectl get tykoasapidefinition petstore -o yaml
Look for:
status:
  latestTransaction:
    status: Successful
    time: "2024-09-16T11:48:20Z"
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
