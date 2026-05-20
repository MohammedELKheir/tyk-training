---
id: maintaining-2024/007-redis-data-storage-2
deck_id: maintaining-2024
order: 7
slug: redis-data-storage-2
title: "Redis - data storage"
summary: "Used by the Dashboard for storage of: - Dashboard user sessions - Dashboard API keys - SSO nonces - Certificates - Gateway registrations"
standalone_safe: true
reusable: true
requires_context: []
builds_on: []
recommended_next: [maintaining-2024/008-redis-data-storage-3]
customer_visible: true
notes_visibility: customer-safe
---
---
layout: default
---

# Redis - data storage

- Used by the Dashboard for storage of:
- Dashboard user sessions
- Dashboard API keys
- SSO nonces
- Certificates
- Gateway registrations

<!-- Notes: It’s also used by the Dashboard to store:
Session objects for Dashboard users when they log in
Dashboard API keys
Nonces used during single sign-on
Certificates
Gateways which have registered with the Dashboard -->
