---
id: graphql-2025/074-kafka-datasource-overview-7
deck_id: graphql-2025
order: 74
slug: kafka-datasource-overview-7
title: "Kafka Datasource Overview"
summary: "Publishing Test Events Simulating Kafka Events Publish event to product-updates topic: { \"productUpdated\": { \"name\": \"product1\", \"price\": 1624, \"inStock\": 219 } } Use any Kafka pro"
standalone_safe: true
reusable: true
requires_context: []
builds_on: []
recommended_next: [graphql-2025/075-kafka-datasource-overview-8]
customer_visible: true
notes_visibility: customer-safe
---
---
layout: default
---

# Kafka Datasource Overview

Publishing Test Events
Simulating Kafka Events
Publish event to product-updates topic:
{
    "productUpdated": {
        "name": "product1",
        "price": 1624,
        "inStock": 219
    }
}
Use any Kafka producer or GUI tool.
Useful for testing subscriptions and schema mappings.

<!-- Notes: To test your setup, you can publish events manually to Kafka using tools like Kafka CLI, Postman + Kafka REST Proxy, or a Kafka GUI.
Here we’re sending a JSON message to the product-updates topic. When this happens, all GraphQL clients subscribed to productUpdated will receive the new product info instantly. This is a great way to validate your data mappings, consumer group configuration, and client subscriptions.
This enables full-cycle testing without needing a complete application stack. -->
