---
id: tyk-streams-2025/008-why-tyk-streams
deck_id: tyk-streams-2025
order: 8
slug: why-tyk-streams
title: "Why Tyk Streams?"
summary: "Architecture & Flow Components: Middleware → Manager → Instance → Analytics Middleware: entry point, validates path & auth Manager: builds or reuses Bento stream instances Instance"
standalone_safe: true
reusable: true
requires_context: []
builds_on: []
recommended_next: [tyk-streams-2025/009-core-concept-unified-streaming-layer]
customer_visible: true
notes_visibility: customer-safe
---
---

# Capabilities Overview

- Developer Portal integration via portal_webhook
- Push events to portal-registered webhooks
- Monetize streaming APIs with subscription-oriented delivery patterns
- Automate webhook credential retrieval
- Integrate event flows with external partner systems
- Analytics flow through existing recorder and Pump exporters
- Export to Postgres, Prometheus, Datadog, or Elastic
- Track throughput, latency, connection counts, and errors

---

<div style="padding:0.1rem 0.4rem; min-height:540px; display:flex; flex-direction:column; gap:0.9rem;">
  <div style="font-size:3.25rem; font-weight:800; color:#5E2CCF; line-height:1.02;">Architecture &amp; Flow</div>
  <div style="font-size:1.08rem; line-height:1.35; color:#111; display:flex; flex-direction:column; gap:1rem; max-width:860px;">
    <div>
      <div style="font-size:1.18rem; font-weight:500; margin-bottom:0.2rem;">Components: Middleware → Manager → Instance → Analytics</div>
      <ul style="margin:0; padding-left:1.6rem; display:flex; flex-direction:column; gap:0.2rem;">
        <li><strong>Middleware:</strong> entry point, validates path &amp; auth</li>
        <li><strong>Manager:</strong> builds or reuses Bento stream instances</li>
        <li><strong>Instance:</strong> executes Input → Processor → Output pipeline</li>
        <li><strong>Analytics:</strong> records per-event metrics for Pump</li>
      </ul>
    </div>
    <div>
      <div style="font-size:1.18rem; font-weight:500; margin-bottom:0.2rem;">Stream Manager Caches Stream Configurations</div>
      <ul style="margin:0; padding-left:1.6rem; display:flex; flex-direction:column; gap:0.2rem;">
        <li>Caches by configuration hash for reuse</li>
        <li>Garbage collects idle stream instances</li>
        <li>Tracks active subscriptions (SSE/WS)</li>
      </ul>
    </div>
    <div>
      <div style="font-size:1.18rem; font-weight:500; margin-bottom:0.2rem;">Registers Default Paths (depending on connectors)</div>
      <ul style="margin:0; padding-left:1.6rem; display:flex; flex-direction:column; gap:0.2rem;">
        <li><code>/post</code> → HTTP ingestion endpoint</li>
        <li><code>/post/ws</code> → WebSocket ingestion</li>
        <li><code>/get/stream</code> → SSE/WebSocket delivery</li>
        <li>Automatically wires paths to the right stream</li>
      </ul>
    </div>
    <div>
      <div style="font-size:1.18rem; font-weight:500; margin-bottom:0.2rem;">Collects Metrics for Pump</div>
      <ul style="margin:0; padding-left:1.6rem; display:flex; flex-direction:column; gap:0.2rem;">
        <li>Captures event counts, connection duration, failures</li>
        <li>Exports via Pump to Postgres, Prometheus, Datadog, Elastic</li>
        <li>Same analytics pipeline as REST/GraphQL APIs</li>
      </ul>
    </div>
  </div>
</div>
