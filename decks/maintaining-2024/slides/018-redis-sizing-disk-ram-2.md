---
id: maintaining-2024/018-redis-sizing-disk-ram-2
deck_id: maintaining-2024
order: 18
slug: redis-sizing-disk-ram-2
title: "Redis - Sizing disk/RAM"
summary: "Temporary analytics: - Depends on number of requests per second, pump purge delay and average combined request and response size (if recording detailed analytics) - Recording detai"
standalone_safe: true
reusable: true
requires_context: []
builds_on: []
recommended_next: [maintaining-2024/019-redis-sizing-disk-ram-3]
customer_visible: true
notes_visibility: customer-safe
---
---
layout: default
---

# Redis - Sizing disk/RAM

- Temporary analytics:
- Depends on number of requests per second, pump purge delay and average combined request and response size (if recording detailed analytics)
- Recording detailed analytics can significantly impact storage requirement
- Base analytics record is approximately 1KB
- Example: 1,000 requests per second @ 50KB average combined size plus 1KB base record data, with a pump purge delay of 10 seconds = 510MB

<!-- Notes: The requirement for temporary analytics depends on the number of requests per second the Gateway is processing, the delay between analytics data purge performed by the Pump and, if detailed analytics recording if enabled, the average combined request and response size. 

Choosing to record detailed analytics can significantly increase the storage requirements as it stores the full request and response object.

The base analytics record is approximately 1 kilobyte without the detailed analytics data. This contains the metadata of the request, such as the API requested and the IP address of the client.

The sizing requirement to temporarily store 1,000 requests per second with average combined size of the request and response of 50 kilobytes, plus the 1 kilobyte of analytics metadata and a Pump purge delay of 10 seconds is approximately 510 megabytes. -->
