---
id: operator-2025/008-custom-resources-2
deck_id: operator-2025
order: 8
slug: custom-resources-2
title: "Custom Resources"
summary: "```yaml apiVersion: tyk.tyk.io/v1alpha1 kind: TykOasApiDefinition metadata: name: petstore spec: tykOAS: configmapRef: name: tyk-oas-api-config # Metadata name of the ConfigMap res"
standalone_safe: true
reusable: true
requires_context: []
builds_on: []
recommended_next: [operator-2025/009-tyk-operator-crds]
customer_visible: true
notes_visibility: customer-safe
---
---
layout: default
---

# Custom Resources

```yaml
apiVersion: tyk.tyk.io/v1alpha1
kind: TykOasApiDefinition
metadata:
 name: petstore
spec:
 tykOAS:
   configmapRef:
     name: tyk-oas-api-config   # Metadata name of the ConfigMap resource that stores the Tyk OAS API Definition
     namespace: default           # Metadata namespace of the ConfigMap resource
     keyName: oas-api-definition.json # Key for retrieving Tyk OAS API Definition from the ConfigMap
```

<!-- Notes: "Here’s an example of a Custom Resource used with the Tyk Operator—specifically a TykOasApiDefinition."
"This CR is used to declaratively deploy an API using an OpenAPI Specification (OAS) that is stored in a Kubernetes ConfigMap."
"You can see this resource is defined under the tyk.tyk.io API group, and the kind is TykOasApiDefinition."
"The metadata.name is how Kubernetes will track this specific API resource—in this case, it’s called petstore."
"In the spec, we reference a ConfigMap where the actual OAS JSON is stored. This lets us keep large or complex API definitions separate from the CR, following a clean separation of concerns."
"This structure is powerful because it aligns with GitOps best practices: we can store and version the API spec in Git, sync it into a ConfigMap, and then let the Operator do the rest."
"Once this CR is applied, the Tyk Operator watches it, reads the referenced OAS file from the ConfigMap, and ensures that the API is deployed in the Tyk Gateway accordingly." -->
