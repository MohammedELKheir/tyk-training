---
id: architect-universal-data-graph-2-data-sources/012-kafka-datasource-overview-graphql-subscriptions-with-kafka-real-time-sub
deck_id: architect-universal-data-graph-2-data-sources
order: 12
slug: kafka-datasource-overview-graphql-subscriptions-with-kafka-real-time-sub
title: "Kafka Datasource Overview GraphQL Subscriptions with Kafka Real-Time Subscriptio"
summary: "ns Use GraphQL subscription queries to listen to Kafka events. Define Subscription type in your schema: type Product { name: String price: Int inStock: Int } type Subscription { pr"
standalone_safe: true
reusable: true
requires_context: []
builds_on: []
recommended_next: [architect-universal-data-graph-2-data-sources/013-kafka-datasource-overview-publishing-test-events-simulating-kafka-events]
customer_visible: true
notes_visibility: customer-safe
---
---
layout: default
---

<div style="position:relative; width:100%; height:100%; overflow:hidden; background:white; color:#101018;">
  <h1 style="position:absolute; left:36px; top:24px; margin:0; color:#5c21d4; font-size:2.8rem; line-height:1.05; font-weight:800;">Kafka Datasource Overview</h1>

  <div style="position:absolute; left:43px; top:110px; width:467px; font-size:0.86rem; line-height:1.34; color:#101018;">
    <div style="font-weight:700; margin-bottom:0.24rem;">GraphQL Subscriptions with Kafka</div>
    <div style="font-weight:700; margin-bottom:0.18rem;">Real-Time Subscriptions</div>
    <div style="margin-bottom:0.18rem;">Use GraphQL subscription queries to listen to Kafka events.</div>
    <div style="margin-bottom:0.18rem;">Define Subscription type in your schema:</div>
    <div style="margin:0 0 0.18rem 0; font-size:0.78rem; line-height:1.28; font-family:Menlo, Monaco, Consolas, 'Courier New', monospace;">
      type Product {<br/>
      &nbsp;name: String<br/>
      &nbsp;price: Int<br/>
      &nbsp;inStock: Int<br/>
      }<br/>
      <br/>
      type Subscription {<br/>
      &nbsp;productUpdated: Product<br/>
      }
    </div>
    <div>Subscribers will get real-time updates on every event.</div>
  </div>

  <div style="position:absolute; left:516px; top:160px; width:436px; font-size:0.86rem; line-height:1.34; color:#101018;">
    <div style="font-weight:700; margin-bottom:0.18rem;">Example Subscription Query</div>
    <div style="margin:0 0 0.18rem 0; font-size:0.78rem; line-height:1.28; font-family:Menlo, Monaco, Consolas, 'Courier New', monospace;">
      subscription Products {<br/>
      &nbsp;&nbsp;&nbsp;&nbsp;productUpdated {<br/>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;name<br/>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;price<br/>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;inStock<br/>
      &nbsp;&nbsp;&nbsp;&nbsp;}<br/>
      }
    </div>
    <ul style="margin:0; padding-left:1.25rem;">
      <li>Automatically receives new product data when Kafka publishes an event.</li>
      <li>Compatible with most GraphQL clients.</li>
    </ul>
  </div>

  <TykCornerBadge />
</div>

<!-- Notes: GraphQL subscriptions are a powerful way to deliver real-time updates to clients. In Tyk, we can map Kafka topics to GraphQL subscription fields.
When an event is published to the topic, all subscribed clients will receive the update instantly. This is done using the standard GraphQL subscription query type. Clients can use any compliant GraphQL client or library to consume these updates — no need for special tooling. -->
