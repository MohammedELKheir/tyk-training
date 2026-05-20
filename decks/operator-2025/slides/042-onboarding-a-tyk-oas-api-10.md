---
id: operator-2025/042-onboarding-a-tyk-oas-api-10
deck_id: operator-2025
order: 42
slug: onboarding-a-tyk-oas-api-10
title: "Onboarding a Tyk OAS API"
summary: "```bash Step 5: Verify API creation Check the status of your API: kubectl get tykoasapidefinition petstore Expected output shows your API details and sync status, like: NAME DOMAIN"
standalone_safe: true
reusable: true
requires_context: []
builds_on: []
recommended_next: [operator-2025/043-onboarding-a-tyk-oas-api-11]
customer_visible: true
notes_visibility: customer-safe
---
---
layout: default
---

# Onboarding a Tyk OAS API

```bash
Step 5: Verify API creation
Check the status of your API:
kubectl get tykoasapidefinition petstore
Expected output shows your API details and sync status, like:
NAME       DOMAIN   LISTENPATH   PROXY.TARGETURL                  ENABLED   SYNCSTATUS
petstore            /petstore/   https://petstore.swagger.io/v2   true      Successful
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
