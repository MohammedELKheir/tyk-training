---
id: maintaining-2024/044-backup-and-restore-redis
deck_id: maintaining-2024
order: 44
slug: backup-and-restore-redis
title: "Backup & Restore - Redis"
summary: "Backup Process: - Use SAVE or BGSAVE commands for snapshot backups. - Syntax: SAVE (synchronous) or BGSAVE (asynchronous). - Backup Options: - Snapshot Backup: Entire dataset at a"
standalone_safe: true
reusable: true
requires_context: []
builds_on: []
recommended_next: [maintaining-2024/045-backup-and-restore-mongodb]
customer_visible: true
notes_visibility: customer-safe
---
---
layout: default
---

# Backup &amp; Restore - Redis

- Backup Process:
- Use SAVE or BGSAVE commands for snapshot backups.
- Syntax: SAVE (synchronous) or BGSAVE (asynchronous).
- Backup Options:
- Snapshot Backup: Entire dataset at a point in time.
- Append-Only File (AOF): Logs changes for point-in-time recovery.
- Scheduled Backups:
- Schedule regular backups using cron jobs or third-party tools.
- Restoration Process:
- Use BGREWRITEAOF for AOF file replay.
- Restart Redis with the snapshot file for snapshot backups.
- Persistence Options:
- Choose between RDB (Snapshot) and AOF (Append-Only File) persistence.
- Configure persistence in the Redis configuration file.

<!-- Notes: MongoDB is capable of utilising multiple CPU cores:
This means that the storage engine benefits from having multiple threads available.
It’s recommended that MongoDB has access to at least two single-core CPUs, or one multi-core CPU.

Ideally, MongoDB should have access to a separate thread for every concurrent operation:
So the more Dashboards, Pumps and multi-data centre bridges in the deployment, the more threads should be available for MongoDB. -->
