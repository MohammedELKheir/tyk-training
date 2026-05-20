---
id: custom-plugins-2025/006-how-it-works
deck_id: custom-plugins-2025
order: 6
slug: how-it-works
title: "How it works"
summary: "The client sends request to API on Tyk Gateway. Tyk processes the request and forwards it to one or more plugins implemented and configured for that API. A plugin performs operatio"
standalone_safe: true
reusable: true
requires_context: []
builds_on: []
recommended_next: [custom-plugins-2025/007-plugin-deployment-options-in-tyk]
customer_visible: true
notes_visibility: customer-safe
---
---
layout: default
---

<h1 style="font-size:2rem; font-weight:800; color:#5900CB; margin-bottom:1rem;">How it works</h1>

<div style="display:flex; gap:1.2rem; align-items:flex-start; height:78%;">
  <div style="flex:1.05; font-size:0.93rem; color:#03031C; line-height:1.7;">
    <ol style="margin:0; padding-left:1.15rem;">
      <li>The client sends request to API on Tyk Gateway.</li>
      <li>Tyk processes the request and forwards it to one or more plugins implemented and configured for that API.</li>
      <li>A plugin performs operations such as custom authentication or data transformation.</li>
      <li>The processed request is returned to Tyk Gateway, which forwards it upstream.</li>
      <li>Finally, the upstream response is sent back to the client.</li>
    </ol>
  </div>
  <div style="flex:1.2; position:relative; height:100%; min-height:290px;">
    <div style="position:absolute; left:20px; top:92px; width:88px; height:88px; border:2px solid #e2e2e2; border-radius:14px; background:white; display:flex; align-items:center; justify-content:center; color:#555; font-size:0.78rem; box-shadow:0 2px 8px rgba(0,0,0,0.06);">Client</div>
    <div style="position:absolute; left:152px; top:92px; width:98px; height:88px; border:2px solid #e2e2e2; border-radius:14px; background:white; display:flex; align-items:center; justify-content:center; color:#8438FA; font-weight:700; font-size:0.78rem; box-shadow:0 2px 8px rgba(0,0,0,0.06);">Tyk Gateway</div>
    <div style="position:absolute; left:292px; top:92px; width:88px; height:88px; border:2px solid #e2e2e2; border-radius:14px; background:white; display:flex; align-items:center; justify-content:center; color:#555; font-size:0.78rem; box-shadow:0 2px 8px rgba(0,0,0,0.06);">Plugin</div>
    <div style="position:absolute; left:292px; top:224px; width:88px; height:88px; border:2px solid #e2e2e2; border-radius:14px; background:white; display:flex; align-items:center; justify-content:center; color:#555; font-size:0.74rem; text-align:center; box-shadow:0 2px 8px rgba(0,0,0,0.06);">Payload / Auth / Transform</div>
    <div style="position:absolute; left:422px; top:92px; width:102px; height:88px; border:2px solid #e2e2e2; border-radius:14px; background:white; display:flex; align-items:center; justify-content:center; color:#555; font-size:0.78rem; box-shadow:0 2px 8px rgba(0,0,0,0.06);">Upstream</div>
    <div style="position:absolute; left:110px; top:132px; width:34px; height:4px; background:#d7d7d7;"></div>
    <div style="position:absolute; left:141px; top:126px; width:0; height:0; border-top:8px solid transparent; border-bottom:8px solid transparent; border-left:12px solid #d7d7d7;"></div>
    <div style="position:absolute; left:252px; top:132px; width:34px; height:4px; background:#8438FA;"></div>
    <div style="position:absolute; left:283px; top:126px; width:0; height:0; border-top:8px solid transparent; border-bottom:8px solid transparent; border-left:12px solid #8438FA;"></div>
    <div style="position:absolute; left:336px; top:182px; width:4px; height:32px; background:#d7d7d7;"></div>
    <div style="position:absolute; left:330px; top:211px; width:0; height:0; border-left:8px solid transparent; border-right:8px solid transparent; border-top:12px solid #d7d7d7;"></div>
    <div style="position:absolute; left:382px; top:132px; width:34px; height:4px; background:#d7d7d7;"></div>
    <div style="position:absolute; left:413px; top:126px; width:0; height:0; border-top:8px solid transparent; border-bottom:8px solid transparent; border-left:12px solid #d7d7d7;"></div>
  </div>
</div>

<!-- Notes: Let’s walk through a typical request flow in Tyk.
A client sends a request to an API managed by the Tyk Gateway.
The Gateway evaluates configured policies like authentication or rate limiting.
Configured custom plugins are then executed to run custom logic such as authentication, data transformation, or rate-limit enforcement.
After processing, the request is forwarded upstream.
The upstream response comes back through Tyk and then returns to the client.
The key point is that Tyk acts as a smart intermediary, not just a proxy. -->
