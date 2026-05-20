---
theme: tyk
layout: cover
aspectRatio: 16/9
canvasWidth: 980
highlighter: shiki
lineNumbers: false
drawings:
  persist: false
transition: slide-left
title: "Tyk Product Components: Gateway & Redis"
background: 'linear-gradient(135deg, #7A2CF5 0%, #8B34FA 45%, #C218FF 100%)'
---

<div style="position:relative; display:flex; flex-direction:column; justify-content:center; align-items:center; height:100%; text-align:center; color:white; padding:0 3.7rem;">
  <h1 style="font-size:2.95rem; font-weight:800; line-height:1.12; color:white; margin:0; max-width:760px; letter-spacing:-0.01em;">Tyk Product<br/>Components: Gateway &amp;<br/>Redis</h1>
  <p style="margin:0.9rem 0 0 0; font-size:0.76rem; color:rgba(255,255,255,0.9);">Exploring the role of each component in the Tyk Ecosystem</p>
  <div style="position:absolute; right:-0.15rem; bottom:-0.15rem; display:flex; align-items:center; gap:0.5rem; background:#060606; color:white; border-radius:0.92rem 0 0 0; padding:0.56rem 0.92rem 0.5rem 0.72rem; font-weight:700; font-size:1.08rem; letter-spacing:0.01em; box-shadow:0 3px 9px rgba(0,0,0,0.24);">
    <span style="display:inline-block; width:1rem; height:1rem; background:#20EDBA; border-radius:0.32rem 0 0.32rem 0.32rem;"></span>
    <span>Tyk</span>
  </div>
</div>

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

---
layout: default
---

<div style="position:relative; width:100%; height:100%; padding-right:1rem;">
  <h1 style="font-size:1.9rem; font-weight:800; color:#5A22D8; margin:0 0 0.6rem 0;">Redis Cluster: &nbsp;High-Availability</h1>
  <div style="display:flex; gap:1.5rem; align-items:flex-start;">
    <div style="flex:0 0 43%; color:#111; font-size:0.82rem; line-height:1.18;">
      <div style="display:flex; gap:0.55rem; margin-bottom:0.38rem;"><div style="font-weight:700; line-height:1;">•</div><div>Distributed implementation of Redis for horizontal scaling and high availability.</div></div>
      <div style="display:flex; gap:0.55rem; margin-bottom:0.7rem;"><div style="font-weight:700; line-height:1;">•</div><div>It automatically partitions data across multiple nodes and supports failover.</div></div>
      <div style="display:flex; gap:0.55rem; margin-bottom:0.3rem;"><div style="font-weight:700; line-height:1;">•</div><div>Redis Cluster uses a sharded data set:</div></div>
      <div style="display:flex; gap:0.55rem; margin-bottom:0.28rem;"><div style="font-weight:700; line-height:1;">•</div><div>Horizontal scaling option</div></div>
      <div style="display:flex; gap:0.55rem; margin-bottom:0.28rem;"><div style="font-weight:700; line-height:1;">•</div><div>Primary-Replica Model: Each primary node has at least one replica.</div></div>
      <div style="display:flex; gap:0.55rem; margin-bottom:0.28rem;"><div style="font-weight:700; line-height:1;">•</div><div>Minimum of 3 Master instances required:</div></div>
      <div style="display:flex; gap:0.55rem; margin-bottom:0.28rem;"><div style="font-weight:700; line-height:1;">•</div><div>Master majority required for failover</div></div>
      <div style="display:flex; gap:0.55rem;"><div style="font-weight:700; line-height:1;">•</div><div>Gossip Protocol: Nodes communicate to detect failures and trigger failovers.</div></div>
    </div>
    <div style="flex:1; padding-top:0.1rem;">
      <div style="position:relative; width:100%; height:330px;">
        <div style="position:absolute; left:18px; top:10px; width:148px; height:112px; border:1.5px dashed #d7dbe3;"><div style="position:absolute; left:10px; top:8px; font-size:0.7rem; font-weight:700; color:#26213f;">Host 1</div><img src="./public/icons/redis-icon.png" style="position:absolute; left:48px; top:38px; width:52px; height:52px; object-fit:contain;" /></div>
        <div style="position:absolute; left:194px; top:10px; width:148px; height:112px; border:1.5px dashed #d7dbe3;"><div style="position:absolute; left:10px; top:8px; font-size:0.7rem; font-weight:700; color:#26213f;">Host 2</div><img src="./public/icons/redis-icon.png" style="position:absolute; left:48px; top:38px; width:52px; height:52px; object-fit:contain;" /></div>
        <div style="position:absolute; left:370px; top:10px; width:148px; height:112px; border:1.5px dashed #d7dbe3;"><div style="position:absolute; left:10px; top:8px; font-size:0.7rem; font-weight:700; color:#26213f;">Host 3</div><img src="./public/icons/redis-icon.png" style="position:absolute; left:48px; top:38px; width:52px; height:52px; object-fit:contain;" /></div>
        <div style="position:absolute; left:18px; top:176px; width:148px; height:112px; border:1.5px dashed #d7dbe3;"><div style="position:absolute; left:10px; top:8px; font-size:0.7rem; font-weight:700; color:#26213f;">Host 4</div><img src="./public/icons/redis-icon.png" style="position:absolute; left:48px; top:54px; width:52px; height:52px; object-fit:contain;" /></div>
        <div style="position:absolute; left:194px; top:176px; width:148px; height:112px; border:1.5px dashed #d7dbe3;"><div style="position:absolute; left:10px; top:8px; font-size:0.7rem; font-weight:700; color:#26213f;">Host 5</div><img src="./public/icons/redis-icon.png" style="position:absolute; left:48px; top:54px; width:52px; height:52px; object-fit:contain;" /></div>
        <div style="position:absolute; left:370px; top:176px; width:148px; height:112px; border:1.5px dashed #d7dbe3;"><div style="position:absolute; left:10px; top:8px; font-size:0.7rem; font-weight:700; color:#26213f;">Host 6</div><img src="./public/icons/redis-icon.png" style="position:absolute; left:48px; top:54px; width:52px; height:52px; object-fit:contain;" /></div>
        <div style="position:absolute; left:135px; top:145px; width:270px; height:3px; background:#4A8CFF;"></div>
        <div style="position:absolute; left:405px; top:145px; width:95px; height:3px; background:#4A8CFF;"></div>
        <div style="position:absolute; left:76px; top:92px; width:3px; height:124px; background:#FF225A;"></div><div style="position:absolute; left:69px; top:208px; width:0; height:0; border-left:8px solid transparent; border-right:8px solid transparent; border-top:14px solid #FF225A;"></div>
        <div style="position:absolute; left:108px; top:192px; width:3px; height:101px; background:#4A8CFF;"></div><div style="position:absolute; left:101px; top:178px; width:0; height:0; border-left:8px solid transparent; border-right:8px solid transparent; border-bottom:14px solid #4A8CFF;"></div>
        <div style="position:absolute; left:252px; top:92px; width:3px; height:124px; background:#FF225A;"></div><div style="position:absolute; left:245px; top:208px; width:0; height:0; border-left:8px solid transparent; border-right:8px solid transparent; border-top:14px solid #FF225A;"></div>
        <div style="position:absolute; left:284px; top:192px; width:3px; height:101px; background:#4A8CFF;"></div><div style="position:absolute; left:277px; top:178px; width:0; height:0; border-left:8px solid transparent; border-right:8px solid transparent; border-bottom:14px solid #4A8CFF;"></div>
        <div style="position:absolute; left:428px; top:92px; width:3px; height:124px; background:#FF225A;"></div><div style="position:absolute; left:421px; top:208px; width:0; height:0; border-left:8px solid transparent; border-right:8px solid transparent; border-top:14px solid #FF225A;"></div>
        <div style="position:absolute; left:460px; top:192px; width:3px; height:101px; background:#4A8CFF;"></div><div style="position:absolute; left:453px; top:178px; width:0; height:0; border-left:8px solid transparent; border-right:8px solid transparent; border-bottom:14px solid #4A8CFF;"></div>
      </div>
    </div>
  </div>
  <div style="position:absolute; right:0.2rem; bottom:0.25rem; display:flex; align-items:center; gap:0.42rem; background:#060606; color:white; border-radius:0.7rem 0 0 0; padding:0.42rem 0.62rem 0.38rem 0.5rem; font-weight:700; font-size:0.82rem; letter-spacing:0.01em;"><span style="display:inline-block; width:0.85rem; height:0.85rem; background:#20EDBA; border-radius:0.28rem 0 0.28rem 0.28rem;"></span><span>Tyk</span></div>
</div>

<!-- Notes: Let’s talk about Redis Cluster and how it enhances scalability and high availability in distributed deployments.
A distributed implementation of Redis allows us to scale horizontally, meaning we can add more nodes to handle increasing loads while maintaining performance. This setup automatically partitions data across multiple nodes and supports failover, ensuring resilience in case of node failures.
Redis Cluster operates using a sharded data set, which means that data is distributed across multiple Redis nodes rather than being stored on a single instance. This approach provides a horizontal scaling solution, allowing for better performance and resource utilization as traffic grows.
The cluster follows a Primary-Replica Model, where each primary node has at least one replica. This replication ensures redundancy—if a primary node goes down, its replica can take over to maintain availability.
To ensure stability, a Redis Cluster requires a minimum of three master instances. This is important because Redis uses a majority-based failover mechanism, meaning that at least half of the master nodes must be available to elect a new leader when failures occur.
Redis Cluster also relies on the Gossip Protocol for communication between nodes. This protocol enables nodes to detect failures and coordinate failover processes automatically, ensuring that the system can quickly recover from outages.
By leveraging Redis Cluster, we gain a highly available, fault-tolerant, and scalable caching layer, which is essential for handling large-scale API workloads efficiently. -->
