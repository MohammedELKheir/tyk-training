---
id: foundational-onboarding/054-handling-analytics
deck_id: foundational-onboarding
order: 54
slug: handling-analytics
title: "Handling Analytics"
summary: "Gateways record analytics in Redis when they are processing API traffic - Pump processes analytics data, and moves it to the target data stores: - MongoDB/Postgres is the default d"
standalone_safe: true
reusable: true
requires_context: []
builds_on: []
recommended_next: [foundational-onboarding/055-working-with-analytics]
customer_visible: true
notes_visibility: customer-safe
---
---
layout: default
---


# Handling Analytics

<div style="font-size:1.1rem; line-height:2; margin-top:1.5rem; max-width:800px;">

- Gateways record analytics in Redis when they are processing API traffic
- Pump processes analytics data, and moves it to the target data stores:
  - MongoDB/Postgres is the default data store for the Dashboard
  - Additional data stores can be targeted
    - ElasticSearch
    - Datadog etc.

- Analytics can be sharded to separate organizations in a multi-tenanted environment

</div>
