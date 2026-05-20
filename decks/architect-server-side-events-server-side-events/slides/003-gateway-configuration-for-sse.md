---
id: architect-server-side-events-server-side-events/003-gateway-configuration-for-sse
deck_id: architect-server-side-events-server-side-events
order: 3
slug: gateway-configuration-for-sse
title: "Gateway Configuration for SSE"
summary: "Enable WebSocket/SSE support: \"http_server_options.enable_websockets\": true Adjust timeouts to keep connection alive: \"read_timeout\" and \"write_timeout\" (e.g. 2000) Stream flush co"
standalone_safe: true
reusable: true
requires_context: []
builds_on: []
recommended_next: [architect-server-side-events-server-side-events/004-example-setup-streaming-messages]
customer_visible: true
notes_visibility: customer-safe
---
---
layout: default
---

# Gateway Configuration for SSE

<div style="margin-top:1rem;">

<p style="font-size:1.05rem; font-weight:600; margin-bottom:0.3rem;">Enable WebSocket/SSE support:</p>
<div style="background:#1a1a2e; border-radius:6px; padding:10px 14px; margin-bottom:1rem;">
  <pre style="color:#e0e0e0; font-size:0.7rem; margin:0; font-family:monospace; line-height:1.5; white-space:pre;">"http_server_options.enable_websockets": true</pre>
</div>

<p style="font-size:1.05rem; font-weight:600; margin-bottom:0.3rem;">Adjust timeouts to keep connection alive:</p>
<div style="background:#1a1a2e; border-radius:6px; padding:10px 14px; margin-bottom:1rem;">
  <pre style="color:#e0e0e0; font-size:0.7rem; margin:0; font-family:monospace; line-height:1.5; white-space:pre;">"read_timeout" and "write_timeout" (e.g. 2000)</pre>
</div>

<p style="font-size:1.05rem; font-weight:600; margin-bottom:0.3rem;">Stream flush control:</p>
<div style="background:#1a1a2e; border-radius:6px; padding:10px 14px;">
  <pre style="color:#e0e0e0; font-size:0.7rem; margin:0; font-family:monospace; line-height:1.5; white-space:pre;">"flush_interval": 1 (in seconds)</pre>
</div>

</div>

<!-- Notes: "Even though this isn't technically WebSockets, Tyk uses the same internal handler. Setting a low flush interval helps ensure SSE messages don't get buffered and delayed — instead, they're flushed through the proxy as they arrive." -->
