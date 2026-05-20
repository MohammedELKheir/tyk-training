---
id: operator-2025/015-summary
deck_id: operator-2025
order: 15
slug: summary
title: "Summary"
summary: "Tyk Operator is a Kubernetes Controller that manages Tyk Custom Resources (CRs) such as: API Definitions Security Policies How it works: Developers define API configurations using"
standalone_safe: true
reusable: true
requires_context: []
builds_on: []
recommended_next: [operator-2025/016-module-2-operator-deep-dive-diving-into-tyk-operator]
customer_visible: true
notes_visibility: customer-safe
---
---
layout: default
---

# Summary

Tyk Operator is a Kubernetes Controller that manages Tyk Custom Resources (CRs) such as:
API Definitions
Security Policies
How it works:
Developers define API configurations using Custom Resources
Tyk Operator ensures the desired state is continuously reconciled with the Tyk Gateway or Dashboard
Handles CREATE, UPDATE, and DELETE operations to align the actual state with the desired state
Goal:
Achieve and maintain a consistent, declarative API infrastructure through Kubernetes-native workflows

<!-- Notes: "To wrap up, the Tyk Operator is a Kubernetes controller specifically designed to manage Tyk custom resources, like API Definitions and Security Policies."
"Here’s how it works in practice:"
"Developers declare API configurations using Kubernetes Custom Resources."

"The Tyk Operator continuously watches and reconciles those resources with the actual state in the Tyk Gateway or Dashboard."

"It handles create, update, and delete actions to ensure what’s running matches exactly what you’ve declared."

"The ultimate goal is to provide a consistent, declarative API infrastructure that fits naturally within Kubernetes-native workflows and tooling."
"This makes API management more automated, auditable, and aligned with modern GitOps and CI/CD practices."
"With the Tyk Operator, you get all the benefits of Kubernetes control loops applied to API lifecycle management." -->
