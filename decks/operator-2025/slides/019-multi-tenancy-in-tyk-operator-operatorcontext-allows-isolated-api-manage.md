---
id: operator-2025/019-multi-tenancy-in-tyk-operator-operatorcontext-allows-isolated-api-manage
deck_id: operator-2025
order: 19
slug: multi-tenancy-in-tyk-operator-operatorcontext-allows-isolated-api-manage
title: "Multi-Tenancy in Tyk Operator OperatorContext allows isolated API management per"
summary: "team or department within a shared Tyk Operator instance. What OperatorContext Defines: Tyk Dashboard to interact with Organization for API management User identity for API request"
standalone_safe: true
reusable: true
requires_context: []
builds_on: []
recommended_next: [operator-2025/020-multi-tenancy-in-tyk-operator]
customer_visible: true
notes_visibility: customer-safe
---
---
layout: default
---

<h2 style="color:#5900CB; font-size:1.8rem; font-weight:bold; margin-bottom:1rem;">Multi-Tenancy in Tyk Operator</h2>

<div style="display:flex; gap:1.5rem; margin-top:0.5rem;">
  <div style="flex:1; font-size:0.9rem; line-height:1.7; color:#03031C;">OperatorContext allows isolated API management per team or department within a shared Tyk Operator instance.
What OperatorContext Defines:
Tyk Dashboard to interact with
Organization for API management
User identity for API requests
Environment where the Operator runs
You can reference OperatorContext in:
ApiDefinition
TykOasApiDefinition
TykStreamsApiDefinition
SecurityPolicy</div>
  <div style="flex:1.2;"><img src="./images/icons/slide-019-gs-220-p34.png" style="max-width:100%; max-height:400px;" /></div>
</div>

<!-- Notes: "In addition to multi-organization support at the Dashboard level, the Tyk Operator supports multitenancy through something called OperatorContext."
"OperatorContext enables isolated API management for different teams or departments within the same shared Tyk Operator instance."
"So what exactly does OperatorContext define?"
"The specific Tyk Dashboard instance the Operator should interact with."

"The Organization within Tyk where the APIs and resources belong."

"The User identity under which API requests are made, ensuring proper RBAC and auditability."

"The Environment or namespace where the Operator runs, helping scope the management."

"You can reference this OperatorContext in various custom resources like:"
"ApiDefinition"

"TykOasApiDefinition"

"TykStreamsApiDefinition"

"SecurityPolicy"

"This design lets multiple teams safely manage their APIs and policies using one Operator deployment, with clear isolation and control." -->
