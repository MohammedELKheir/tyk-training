---
id: architect-server-side-events-server-side-events/004-example-setup-streaming-messages
deck_id: architect-server-side-events-server-side-events
order: 4
slug: example-setup-streaming-messages
title: "Example Setup – Streaming Messages"
summary: "Run Golang SSE server on :8000 API configuration in Tyk: listen_path: /sse strip_listen_path: true target_url: http://host.docker.internal:8000 Test via: curl http://localhost:8080"
standalone_safe: true
reusable: true
requires_context: []
builds_on: []
recommended_next: [architect-server-side-events-server-side-events/005-output-example]
customer_visible: true
notes_visibility: customer-safe
---
---
layout: default
---

# Example Setup – Streaming Messages

<div style="margin-top:1rem;">

<p style="font-size:1.05rem; line-height:1.7;">Run Golang SSE server on <strong>:8000</strong></p>

<p style="font-size:1.05rem; font-weight:600; margin-top:1rem; margin-bottom:0.3rem;">API configuration in Tyk:</p>
<div style="background:#1a1a2e; border-radius:6px; padding:10px 14px; margin-bottom:1rem;">
  <pre style="color:#e0e0e0; font-size:0.7rem; margin:0; font-family:monospace; line-height:1.5; white-space:pre;">listen_path: /sse
strip_listen_path: true
target_url: http://host.docker.internal:8000</pre>
</div>

<p style="font-size:1.05rem; font-weight:600; margin-bottom:0.3rem;">Test via:</p>
<div style="background:#1a1a2e; border-radius:6px; padding:10px 14px;">
  <pre style="color:#e0e0e0; font-size:0.7rem; margin:0; font-family:monospace; line-height:1.5; white-space:pre;">curl http://localhost:8080/sse/events/</pre>
</div>

</div>

<!-- Notes: "In this example, the SSE server pushes timestamps every 5 seconds. Once the API is published in Tyk, simply hit the /sse/events/ path through the Gateway using curl, and you'll receive a continuous stream of updates. This confirms the proxy is working." -->
