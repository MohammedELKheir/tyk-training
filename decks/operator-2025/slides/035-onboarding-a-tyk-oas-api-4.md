---
id: operator-2025/035-onboarding-a-tyk-oas-api-4
deck_id: operator-2025
order: 35
slug: onboarding-a-tyk-oas-api-4
title: "Onboarding a Tyk OAS API"
summary: "```bash 4. Verify & Test the API Check Status: kubectl get tykoasapidefinition petstore Test Endpoint: curl \"TYK_GATEWAY_URL/petstore/store/inventory\" ```"
standalone_safe: true
reusable: true
requires_context: []
builds_on: []
recommended_next: [operator-2025/036-onboarding-a-tyk-oas-api-5]
customer_visible: true
notes_visibility: customer-safe
---
---
layout: default
---

# Onboarding a Tyk OAS API

```bash
4. Verify & Test the API
Check Status:
kubectl get tykoasapidefinition petstore
Test Endpoint:
curl "TYK_GATEWAY_URL/petstore/store/inventory"
```

<!-- Notes: "After you’ve applied the TykOasApiDefinition resource, it’s important to verify that the Operator has successfully onboarded your API."
Check the status:
Run kubectl get tykoasapidefinition petstore

This command shows if the custom resource exists and its current status.

You can also use kubectl describe tykoasapidefinition petstore for more detailed info or to troubleshoot.

Test the API endpoint:
Use a simple curl command to test the API through the Tyk Gateway.

For example: curl "TYK_GATEWAY_URL/petstore/store/inventory"

This confirms the API is reachable and routing correctly through Tyk.

"Verifying the API’s status and connectivity ensures your declarative configuration has successfully translated into a working API managed by Tyk Operator."
"From here, you can move on to configuring security policies, rate limits, or other advanced features—all managed via Kubernetes manifests." -->
