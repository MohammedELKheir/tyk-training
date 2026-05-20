---
id: architect-tcp-proxy-1-tcp-proxy/002-overview-using-tyk-as-a-tcp-proxy-tyk-can-act-as-a-reverse-proxy-for-tcp
deck_id: architect-tcp-proxy-1-tcp-proxy
order: 2
slug: overview-using-tyk-as-a-tcp-proxy-tyk-can-act-as-a-reverse-proxy-for-tcp
title: "Overview – Using Tyk as a TCP Proxy Tyk can act as a reverse proxy for TCP servi"
summary: "ces. Enables management of non-HTTP applications (e.g., databases, custom protocols). Configure via: API definitions (JSON) Tyk Dashboard UI Basic TCP API Definition { \"listen_port"
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

<div style="position:relative; width:100%; height:100%; background:#ffffff; overflow:hidden; color:#0b0a24; font-family:Inter, Arial, sans-serif;">
  <h1 style="position:absolute; left:56px; top:12px; width:820px; margin:0; color:#5f11d6; font-size:3.1rem; line-height:1.02; font-weight:800; letter-spacing:-0.02em; border:none;">
    Overview – Using Tyk as a TCP<br/>Proxy
  </h1>

  <div style="position:absolute; left:75px; top:112px; width:780px; font-size:1.03rem; line-height:1.28; color:#0b0a24;">
    <ul style="margin:0; padding-left:1.45rem; list-style-type:disc;">
      <li style="margin-bottom:0.42rem;">Tyk can act as a reverse proxy for TCP services.</li>
      <li style="margin-bottom:0.42rem;">Enables management of non-HTTP applications (e.g., databases, custom protocols).</li>
      <li style="margin-bottom:0.26rem;">Configure via:</li>
    </ul>
    <ul style="margin:0.05rem 0 0 2.65rem; padding-left:1.15rem; list-style-type:circle;">
      <li style="margin-bottom:0.28rem;">API definitions (JSON)</li>
      <li>Tyk Dashboard UI</li>
    </ul>
  </div>

  <div style="position:absolute; left:17px; top:299px; width:470px;">
    <div style="font-size:2rem; font-weight:800; line-height:1.05; color:#0b0a24; margin-bottom:0.34rem;">Basic TCP API Definition</div>
    <pre style="margin:0; font-size:0.79rem; line-height:1.55; color:#2f2747; font-family:Menlo, Monaco, 'Courier New', monospace; white-space:pre;">{
  "listen_port": 30001,
  "protocol": "tls",
  "certificate": ["&lt;cert-id&gt;"],
  "proxy": {
    "target_url": "tls://upstream:9191"
  }
}</pre>
  </div>

  <div style="position:absolute; left:73px; top:534px; width:650px; font-size:0.9rem; line-height:1.28; color:#0b0a24;">
    <ul style="margin:0; padding-left:1.45rem; list-style-type:disc;">
      <li style="margin-bottom:0.24rem;"><span style="font-family:Menlo, Monaco, 'Courier New', monospace;">protocol</span>: <span style="font-family:Menlo, Monaco, 'Courier New', monospace;">"tcp"</span> or <span style="font-family:Menlo, Monaco, 'Courier New', monospace;">"tls"</span></li>
      <li style="margin-bottom:0.24rem;"><span style="font-family:Menlo, Monaco, 'Courier New', monospace;">target_url</span>: must start with <span style="font-family:Menlo, Monaco, 'Courier New', monospace;">tcp://</span> or <span style="font-family:Menlo, Monaco, 'Courier New', monospace;">tls://</span></li>
      <li>For TLS, attach certificates by ID or path</li>
    </ul>
  </div>

  <div style="position:absolute; right:0; bottom:0; width:107px; height:77px; background:#050325; border-top-left-radius:34px; display:flex; align-items:center; justify-content:center; gap:6px; padding-left:12px; box-sizing:border-box;">
    <div style="width:14px; height:14px; border-radius:4px; background:#22e9bc;"></div>
    <div style="color:#ffffff; font-size:1.15rem; font-weight:800; letter-spacing:-0.04em; line-height:1;">Tyk</div>
  </div>
</div>

<!-- Notes: "Tyk is traditionally known for managing APIs over HTTP and HTTPS, but it also supports proxying raw TCP traffic.
This means you can use Tyk to route traffic not just for REST or GraphQL APIs, but also for things like databases, Redis, MQTT brokers, or any custom protocol over TCP or TLS.
It’s especially useful when you want to bring centralized access control, monitoring, and failover to those non-HTTP services."

"Here’s what a basic TCP API definition looks like.
In this example, Tyk listens on port 30001 using TLS. It forwards traffic to an upstream service also using TLS.
You can define this through the Tyk API using JSON. The protocol field supports either tcp or tls, and the target_url needs to use the same scheme.
If you’re using TLS, you can specify one or more certificates by ID or path." -->
