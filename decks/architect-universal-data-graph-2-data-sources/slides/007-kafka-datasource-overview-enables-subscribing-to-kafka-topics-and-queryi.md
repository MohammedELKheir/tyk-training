---
id: architect-universal-data-graph-2-data-sources/007-kafka-datasource-overview-enables-subscribing-to-kafka-topics-and-queryi
deck_id: architect-universal-data-graph-2-data-sources
order: 7
slug: kafka-datasource-overview-enables-subscribing-to-kafka-topics-and-queryi
title: "Kafka Datasource Overview Enables subscribing to Kafka topics and querying event"
summary: "s with GraphQL. Integrates Kafka's powerful pub/sub model into your Universal Data Graph. Operates based on Kafka’s consumer group mechanism. Kafka Consumer Groups A group of coope"
standalone_safe: true
reusable: true
requires_context: []
builds_on: []
recommended_next: [architect-universal-data-graph-2-data-sources/008-kafka-datasource-overview-basic-kafka-configuration-broker-addresses-kaf]
customer_visible: true
notes_visibility: customer-safe
---
---
layout: default
---

<div style="position:relative; width:100%; height:100%; overflow:hidden; background:white; color:#101018;">
  <h1 style="position:absolute; left:36px; top:24px; margin:0; color:#5c21d4; font-size:2.8rem; line-height:1.05; font-weight:800;">Kafka Datasource Overview</h1>

  <div style="position:absolute; left:43px; top:110px; width:783px; font-size:0.92rem; line-height:1.42; color:#101018;">
    <ul style="margin:0 0 0.45rem 0; padding-left:1.35rem;">
      <li>Enables subscribing to Kafka topics and querying events with GraphQL.</li>
      <li>Integrates Kafka's powerful pub/sub model into your Universal Data Graph.</li>
      <li>Operates based on Kafka’s consumer group mechanism.</li>
    </ul>

    <div style="font-weight:700; margin:0.25rem 0 0.2rem 0;">Kafka Consumer Groups</div>
    <ul style="margin:0; padding-left:1.35rem;">
      <li>A group of cooperating consumers that share processing load.</li>
      <li>Kafka automatically manages membership and rebalances partitions.</li>
      <li>Allows for horizontal scaling and fault tolerance.</li>
    </ul>
  </div>

  <TykCornerBadge />
</div>

<!-- Notes: Kafka is a distributed messaging system used for building real-time data pipelines and streaming applications. In Tyk, we can treat Kafka as a data source in our Universal Data Graph. This means developers can subscribe to topics and access streamed data using GraphQL queries. This is incredibly powerful for use cases involving live data such as product updates, financial tickers, IoT data, or live dashboards. -->
