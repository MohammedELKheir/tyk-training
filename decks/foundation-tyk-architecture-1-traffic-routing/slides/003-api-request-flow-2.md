---
id: foundation-tyk-architecture-1-traffic-routing/003-api-request-flow-2
deck_id: foundation-tyk-architecture-1-traffic-routing
order: 3
slug: api-request-flow-2
title: "API Request Flow"
summary: "API Request Flow"
standalone_safe: true
reusable: true
requires_context: []
builds_on: []
recommended_next: [foundation-tyk-architecture-1-traffic-routing/004-api-request-flow-3]
customer_visible: true
notes_visibility: customer-safe
---
---
layout: default
---

<div style="position:relative; width:100%; height:100%; overflow:hidden;">
  <h1 style="margin:0; padding-left:0.18rem; color:#6517d9; font-size:2.95rem; font-weight:800; line-height:1.02; letter-spacing:-0.03em;">API Request Flow</h1>
  <div style="display:flex; justify-content:center; align-items:flex-start; margin-top:1.65rem; transform:scale(0.78); transform-origin:top center;">
    <TykTrafficRoutingFlow :client-to-gateway="true" />
  </div>
  <div style="position:absolute; right:0; bottom:0; width:88px; height:62px; background:#050505; border-top-left-radius:20px; display:flex; align-items:center; justify-content:center;">
    <img src="./public/icons/tyk-logo.png" style="width:46px; height:auto;" />
  </div>
</div>

<!-- Notes: A client sends a request to an API that's managed by Tyk.
Once the request reaches the Tyk Gateway, it immediately tries to match the incoming request's URL path to the "listen paths" of the APIs it's managing
Each API definition in Tyk's memory has a unique listen path. The Gateway compares the incoming request URL to these paths. If it finds a match, it knows which API should handle the request.
Now that Tyk has identified the correct API, it prepares to process the request according to that API's specific configuration -->
