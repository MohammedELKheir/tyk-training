---
id: maintaining-2024/031-mongodb-sizing-ram-2
deck_id: maintaining-2024
order: 31
slug: mongodb-sizing-ram-2
title: "MongoDB - Sizing RAM"
summary: "Non-aggregated analytics data collections can require large indexes: - Approximately 160MB per 1 million analytics documents - Aggregated indexes are usually small as there are far"
standalone_safe: true
reusable: true
requires_context: []
builds_on: []
recommended_next: [maintaining-2024/032-mongodb-sizing-cpu]
customer_visible: true
notes_visibility: customer-safe
---
---
layout: default
---

# MongoDB - Sizing RAM

- Non-aggregated analytics data collections can require large indexes:
- Approximately 160MB per 1 million analytics documents
- Aggregated indexes are usually small as there are far fewer documents

<!-- Notes: The element which is likely to require the majority of RAM are the indexes. Most of these will not grow large, because the collections do not hold many documents. The exceptions are the collections which hold the non-aggregated analytics data, as these collections store a document for each request and response pair, so could contain millions of documents, requiring large indexes.

The indexes for non-aggregated analytics collections require about 160 megabytes per 1 million analytics documents.

The indexes for aggregated analytics collections are usually small, as only one record is produced each hour, meaning there are far fewer documents to index. -->
