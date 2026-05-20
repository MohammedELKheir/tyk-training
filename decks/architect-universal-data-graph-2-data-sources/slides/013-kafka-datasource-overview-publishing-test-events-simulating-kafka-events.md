---
id: architect-universal-data-graph-2-data-sources/013-kafka-datasource-overview-publishing-test-events-simulating-kafka-events
deck_id: architect-universal-data-graph-2-data-sources
order: 13
slug: kafka-datasource-overview-publishing-test-events-simulating-kafka-events
title: "Kafka Datasource Overview Publishing Test Events Simulating Kafka Events Publish"
summary: "event to product-updates topic: { \"productUpdated\": { \"name\": \"product1\", \"price\": 1624, \"inStock\": 219 } } Use any Kafka producer or GUI tool. Useful for testing subscriptions and"
standalone_safe: true
reusable: true
requires_context: []
builds_on: []
recommended_next: [architect-universal-data-graph-2-data-sources/014-kafka-datasource-overview-summary-kafka-datasource-in-tyk-seamlessly-int]
customer_visible: true
notes_visibility: customer-safe
---
---
layout: default
---

<div style="position:relative; width:100%; height:100%; overflow:hidden; background:white; color:#101018;">
  <h1 style="position:absolute; left:36px; top:24px; margin:0; color:#5c21d4; font-size:2.8rem; line-height:1.05; font-weight:800;">Kafka Datasource Overview</h1>

  <div style="position:absolute; left:43px; top:110px; width:671px; font-size:0.86rem; line-height:1.32; color:#101018;">
    <div style="font-weight:700; margin-bottom:0.18rem;">Publishing Test Events</div>
    <div style="font-weight:700; margin-bottom:0.18rem;">Simulating Kafka Events</div>
    <div style="margin-bottom:0.18rem;">Publish event to <code>product-updates</code> topic:</div>
    <pre v-pre style="margin:0 0 0.18rem 0; white-space:pre; font-size:0.78rem; line-height:1.26;">{
    "productUpdated": {
        "name": "product1",
        "price": 1624,
        "inStock": 219
    }
}</pre>
    <ul style="margin:0; padding-left:1.25rem;">
      <li>Use any Kafka producer or GUI tool.</li>
      <li>Useful for testing subscriptions and schema mappings.</li>
    </ul>
  </div>

  <TykCornerBadge />
</div>

<!-- Notes: To test your setup, you can publish events manually to Kafka using tools like Kafka CLI, Postman + Kafka REST Proxy, or a Kafka GUI.
Here we’re sending a JSON message to the product-updates topic. When this happens, all GraphQL clients subscribed to productUpdated will receive the new product info instantly. This is a great way to validate your data mappings, consumer group configuration, and client behavior before going live. -->
