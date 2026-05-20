---
id: opentelemetry-2025/009-set-up
deck_id: opentelemetry-2025
order: 9
slug: set-up
title: "Set up"
summary: "Set up"
standalone_safe: true
reusable: true
requires_context: []
builds_on: []
recommended_next: [opentelemetry-2025/010-per-default-1-span-per-api-call]
customer_visible: true
notes_visibility: customer-safe
---
---
layout: default
---

<h2 style="color:#5900CB; font-size:1.8rem; font-weight:bold; margin-bottom:1rem;">Set up</h2>

<div style="display:flex; gap:1rem; margin-top:0.5rem;">
  <div style="flex:1;">
    <img src="./images/screenshots/setup-api-def.png" style="width:100%; max-width:592px;" />
  </div>
  <div style="flex:1;">
    <img src="./images/screenshots/setup-config.png" style="width:100%; max-width:640px;" />
  </div>
</div>

<!-- Notes: To Enable OpenTelemetry in Tyk Gateway, enable it in the gateway configuration file.
OpenTelemetry is disabled by default. Set TYK_GW_OPENTELEMETRY_ENABLED to true.
Export spans using gRPC protocol to the OpenTelemetry Collector endpoint at localhost:4317.
TYK_GW_OPENTELEMETRY_EXPORTER specifies grpc by default.
TYK_GW_OPENTELEMETRY_ENDPOINT points to the OpenTelemetry Collector.
Enable detailed_tracing to true at API level for specific APIs. -->
