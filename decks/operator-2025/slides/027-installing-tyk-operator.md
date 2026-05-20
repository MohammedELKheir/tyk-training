---
id: operator-2025/027-installing-tyk-operator
deck_id: operator-2025
order: 27
slug: installing-tyk-operator
title: "Installing Tyk Operator"
summary: "2 options to install Tyk Operator: Tyk’s Umbrella Helm Charts Stand-alone Helm Chart Tyk’s Umbrella Helm Charts: You can install Tyk Operator alongside other Tyk components in the"
standalone_safe: true
reusable: true
requires_context: []
builds_on: []
recommended_next: [operator-2025/028-installing-tyk-operator-via-umbrella-helm-chart]
customer_visible: true
notes_visibility: customer-safe
---
---
layout: default
---

# Installing Tyk Operator

2 options to install Tyk Operator:
Tyk’s Umbrella Helm Charts
Stand-alone Helm Chart
Tyk’s Umbrella Helm Charts:
You can install Tyk Operator alongside other Tyk components in the Tyk Helm Chart by setting:
global.components.operator = true
A license key is required for the Tyk Operator.
You can provide it via:
Helm value: global.license.operator
Or a Kubernetes secret:
global.secrets.useSecretName → Secret must contain: OperatorLicense
If using global.secrets.useSecretName, the value in global.license.operator will be ignored.
Ensure the referenced secret is properly configured.
