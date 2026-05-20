---
id: maintaining-2024/015-redis-cluster
deck_id: maintaining-2024
order: 15
slug: redis-cluster
title: "Redis - Cluster"
summary: "Redis Cluster uses a sharded data set: - Horizontal scaling option - Minimum of 3 Master instances required: - Master majority required for failover - Cluster message bus used for"
standalone_safe: true
reusable: true
requires_context: []
builds_on: []
recommended_next: [maintaining-2024/016-redis-error-handling]
customer_visible: true
notes_visibility: customer-safe
---
---
layout: default
---

# Redis - Cluster

- Redis Cluster uses a sharded data set:
- Horizontal scaling option
- Minimum of 3 Master instances required:
- Master majority required for failover
- Cluster message bus used for intra-instance communication
- Replica can share hosts with Master that does not cover same shard

<!-- Notes: One of the major differences between the Sentinel and Cluster approaches is that the data set in Cluster is sharded, which means it is split up into separate chunks and spread across multiple instances. The diagram shows three Master instances; M1, M2 and M3, each contains a different part of the database. It also shows the Replica for each master; R1, R2 and R3.

Splitting the database up in this way presents a good way to scale horizontally. This is an advantage over Sentinel, which can only scale vertically.

Redis Cluster instances are all data bearing, either as a Master or a Replica. There is no Sentinel-type instance here. The Master instances propagate their data to their Replicas, shown on the diagram as the red lines. Additional Replica instances can be added to increase the robustness of the deployment.

A minimum of three Master instances are required in the cluster, and a majority of Master instances are required for a failover to occur. Meaning that a 3 Master deployment, such as the one in the diagram can survive the failure of one Master instance. In Redis cluster, the Master instances play the role of the Sentinel when handling failover.

The instances communicate with each other across the cluster bus, shown on the diagram as the blue lines. This handles such things as failure detection, configuration updates and failover authorisation.

It is possible to reduce the number of hosts needed to deploy a cluster from 6 to 3. This is achieved by deploying multipl... -->
