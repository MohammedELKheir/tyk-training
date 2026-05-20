---
id: foundation-tyk-architecture-2-tyk-architecture-and-ecosystem/003-tyk-and-redis
deck_id: foundation-tyk-architecture-2-tyk-architecture-and-ecosystem
order: 3
slug: tyk-and-redis
title: "Tyk & Redis"
summary: "Fast in-memory performance Enables real-time request validation Minimise latency for high-throughput APIs Stores: Rate limit counters Session tokens API key states Shared State acr"
standalone_safe: true
reusable: true
requires_context: []
builds_on: []
recommended_next: [foundation-tyk-architecture-2-tyk-architecture-and-ecosystem/004-tyk-dashboard]
customer_visible: true
notes_visibility: customer-safe
---
---
layout: default
---

<div class="tyk-content-slide">
  <h1 style="font-size:2.45rem; font-weight:800; color:#6b21d9; margin:0 0 0.9rem 0;">Tyk &amp; Redis</h1>
  <div style="display:flex; gap:1.2rem; align-items:flex-start;">
    <div style="flex:1.55; padding-left:0.35rem;">
      <ul class="tight-bullets" style="font-size:1rem; line-height:1.2; max-width:500px;">
        <li>
          Fast in-memory performance
          <ul>
            <li>Enables real-time request validation</li>
            <li>Minimise latency for high-throughput APIs</li>
          </ul>
        </li>
        <li>
          Stores:
          <ul>
            <li>Rate limit counters</li>
            <li>Session tokens</li>
            <li>API key states</li>
          </ul>
        </li>
        <li>
          Shared State across gateways
          <ul>
            <li>Synchronizes usage data across nodes</li>
          </ul>
        </li>
        <li>
          Pub/Sub Broker
          <ul>
            <li>Cluster-wide notifications</li>
          </ul>
        </li>
      </ul>
    </div>
    <div style="flex:0.98; display:flex; justify-content:flex-start; padding-top:0.7rem; padding-left:0.55rem;">
      <TykArchitectureDiagram
        :width="170"
        :height="294"
        :nodes="[
          { id: 'redis', x: 53, y: 24, topLabel: 'Redis', label: '', icon: '/icons/redis-icon.png', iconWidth: 52, iconHeight: 52, bottomLabelGap: '0px' },
          { id: 'gateway', x: 50, y: 152, topLabel: '', label: 'Gateway', icon: '/icons/gateway-icon.png', iconWidth: 60, iconHeight: 60 }
        ]"
        :edges="[
          { x1: 85, y1: 98, x2: 85, y2: 146, color: '#8f8f96', width: 2 }
        ]"
      />
    </div>
  </div>
  <div class="tyk-badge"><img :src="'/icons/tyk-logo.png'" alt="Tyk logo" /></div>
</div>

<!-- Notes: Redis is a core component in the Tyk stack, powering real-time request validation through its fast, in-memory performance. It’s designed to minimize latency, making it ideal for high-throughput APIs where speed is critical. Redis stores important runtime data such as rate limit counters, session tokens, and API key states. This allows the Tyk Gateway to make decisions quickly—like whether a request is within quota or if an API key is valid—without hitting the database. In multi-node environments, Redis also ensures shared state across all gateways. It synchronizes usage data, so no matter which gateway handles the request, it sees the same usage picture. On top of that, Redis acts as a Pub/Sub broker to deliver cluster-wide notifications. This helps with cache purging, policy updates, and other real-time coordination between nodes. In short, Redis enables Tyk to deliver both high performance and consistent behavior across your entire API infrastructure. -->
