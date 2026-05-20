---
id: operator-2025/034-onboarding-a-tyk-oas-api-3
deck_id: operator-2025
order: 34
slug: onboarding-a-tyk-oas-api-3
title: "Onboarding a Tyk OAS API"
summary: "```yaml 3. Define TykOasApiDefinition Resource Manifest (tyk-oas-api-definition.yaml): apiVersion: tyk.tyk.io/v1alpha1 kind: TykOasApiDefinition metadata: name: petstore spec: tykO"
standalone_safe: true
reusable: true
requires_context: []
builds_on: []
recommended_next: [operator-2025/035-onboarding-a-tyk-oas-api-4]
customer_visible: true
notes_visibility: customer-safe
---
---
layout: default
---

# Onboarding a Tyk OAS API

```yaml
3. Define TykOasApiDefinition Resource
Manifest (tyk-oas-api-definition.yaml):
apiVersion: tyk.tyk.io/v1alpha1
kind: TykOasApiDefinition
metadata:
  name: petstore
spec:
  tykOAS:
    configmapRef:
      name: tyk-oas-api-config
      namespace: tyk
      keyName: oas-api-definition.json
```

```bash
kubectl apply -f tyk-oas-api-definition.yaml
```


```bash
kubectl apply -f tyk-oas-api-definition.yaml
```

<!-- Notes: "Now that your OAS API spec is available in a ConfigMap, the next step is to define a TykOasApiDefinition resource — this is a Custom Resource (CRD) that tells the Tyk Operator how to onboard your API."
Here’s the manifest example:
yaml
CopyEdit
apiVersion: tyk.tyk.io/v1alpha1
kind: TykOasApiDefinition
metadata:
  name: petstore
spec:
  tykOAS:
    configmapRef:
      name: tyk-oas-api-config
      namespace: tyk
      keyName: oas-api-definition.json
Key parts to highlight:
apiVersion and kind: This is a Tyk Custom Resource — specifically for managing OAS-style APIs.

metadata.name: This will be the name of your resource in Kubernetes. It doesn’t need to match the API name in the spec, but it’s good practice.

configmapRef: This tells the Operator where to find your OpenAPI spec:

name: The name of the ConfigMap we created earlier

namespace: Where that ConfigMap lives

keyName: The exact file inside the ConfigMap (in this case, oas-api-definition.json)

"Once this resource is applied, the Operator will trigger a reconciliation loop, and the API will be created in Tyk based on the contents of the OAS file."
"That’s how you declaratively manage an API using Tyk Operator — cleanly separated, version-controlled, and automated." -->
