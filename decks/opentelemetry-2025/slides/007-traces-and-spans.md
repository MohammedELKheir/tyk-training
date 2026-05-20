---
id: opentelemetry-2025/007-traces-and-spans
deck_id: opentelemetry-2025
order: 7
slug: traces-and-spans
title: "Traces and Spans"
summary: "Traces and Spans"
standalone_safe: true
reusable: true
requires_context: []
builds_on: []
recommended_next: [opentelemetry-2025/008-open-telemetry-support-in-tyk-gateway]
customer_visible: true
notes_visibility: customer-safe
---
---
layout: default
---

<h2 style="color:#5900CB; font-size:1.8rem; font-weight:bold; margin-bottom:1rem;">Traces and Spans</h2>

<div style="display:flex; justify-content:center;">
  <img src="./images/screenshots/traces-spans-diagram.png" style="width:100%; max-width:947px;" />
</div>

<!-- Notes: A trace represents the complete journey of a request as it flows through the system. It connects the end-to-end path from the moment the request enters the system to its final destination.
A span is the smallest unit of a trace. It represents a single operation. Each span captures: a specific operation, start and end times (latency), and metadata such as tags and attributes.
Example: A user makes an API request that travels through Load Balancer, Auth Service, Billing Service, Resource Service. Each service is represented as a span. -->
