---
id: architect-universal-data-graph-2-data-sources/008-kafka-datasource-overview-basic-kafka-configuration-broker-addresses-kaf
deck_id: architect-universal-data-graph-2-data-sources
order: 8
slug: kafka-datasource-overview-basic-kafka-configuration-broker-addresses-kaf
title: "Kafka Datasource Overview Basic Kafka Configuration broker_addresses : Kafka bro"
summary: "ker hosts topics : Kafka topics to subscribe to group_id : Consumer group identifier client_id : Optional identifier for logging and debugging"
standalone_safe: true
reusable: true
requires_context: []
builds_on: []
recommended_next: [architect-universal-data-graph-2-data-sources/009-kafka-datasource-overview-configuring-via-tyk-dashboard-click-the-field]
customer_visible: true
notes_visibility: customer-safe
---
---
layout: default
---

<div style="position:relative; width:100%; height:100%; overflow:hidden; background:white; color:#101018;">
  <h1 style="position:absolute; left:36px; top:24px; margin:0; color:#5c21d4; font-size:2.8rem; line-height:1.05; font-weight:800;">Kafka Datasource Overview</h1>

  <div style="position:absolute; left:43px; top:110px; width:783px; font-size:0.94rem; line-height:1.5; color:#101018;">
    <div style="font-weight:700; margin-bottom:0.4rem;">Basic Kafka Configuration</div>
    <ul style="margin:0; padding-left:1.35rem;">
      <li><code>broker_addresses</code>: Kafka broker hosts</li>
      <li><code>topics</code>: Kafka topics to subscribe to</li>
      <li><code>group_id</code>: Consumer group identifier</li>
      <li><code>client_id</code>: Optional identifier for logging and debugging</li>
    </ul>
  </div>

  <TykCornerBadge />
</div>

<!-- Notes: To configure a Kafka DataSource in Tyk, the following fields are required:

broker_addresses: This is where your Kafka brokers live. It’s enough to supply just one broker; Kafka will discover the rest.
topics: These are the Kafka topics you want to subscribe to. All events must match the GraphQL schema.
group_id: This defines your consumer group. Multiple APIs can share this ID, which lets them cooperate and balance partitions.
client_id: This is optional, but useful for identifying consumers in logs and debugging sessions. -->
