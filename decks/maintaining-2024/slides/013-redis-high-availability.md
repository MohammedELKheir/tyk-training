---
id: maintaining-2024/013-redis-high-availability
deck_id: maintaining-2024
order: 13
slug: redis-high-availability
title: "Redis - High Availability"
summary: "Redis has two approaches for high availability - Sentinel and Cluster: - Requires a minimum of three separate hosts for high availability - All Redis instances must be able to comm"
standalone_safe: true
reusable: true
requires_context: []
builds_on: []
recommended_next: [maintaining-2024/014-redis-sentinel]
customer_visible: true
notes_visibility: customer-safe
---
---
layout: default
---

# Redis - High Availability

- Redis has two approaches for high availability - Sentinel and Cluster:
- Requires a minimum of three separate hosts for high availability
- All Redis instances must be able to communicate with each other
- Data is replicated from a Master instance to one or more Replica instances
- Asynchronous replication with an eventually consistent system
- A majority of Sentinels/Masters is required for failover to occur
- A Replica is promoted to Master during failover
- IP and port remapping can cause issues

<!-- Notes: There are two approaches for running Redis in a highly available manner, they’re called Sentinel and Cluster.

Both of these approaches require the deployment to be spread across a minimum of three independent hosts which are not expected to fail simultaneously.

Each Redis instance must be able to communicate with every other instance, as data needs to be replicated between them. Tyk components must also be able to communicate with every instance.

Data is written to the Master instances, which then replicate the data to one or more Replicas.

Data replication is asynchronous, which means that it is “eventually consistent” - Redis server confirms writes to clients before propagating them to the replicas. This is done for performance reasons, but results in a small chance of losing acknowledged writes. Though this is very unlikely - a Replica would need to be promoted to Master before a propagated write reaches it.

For failover to occur, a majority of Sentinels or Masters (depending on the HA approach taken) are required. So in a deployment with 3 Masters, 2 of them need to be available for a failover to occur, meaning that the deployment cannot handle the simultaneous failure of more than 1 Master. Increasing the size of the cluster can make it more resilient to failure: a deployment with 5 Masters can survive if up to 2 of them fail simultaneously.

Should a Master fail, and a failover is possible, then a Replica is promoted to a Master. -->
