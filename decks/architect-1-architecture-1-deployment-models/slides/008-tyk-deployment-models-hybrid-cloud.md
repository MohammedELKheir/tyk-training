---
id: architect-1-architecture-1-deployment-models/008-tyk-deployment-models-hybrid-cloud
deck_id: architect-1-architecture-1-deployment-models
order: 8
slug: tyk-deployment-models-hybrid-cloud
title: "Tyk Deployment Models: Hybrid Cloud"
summary: "Hosting split between Tyk and customer’s infrastructure Tyk Hosts: Dashboard, Portal, MongoDB, and the primary Redis instance Customer Hosts: Gateways and local Redis instance(s) A"
standalone_safe: true
reusable: true
requires_context: []
builds_on: []
recommended_next: [architect-1-architecture-1-deployment-models/009-tyk-deployment-models-hybrid-cloud-architecture]
customer_visible: true
notes_visibility: customer-safe
---
---
layout: default
---

<h1 style="font-size:2rem; font-weight:800; color:#0b1020; margin-bottom:1rem;">Tyk Deployment Models: Hybrid Cloud</h1>

<div style="font-size:0.98rem; color:#111827; line-height:1.63; max-width:915px;">
  <ul style="padding-left:1.25rem; margin:0;">
    <li><strong>Hosting split between Tyk and customer’s infrastructure</strong></li>
    <li><strong>Tyk Hosts:</strong> Dashboard, Portal, MongoDB, and the primary Redis instance</li>
    <li><strong>Customer Hosts:</strong> Gateways and local Redis instance(s)</li>
    <li>Allows customers to put their gateways in closer proximity to their upstream endpoints</li>
    <li>Gateways and local Redis instance(s) is/are ephemeral so these can be spun up and down without worry about the loss of data, as all data is persisted on the primary Redis instance</li>
    <li>All API traffic is routed via client’s infrastructure, no API traffic passes through Tyk’s network</li>
    <li><strong>Requires the Multi Data Centre Bridge component</strong></li>
  </ul>
</div>
