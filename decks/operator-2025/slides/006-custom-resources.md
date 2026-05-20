---
id: operator-2025/006-custom-resources
deck_id: operator-2025
order: 6
slug: custom-resources
title: "Custom Resources"
summary: "Custom Resources (CRs) extend the Kubernetes API. They allow you to define and manage application-specific configurations. CRDs make Kubernetes highly extensible by enabling domain"
standalone_safe: true
reusable: true
requires_context: []
builds_on: []
recommended_next: [operator-2025/007-tyk-operator-2]
customer_visible: true
notes_visibility: customer-safe
---
---
layout: default
---

# Custom Resources

Custom Resources (CRs) extend the Kubernetes API.
They allow you to define and manage application-specific configurations.
CRDs make Kubernetes highly extensible by enabling domain-specific objects.
Defined using Custom Resource Definitions (CRDs), which specify the schema and structure of the resource

<!-- Notes: "To understand how the Tyk Operator works, we need to first understand the concept of Custom Resources, or CRs, in Kubernetes."
"Custom Resources extend the Kubernetes API. They allow us to introduce new types of objects that Kubernetes doesn't support out of the box."
"For example, Kubernetes natively understands objects like Deployments, Services, and ConfigMaps. But with Custom Resources, we can define our own objects—like an API object for Tyk, or maybe a DatabaseBackup or a CertificateRequest—and manage them just like any other Kubernetes resource."
"CRDs, or Custom Resource Definitions, are what make this possible. They define the schema and structure of these new resource types—what fields they have, how they're validated, and how Kubernetes should treat them."
"This makes Kubernetes highly extensible. You can model domain-specific configurations and lifecycles in a way that’s native to the platform, and tools like the Tyk Operator can then watch for these CRs and act on them."
"In our case, we define Tyk-specific CRs—such as APIs, Policies, or Security settings—and the Tyk Operator continuously reconciles the actual state of Tyk with what’s described in those resources." -->
