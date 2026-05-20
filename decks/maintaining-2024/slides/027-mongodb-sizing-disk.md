---
id: maintaining-2024/027-mongodb-sizing-disk
deck_id: maintaining-2024
order: 27
slug: mongodb-sizing-disk
title: "MongoDB - Sizing Disk"
summary: "System configuration: - Depends on the number of API Definitions, Policies etc - Not likely to be of significant size - Non-aggregated analytics - Depends on the number of requests"
standalone_safe: true
reusable: true
requires_context: []
builds_on: []
recommended_next: [maintaining-2024/028-mongodb-sizing-disk-2]
customer_visible: true
notes_visibility: customer-safe
---
---
layout: default
---

# MongoDB - Sizing Disk

- System configuration:
- Depends on the number of API Definitions, Policies etc
- Not likely to be of significant size
- Non-aggregated analytics
- Depends on the number of requests and payload size for detailed recording
- Basic analytics record is less than 2KB
- Detailed recording adds size of request and response payload
- Example: 1m requests @ 2KB without detailed recording = 2GB
- Example: 1m requests @ 2KB with detailed recording @ 50KB = 52GB

<!-- Notes: MongoDB disk space sizing is based on system configuration and analytics data.

System configuration consists of the data for API Definitions, Policies and so on. In general, these are relatively small objects and it’s not likely there there will be large quantities of them. This means that system configuration storage is not a significant aspect when sizing for MongoDB. Just like the Redis example, a typical API Definition is around 50 kilobytes, and a Policy around 2 kilobytes; so a couple of hundred megabytes should be enough to cover this.

The next consideration is analytics data, of which there are two types; aggregated and non-aggregated.

Non-aggregated analytics contain information about every request and response handled by the Gateway. They are used by the Dashboard for the Log Browser report. The high quantity of records is the reason why non-aggregated analytics usually account for the majority of storage in MongoDB:
The most important factors to consider are the number of API requests and, if detailed analytics recording is enabled, the average payload size.
The size of a basic analytics record, without detailed recording, is approximately 2 kilobytes.
But if detailed recording is enabled, then the request and response payloads are stored in the analytics, which can significantly increase the size of each record.
For example, for 1 million requests without detailed recording, only the 2 kilobyte basic record is needed. This requires approximately 2 gigabytes of ... -->
