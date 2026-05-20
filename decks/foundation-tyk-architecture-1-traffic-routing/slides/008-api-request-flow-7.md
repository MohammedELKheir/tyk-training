---
id: foundation-tyk-architecture-1-traffic-routing/008-api-request-flow-7
deck_id: foundation-tyk-architecture-1-traffic-routing
order: 8
slug: api-request-flow-7
title: "API Request Flow"
summary: "API Request Flow"
standalone_safe: true
reusable: true
requires_context: []
builds_on: []
recommended_next: [foundation-tyk-architecture-1-traffic-routing/009-api-request-flow-8]
customer_visible: true
notes_visibility: customer-safe
---
---
layout: default
---

<div style="position:relative; width:100%; height:100%; overflow:hidden;">
  <h1 style="margin:0; padding-left:0.18rem; color:#6517d9; font-size:2.95rem; font-weight:800; line-height:1.02; letter-spacing:-0.03em;">API Request Flow</h1>
  <div style="display:flex; justify-content:center; align-items:flex-start; margin-top:1.65rem; transform:scale(0.78); transform-origin:top center;">
    <TykTrafficRoutingFlow :gateway-to-redis="true" />
  </div>
  <div style="position:absolute; right:0; bottom:0; width:88px; height:62px; background:#050505; border-top-left-radius:20px; display:flex; align-items:center; justify-content:center;">
    <img src="./public/icons/tyk-logo.png" style="width:46px; height:auto;" />
  </div>
</div>

<!-- Notes: Before sending the response back to the client, Tyk logs analytics data about the request. -->
