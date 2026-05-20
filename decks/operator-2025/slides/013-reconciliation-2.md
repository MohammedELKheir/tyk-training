---
id: operator-2025/013-reconciliation-2
deck_id: operator-2025
order: 13
slug: reconciliation-2
title: "Reconciliation"
summary: "What Happens During Reconciliation? Tyk Operator compares: Desired State (from Kubernetes object) Actual State (fetched from Tyk) If there’s a drift, it performs one of three actio"
standalone_safe: true
reusable: true
requires_context: []
builds_on: []
recommended_next: [operator-2025/014-drift-detection]
customer_visible: true
notes_visibility: customer-safe
---
---
layout: default
---

# Reconciliation

What Happens During Reconciliation?
Tyk Operator compares:
Desired State (from Kubernetes object)
Actual State (fetched from Tyk)
If there’s a drift, it performs one of three actions:
CREATE → Exists in K8s but not in Tyk
UPDATE → Differs in Tyk and K8s (via hash check)
DELETE → Deleted in K8s but still in Tyk

<!-- Notes: "During reconciliation, the Tyk Operator continuously compares two states:"
"The desired state — which is defined by the Kubernetes Custom Resource you’ve applied."

"The actual state — which is what currently exists inside the Tyk Gateway."

"If the Operator detects any difference, or drift, between these two states, it takes action to fix it."
"There are three main actions it can perform:"
"CREATE: If the resource exists in Kubernetes but doesn’t exist yet in Tyk, the Operator will create it in Tyk."

"UPDATE: If the resource exists in both places but differs — determined by a hash or checksum — the Operator updates the Tyk resource to match Kubernetes."

"DELETE: If the resource has been deleted from Kubernetes but still exists in Tyk, the Operator removes it from Tyk."

"This cycle ensures your API configuration in Tyk always reflects what you declare in Kubernetes, keeping things consistent and reliable." -->
