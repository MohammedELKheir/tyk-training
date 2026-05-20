---
id: foundation-tyk-architecture-2-tyk-architecture-and-ecosystem/002-tyk-gateway
deck_id: foundation-tyk-architecture-2-tyk-architecture-and-ecosystem
order: 2
slug: tyk-gateway
title: "Tyk Gateway"
summary: "Real Time Traffic Enforcement Handles all inbound API traffic Authentication & Authorization Rate Limiting and Quotas Enforces Policies Observability"
standalone_safe: true
reusable: true
requires_context: []
builds_on: []
recommended_next: [foundation-tyk-architecture-2-tyk-architecture-and-ecosystem/003-tyk-and-redis]
customer_visible: true
notes_visibility: customer-safe
---
---
layout: default
---

<div class="tyk-content-slide">
  <h1 style="font-size:2.45rem; font-weight:800; color:#6b21d9; margin:0 0 0.95rem 0;">Tyk Gateway</h1>
  <div style="display:flex; gap:1.2rem; align-items:flex-start;">
    <div style="flex:1.5; padding-left:0.35rem;">
      <ul class="tight-bullets" style="font-size:1.06rem; line-height:1.24; max-width:470px;">
        <li>Real Time Traffic Enforcement</li>
        <li>Handles all inbound API traffic</li>
        <li>Authentication &amp; Authorization</li>
        <li>Rate Limiting and Quotas</li>
        <li>Enforces Policies</li>
        <li>Observability</li>
      </ul>
    </div>
    <div style="flex:1; display:flex; justify-content:flex-start; padding-top:1rem; padding-left:0.6rem;">
      <TykArchitectureDiagram
        :width="168"
        :height="286"
        :nodes="[
          { id: 'gateway', x: 50, y: 78, topLabel: '', label: 'Gateway', icon: '/icons/gateway-icon.png', iconWidth: 60, iconHeight: 60 }
        ]"
      />
    </div>
  </div>
  <div class="tyk-badge"><img :src="'/icons/tyk-logo.png'" alt="Tyk logo" /></div>
</div>

<!-- Notes: Let's talk about how the Tyk Gateway enforces control and governance over your API traffic in real time. The Tyk Gateway is the core component that handles all inbound API traffic. Every request coming into your system first passes through the Gateway, making it the front line for traffic control. One of its primary responsibilities is Authentication and Authorization. Tyk verifies that incoming requests are from legitimate clients and ensures those clients have the right permissions to access the resources they're asking for. Next, it applies Rate Limiting and Quotas to protect your backend systems. This means you can control how many requests a client can make within a certain time period, helping to prevent abuse or overload. It also enforces policies in real time—these policies might define access levels, transformations, or usage plans—ensuring that every request complies with the rules you’ve set. And finally, the Gateway provides Observability out of the box. It captures rich telemetry and analytics data so you can monitor performance, spot issues, and understand how your APIs are being used. -->
