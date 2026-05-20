---
id: operator-2025/012-reconciliation
deck_id: operator-2025
order: 12
slug: reconciliation
title: "Reconciliation"
summary: "Reconciliation is a key design pattern in Kubernetes controllers. It ensures the actual state of the system matches the desired state. Tyk Operator uses this pattern to keep Kubern"
standalone_safe: true
reusable: true
requires_context: []
builds_on: []
recommended_next: [operator-2025/013-reconciliation-2]
customer_visible: true
notes_visibility: customer-safe
---
---
layout: default
---

# Reconciliation

Reconciliation is a key design pattern in Kubernetes controllers.
It ensures the actual state of the system matches the desired state.
Tyk Operator uses this pattern to keep Kubernetes objects in sync with Tyk.
Reconciliation is event-driven — it happens when something changes in your cluster.

**Triggers:**
A Kubernetes object is created, updated, or deleted
The Tyk Operator pod is restarted
The Operator’s cache expires (typically ~10 hours)

**⚠️ Important:**
Reconciliation does not react to changes made directly in Tyk!

<!-- Notes: "Reconciliation is a fundamental design pattern used by Kubernetes controllers to keep your cluster in the desired state."
"It works by continuously comparing the actual state of resources in the cluster against the desired state declared in your manifests or Custom Resources."
"The Tyk Operator uses this reconciliation loop to ensure that the Kubernetes objects it manages—like your API definitions—stay perfectly in sync with what’s deployed in the Tyk Gateway."
"This process is event-driven — reconciliation is triggered whenever there’s a change or an event, such as:"
"When a Kubernetes object is created, updated, or deleted."

"If the Tyk Operator pod restarts."

"Or if the Operator’s internal cache expires, which typically happens around every 10 hours."

"One important point to note: reconciliation only tracks changes made through Kubernetes. It does not react to changes made directly inside Tyk outside of Kubernetes."
"So to keep your system consistent and manageable, it’s best practice to make all changes via Kubernetes manifests and CRs, letting the Operator handle the rest." -->
