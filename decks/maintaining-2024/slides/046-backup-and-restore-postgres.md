---
id: maintaining-2024/046-backup-and-restore-postgres
deck_id: maintaining-2024
order: 46
slug: backup-and-restore-postgres
title: "Backup & Restore - Postgres"
summary: "Backup Process: - Use pg_dump for logical backups. - Syntax: pg_dump -h <hostname> -p <port> -U <username> -d <database_name> -f <backup_file> - Backup Options: - Full Database: --"
standalone_safe: true
reusable: true
requires_context: []
builds_on: []
recommended_next: [maintaining-2024/047-hands-on-workshop]
customer_visible: true
notes_visibility: customer-safe
---
---
layout: default
---

# Backup &amp; Restore - Postgres

- Backup Process:
- Use pg_dump for logical backups.
- Syntax: pg_dump -h &lt;hostname&gt; -p &lt;port&gt; -U &lt;username&gt; -d &lt;database_name&gt; -f &lt;backup_file&gt;
- Backup Options:
- Full Database: --format=custom or --format=directory.
- Specific Table: --table &lt;table_name&gt;.
- Compression: -F c for custom format with compression.
- Point-in-Time Recovery (PITR):
- Archive WAL (Write-Ahead Logging) files for continuous backups.
- Use pg_basebackup or tools like Barman for PITR.
- Automated Backups:
- Implement periodic backups with tools like pg_cron or scheduling in cron jobs.
- Restoration Process:
- Use pg_restore for logical restoration.
- Syntax: pg_restore -h &lt;hostname&gt; -p &lt;port&gt; -U &lt;username&gt; -d &lt;database_name&gt; &lt;backup_file&gt;

<!-- Notes: MongoDB is capable of utilising multiple CPU cores:
This means that the storage engine benefits from having multiple threads available.
It’s recommended that MongoDB has access to at least two single-core CPUs, or one multi-core CPU.

Ideally, MongoDB should have access to a separate thread for every concurrent operation:
So the more Dashboards, Pumps and multi-data centre bridges in the deployment, the more threads should be available for MongoDB. -->
