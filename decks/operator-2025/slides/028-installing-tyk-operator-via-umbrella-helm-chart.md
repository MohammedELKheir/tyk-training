---
id: operator-2025/028-installing-tyk-operator-via-umbrella-helm-chart
deck_id: operator-2025
order: 28
slug: installing-tyk-operator-via-umbrella-helm-chart
title: "Installing Tyk Operator via Umbrella Helm Chart"
summary: "You can install Tyk Operator alongside other Tyk components in the Tyk Helm Chart by setting: global.components.operator = true tyk-operator-conf will have been created with the fo"
standalone_safe: true
reusable: true
requires_context: []
builds_on: []
recommended_next: [operator-2025/029-installing-tyk-operator-via-stand-alone-helm-chart]
customer_visible: true
notes_visibility: customer-safe
---
---
layout: default
---

# Installing Tyk Operator via Umbrella Helm Chart

You can install Tyk Operator alongside other Tyk components in the Tyk Helm Chart by setting:
global.components.operator = true
tyk-operator-conf will have been created with the following keys by default:
TYK_OPERATOR_LICENSEKEY
TYK_AUTH - Tyk Dashboard API Access Credentials
TYK_MODE
TYK_ORG - Organization ID
TYK_URL
If the credentials embedded in the tyk-operator-conf are ever changed or updated, the tyk-operator-controller-manager pod must be restarted to pick up these changes.

<!-- Notes: "You can deploy Tyk Operator as part of your overall Tyk stack using the official Tyk Helm chart."
"To do this, you simply set this value in your Helm values.yaml or CLI override:"
global.components.operator = true
"This flag ensures the Tyk Operator gets installed alongside the Dashboard, Gateway, and other components."
"Now, when the chart is deployed with the Operator enabled, it will automatically create a Kubernetes Secret called tyk-operator-conf, which holds the configuration the Operator needs to connect to the Tyk Dashboard."
"This secret includes several important keys:"
TYK_OPERATOR_LICENSEKEY – your Tyk Operator license

TYK_AUTH – the Dashboard API access credentials (typically a user key)

TYK_MODE – the mode the Operator runs in (dashboard or hybrid)

TYK_ORG – the Organization ID the Operator operates under

TYK_URL – the base URL for the Tyk Dashboard API

⚠️ "Important operational note:"
"If any of these credentials are changed or updated, such as rotating the API key or updating the license, the tyk-operator-controller-manager pod must be restarted. This is required because the Operator only loads the credentials at startup."
"This restart ensures it re-reads the secret and reinitializes with the new credentials." -->
