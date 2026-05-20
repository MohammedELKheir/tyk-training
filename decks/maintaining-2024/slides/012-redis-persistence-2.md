---
id: maintaining-2024/012-redis-persistence-2
deck_id: maintaining-2024
order: 12
slug: redis-persistence-2
title: "Redis - Persistence"
summary: "AOF allows for instances to automatically re-populate data after restarting: - Set appendonly to true in the Redis configuration file - Operations which modify data are written to"
standalone_safe: true
reusable: true
requires_context: []
builds_on: []
recommended_next: [maintaining-2024/013-redis-high-availability]
customer_visible: true
notes_visibility: customer-safe
---
---
layout: default
---

# Redis - Persistence

- AOF allows for instances to automatically re-populate data after restarting:
- Set appendonly to true in the Redis configuration file
- Operations which modify data are written to AOF every second
- AOF is rewritten to optimise the file and reduce size

<!-- Notes: The AOF approach is typically used to repopulate the Redis database in memory after the process restarts. It’s enabled by setting “appendonly” to “true” in the Redis configuration file. 

By default, any operations which cause data to be modified are written to the AOF every second. This is the recommended interval, as it balances durability and performance. But it can be configured to write after every operation (which impacts performance), or it can be left to the operating system kernel to decide, which typically will be every 30 seconds. 

Redis also automatically rewrites the AOF to optimise it and prevent it from getting unnecessarily large. This process generates a new AOF based on the data currently in the database, creating the shortest AOF possible. -->
