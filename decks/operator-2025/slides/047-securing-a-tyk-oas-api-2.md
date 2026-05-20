---
id: operator-2025/047-securing-a-tyk-oas-api-2
deck_id: operator-2025
order: 47
slug: securing-a-tyk-oas-api-2
title: "Securing a Tyk OAS API"
summary: "```bash Update the ConfigMap with the new Tyk OAS API Definition: kubectl create configmap tyk-oas-api-config --from-file=oas-api-definition.json -n tyk --dry-run=client -o yaml |"
standalone_safe: true
reusable: true
requires_context: []
builds_on: []
recommended_next: [operator-2025/048-hands-on-workshop-updating-and-securing-an-api-using-tyk-operator]
customer_visible: true
notes_visibility: customer-safe
---
---
layout: default
---

# Securing a Tyk OAS API

```bash
Update the ConfigMap with the new Tyk OAS API Definition:
kubectl create configmap tyk-oas-api-config --from-file=oas-api-definition.json -n tyk --dry-run=client -o yaml | kubectl replace -f -
Verify the changes:
kubectl get tykoasapidefinition petstore -o yaml
Test the API Endpoint:
curl -v "TYK_GATEWAY_URL/petstore/store/inventory"
```

<!-- Notes: "Once you've updated your OpenAPI Specification file with the new security configurations, the next step is to update the Kubernetes ConfigMap that holds your Tyk OAS API Definition."
"You can do this with the kubectl create configmap command combined with kubectl replace to ensure the ConfigMap is updated in the tyk namespace without hitting the annotation size limit."
"After applying the updated ConfigMap, verify the changes by retrieving the TykOasApiDefinition resource in YAML format. This helps confirm that Kubernetes has picked up the new configuration."
"Finally, test the API endpoint through the Tyk Gateway URL to ensure the API is working correctly with the new security settings applied."
"This workflow keeps your API lifecycle fully declarative and integrated with Kubernetes, making updates seamless and version-controlled." -->
