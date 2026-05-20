---
id: maintaining-2024/039-postgres-sizing-disk-2
deck_id: maintaining-2024
order: 39
slug: postgres-sizing-disk-2
title: "Postgres - Sizing Disk"
summary: "Aggregated analytics: - Depends on the number of APIs, API versions, Tags, Keys, OAuth Clients, Endpoints, Geolocations and API Error Codes - Only active data is recorded - Does no"
standalone_safe: true
reusable: true
requires_context: []
builds_on: []
recommended_next: [maintaining-2024/040-postgres-managing-size]
customer_visible: true
notes_visibility: customer-safe
---
---
layout: default
---

# Postgres - Sizing Disk

- Aggregated analytics:
- Depends on the number of APIs, API versions, Tags, Keys, OAuth Clients, Endpoints, Geolocations and API Error Codes
- Only active data is recorded
- Does not vary based on API throughput
- Aggregated into hourly chunks
- 1KB per item stored in the aggregated record
- Example: 1000 active API keys + 100 active APIs + 100 versions = 1.2MB per hourly record (29MB per day, or 2.6GB for 90 days)

<!-- Notes: Aggregated analytics don’t require as much data. They are used by the Dashboard to display reports for different types of information; APIs, API versions, Tags, Keys and API error codes:
Each record contains the aggregated data for each of these types of information, which sounds like a lot, but the records only contain “active” data. This means that if an API isn’t accessed during the hour, it will not be included in the aggregated analytic record. 
In addition, because the data is aggregated, the volume of requests makes no difference; an API which receives 10 requests requires the same storage as one which receives 10 million.
The data is aggregated into hourly chunks.
Each of the items represented in the record requires approximately 1 kilobyte of space in the aggregated record, whether it’s an API, Tag or Key.
For example, if there are 1,000 active API keys, 100 active APIs, and 100 active versions. Each of these items takes approximately 1 kilobyte to store in the hourly record, which gives a storage requirement of 1.2 megabytes, which equates to about 29 megabytes per day, or 2.6 gigabytes for 90 days. -->
