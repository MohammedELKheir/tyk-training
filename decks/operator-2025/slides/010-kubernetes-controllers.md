---
id: operator-2025/010-kubernetes-controllers
deck_id: operator-2025
order: 10
slug: kubernetes-controllers
title: "Kubernetes Controllers"
summary: "Definition: A controller is a control loop that watches the state of your cluster and makes changes to move the current state toward the desired state. Part of Kubernetes Core: Man"
standalone_safe: true
reusable: true
requires_context: []
builds_on: []
recommended_next: [operator-2025/011-kubernetes-operator]
customer_visible: true
notes_visibility: customer-safe
---
---
layout: default
---

# Kubernetes Controllers

Definition: A controller is a control loop that watches the state of your cluster and makes changes to move the current state toward the desired state.
Part of Kubernetes Core: Many controllers are built into Kubernetes by default (e.g., Deployment controller, ReplicaSet controller, Job controller).
Function: It continuously reconciles resources by reading their spec and taking action to match the desired state.
Example: If you create a Deployment with 3 replicas, the ReplicaSet controller ensures that 3 pods are always running.

<!-- Notes: "To understand how the Tyk Operator works, we need to first understand controllers, which are a fundamental part of Kubernetes."
"A controller is essentially a control loop—it watches the actual state of the cluster, compares it to the desired state defined in your manifests, and takes actions to bring the two into alignment."
"Kubernetes comes with many built-in controllers—for example, the Deployment controller, the ReplicaSet controller, and the Job controller. Each one is responsible for reconciling a specific type of resource."
"Here’s a simple example: if you create a Deployment and specify 3 replicas, the ReplicaSet controller will make sure there are always 3 pods running. If one crashes, it spins up a new one to maintain the desired state."
"The key idea is reconciliation—controllers don't run once and stop. They run continuously in the background, checking if what you want matches what exists, and correcting any drift."
"This same principle is used by the Tyk Operator. It’s a custom controller that watches for Tyk-specific resources—like API definitions—and ensures that the Tyk Gateway reflects exactly what you’ve declared in your CRs." -->
