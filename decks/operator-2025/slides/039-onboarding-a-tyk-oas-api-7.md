---
id: operator-2025/039-onboarding-a-tyk-oas-api-7
deck_id: operator-2025
order: 39
slug: onboarding-a-tyk-oas-api-7
title: "Onboarding a Tyk OAS API"
summary: "```bash Step 2: Create a ConfigMap from the OAS file Upload the API definition into Kubernetes as a ConfigMap: kubectl create configmap tyk-oas-api-config --from-file=oas-api-defin"
standalone_safe: true
reusable: true
requires_context: []
builds_on: []
recommended_next: [operator-2025/040-onboarding-a-tyk-oas-api-8]
customer_visible: true
notes_visibility: customer-safe
---
---
layout: default
---

# Onboarding a Tyk OAS API

```bash
Step 2: Create a ConfigMap from the OAS file
Upload the API definition into Kubernetes as a ConfigMap:
kubectl create configmap tyk-oas-api-config --from-file=oas-api-definition.json
tyk-oas-api-config is the name of the ConfigMap.

-n tyk specifies the namespace; replace tyk if your Tyk Operator runs in a different namespace.
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
