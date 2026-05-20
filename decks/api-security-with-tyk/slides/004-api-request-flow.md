---
id: api-security-with-tyk/004-api-request-flow
deck_id: api-security-with-tyk
order: 4
slug: api-request-flow
title: "API Request Flow"
summary: "Client Redis Gateway Server 1. A request is made to an API behind Tyk Gateway"
standalone_safe: true
reusable: true
requires_context: []
builds_on: []
recommended_next: [api-security-with-tyk/005-api-request-flow-2]
customer_visible: true
notes_visibility: customer-safe
---
---
layout: default
---

# API Request Flow

<div style="display:flex; gap:2rem; margin-top:1rem;">
<div style="flex:3;">

<div style="display:flex; align-items:flex-end; justify-content:center;">
  <div style="display:flex; flex-direction:column; align-items:center;">
    <img src="./images/icons/client-icon.png" style="width:80px; height:80px;" />
    <div style="font-size:14px; margin-top:4px; color:#333;">Client</div>
  </div>
  <div style="width:50px; height:3px; background:#555; margin-bottom:44px;"></div>
  <div style="display:flex; flex-direction:column; align-items:center; background:#f0f0f0; border-radius:12px; padding:12px 16px; margin:0 4px;">
    <div style="display:flex; flex-direction:column; align-items:center; padding-bottom:8px;">
      <div style="font-size:14px; color:#333;">Redis</div>
      <img src="./images/icons/redis-icon.png" style="width:64px; height:64px;" />
    </div>
    <div style="display:flex; flex-direction:column; align-items:center; border-top:1px solid #ddd; padding-top:8px;">
      <img src="./images/icons/gateway-icon.png" style="width:80px; height:80px; transform:rotate(90deg);" />
      <div style="font-size:14px; margin-top:4px; color:#333;">Gateway</div>
    </div>
  </div>
  <div style="display:flex; flex-direction:column; align-items:center;">
    <img src="./images/icons/server-icon.png" style="width:80px; height:80px;" />
    <div style="font-size:14px; margin-top:4px; color:#333;">Server</div>
  </div>
</div>

</div>
<div style="flex:2; font-size:1.05rem; line-height:1.7;">

1. A request is made to an API behind Tyk Gateway.

</div>
</div>

<!-- Notes: A client sends a request to an API that's managed by Tyk.
Once the request reaches the Tyk Gateway, it immediately tries to match the incoming request's URL path to the "listen paths" of the APIs it's managing
Each API definition in Tyk's memory has a unique listen path. The Gateway compares the incoming request URL to these paths. If it finds a match, it knows which API should handle the request.
Now that Tyk has identified the correct API, it prepares to process the request according to that API's specific configuration -->
