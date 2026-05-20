---
id: maintaining-2024/025-mongodb-high-availability
deck_id: maintaining-2024
order: 25
slug: mongodb-high-availability
title: "MongoDB - High Availability"
summary: "MongoDB uses Replica Sets for high availability: - Requires a minimum of three separate hosts for high availability - All members of Replica Set must be able to communicate with ea"
standalone_safe: true
reusable: true
requires_context: []
builds_on: []
recommended_next: [maintaining-2024/026-mongodb-replica-set]
customer_visible: true
notes_visibility: customer-safe
---
---
layout: default
---

# MongoDB - High Availability

- MongoDB uses Replica Sets for high availability:
- Requires a minimum of three separate hosts for high availability
- All members of Replica Set must be able to communicate with each other
- Election occurs if Primary becomes inaccessible
- Members can have different priorities, to determine the new Primary
- A majority of Replica Set members are required for an election
- Non-voting members: cannot vote, but do hold data
- Arbiters: can vote, but do not hold data

<!-- Notes: MongoDB uses what it calls Replica Sets to enable high availability deployments:
These deployments must consist of at least three hosts in order to be highly available. A three member replica set has a fault tolerance of 1 member, whereas a five member replica set has a fault tolerance of 2 members. 
All members of the Replica Set must be able to communicate with each other. The purpose of this is to maintain a heartbeat between members, which provides a means of detecting when a member becomes inaccessible.
If the Primary member becomes inaccessible, then a new primary is elected from the remaining members.
Members can be given a priority, to determine which member is elected the new Primary. This might be useful to keep the Primary in a particular data centre, or on a high performance host.
In order to hold an election, a majority of members are required. This means that in the event of a network partition, the members on the minority side will not hold an election, and if the primary is within the minority group it will automatically step down as primary and become a secondary. This also means that replica sets must consist of an odd number of members, so that in the event of network partitions there will be majority and minority groups.
There are two other types of member beyond the Primary and Secondary members. The first of these is the non-voting member; which cannot vote, but does hold data. Since MongoDB has a maximum number of 7 voting members per Replica Set, the n... -->
