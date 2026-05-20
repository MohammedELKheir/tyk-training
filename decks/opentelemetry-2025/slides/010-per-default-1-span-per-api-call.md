---
id: opentelemetry-2025/010-per-default-1-span-per-api-call
deck_id: opentelemetry-2025
order: 10
slug: per-default-1-span-per-api-call
title: "Per default: 1 span per API call"
summary: "detailed_tracing to false"
standalone_safe: true
reusable: true
requires_context: []
builds_on: []
recommended_next: [opentelemetry-2025/011-detailed-tracing-for-troubleshooting]
customer_visible: true
notes_visibility: customer-safe
---
---
layout: default
---

<h2 style="color:#5900CB; font-size:1.8rem; font-weight:bold; margin-bottom:0.3rem;">Per default: 1 span per API call</h2>
<p style="font-size:0.95rem; color:#555; margin-bottom:1rem;">detailed_tracing to <code style="background:#f0f0f0; padding:2px 6px; border-radius:4px;">false</code></p>

<div style="display:flex; justify-content:center;">
  <img src="./images/screenshots/default-tracing.png" style="width:100%; max-width:947px;" />
</div>

<!-- Notes: By default, when detailed tracing is set to false, Tyk Gateway generates one parent span per API call.
With detailed_tracing disabled, Tyk generates 2 spans: 1 Parent Span capturing the total lifecycle, and 1 Child Span for upstream service response time.
Attributes include: API Name, API Path, API ID, Organization ID.
This configuration is ideal for lightweight observability where basic insights are sufficient. -->
