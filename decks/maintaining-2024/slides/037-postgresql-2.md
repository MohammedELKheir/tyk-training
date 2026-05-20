---
id: maintaining-2024/037-postgresql-2
deck_id: maintaining-2024
order: 37
slug: postgresql-2
title: "PostgreSQL"
summary: "Using a combination of streaming replication, Patroni & Etcd for automated failover, and HAProxy for load balancing thus achieving HA: - Continuous Synchronization by streaming wri"
standalone_safe: true
reusable: true
requires_context: []
builds_on: []
recommended_next: [maintaining-2024/038-postgres-sizing-disk]
customer_visible: true
notes_visibility: customer-safe
---
---
layout: default
---

# PostgreSQL

- Using a combination of streaming replication, Patroni & Etcd for automated failover, and HAProxy for load balancing thus achieving HA:
- Continuous Synchronization by streaming write-ahead logs (WAL) from primary to standby nodes
- HAProxy monitors health of servers (Primary & Standby)
- Distributes incoming database connections
- Etcd acts as a distributed key-value store for configuration management
- Patroni manages failover and PostgreSQL cluster management, monitors health of servers & checking status & connectivity
- Orchestrates standby promotion if there are issues detected on primary server

<img src="/icons/slide-037-Google-Shape-390-p52.png" style="max-width:80%; margin-top:0.5rem;" />
