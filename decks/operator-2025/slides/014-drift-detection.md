---
id: operator-2025/014-drift-detection
deck_id: operator-2025
order: 14
slug: drift-detection
title: "Drift Detection"
summary: "Drift Detection is built into reconciliation. If someone: Deletes an API from Tyk manually Changes a config directly via Tyk Dashboard Tyk Operator restores the Kubernetes-defined"
standalone_safe: true
reusable: true
requires_context: []
builds_on: []
recommended_next: [operator-2025/015-summary]
customer_visible: true
notes_visibility: customer-safe
---
---
layout: default
---

# Drift Detection

Drift Detection is built into reconciliation.
If someone:
Deletes an API from Tyk manually
Changes a config directly via Tyk Dashboard
Tyk Operator restores the Kubernetes-defined version.
This protects against:
Accidental updates
Unauthorized changes

**Best Practice:**
Use read-only access to Tyk in production environments.

<!-- Notes: "An important part of reconciliation is drift detection—the Operator actively looks for differences between the Kubernetes-defined state and what actually exists in Tyk."
"For example, if someone manually deletes an API directly in the Tyk Dashboard, or changes a configuration there outside of Kubernetes, the Operator will detect this drift."
"When drift is detected, the Tyk Operator restores the version defined in Kubernetes, effectively undoing those manual changes."
"This mechanism helps protect your system against accidental updates, or even unauthorized or unintended changes."
"To further strengthen control, a best practice is to configure read-only access to Tyk in production environments—so all changes go through Kubernetes manifests and the Operator."
"This keeps your API lifecycle fully declarative, auditable, and secure." -->
