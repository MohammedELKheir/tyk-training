---
id: maintaining-2024/017-redis-sizing-disk-ram
deck_id: maintaining-2024
order: 17
slug: redis-sizing-disk-ram
title: "Redis - Sizing disk/RAM"
summary: "API Keys: - Depends on number of Keys stored - Typical API Key is approximately 1KB - Example: 1,000 API Keys @ 1KB = 1MB - Cached responses: - Depends on number of responses cache"
standalone_safe: true
reusable: true
requires_context: []
builds_on: []
recommended_next: [maintaining-2024/018-redis-sizing-disk-ram-2]
customer_visible: true
notes_visibility: customer-safe
---
---
layout: default
---

# Redis - Sizing disk/RAM

- API Keys:
- Depends on number of Keys stored
- Typical API Key is approximately 1KB
- Example: 1,000 API Keys @ 1KB = 1MB
- Cached responses:
- Depends on number of responses cached per second, average response size and cache lifetime
- Example: 1,000 responses cached per second @ 20KB with 60 seconds lifetime = 1.2GB

<!-- Notes: Now let’s look at how Redis infrastructure is sized.

Redis operates from RAM, and persists to disk. So the Redis sizing for both of these will be approximately the same. The amount of required depends on the extent to which various elements of Tyk are used.

The requirement for API keys depends on the number of keys stored:
A typical API key is approximately 1 kilobyte in size, which means that 1,000 API keys requires 1 megabyte.

The requirement for cached responses depends on the number of responses cached per second, the average response size and the cache lifetime:
For example, if 1,000 responses are cached per second with an average size of 20 kilobytes each and a lifetime of 60 seconds, that would require approximately 1.2 gigabytes. -->
