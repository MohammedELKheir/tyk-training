---
id: operator-2025/036-onboarding-a-tyk-oas-api-5
deck_id: operator-2025
order: 36
slug: onboarding-a-tyk-oas-api-5
title: "Onboarding a Tyk OAS API"
summary: "```bash 5. Updating an API To make any changes to your API configuration, update the OAS file in your ConfigMap and then re-apply the ConfigMap using kubectl replace: kubectl creat"
standalone_safe: true
reusable: true
requires_context: []
builds_on: []
recommended_next: [operator-2025/037-hands-on-workshop-onboarding-an-oas-api-using-operator]
customer_visible: true
notes_visibility: customer-safe
---
---
layout: default
---

# Onboarding a Tyk OAS API

```bash
5. Updating an API
To make any changes to your API configuration, update the OAS file in your ConfigMap and then re-apply the ConfigMap using kubectl replace:
kubectl create configmap tyk-oas-api-config --from-file=oas-api-definition.json -n tyk --dry-run=client -o yaml | kubectl replace -f -
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
