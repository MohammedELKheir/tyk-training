---
id: foundation-tyk-architecture-1-gateway-and-redis/003-tyk-and-redis
deck_id: foundation-tyk-architecture-1-gateway-and-redis
order: 3
slug: tyk-and-redis
title: "Tyk & Redis"
summary: "Fast in-memory performance Enables real-time request validation Minimise latency for high-throughput APIs Stores: Rate limit counters Session tokens API key states Shared State acr"
standalone_safe: true
reusable: true
requires_context: []
builds_on: []
recommended_next: [foundation-tyk-architecture-1-gateway-and-redis/004-redis-high-availability-in-tyk]
customer_visible: true
notes_visibility: customer-safe
---
---
layout: default
---

<div style="position:relative; width:100%; height:100%; padding-right:5.95rem;">
  <h1 style="font-size:2.34rem; font-weight:800; color:#5A22D8; margin:0 0 1.16rem 0; letter-spacing:-0.01em;">Tyk &amp; Redis</h1>
  <div style="display:flex; align-items:flex-start; gap:1.55rem;">
    <div style="flex:1; padding-left:0.1rem;">
      <ul style="margin:0; padding-left:1.35rem; color:#111; font-size:0.99rem; line-height:1.28;">
        <li>Fast in-memory performance
          <ul style="margin:0.08rem 0 0.3rem 0; padding-left:1.15rem; font-size:0.93rem; line-height:1.22;">
            <li>Enables real-time request validation</li>
            <li>Minimise latency for high-throughput APIs</li>
          </ul>
        </li>
        <li>Stores:
          <ul style="margin:0.08rem 0 0.3rem 0; padding-left:1.15rem; font-size:0.93rem; line-height:1.22;">
            <li>Rate limit counters</li>
            <li>Session tokens</li>
            <li>API key states</li>
          </ul>
        </li>
        <li>Shared State across gateways
          <ul style="margin:0.08rem 0 0.3rem 0; padding-left:1.15rem; font-size:0.93rem; line-height:1.22;">
            <li>Synchronizes usage data across nodes</li>
          </ul>
        </li>
        <li>Pub/Sub Broker
          <ul style="margin:0.08rem 0 0 0; padding-left:1.15rem; font-size:0.93rem; line-height:1.22;">
            <li>Cluster-wide notifications</li>
          </ul>
        </li>
      </ul>
    </div>
    <div style="width:182px; display:flex; justify-content:center; padding-top:0.02rem;">
      <div style="width:112px; height:256px; border:1.8px solid #c9c9c9; border-radius:17px; background:#f3f3f3; display:flex; flex-direction:column; align-items:center; justify-content:center; box-shadow:inset 0 1px 0 rgba(255,255,255,0.7);">
        <div style="font-size:0.51rem; color:#444; font-weight:700; margin-bottom:0.18rem;">Redis</div>
        <img src="./public/icons/redis-icon.png" style="width:50px; height:50px; object-fit:contain;" />
        <div style="width:2px; height:40px; background:#666; margin:0.42rem 0 0.24rem 0;"></div>
        <img src="./public/icons/gateway-icon.png" style="width:54px; height:54px; object-fit:contain;" />
        <div style="margin-top:0.28rem; font-size:0.5rem; color:#555; font-weight:700;">Gateway</div>
      </div>
    </div>
  </div>
  <div style="position:absolute; right:-0.05rem; bottom:-0.02rem; display:flex; align-items:center; gap:0.5rem; background:#060606; color:white; border-radius:0.9rem 0 0 0; padding:0.52rem 0.82rem 0.46rem 0.66rem; font-weight:700; font-size:1.04rem; letter-spacing:0.01em;">
    <span style="display:inline-block; width:1rem; height:1rem; background:#20EDBA; border-radius:0.32rem 0 0.32rem 0.32rem;"></span>
    <span>Tyk</span>
  </div>
</div>

<!-- Notes: Redis is a core component in the Tyk stack, powering real-time request validation through its fast, in-memory performance.
It’s designed to minimize latency, making it ideal for high-throughput APIs where speed is critical.
Redis stores important runtime data such as rate limit counters, session tokens, and API key states.
This allows the Tyk Gateway to make decisions quickly—like whether a request is within quota or if an API key is valid—without hitting the database.
In multi-node environments, Redis also ensures shared state across all gateways. It synchronizes usage data, so no matter which gateway handles the request, it sees the same usage picture.
On top of that, Redis acts as a Pub/Sub broker to deliver cluster-wide notifications. This helps with cache purging, policy updates, and other real-time coordination between nodes.
In short, Redis enables Tyk to deliver both high performance and consistent behavior across your entire API infrastructure. -->
