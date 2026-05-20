---
id: architect-1-architecture-1-deployment-models/009-tyk-deployment-models-hybrid-cloud-architecture
deck_id: architect-1-architecture-1-deployment-models
order: 9
slug: tyk-deployment-models-hybrid-cloud-architecture
title: "Tyk Deployment Models: Hybrid Cloud Architecture"
summary: "Tyk Deployment Models: Hybrid Cloud Architecture"
standalone_safe: true
reusable: true
requires_context: []
builds_on: []
recommended_next: [architect-1-architecture-1-deployment-models/010-tyk-deployment-models-on-premise-2]
customer_visible: true
notes_visibility: customer-safe
---
---
layout: default
---

<h1 style="font-size:2rem; font-weight:800; color:#0b1020; margin-bottom:0.55rem;">Tyk Deployment Models: Hybrid Cloud Architecture</h1>
<div style="height:390px; margin-top:0.4rem;">
  <HybridArchitecture />
</div>

<!-- Notes: All API traffic is routed through client’s infrastructure.
Only Tyk specific data (API configurations, Policy Defs, Rate Limits, Analytics) is transferred between Gateway instances.
The Gateway instance that sits in the Tyk infrastructure is only used by the Dashboard for key generation; it does not proxy any API traffic.
MDCB and Hybrid clients, instead of writing data to a temporary Redis list, send it directly to the MDCB server, which processes them similar to Pump. -->
