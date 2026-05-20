---
id: opentelemetry-2025/004-opentracing-architecture
deck_id: opentelemetry-2025
order: 4
slug: opentracing-architecture
title: "OpenTracing Architecture"
summary: "OpenTracing Metrics and logs Distributed tracing"
standalone_safe: true
reusable: true
requires_context: []
builds_on: []
recommended_next: [opentelemetry-2025/005-opentelemetry-architecture]
customer_visible: true
notes_visibility: customer-safe
---
---
layout: default
---

<h2 style="color:#5900CB; font-size:1.8rem; font-weight:bold; margin-bottom:0.5rem;">OpenTracing</h2>

<div style="display:flex; gap:1rem; margin-top:0.5rem;">
  <div style="flex:2;">
    <img src="./images/screenshots/opentracing-flow-main.png" style="width:100%; max-width:612px;" />
  </div>
  <div style="flex:1; display:flex; flex-direction:column; align-items:center;">
    <img src="./images/screenshots/opentracing-analytics.png" style="width:100%; max-width:289px;" />
    <p style="font-size:0.8rem; color:#333; margin-top:0.5rem;">Metrics and logs</p>
  </div>
</div>

<div style="display:flex; justify-content:center; margin-top:0.5rem;">
  <div style="text-align:center;">
    <img src="./images/screenshots/metrics-label.png" style="width:175px; height:42px;" />
    <img src="./images/screenshots/tracing-label.png" style="width:175px; height:34px; margin-top:0.3rem;" />
    <p style="font-size:0.8rem; color:#333; margin-top:0.3rem;">Distributed tracing</p>
  </div>
</div>

<img src="./images/icons/slide4-logo.png" style="position:absolute; bottom:1rem; right:1rem; width:3.5rem; opacity:0.6;" />

<!-- Notes: This diagram demonstrates how the Tyk API Gateway integrates with external analytics and observability tools to provide metrics, logs, and traces.
API Client sends requests to the Tyk Gateway.
Gateway stores analytics in Redis.
Pump collects data from Redis and exports to external systems.
Distributed Tracing via OpenTracing and New Relic.
Metrics and Logs via Prometheus, Datadog, ElasticSearch, Splunk. -->
