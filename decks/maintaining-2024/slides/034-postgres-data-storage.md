---
id: maintaining-2024/034-postgres-data-storage
deck_id: maintaining-2024
order: 34
slug: postgres-data-storage
title: "Postgres - Data Storage"
summary: "Used by the Dashboard for storage of all Dashboard-managed data, with exception of API Keys and Certificates - Used by the Pump for storage of analytics data"
standalone_safe: true
reusable: true
requires_context: []
builds_on: []
recommended_next: [maintaining-2024/035-postgres-data-storage-2]
customer_visible: true
notes_visibility: customer-safe
---
---
layout: default
---

# Postgres - Data Storage

- Used by the Dashboard for storage of all Dashboard-managed data, with exception of API Keys and Certificates
- Used by the Pump for storage of analytics data

<!-- Notes: The Dashboard uses Postgres for storage of all Dashboard-managed data, with the exception of API Keys. This includes API Definitions, Policies, Webhooks, Dashboard Users, and Portal data such as Pages, Developers and Key Requests.

The Pump uses Postgres to store analytics data, which it has extracted from Redis. Typically this will be processed and stored as both aggregated and non-aggregated forms. -->
