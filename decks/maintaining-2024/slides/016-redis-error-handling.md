---
id: maintaining-2024/016-redis-error-handling
deck_id: maintaining-2024
order: 16
slug: redis-error-handling
title: "Redis - Error Handling"
summary: "In the event of Redis failure, the Gateway will temporarily disable Redis-based functionality: - Key lookups - APIs which use authentication based on Redis key lookups will return"
standalone_safe: true
reusable: true
requires_context: []
builds_on: []
recommended_next: [maintaining-2024/017-redis-sizing-disk-ram]
customer_visible: true
notes_visibility: customer-safe
---
---
layout: default
---

# Redis - Error Handling

- In the event of Redis failure, the Gateway will temporarily disable Redis-based functionality:
- Key lookups - APIs which use authentication based on Redis key lookups will return errors
- Rate limits and Quotas
- Redis Pub/Sub messaging
- Recording analytics data
- Once Redis availability is restored, Gateway functionality will resume
- Gateway will report Redis status as fail via health check endpoint

<!-- Notes: In the event that the Gateway’s connectivity with Redis fails, the Gateway will temporarily disable all Redis-based functionality, including:
Key lookups. APIs which use authentication based on Redis key lookups, such as standard bearer tokens, will return errors. But APIs without authentication, or those which use non-Redis based methods such as JWT, will continue to function.
Rate limiting and Quotas.
Messaging based on Redis Pub/Sub, like hot reloads signals or zero-configuration lookups, will no longer be possible.
Analytics data will not be recorded.

Once Redis availability is restored, all Redis-based functionality is automatically resumed.

While Redis is unavailable to the Gateway, it will report the Redis status as “fail” via the health check endpoint. It will also write an error message in the application log stating “Connection to Redis failed”. -->
