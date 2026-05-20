---
id: operator-2025/007-tyk-operator-2
deck_id: operator-2025
order: 7
slug: tyk-operator-2
title: "Tyk Operator"
summary: "Tyk Operator uses CRDs to manage API configurations declaratively. These custom resources align with different API types and security policies. Benefits: GitOps-ready Version-contr"
standalone_safe: true
reusable: true
requires_context: []
builds_on: []
recommended_next: [operator-2025/008-custom-resources-2]
customer_visible: true
notes_visibility: customer-safe
---
---
layout: default
---

# Tyk Operator

Tyk Operator uses CRDs to manage API configurations declaratively.
These custom resources align with different API types and security policies.
Benefits:
GitOps-ready
Version-controlled API configurations
Integrated with Kubernetes CI/CD workflows

<!-- Notes: "Let’s connect what we’ve seen so far with how the Tyk Operator works under the hood."
"The Tyk Operator uses Custom Resource Definitions, or CRDs, to extend the Kubernetes API so it can understand Tyk-specific resources like APIs, security policies, and more."
"Each CRD represents a specific type of API configuration—for example, one CRD might be used for OpenAPI-based APIs, another for GraphQL, and another for managing authentication and rate limiting policies."
"By defining these configurations as custom Kubernetes resources, we unlock a lot of benefits:"
"First, they are GitOps-ready—we can manage all API configurations as code in Git."

"Second, they’re version-controlled, so any change to an API definition or policy can be tracked, reviewed, and rolled back if needed."

"And third, they integrate seamlessly with existing Kubernetes CI/CD workflows—we can deploy or update APIs using the same pipelines we use for the rest of our applications."

"This approach brings consistency, automation, and control to API management—treating APIs as first-class citizens in your platform engineering practices." -->
