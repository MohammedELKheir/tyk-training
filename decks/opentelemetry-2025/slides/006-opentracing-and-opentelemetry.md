---
id: opentelemetry-2025/006-opentracing-and-opentelemetry
deck_id: opentelemetry-2025
order: 6
slug: opentracing-and-opentelemetry
title: "OpenTracing & OpenTelemetry"
summary: "OpenTracing Vendor-neutral API Abstracts tracing implementations Jaeger, Zipkin or New Relic Focuses only on tracing Requires manual instrumentation OpenTelemetry Successor to Open"
standalone_safe: true
reusable: true
requires_context: []
builds_on: []
recommended_next: [opentelemetry-2025/007-traces-and-spans]
customer_visible: true
notes_visibility: customer-safe
---
---
layout: default
---

<h2 style="color:#5900CB; font-size:1.8rem; font-weight:bold; margin-bottom:1.5rem;">OpenTracing &amp; OpenTelemetry</h2>

<div style="display:flex; gap:2rem;">
  <div style="flex:1;">
    <div style="border-left:4px solid #FFC107; padding-left:12px; margin-bottom:1rem;">
      <p style="font-weight:600; margin:0 0 0.3rem 0; color:#03031C;">OpenTracing</p>
      <ul style="font-size:0.9rem; line-height:1.7; padding-left:1rem; margin:0; color:#333;">
        <li>Vendor-neutral API</li>
        <li>Abstracts tracing implementations</li>
        <li>Jaeger, Zipkin or New Relic</li>
        <li>Focuses only on tracing</li>
        <li>Requires manual instrumentation</li>
      </ul>
    </div>
  </div>
  <div style="flex:1;">
    <div style="border-left:4px solid #8438FA; padding-left:12px;">
      <p style="font-weight:600; margin:0 0 0.3rem 0; color:#03031C;">OpenTelemetry</p>
      <ul style="font-size:0.9rem; line-height:1.7; padding-left:1rem; margin:0; color:#333;">
        <li>Successor to OpenTracing</li>
        <li>Data exported to backends like Datadog, Dynatrace or Elasticsearch</li>
        <li>Comprehensive Framework for collecting traces, metrics and logs</li>
        <li>Supported by CNCF</li>
        <li>Extends capability by collecting metrics and logs</li>
      </ul>
    </div>
  </div>
</div>

<!-- Notes: OpenTracing provides a vendor-neutral API for distributed tracing. It allows developers to abstract tracing implementations like Jaeger, Zipkin, or New Relic. Focuses solely on tracing. Its deprecated.
OpenTelemetry is the successor to OpenTracing. Provides a comprehensive framework for collecting traces, metrics, and logs. Backed by the Cloud Native Computing Foundation (CNCF). -->
