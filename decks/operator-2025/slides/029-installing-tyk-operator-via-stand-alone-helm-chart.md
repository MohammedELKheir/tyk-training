---
id: operator-2025/029-installing-tyk-operator-via-stand-alone-helm-chart
deck_id: operator-2025
order: 29
slug: installing-tyk-operator-via-stand-alone-helm-chart
title: "Installing Tyk Operator via Stand-Alone Helm Chart"
summary: "```bash You can install CRDs and Tyk Operator using the stand-alone Helm Chart by running the following command: $ helm repo add tyk-helm https://helm.tyk.io/public/helm/charts/ $"
standalone_safe: true
reusable: true
requires_context: []
builds_on: []
recommended_next: [operator-2025/030-secret-envvars-key-values]
customer_visible: true
notes_visibility: customer-safe
---
---
layout: default
---

# Installing Tyk Operator via Stand-Alone Helm Chart

```bash
You can install CRDs and Tyk Operator using the stand-alone Helm Chart by running the following command:
$ helm repo add tyk-helm https://helm.tyk.io/public/helm/charts/
$ helm repo update
$ helm install tyk-operator tyk-helm/tyk-operator -n tyk-operator-system
This process will deploy Tyk Operator and its required Custom Resource Definitions (CRDs) into your Kubernetes cluster in tyk-operator-system namespace.
```

<!-- Notes: "If you only want to install Tyk Operator — without the rest of the Tyk stack — you can use the stand-alone Helm chart provided by Tyk."
"This is useful in cases where you're managing the Operator independently, or integrating it into an existing deployment."
Step-by-step:
"First, add the Tyk Helm repository and update it:"
bash
CopyEdit
$ helm repo add tyk-helm https://helm.tyk.io/public/helm/charts/
$ helm repo update
"Then, install the Tyk Operator using this command:"
bash
CopyEdit
$ helm install tyk-operator tyk-helm/tyk-operator -n tyk-operator-system
"This will deploy the Tyk Operator and all of its Custom Resource Definitions (CRDs) into the tyk-operator-system namespace."
"You’ll see that the Operator is deployed as a Deployment, and it will start watching for Tyk Custom Resources like TykOasApiDefinition, ApiDefinition, and SecurityPolicy."
"Make sure your Kubernetes context is set to the right cluster, and that you have the necessary permissions to create CRDs and deploy into the namespace." -->
