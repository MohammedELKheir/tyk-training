---
id: operator-2025/043-onboarding-a-tyk-oas-api-11
deck_id: operator-2025
order: 43
slug: onboarding-a-tyk-oas-api-11
title: "Onboarding a Tyk OAS API"
summary: "```bash Step 6: Test the API You can now send a request to your Tyk Gateway to test the API. Replace TYK_GATEWAY_URL with your actual gateway URL: curl \"http://TYK_GATEWAY_URL/pets"
standalone_safe: true
reusable: true
requires_context: []
builds_on: []
recommended_next: [operator-2025/044-onboarding-a-tyk-oas-api-12]
customer_visible: true
notes_visibility: customer-safe
---
---
layout: default
---

# Onboarding a Tyk OAS API

```bash
Step 6: Test the API
You can now send a request to your Tyk Gateway to test the API. Replace TYK_GATEWAY_URL with your actual gateway URL:
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
