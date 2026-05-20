---
id: maintaining-2024/021-redis-sizing-cpu
deck_id: maintaining-2024
order: 21
slug: redis-sizing-cpu
title: "Redis - Sizing CPU"
summary: "Redis executes commands in a single-threaded manner: - Multi-core CPUs do not offer much advantage - Higher API throughput requires higher frequency processor - Use cluster approac"
standalone_safe: true
reusable: true
requires_context: []
builds_on: []
recommended_next: [maintaining-2024/022-mongodb]
customer_visible: true
notes_visibility: customer-safe
---
---
layout: default
---

# Redis - Sizing CPU

- Redis executes commands in a single-threaded manner:
- Multi-core CPUs do not offer much advantage
- Higher API throughput requires higher frequency processor
- Use cluster approach to increase performance
- Redis bottleneck is not normally CPU, usually either memory or network

<!-- Notes: Redis is a single-threaded application:
This means that it doesn’t benefit from multi-core CPUs.
It’s better to have a higher frequency processor with fewer cores than a slower frequency processor with more cores.
If higher performance is needed, then Redis can be deployed as a cluster, allowing it to split processing across multiple nodes.

The CPU is not normally the bottleneck for Redis, it’s usually either memory or network. -->
