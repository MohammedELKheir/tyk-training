---
id: opentelemetry-2025/011-detailed-tracing-for-troubleshooting
deck_id: opentelemetry-2025
order: 11
slug: detailed-tracing-for-troubleshooting
title: "Detailed tracing for troubleshooting"
summary: "detailed_tracing to true"
standalone_safe: true
reusable: true
requires_context: []
builds_on: []
recommended_next: []
customer_visible: true
notes_visibility: customer-safe
---
---
layout: default
---

<h2 style="color:#5900CB; font-size:1.8rem; font-weight:bold; margin-bottom:0.3rem;">Detailed tracing for troubleshooting</h2>
<p style="font-size:0.95rem; color:#555; margin-bottom:1rem;">detailed_tracing to <code style="background:#f0f0f0; padding:2px 6px; border-radius:4px;">true</code></p>

<div style="display:flex; justify-content:center;">
  <img src="./images/screenshots/detailed-tracing.png" style="width:100%; max-width:896px;" />
</div>

<!-- Notes: With detailed tracing enabled, multiple spans are created - each corresponding to a specific middleware or stage in the request lifecycle.
Middleware spans include: Authentication Middleware, Rate Limiting Middleware, Transformation Middleware, Upstream Communication.
Each span shows duration, sequence of execution, and the exact middleware that may introduce latency.
This provides granular visibility into Tyk's request handling for troubleshooting latency issues. -->
