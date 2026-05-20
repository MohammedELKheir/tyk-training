---
id: graphql-2025/068-kafka-datasource-overview
deck_id: graphql-2025
order: 68
slug: kafka-datasource-overview
title: "Kafka Datasource Overview"
summary: "Enables subscribing to Kafka topics and querying events with GraphQL. Integrates Kafka's powerful pub/sub model into your Universal Data Graph. Operates based on Kafka’s consumer g"
standalone_safe: true
reusable: true
requires_context: []
builds_on: []
recommended_next: [graphql-2025/069-kafka-datasource-overview-2]
customer_visible: true
notes_visibility: customer-safe
---
---
layout: default
---

# Kafka Datasource Overview

Enables subscribing to Kafka topics and querying events with GraphQL.
Integrates Kafka's powerful pub/sub model into your Universal Data Graph.
Operates based on Kafka’s consumer group mechanism.
Kafka Consumer Groups
A group of cooperating consumers that share processing load.
Kafka automatically manages membership and rebalances partitions.
Allows for horizontal scaling and fault tolerance.

<!-- Notes: Kafka is a distributed messaging system used for building real-time data pipelines and streaming applications. In Tyk, we can treat Kafka as a data source in our Universal Data Graph. This means developers can subscribe to topics and access streamed data using GraphQL queries. This is incredibly powerful for use cases involving live data such as product updates, financial tickers, IoT data, or live metrics.
The Tyk Kafka DataSource is built on top of Kafka consumer groups. This is key, because it means it supports all Kafka features such as load balancing, fault tolerance, and scalability. When integrated into your schema, fields using Kafka can continuously stream updated data to any client that subscribes.

In Kafka, a consumer group consists of multiple consumers that coordinate to consume messages from a topic. Each partition in a topic is consumed by only one consumer in a group, ensuring messages are processed exactly once per group.

If we add more consumers than partitions, the extra consumers will remain idle. This model allows for dynamic scaling — consumers can be added or removed at runtime, and Kafka will rebalance automatically. Tyk leverages this model so multiple APIs or instances can share the workload for high-volume streams. -->
