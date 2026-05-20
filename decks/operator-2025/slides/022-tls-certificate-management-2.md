---
id: operator-2025/022-tls-certificate-management-2
deck_id: operator-2025
order: 22
slug: tls-certificate-management-2
title: "TLS Certificate Management"
summary: "Tyk Operator simplifies how you manage TLS certificates for APIs in Kubernetes. Traditional Approach: Manually upload certificates to Tyk Reference via Certificate ID Manual update"
standalone_safe: true
reusable: true
requires_context: []
builds_on: []
recommended_next: [operator-2025/023-module-3-installing-tyk-operator-configuring-and-installing-tyk-operator]
customer_visible: true
notes_visibility: customer-safe
---
---
layout: default
---

# TLS Certificate Management

Tyk Operator simplifies how you manage TLS certificates for APIs in Kubernetes.
Traditional Approach:
Manually upload certificates to Tyk
Reference via Certificate ID
Manual updates = high overhead and risk of downtime
With Tyk Operator:
Use certificates stored as Kubernetes secrets
- → Reference directly in your CRDs
Supported in:
ApiDefinition
TykOasApiDefinition
SecurityPolicy, etc.

<!-- Notes: "Managing TLS certificates for your APIs is critical but can be tedious and risky if done manually."
"Traditionally, you had to manually upload certificates to Tyk and then reference them by Certificate ID. Every time a certificate needed updating, it involved manual steps, which increased overhead and the chance of downtime."
"With the Tyk Operator, this process is much simpler and more reliable."
"You store your TLS certificates as Kubernetes Secrets, and then reference those secrets directly in your Custom Resource Definitions, such as ApiDefinition, TykOasApiDefinition, SecurityPolicy, and more."
"This declarative approach means your TLS certificates are version-controlled alongside your API configurations and managed automatically as part of your Kubernetes workflows."
"It reduces manual effort, lowers risk, and fits perfectly with GitOps best practices." -->
