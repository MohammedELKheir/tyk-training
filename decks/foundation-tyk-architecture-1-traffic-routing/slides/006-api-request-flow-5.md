---
id: foundation-tyk-architecture-1-traffic-routing/006-api-request-flow-5
deck_id: foundation-tyk-architecture-1-traffic-routing
order: 6
slug: api-request-flow-5
title: "API Request Flow"
summary: "API Request Flow"
standalone_safe: true
reusable: true
requires_context: []
builds_on: []
recommended_next: [foundation-tyk-architecture-1-traffic-routing/007-api-request-flow-6]
customer_visible: true
notes_visibility: customer-safe
---
---
layout: default
---

<div style="position:relative; width:100%; height:100%; overflow:hidden;">
  <h1 style="margin:0; padding-left:0.18rem; color:#6517d9; font-size:2.95rem; font-weight:800; line-height:1.02; letter-spacing:-0.03em;">API Request Flow</h1>
  <div style="display:flex; justify-content:center; align-items:flex-start; margin-top:1.65rem; transform:scale(0.78); transform-origin:top center;">
    <TykTrafficRoutingFlow :gateway-to-server="true" />
  </div>
  <div style="position:absolute; right:0; bottom:0; width:88px; height:62px; background:#050505; border-top-left-radius:20px; display:flex; align-items:center; justify-content:center;">
    <img src="./public/icons/tyk-logo.png" style="width:46px; height:auto;" />
  </div>
</div>

<!-- Notes: Tyk then routes the request to the appropriate backend service
When proxying to an API Server, the target URL can be defined in a number of ways:
Target URL property of the API Definition (single or multiple)
Dynamically set by a service discovery endpoint
Dynamically set by the URL Rewrite plugin
Dynamically set by custom middleware
Defined as a GraphQL Data Source -->
