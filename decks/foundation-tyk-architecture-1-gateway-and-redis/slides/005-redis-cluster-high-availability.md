---
id: foundation-tyk-architecture-1-gateway-and-redis/005-redis-cluster-high-availability
deck_id: foundation-tyk-architecture-1-gateway-and-redis
order: 5
slug: redis-cluster-high-availability
title: "Redis Cluster: High-Availability"
summary: "• Distributed implementation of Redis for horizontal scaling and high availability. • It automatically partitions data across multiple nodes and supports failover. • Redis Cluster"
standalone_safe: true
reusable: true
requires_context: []
builds_on: []
recommended_next: []
customer_visible: true
notes_visibility: customer-safe
---
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
