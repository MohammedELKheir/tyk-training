---
id: operator-2025/003-imperative-vs-declarative
deck_id: operator-2025
order: 3
slug: imperative-vs-declarative
title: "Imperative vs Declarative"
summary: "Imperative vs Declarative"
standalone_safe: true
reusable: true
requires_context: []
builds_on: []
recommended_next: [operator-2025/004-kubernetes-orchestration]
customer_visible: true
notes_visibility: customer-safe
---
---
layout: default
---

# Imperative vs Declarative

<div style="display:flex; justify-content:center; margin-top:1rem;">
  <img src="./images/icons/slide-003-gs-87-p18.png" style="max-width:95%; max-height:400px;" />
</div>

<!-- Notes: "Before we dive into the Tyk Operator and how it works, it’s important to take a step back and understand a fundamental concept in Kubernetes: imperative vs declarative approaches. This concept will help us appreciate why Operators, including the Tyk Operator, are powerful tools for managing APIs."
Imperative:
"Imperative is like giving direct instructions. You tell Kubernetes exactly what to do, step-by-step. For example, you might run a kubectl create or kubectl apply command from your terminal to create a resource. You’re in control, but it also means you have to manage and track every change yourself. It’s great for quick tasks or experimentation, but doesn’t scale well for managing complex or long-lived configurations."
Declarative:
"Declarative, on the other hand, is about describing what the desired state of the system should be. You write a YAML file that defines your configuration, and Kubernetes—or in our case, an Operator—makes sure the actual state of the system matches what you described. If something drifts from that state, it’s reconciled automatically. This model is ideal for GitOps, CI/CD, and repeatable deployments."
Transition to Tyk Operator:
"The Tyk Operator follows the declarative model. Instead of manually creating APIs or applying policies via the dashboard or CLI, we define them as Kubernetes custom resources. The Operator watches these resources and ensures Tyk’s configuration aligns with them. This brings all the benefits of GitOps—like version control, auditability, and repeatability—to API management." -->
