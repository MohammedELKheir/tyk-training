---
id: architect-universal-data-graph-2-data-sources/009-kafka-datasource-overview-configuring-via-tyk-dashboard-click-the-field
deck_id: architect-universal-data-graph-2-data-sources
order: 9
slug: kafka-datasource-overview-configuring-via-tyk-dashboard-click-the-field
title: "Kafka Datasource Overview Configuring via Tyk Dashboard Click the field to attac"
summary: "h Kafka DataSource. In Configure Data Source, choose KAFKA. Provide: Data source name Broker addresses Topics Group ID Client ID (Optional) Kafka version, balance strategy, field m"
standalone_safe: true
reusable: true
requires_context: []
builds_on: []
recommended_next: [architect-universal-data-graph-2-data-sources/010-kafka-datasource-overview]
customer_visible: true
notes_visibility: customer-safe
---
---
layout: default
---

<div style="position:relative; width:100%; height:100%; overflow:hidden; background:white; color:#101018;">
  <h1 style="position:absolute; left:36px; top:24px; margin:0; color:#5c21d4; font-size:2.8rem; line-height:1.05; font-weight:800;">Kafka Datasource Overview</h1>

  <div style="position:absolute; left:43px; top:110px; width:783px; font-size:0.9rem; line-height:1.38; color:#101018;">
    <div style="font-weight:700; margin-bottom:0.35rem;">Configuring via Tyk Dashboard</div>
    <ul style="margin:0 0 0.22rem 0; padding-left:1.35rem;">
      <li>Click the field to attach Kafka DataSource.</li>
      <li>In Configure Data Source, choose KAFKA.</li>
      <li>Provide:
        <ul style="margin:0.18rem 0 0 0; padding-left:1.25rem; list-style-type:circle;">
          <li>Data source name</li>
          <li>Broker addresses</li>
          <li>Topics</li>
          <li>Group ID</li>
          <li>Client ID</li>
          <li>(Optional) Kafka version, balance strategy, field mappings</li>
        </ul>
      </li>
      <li>Click Save.</li>
    </ul>
  </div>

  <TykCornerBadge />
</div>

<!-- Notes: Tyk provides an intuitive UI to configure Kafka DataSources. Simply select a field in your schema and choose the Kafka data source type. You’ll be asked to input essential information like broker address and topic names.
Optional fields let you further customize how the consumer behaves. These settings allow for advanced balancing and mapping if your data structure is more complex. Once saved, your GraphQL field becomes a live view into that Kafka topic. -->
