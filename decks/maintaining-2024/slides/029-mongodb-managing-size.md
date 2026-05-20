---
id: maintaining-2024/029-mongodb-managing-size
deck_id: maintaining-2024
order: 29
slug: mongodb-managing-size
title: "MongoDB - Managing Size"
summary: "Utilise storage strategies to manage database size: - Capped collection: limits the size of analytics collections - Time-to-live index: limits the ages of analytics records - Mongo"
standalone_safe: true
reusable: true
requires_context: []
builds_on: []
recommended_next: [maintaining-2024/030-mongodb-sizing-ram]
customer_visible: true
notes_visibility: customer-safe
---
---
layout: default
---

# MongoDB - Managing Size

- Utilise storage strategies to manage database size:
- Capped collection: limits the size of analytics collections
- Time-to-live index: limits the ages of analytics records
- MongoDB CLI: MongoDB CLI query to remove analytics records

<!-- Notes: There are a few strategies which can be used to mitigate the growth of analytics data.

The first approach is to use a capped collection. This is a MongoDB feature which puts a maximum size on a collection, preventing it from exceeding a pre-defined number of bytes. It works like a circular buffer, if a new record is inserted which causes the limit to be reached, then the oldest record is automatically removed to make room. This is useful for situations where an absolute size limit is needed, but it does not work well for situations where analytics need to be stored for a particular number of days.

The second approach is to use a time-to-live index. This is another MongoDB feature where an indexed date field is used to expire data from a collection. MongoDB will automatically remove data once it reaches a particular age. This is useful for situations where analytics data needs to be stored for a particular number of days, but does not work well for situations where an absolute size limit is needed - the exact opposite to the capped collection approach. Note that the time-to-live and capped collection approaches are not compatible, so cannot be combined.

The third approach is to use the MongoDB CLI. The MongoDB CLI can be used to manipulate documents, including removing them based on a query. This approach gives a lot of flexibility in selecting data for removal, but would likely need to be run on a regular schedule using a cron job or similar. -->
