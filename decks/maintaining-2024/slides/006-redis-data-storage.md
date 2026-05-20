---
id: maintaining-2024/006-redis-data-storage
deck_id: maintaining-2024
order: 6
slug: redis-data-storage
title: "Redis - data storage"
summary: "Used by the Gateway for storage of: - API Keys - Cached responses - Temporary analytics - Emergency configuration (for worker Gateways in MDCB deployments) - Uptime test allocation"
standalone_safe: true
reusable: true
requires_context: []
builds_on: []
recommended_next: [maintaining-2024/007-redis-data-storage-2]
customer_visible: true
notes_visibility: customer-safe
---
---
layout: default
---

# Redis - data storage

- Used by the Gateway for storage of:
- API Keys
- Cached responses
- Temporary analytics
- Emergency configuration (for worker Gateways in MDCB deployments)
- Uptime test allocation
- Liveness probe data

<!-- Notes: Redis is necessary for the operation of the Gateway, which uses Redis to store:
API keys.
Cached responses from the upstream API Server.
Temporary analytics data.
Emergency configuration data, which is used by worker Gateways in MDCB deployments if they become disconnected from their control plane.
Allocation of uptime tests, where a specific Gateway is allocated the role of performing uptime tests.
Liveness probe data, which is used by the Gateways to verify Redis connectivity. -->
