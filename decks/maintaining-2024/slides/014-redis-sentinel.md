---
id: maintaining-2024/014-redis-sentinel
deck_id: maintaining-2024
order: 14
slug: redis-sentinel
title: "Redis - Sentinel"
summary: "Sentinel instances are responsible for discovery, monitoring and failover - Minimum of three Sentinel instances are required: - Majority required for failover - Sentinels can share"
standalone_safe: true
reusable: true
requires_context: []
builds_on: []
recommended_next: [maintaining-2024/015-redis-cluster]
customer_visible: true
notes_visibility: customer-safe
---
---
layout: default
---

# Redis - Sentinel

- Sentinel instances are responsible for discovery, monitoring and failover
- Minimum of three Sentinel instances are required:
- Majority required for failover
- Sentinels can share same host as data bearing instances

<!-- Notes: Redis Sentinel is the standard approach for running Redis in a highly available way.

It uses a special Sentinel instance, which is responsible for handling discovery, monitoring and failover within the deployment.

A minimum of three Sentinel instances are required in a deployment, and they should be deployed across hosts which are not expected to fail simultaneously. A majority of Sentinels is required for a failover to occur - so that would be 2 out of the 3 shown in this diagram.

The diagram shows a basic deployment across 5 hosts. Hosts 1 and 2 are the data bearing instances, containing the Master and Replica. The remaining hosts contain the three Sentinel instances. The red line shows the data replication between the Master and Replica, and the blue line shows the discovery, monitoring and failover between the Sentinels and the Master and Replica.
Additional Replica instances could be added to handle the simultaneous failure of hosts 1 and 2.
Also, it would be possible to reduce the number of hosts, from 5 to 3, by deploying Sentinel nodes on the same hosts as the Master and Replica. So, Sentinel S1 would be deployed onto host 1 with Master M1, and S2 onto host 2 with Replica R1. -->
