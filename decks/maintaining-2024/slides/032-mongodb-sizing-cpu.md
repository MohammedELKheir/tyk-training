---
id: maintaining-2024/032-mongodb-sizing-cpu
deck_id: maintaining-2024
order: 32
slug: mongodb-sizing-cpu
title: "MongoDB - Sizing CPU"
summary: "MongoDB is capable of utilising multiple CPU cores: - Storage engine benefits from multiple threads - Recommended for MongoDB to have access to at least two single-core CPUs, or on"
standalone_safe: true
reusable: true
requires_context: []
builds_on: []
recommended_next: [maintaining-2024/033-postgresql]
customer_visible: true
notes_visibility: customer-safe
---
---
layout: default
---

# MongoDB - Sizing CPU

- MongoDB is capable of utilising multiple CPU cores:
- Storage engine benefits from multiple threads
- Recommended for MongoDB to have access to at least two single-core CPUs, or one multi-core CPU
- Ideally one thread available for every concurrent operation:
- More Dashboards, Pumps and MDCBs requires more available threads

<!-- Notes: MongoDB is capable of utilising multiple CPU cores:
This means that the storage engine benefits from having multiple threads available.
It’s recommended that MongoDB has access to at least two single-core CPUs, or one multi-core CPU.

Ideally, MongoDB should have access to a separate thread for every concurrent operation:
So the more Dashboards, Pumps and multi-data centre bridges in the deployment, the more threads should be available for MongoDB. -->
