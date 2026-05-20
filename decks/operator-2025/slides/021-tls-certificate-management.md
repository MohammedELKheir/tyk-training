---
id: operator-2025/021-tls-certificate-management
deck_id: operator-2025
order: 21
slug: tls-certificate-management
title: "TLS Certificate Management"
summary: "Tyk Operator simplifies how you manage TLS certificates for APIs in Kubernetes. Traditional Approach: Manually upload certificates to Tyk Reference via Certificate ID Manual update"
standalone_safe: true
reusable: true
requires_context: []
builds_on: []
recommended_next: [operator-2025/022-tls-certificate-management-2]
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

<!-- Notes: "Managing TLS certificates for APIs has traditionally been a manual and error-prone process."
"Traditional approach involves:"
"Uploading certificates directly to the Tyk Dashboard or Gateway."

"Referencing those certificates by their Certificate IDs."

"Any updates require manual re-uploads, which increases overhead and risk of downtime."

"With the Tyk Operator, this process is much smoother."
"You can now store your TLS certificates as Kubernetes Secrets and reference those secrets directly within your Custom Resource Definitions."
"This means certificates become part of your declarative, GitOps-friendly API configuration — automated, version-controlled, and integrated with Kubernetes lifecycle management."
"The Operator supports this in resources like:"
"ApiDefinition"

"TykOasApiDefinition"

"SecurityPolicy, and others."

"This approach reduces manual intervention and improves reliability for TLS management in your API infrastructure." -->
