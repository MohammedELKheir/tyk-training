---
id: maintaining-2024/041-postgres-sizing-ram
deck_id: maintaining-2024
order: 41
slug: postgres-sizing-ram
title: "Postgres - Sizing RAM"
summary: "MongoDB RAM is used for a number of processes in Postgres - Shared Buffers - Maintenance Work Memory - Sorting and Index Operations - Connection-related Memory"
standalone_safe: true
reusable: true
requires_context: []
builds_on: []
recommended_next: [maintaining-2024/042-postgres-sizing-cpu]
customer_visible: true
notes_visibility: customer-safe
---
---
layout: default
---

# Postgres - Sizing RAM

- MongoDB RAM is used for a number of processes in Postgres
- Shared Buffers
- Maintenance Work Memory
- Sorting and Index Operations
- Connection-related Memory

<!-- Notes: PostgreSQL uses a configuration parameter called shared_buffers to determine the amount of memory allocated for caching data. This is a crucial setting and should be set based on the available RAM on your system. shared_buffers configuration parameter determines the amount of memory that the database server uses for caching data in memory. These buffers serve as a cache for frequently accessed data, allowing the database to retrieve information more quickly without having to read from disk every time a query is executed.

As a rule of thumb, allocating 25-30% of your available RAM to shared_buffers is often recommended. However, the absolute value depends on the overall system requirements and the size of your database.

maintenance operations such as sorting and creating indexes. These maintenance operations are part of the routine tasks that PostgreSQL performs to keep the database organized and optimized

PostgreSQL uses memory for each connection to the database. -->
