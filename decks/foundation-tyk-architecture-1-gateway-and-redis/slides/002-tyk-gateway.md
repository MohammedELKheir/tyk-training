---
id: foundation-tyk-architecture-1-gateway-and-redis/002-tyk-gateway
deck_id: foundation-tyk-architecture-1-gateway-and-redis
order: 2
slug: tyk-gateway
title: "Tyk Gateway"
summary: "Real Time Traffic Enforcement Handles all inbound API traffic Authentication & Authorization Rate Limiting and Quotas Enforces Policies Observability Gateway Tyk"
standalone_safe: true
reusable: true
requires_context: []
builds_on: []
recommended_next: [foundation-tyk-architecture-1-gateway-and-redis/003-tyk-and-redis]
customer_visible: true
notes_visibility: customer-safe
---
---
layout: default
---

<div style="position:relative; width:100%; height:100%; padding-right:5.9rem;">
  <h1 style="font-size:2.34rem; font-weight:800; color:#5A22D8; margin:0 0 1.55rem 0; letter-spacing:-0.01em;">Tyk Gateway</h1>
  <div style="display:flex; align-items:flex-start; gap:1.8rem;">
    <div style="flex:1; padding-left:0.15rem;">
      <ul style="margin:0; padding-left:1.35rem; color:#111; font-size:1.11rem; line-height:1.41;">
        <li>Real Time Traffic Enforcement</li>
        <li>Handles all inbound API traffic</li>
        <li>Authentication &amp; Authorization</li>
        <li>Rate Limiting and Quotas</li>
        <li>Enforces Policies</li>
        <li>Observability</li>
      </ul>
    </div>
    <div style="width:176px; display:flex; justify-content:center; padding-top:0.1rem;">
      <div style="width:112px; height:256px; border:1.8px solid #c9c9c9; border-radius:17px; background:#f3f3f3; display:flex; flex-direction:column; align-items:center; justify-content:center; box-shadow:inset 0 1px 0 rgba(255,255,255,0.7);">
        <img src="./public/icons/gateway-icon.png" style="width:54px; height:54px; object-fit:contain;" />
        <div style="margin-top:0.36rem; font-size:0.52rem; color:#555; font-weight:600;">Gateway</div>
      </div>
    </div>
  </div>
  <div style="position:absolute; right:-0.05rem; bottom:-0.02rem; display:flex; align-items:center; gap:0.5rem; background:#060606; color:white; border-radius:0.9rem 0 0 0; padding:0.52rem 0.82rem 0.46rem 0.66rem; font-weight:700; font-size:1.04rem; letter-spacing:0.01em;">
    <span style="display:inline-block; width:1rem; height:1rem; background:#20EDBA; border-radius:0.32rem 0 0.32rem 0.32rem;"></span>
    <span>Tyk</span>
  </div>
</div>

<!-- Notes: Let's talk about how the Tyk Gateway enforces control and governance over your API traffic in real time.
The Tyk Gateway is the core component that handles all inbound API traffic. Every request coming into your system first passes through the Gateway, making it the front line for traffic control.
One of its primary responsibilities is Authentication and Authorization. Tyk verifies that incoming requests are from legitimate clients and ensures those clients have the right permissions to access the resources they're asking for.
Next, it applies Rate Limiting and Quotas to protect your backend systems. This means you can control how many requests a client can make within a certain time period, helping to prevent abuse or overload.
It also enforces policies in real time—these policies might define access levels, transformations, or usage plans—ensuring that every request complies with the rules you’ve set.
And finally, the Gateway provides Observability out of the box. It captures rich telemetry—such as request logs, latencies, errors, and usage metrics—so you can monitor and analyze traffic patterns, detect anomalies, and troubleshoot issues effectively.
In short, the Tyk Gateway acts as a smart, real-time traffic enforcer that ensures every API call is secure, compliant, and well-governed. -->
