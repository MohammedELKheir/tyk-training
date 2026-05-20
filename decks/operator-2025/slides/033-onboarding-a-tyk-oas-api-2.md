---
id: operator-2025/033-onboarding-a-tyk-oas-api-2
deck_id: operator-2025
order: 33
slug: onboarding-a-tyk-oas-api-2
title: "Onboarding a Tyk OAS API"
summary: "```bash 2. Create Kubernetes ConfigMap kubectl create configmap tyk-oas-api-config \\ --from-file=oas-api-definition.json -n tyk Important Notes: Max size: 1MiB Avoid kubectl apply"
standalone_safe: true
reusable: true
requires_context: []
builds_on: []
recommended_next: [operator-2025/034-onboarding-a-tyk-oas-api-3]
customer_visible: true
notes_visibility: customer-safe
---
---
layout: default
---

# Onboarding a Tyk OAS API

```bash
2. Create Kubernetes ConfigMap
kubectl create configmap tyk-oas-api-config \
  --from-file=oas-api-definition.json -n tyk
Important Notes:
Max size: 1MiB
Avoid kubectl apply due to 256KB annotation limit
Use kubectl create or kubectl replace
```

<!-- Notes: Why a ConfigMap?
"This lets the Tyk Operator read your API definition from a Kubernetes-native source — aligning with declarative and GitOps-friendly workflows."
Command:
bash
CopyEdit
kubectl create configmap tyk-oas-api-config \
  --from-file=oas-api-definition.json -n tyk
"This creates a ConfigMap named tyk-oas-api-config in the tyk namespace, using your OAS file."
Important Notes to Keep in Mind:
Max size is 1MiB. This is a Kubernetes limitation on ConfigMap size.

Avoid kubectl apply for ConfigMaps. When you use kubectl apply, Kubernetes stores the full ConfigMap in the annotations of the resource, which has a 256KB size limit.

Instead, always use kubectl create or kubectl replace to avoid hitting this annotation limit.

"This step ensures your API spec is ready to be consumed by the Operator in the next step of the onboarding process." -->
