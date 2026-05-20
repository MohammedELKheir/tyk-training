---
id: maintaining-2024/010-redis-security
deck_id: maintaining-2024
order: 10
slug: redis-security
title: "Redis - Security"
summary: "From Redis 6, TLS is an optional built-in feature: - Must be compiled from source to enable TLS - Use 3rd party applications, such as Spiped - SaaS offerings provide secure endpoin"
standalone_safe: true
reusable: true
requires_context: []
builds_on: []
recommended_next: [maintaining-2024/011-redis-persistence]
customer_visible: true
notes_visibility: customer-safe
---
---
layout: default
---

# Redis - Security

- From Redis 6, TLS is an optional built-in feature:
- Must be compiled from source to enable TLS
- Use 3rd party applications, such as Spiped
- SaaS offerings provide secure endpoints
- Set redis.use_ssl to true in Gateway configuration
- Set redis_use_ssl to true in Dashboard configuration

<!-- Notes: The standard build of Redis does not support TLS. But there are two options for using TLS. The first is to build the application from source code, passing the argument “BUILD_TLS=true” when running the “make” command. The second approach is to use a third party tool, such as “S-Pipe-D”, which will operate as a secure proxy between the Redis client and server. Alternatively, SaaS platforms which offer Redis-compatible services generally also provide secure endpoints to connect to.

When using TLS with Redis, the Gateway and Dashboard must be configured by setting the Redis “use_ssl” property to “true” in the Gateway and Dashboard configuration files.

This may not be necessary if Tyk and Redis are operating within a private network where Redis is not exposed. -->
