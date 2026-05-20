---
id: maintaining-2024/036-postgres-high-availability
deck_id: maintaining-2024
order: 36
slug: postgres-high-availability
title: "Postgres - High Availability"
summary: "Postgres has 2 main ways of replication - Physical replication - Logical replication - Physical replication - Maintains a full copy of the entire data of a cluster - Entire set of"
standalone_safe: true
reusable: true
requires_context: []
builds_on: []
recommended_next: [maintaining-2024/037-postgresql-2]
customer_visible: true
notes_visibility: customer-safe
---
---
layout: default
---

# Postgres - High Availability

- Postgres has 2 main ways of replication
- Physical replication
- Logical replication
- Physical replication
- Maintains a full copy of the entire data of a cluster
- Entire set of data on the primary server is copied to the replica which acts as a standby node
- Good for disaster recovery
- Logical replication
- Replicates data objects and their changes based on a unique identifier
- Copies database objects in a row-based model as opposed to physical replication
- Good for clustering due to performance

<!-- Notes: MongoDB uses what it calls Replica Sets to enable high availability deployments:
These deployments must consist of at least three hosts in order to be highly available. A three member replica set has a fault tolerance of 1 member, whereas a five member replica set has a fault tolerance of 2 members. 
All members of the Replica Set must be able to communicate with each other. The purpose of this is to maintain a heartbeat between members, which provides a means of detecting when a member becomes inaccessible.
If the Primary member becomes inaccessible, then a new primary is elected from the remaining members.
Members can be given a priority, to determine which member is elected the new Primary. This might be useful to keep the Primary in a particular data centre, or on a high performance host.
In order to hold an election, a majority of members are required. This means that in the event of a network partition, the members on the minority side will not hold an election, and if the primary is within the minority group it will automatically step down as primary and become a secondary. This also means that replica sets must consist of an odd number of members, so that in the event of network partitions there will be majority and minority groups.
There are two other types of member beyond the Primary and Secondary members. The first of these is the non-voting member; which cannot vote, but does hold data. Since MongoDB has a maximum number of 7 voting members per Replica Set, the n... -->
