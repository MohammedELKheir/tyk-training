---
id: graphql-2025/076-rest-datasource-overview
deck_id: graphql-2025
order: 76
slug: rest-datasource-overview
title: "REST Datasource Overview"
summary: "REST DataSources connect REST APIs to your GraphQL schema Enables field-level resolution via REST endpoints Supported for both external APIs and Tyk-managed APIs"
standalone_safe: true
reusable: true
requires_context: []
builds_on: []
recommended_next: [graphql-2025/077-rest-datasource-overview-2]
customer_visible: true
notes_visibility: customer-safe
---
---
layout: default
---

# REST Datasource Overview

REST DataSources connect REST APIs to your GraphQL schema
Enables field-level resolution via REST endpoints
Supported for both external APIs and Tyk-managed APIs

<!-- Notes: REST DataSources act as connectors between your GraphQL schema and existing REST endpoints. Instead of rewriting your APIs, you attach a REST DataSource to a GraphQL field, allowing that field to be resolved via a REST call. These can be external APIs or APIs already managed in your Tyk Gateway.
If we add more consumers than partitions, the extra consumers will remain idle. This model allows for dynamic scaling — consumers can be added or removed at runtime, and Kafka will rebalance automatically. Tyk leverages this model so multiple APIs or instances can share the workload for high-volume streams. -->
