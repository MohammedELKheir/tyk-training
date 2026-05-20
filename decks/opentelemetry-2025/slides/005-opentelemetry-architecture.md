---
id: opentelemetry-2025/005-opentelemetry-architecture
deck_id: opentelemetry-2025
order: 5
slug: opentelemetry-architecture
title: "OpenTelemetry Architecture"
summary: "OpenTelemetry Your observability back-end"
standalone_safe: true
reusable: true
requires_context: []
builds_on: []
recommended_next: [opentelemetry-2025/006-opentracing-and-opentelemetry]
customer_visible: true
notes_visibility: customer-safe
---
---
layout: default
---

<h2 style="color:#5900CB; font-size:1.8rem; font-weight:bold; margin-bottom:0.5rem;">OpenTelemetry</h2>

<div style="display:flex; gap:1rem; margin-top:0.5rem;">
  <div style="flex:2;">
    <img src="./images/screenshots/otel-flow-main.png" style="width:100%; max-width:612px;" />
  </div>
  <div style="flex:1; display:flex; flex-direction:column; align-items:center;">
    <img src="./images/screenshots/otel-analytics.png" style="width:100%; max-width:289px;" />
  </div>
</div>

<div style="display:flex; justify-content:center; align-items:center; margin-top:1rem;">
  <img src="./images/screenshots/otel-collector.png" style="width:119px; height:44px;" />
</div>

<p style="text-align:center; font-size:0.85rem; color:#03031C; margin-top:0.3rem;">Your observability back-end</p>

<img src="./images/icons/slide5-logo.png" style="position:absolute; bottom:1rem; right:1rem; width:3.5rem; opacity:0.6;" />

<!-- Notes: Flow of Data - API Client makes a request to Tyk Gateway.
Telemetry data generated: metrics, logs, and traces collected at this stage.
OpenTelemetry standardizes the export of telemetry data.
Redis: Temporary storage for analytics data.
Pump extracts data and sends to external analytics storage.
OpenTelemetry Collector sends data to observability backends like Prometheus, Elasticsearch, or Jaeger. -->
