---
id: foundation-tyk-architecture-1-gateway-and-redis/004-redis-high-availability-in-tyk
deck_id: foundation-tyk-architecture-1-gateway-and-redis
order: 4
slug: redis-high-availability-in-tyk
title: "Redis High Availability in Tyk"
summary: "Redis is a single point of failure Tyk Gateway depends on Redis for live traffic processing Redis unavailability = Gateway downtime HA with Redis Sentinel Monitor & Automatic Failo"
standalone_safe: true
reusable: true
requires_context: []
builds_on: []
recommended_next: [foundation-tyk-architecture-1-gateway-and-redis/005-redis-cluster-high-availability]
customer_visible: true
notes_visibility: customer-safe
---
---
layout: default
---

<div style="position:relative; width:100%; height:100%; padding-right:5.95rem;">
  <h1 style="font-size:2.28rem; font-weight:800; line-height:1.08; color:#5A22D8; margin:0 0 1rem 0; max-width:690px; letter-spacing:-0.01em;">Redis High Availability in<br/>Tyk</h1>
  <div style="display:flex; align-items:flex-start; gap:1.55rem;">
    <div style="flex:1; padding-left:0.1rem;">
      <ul style="margin:0; padding-left:1.35rem; color:#111; font-size:0.98rem; line-height:1.27;">
        <li>Redis is a single point of failure
          <ul style="margin:0.08rem 0 0.3rem 0; padding-left:1.15rem; font-size:0.94rem; line-height:1.22;">
            <li>Tyk Gateway depends on Redis for live traffic processing</li>
            <li>Redis unavailability = Gateway downtime</li>
          </ul>
        </li>
        <li>HA with Redis Sentinel
          <ul style="margin:0.08rem 0 0.3rem 0; padding-left:1.15rem; font-size:0.94rem; line-height:1.22;">
            <li>Monitor &amp; Automatic Failover</li>
          </ul>
        </li>
        <li>Redis Clustering
          <ul style="margin:0.08rem 0 0 0; padding-left:1.15rem; font-size:0.94rem; line-height:1.22;">
            <li>Distribute data across multiple shards</li>
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

<!-- Notes: Redis plays a critical role in the Tyk architecture—it’s used by the Gateway for live traffic processing, including rate limiting, quotas, and key management.
Because of this dependency, Redis is a potential single point of failure. If Redis becomes unavailable, it can lead to Tyk Gateway downtime.
To avoid this risk, we recommend implementing high availability for Redis.
One option is to use Redis Sentinel, which continuously monitors your Redis instances and automatically triggers failover if the primary goes down. This helps ensure minimal disruption to your API traffic.
For greater scalability and fault tolerance, Redis Clustering is another approach. It distributes data across multiple shards, allowing for horizontal scaling and reducing the impact of a single node failure.
By setting up Redis with either Sentinel or Clustering, you can protect your Tyk Gateway from unexpected Redis outages and ensure consistent, reliable traffic processing.
Let’s look at how this would look like: -->
