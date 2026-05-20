---
theme: tyk
layout: cover
aspectRatio: 16/9
canvasWidth: 980
highlighter: shiki
lineNumbers: false
drawings:
  persist: false
transition: slide-left
title: "Server-Sent Events (SSE)"
---

<div style="position:relative; display:flex; flex-direction:column; justify-content:center; align-items:center; height:100%; text-align:center; color:white;">
  <h1 style="font-size:2.6rem; font-weight:800; color:white; margin:0; border:0;">Server-Sent Events (SSE)</h1>
  <img src="./images/icons/tyk-logo.png" style="position:absolute; bottom:1.5rem; right:1.5rem; width:6rem; opacity:0.8;" />
</div>

---
layout: default
---

# Overview

- SSE: Server pushes updates to client via HTTP
- One-way only (server → client)

**Use cases:**
  - Stock tickers
  - Notifications
  - Activity feeds

- Simpler alternative to WebSockets when no client-to-server messaging is needed

<!-- Notes: "Server-Sent Events are ideal for real-time updates where the client doesn't need to send data back — things like dashboards, notifications, or live data feeds. They work over standard HTTP, so they're firewall-friendly and easy to implement. Tyk Gateway can act as an SSE proxy to relay those server updates to your clients." -->

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

---
layout: default
---

# Output Example

<div style="margin-top:1rem;">

<p style="font-size:1.05rem; font-weight:600; margin-bottom:0.5rem;">Console Output:</p>
<div style="background:#1a1a2e; border-radius:6px; padding:14px 18px;">
  <pre style="color:#e0e0e0; font-size:0.7rem; margin:0; font-family:monospace; line-height:1.6; white-space:pre;">Message: 20 - the time is 2013-03-08 21:08:01.260967
Message: 21 - the time is 2013-03-08 21:08:06.262034
Message: 22 - the time is 2013-03-08 21:08:11.262608</pre>
</div>

</div>

<!-- Notes: "This output shows the SSE stream working correctly — updates being passed from the server through the Tyk Gateway to your terminal. Each message has a sequential ID and timestamp, typical for SSE." -->
