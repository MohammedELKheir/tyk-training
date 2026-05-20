---
id: operator-2025/004-kubernetes-orchestration
deck_id: operator-2025
order: 4
slug: kubernetes-orchestration
title: "Kubernetes Orchestration"
summary: "Kubernetes Orchestration"
standalone_safe: true
reusable: true
requires_context: []
builds_on: []
recommended_next: [operator-2025/005-tyk-operator]
customer_visible: true
notes_visibility: customer-safe
---
---
layout: default
---

# Kubernetes Orchestration

<div style="display:flex; justify-content:center; margin-top:1rem;">
  <img src="./images/icons/slide-004-gs-92-p19.png" style="max-width:95%; max-height:400px;" />
</div>

<!-- Notes: "Now that we understand the declarative approach, let’s look at the bigger picture of what actually happens when we deploy an API in a modern, cloud-native environment."
"In the middle of this diagram is Git—our single source of truth. It’s where everything starts. Whether you're an API developer, part of the platform team, or in DevOps, you're all interacting with Git to define the desired state of your system."
"On the left, we have different personas contributing to the process:
API developers define the API spec, policies, and access controls.

The platform team might handle things like ingress, service mesh rules, and DNS.

DevOps engineers define the Kubernetes resources, secrets, and CI/CD pipelines."

"And then on the right, you can see the systems that need to be configured:
Tyk, which is our API gateway—needs to be aware of the API, the rate limits, the authentication rules, etc.

DNS, which needs to point to the right service so consumers can actually reach the API.

Kubernetes, which hosts the service itself, including deployments, services, and config maps."

"The challenge is that all of these systems need to stay in sync. If one part is updated but the others aren't, your API might be unreachable, insecure, or just broken."
"This is why using a GitOps approach and tools like the Tyk Operator is so powerful—it helps bridge these moving parts by driving configuration through Git and ensuring everything stays in sync and consistent." -->
