---
id: maintaining-2024/045-backup-and-restore-mongodb
deck_id: maintaining-2024
order: 45
slug: backup-and-restore-mongodb
title: "Backup & Restore - MongoDB"
summary: "Backup Process: - Utilize mongodump command. - Syntax: mongodump --host <hostname> --port <port> --out <backup_directory> - Backup Options: - Full Backup: Entire database. - Specif"
standalone_safe: true
reusable: true
requires_context: []
builds_on: []
recommended_next: [maintaining-2024/046-backup-and-restore-postgres]
customer_visible: true
notes_visibility: customer-safe
---
---
layout: default
---

# Backup &amp; Restore - MongoDB

- Backup Process:
- Utilize mongodump command.
- Syntax: mongodump --host &lt;hostname&gt; --port &lt;port&gt; --out &lt;backup_directory&gt;
- Backup Options:
- Full Backup: Entire database.
- Specific Database: --db &lt;database_name&gt;.
- Collection: --collection &lt;collection_name&gt;.
- Automated Backups:
- Set up periodic backups using tools like MongoDB Atlas or cron jobs.
- Restoration Process:
- Use mongorestore command.
- Syntax: mongorestore --host &lt;hostname&gt; --port &lt;port&gt; --db &lt;database_name&gt; &lt;backup_directory&gt;

<!-- Notes: MongoDB is capable of utilising multiple CPU cores:
This means that the storage engine benefits from having multiple threads available.
It’s recommended that MongoDB has access to at least two single-core CPUs, or one multi-core CPU.

Ideally, MongoDB should have access to a separate thread for every concurrent operation:
So the more Dashboards, Pumps and multi-data centre bridges in the deployment, the more threads should be available for MongoDB. -->
