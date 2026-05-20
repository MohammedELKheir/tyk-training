---
id: operator-2025/050-securing-a-tyk-oas-api-4
deck_id: operator-2025
order: 50
slug: securing-a-tyk-oas-api-4
title: "Securing a Tyk OAS API"
summary: "```bash Step 2: Update the ConfigMap in Kubernetes Run the following command to update the existing ConfigMap (tyk-oas-api-config) with the new definition: kubectl create configmap"
standalone_safe: true
reusable: true
requires_context: []
builds_on: []
recommended_next: [operator-2025/051-securing-a-tyk-oas-api-5]
customer_visible: true
notes_visibility: customer-safe
---
---
layout: default
---

# Securing a Tyk OAS API

```bash
Step 2: Update the ConfigMap in Kubernetes
Run the following command to update the existing ConfigMap (tyk-oas-api-config) with the new definition:
kubectl create configmap tyk-oas-api-config --from-file=oas-api-definition.json --dry-run=client -o yaml | kubectl replace -f -
This command creates a new ConfigMap YAML from your file and pipes it into kubectl replace to update the existing ConfigMap.
Replace tyk with your namespace if different.
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
