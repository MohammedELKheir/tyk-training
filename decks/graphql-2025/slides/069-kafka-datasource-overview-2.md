---
id: graphql-2025/069-kafka-datasource-overview-2
deck_id: graphql-2025
order: 69
slug: kafka-datasource-overview-2
title: "Kafka Datasource Overview"
summary: "Basic Kafka Configuration broker_addresses: Kafka broker hosts topics: Kafka topics to subscribe to group_id: Consumer group identifier client_id: Optional identifier for logging a"
standalone_safe: true
reusable: true
requires_context: []
builds_on: []
recommended_next: [graphql-2025/070-kafka-datasource-overview-3]
customer_visible: true
notes_visibility: customer-safe
---
---
layout: default
---

<h2 style="color:#5900CB; font-size:1.8rem; font-weight:bold; margin-bottom:1rem;">Kafka Datasource Overview</h2>



<div style="background:#1a1a2e; border-radius:8px; padding:12px 16px; margin-top:0.5rem; overflow:auto;">
  <pre style="color:#e0e0e0; font-size:0.6rem; margin:0; font-family:monospace; line-height:1.5; white-space:pre;">Basic Kafka Configuration
broker_addresses: Kafka broker hosts
topics: Kafka topics to subscribe to
group_id: Consumer group identifier
client_id: Optional identifier for logging and debugging</pre>
</div>

<!-- Notes: To configure a Kafka DataSource in Tyk, the following fields are required:

broker_addresses: This is where your Kafka brokers live. It’s enough to supply just one broker; Kafka will discover the rest.
topics: These are the Kafka topics you want to subscribe to. All events must match the GraphQL schema.
group_id: This defines your consumer group. Multiple APIs can share this ID, which lets them cooperate on event processing.
client_id: This is a unique identifier for the client, used in Kafka logs and metrics to trace requests.

This configuration is part of the Tyk API Definition object, allowing this setup to be version-controlled and automated. -->
