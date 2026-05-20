---
id: maintaining-2024/019-redis-sizing-disk-ram-3
deck_id: maintaining-2024
order: 19
slug: redis-sizing-disk-ram-3
title: "Redis - Sizing disk/RAM"
summary: "Emergency configuration: - Depends on number and size of API Definitions and Policies - API Definition ranges from 15KB to more than 100KB - Policy ranges from 1KB to more than 5KB"
standalone_safe: true
reusable: true
requires_context: []
builds_on: []
recommended_next: [maintaining-2024/020-redis-sizing-disk-ram-4]
customer_visible: true
notes_visibility: customer-safe
---
---
layout: default
---

# Redis - Sizing disk/RAM

- Emergency configuration:
- Depends on number and size of API Definitions and Policies
- API Definition ranges from 15KB to more than 100KB
- Policy ranges from 1KB to more than 5KB
- Example: 100 API Definitions @ 50KB and 500 Policies @ 2KB = 6MB
- Dashboard sessions:
- Depends on the number of concurrent Dashboard sessions
- Typical Dashboard user session object is 1KB
- Example: 10 concurrent Dashboard sessions @ 1KB = 10KB

<!-- Notes: The requirement for emergency configuration data depends on the number and size of the API Definitions and Policies:
A typical API Definition can range in size from 15 kilobytes to over 100 kilobytes, depending on the amount of versions and depth of configuration. Adding many Virtual Endpoints, which can be stored in base64 encoded format directly in the API Definition could push the size well beyond 100 kilobytes.
A typical Policy can range in size from 1 kilobytes to more than 5 kilobytes.
For example, to store 100 API Definitions at an average size of 50 kilobytes and 500 Policies at an average for 2 kilobytes requires approximately 6 megabytes.

The requirement for Dashboard sessions depends on the number of concurrent Dashboard sessions:
A typical Dashboard user session objects is approximately 1 kilobyte.
To store 10 concurrent Dashboard sessions requires approximately 10 kilobytes.

The total for these Redis examples comes to less than 2 gigabytes. But these are just examples, provided to explain of how Redis sizing calculations can be made. Each deployment will be different, so should be given careful consideration, with additional capacity provisioned to allow for underestimation, changes in configuration, projected growth, handling of traffic spikes and data backup processes. -->
