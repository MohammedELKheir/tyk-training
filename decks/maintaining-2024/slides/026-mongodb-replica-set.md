---
id: maintaining-2024/026-mongodb-replica-set
deck_id: maintaining-2024
order: 26
slug: mongodb-replica-set
title: "MongoDB - Replica Set"
summary: "Data replicated from Primary to one or more Secondary instances - Heartbeat maintained between all instances"
standalone_safe: true
reusable: true
requires_context: []
builds_on: []
recommended_next: [maintaining-2024/027-mongodb-sizing-disk]
customer_visible: true
notes_visibility: customer-safe
---
---
layout: default
---

# MongoDB - Replica Set

- Data replicated from Primary to one or more Secondary instances
- Heartbeat maintained between all instances

<!-- Notes: This diagram provide a basic illustration of a 3-member Replica Set.

Data is replicated from the primary member to the two Secondary members, as shown by the green line.

The heartbeat is maintained between all three instances, as shown by the blue line. The members ping each other every two seconds and will mark another member as inaccessible if a response is not returned within 10 seconds.

The members are spread across three separate hosts to reduce the risk of more than one member becoming inaccessible simultaneously. -->
