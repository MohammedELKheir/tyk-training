---
id: operator-2025/017-authentication-with-tyk-dashboard-tyk-operator-as-a-system-user-acts-as
deck_id: operator-2025
order: 17
slug: authentication-with-tyk-dashboard-tyk-operator-as-a-system-user-acts-as
title: "Authentication with Tyk Dashboard Tyk Operator as a System User Acts as a system"
summary: "user for the Tyk Dashboard Bound by Organization ID and RBAC rules Startup Behavior On startup, Tyk Operator retrieves credentials from: tyk-operator-conf Kubernetes Secret Environ"
standalone_safe: true
reusable: true
requires_context: []
builds_on: []
recommended_next: [operator-2025/018-multi-tenancy-in-tyk-run-multiple-isolated-teams-or-departments-on-a-sin]
customer_visible: true
notes_visibility: customer-safe
---
---
layout: default
---

<h2 style="color:#5900CB; font-size:1.8rem; font-weight:bold; margin-bottom:1rem;">Authentication with Tyk Dashboard</h2>

<div style="display:flex; gap:1.5rem; margin-top:0.5rem;">
  <div style="flex:1; font-size:0.9rem; line-height:1.7; color:#03031C;">Tyk Operator as a System User
Acts as a system user for the Tyk Dashboard
Bound by Organization ID and RBAC rules
Startup Behavior
On startup, Tyk Operator retrieves credentials from:
tyk-operator-conf Kubernetes Secret
Environment Variables</div>
  <div style="flex:1.2;"><img src="./images/icons/slide-017-gs-202-p32.png" style="max-width:100%; max-height:400px;" /></div>
</div>

<!-- Notes: "The Tyk Operator acts as a system user within the Tyk Dashboard environment."
"This means it has its own identity, with permissions bound by an Organization ID and RBAC rules configured in Tyk."
"This approach ensures that all actions performed by the Operator respect your organization’s security policies and access controls."
"When the Operator starts up, it needs to authenticate itself to Tyk to perform its duties."
"It retrieves its credentials from two places:"
"A Kubernetes Secret named tyk-operator-conf that stores necessary config values securely."

"Or, optionally, from environment variables passed to the Operator pod."

"The table on this slide lists the key configuration values expected in tyk-operator-conf, such as the Dashboard URL, credentials, and Organization ID."
"This secure, flexible setup allows the Operator to integrate smoothly with Tyk while respecting security best practices." -->
