---
id: maintaining-2024/011-redis-persistence
deck_id: maintaining-2024
order: 11
slug: redis-persistence
title: "Redis - Persistence"
summary: "Redis has two approaches for persistence: - Redis Database Backup (RDB), is a point-in-time snapshots of the database - Append Only File (AOF), is a log of all write operations - B"
standalone_safe: true
reusable: true
requires_context: []
builds_on: []
recommended_next: [maintaining-2024/012-redis-persistence-2]
customer_visible: true
notes_visibility: customer-safe
---
---
layout: default
---

# Redis - Persistence

- Redis has two approaches for persistence:
- Redis Database Backup (RDB), is a point-in-time snapshots of the database
- Append Only File (AOF), is a log of all write operations
- Both approaches can be used simultaneously
- RDB is the traditional database backup snapshot:
- Use the SAVE or BGSAVE commands
- Creates file called dump.rdb
- Can be scheduled

<!-- Notes: Redis is an in-memory database, meaning that database operations are conducted in RAM. But data can be persisted to disk using two approaches, known as RDB and AOF.

The Redis Database Backup approach creates point-in-time snapshots of the database, which can be used to restore the database to a previous state. Whereas the Append Only File approach generates a log of all the write operations, which Redis replays when it restarts to rebuild its database.

Both of these approaches can be used at the same time. Though Redis will prevent certain elements of these approaches from activating at the same time to avoid heavy disk usage.

To create a backup using RDB, the Redis CLI “SAVE” and “BGSAVE” commands can be used. This will create a “dump.rdb” file on the local disk. Redis can be configured to perform this command on a regular interval if certain number of changes have occurred. Should something go wrong in between these intervals then whatever data was written since the last update would be lost. It’s recommended to periodically transfer the “dump.rdb” files to external storage. -->
