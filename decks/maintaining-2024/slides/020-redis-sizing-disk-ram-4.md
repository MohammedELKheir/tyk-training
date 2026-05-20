---
id: maintaining-2024/020-redis-sizing-disk-ram-4
deck_id: maintaining-2024
order: 20
slug: redis-sizing-disk-ram-4
title: "Redis - Sizing disk/RAM"
summary: "Configure the operating system to allow memory to be overcommitted: - Forked process needs to duplicate data - Additional RAM required for BGSAVE backup process - Set vm.overcommit"
standalone_safe: true
reusable: true
requires_context: []
builds_on: []
recommended_next: [maintaining-2024/021-redis-sizing-cpu]
customer_visible: true
notes_visibility: customer-safe
---
---
layout: default
---

# Redis - Sizing disk/RAM

- Configure the operating system to allow memory to be overcommitted:
- Forked process needs to duplicate data
- Additional RAM required for BGSAVE backup process
- Set vm.overcommit_memory to 1 in /etc/sysctl.conf to allow Redis process to be forked without requiring double the memory

<!-- Notes: When Redis performs a data backup using the BGSAVE command, it requires additional RAM:
This is because Redis creates a fork to perform the backup process, which causes the operating system to evaluate whether there is enough RAM available to do this.
In a normal situation the operating system checks that there is enough for the entire process to be duplicated, meaning that if Redis is consuming 4 gigabytes of RAM, an additional 4 gigabytes of RAM is required for it to perform a backup. However, in reality, only a small fraction of the RAM is actually needed to perform the fork and backup process.
So, to avoid needing double the memory available to perform a Redis backup, configure the operating system to allow memory to be overcommitted. This is achieved by setting the “vm.overcommit_memory” setting to “1” in the “/etc/sysctl.conf” file. Redis cover this, and other administrative setup tips, in their documentation - it’s recommended to read through it. -->
