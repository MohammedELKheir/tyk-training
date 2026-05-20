---
id: operator-2025/044-onboarding-a-tyk-oas-api-12
deck_id: operator-2025
order: 44
slug: onboarding-a-tyk-oas-api-12
title: "Onboarding a Tyk OAS API"
summary: "```bash Summary of commands: # Create ConfigMap with your API OAS file kubectl create configmap tyk-oas-api-config --from-file=oas-api-definition.json -n tyk # Apply the TykOasApiD"
standalone_safe: true
reusable: true
requires_context: []
builds_on: []
recommended_next: [operator-2025/045-securing-a-tyk-oas-api]
customer_visible: true
notes_visibility: customer-safe
---
---
layout: default
---

# Onboarding a Tyk OAS API

```bash
Summary of commands:
# Create ConfigMap with your API OAS file
kubectl create configmap tyk-oas-api-config --from-file=oas-api-definition.json -n tyk
# Apply the TykOasApiDefinition manifest
kubectl apply -f tyk-oas-api-definition.yaml
# Verify the resource status
kubectl get tykoasapidefinition petstore -n tyk
# Test the API (replace TYK_GATEWAY_URL with your gateway URL)
curl "http://TYK_GATEWAY_URL/petstore/store/inventory"
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
