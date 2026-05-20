---
id: operator-2025/051-securing-a-tyk-oas-api-5
deck_id: operator-2025
order: 51
slug: securing-a-tyk-oas-api-5
title: "Securing a Tyk OAS API"
summary: "Step 3: Tyk Operator automatically reconciles the change Since the existing TykOasApiDefinition resource references this ConfigMap, the Tyk Operator will detect the change and upda"
standalone_safe: true
reusable: true
requires_context: []
builds_on: []
recommended_next: [operator-2025/052-securing-a-tyk-oas-api-6]
customer_visible: true
notes_visibility: customer-safe
---
---
layout: default
---

# Securing a Tyk OAS API

Step 3: Tyk Operator automatically reconciles the change
Since the existing TykOasApiDefinition resource references this ConfigMap, the Tyk Operator will detect the change and update the API configuration accordingly.
No need to manually re-apply the TykOasApiDefinition resource unless you want to change something there.

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
