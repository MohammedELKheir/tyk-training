---
id: graphql-2025/073-kafka-datasource-overview-6
deck_id: graphql-2025
order: 73
slug: kafka-datasource-overview-6
title: "Kafka Datasource Overview"
summary: "Example Subscription Query subscription Products { productUpdated { name price inStock } } Automatically receives new product data when Kafka publishes an event. Compatible with mo"
standalone_safe: true
reusable: true
requires_context: []
builds_on: []
recommended_next: [graphql-2025/074-kafka-datasource-overview-7]
customer_visible: true
notes_visibility: customer-safe
---
---
layout: default
---

<h2 style="color:#5900CB; font-size:1.8rem; font-weight:bold; margin-bottom:1rem;">Kafka Datasource Overview</h2>

<div style="display:flex; gap:1.5rem;">
  <div style="flex:1.2; font-size:0.95rem; line-height:1.7; color:#03031C;">
    Example Subscription Query
subscription Products {
    productUpdated {
        name
        price
        inStock
    }
}
Automatically receives new product data when Kafka publishes an event.
Compatible with most GraphQL clients.
  </div>
  <div style="flex:1; background:#1a1a2e; border-radius:8px; padding:12px 16px; overflow:auto;">
    <pre style="color:#e0e0e0; font-size:0.6rem; margin:0; font-family:monospace; line-height:1.5; white-space:pre;">GraphQL Subscriptions with Kafka
Real-Time Subscriptions
Use GraphQL subscription queries to listen to Kafka events.
Define Subscription type in your schema:
type Product {
 name: String
 price: Int
 inStock: Int
}
type Subscription {
 productUpdated: Product
}
Subscribers will get real-time updates on every event.</pre>
  </div>
</div>

<!-- Notes: GraphQL subscriptions are a powerful way to deliver real-time updates to clients. In Tyk, we can map Kafka topics to GraphQL subscription fields.
When an event is published to the topic, all subscribed clients will receive the update instantly. This is done using the standard GraphQL subscription query type. Clients can use any compliant GraphQL client or library to consume these updates — no need for custom protocols or vendor-specific solutions.
This allows real-time data streams to be cleanly integrated into your unified API architecture.

This is how simple it is to subscribe to Kafka-powered fields in Tyk. This GraphQL query on the right subscribes to the productUpdated field, which will be populated with data from the Kafka topic.
Whenever a new message comes through with product details, the client receives it immediately. This is ideal for use cases like e-commerce dashboards, live inventory trackers, or monitoring tools.
Developers can integrate this into frontend apps using tools like Apollo Client or urql. -->
