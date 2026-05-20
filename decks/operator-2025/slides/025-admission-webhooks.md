---
id: operator-2025/025-admission-webhooks
deck_id: operator-2025
order: 25
slug: admission-webhooks
title: "Admission Webhooks"
summary: "Admission webhooks are HTTP callbacks triggered during the Kubernetes API request lifecycle. They let you: Validate custom resources (ValidatingAdmissionWebhook) Mutate or inject d"
standalone_safe: true
reusable: true
requires_context: []
builds_on: []
recommended_next: [operator-2025/026-cert-manager]
customer_visible: true
notes_visibility: customer-safe
---
---
layout: default
---

# Admission Webhooks

Admission webhooks are HTTP callbacks triggered during the Kubernetes API request lifecycle.
They let you:
Validate custom resources (ValidatingAdmissionWebhook)
Mutate or inject defaults into resources (MutatingAdmissionWebhook)
Commonly used by Operators and Controllers to enforce policies and set defaults.
Ensures only valid configurations are accepted
Allows default values to be injected automatically
Improves security, consistency, and automation

<!-- Notes: "As we continue exploring how Tyk Operator works within Kubernetes, it's important to understand one of the powerful mechanisms that help manage and control resources: Admission Webhooks."
"Admission webhooks are HTTP callbacks that are triggered during the Kubernetes API request lifecycle — specifically, after the request is authenticated and authorized, but before the object is persisted to etcd."
"There are two types of admission webhooks that Operators commonly use:"
"ValidatingAdmissionWebhook — this checks the request and can reject it if the resource doesn’t meet certain criteria. Think of it like a final gatekeeper to ensure configurations are valid before they are accepted."

"MutatingAdmissionWebhook — this allows modification of the request, like injecting default values or fixing up fields before the resource is saved."

"In the context of Tyk Operator, admission webhooks can help ensure that API definitions, security policies, or other custom resources are well-formed, consistent, and safe before they get applied."
"This improves your platform’s overall security and reliability. You can prevent bad configurations from being deployed and automate default settings, reducing human error."
"Ultimately, admission webhooks help enforce policy and standardization across teams — a crucial aspect when managing APIs in an enterprise Kubernetes environment." -->
