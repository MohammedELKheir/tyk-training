---
theme: tyk
layout: none
aspectRatio: 16/9
canvasWidth: 980
highlighter: shiki
lineNumbers: false
drawings:
  persist: false
transition: slide-left
title: "gRPC Proxy"
---

<div style="position:absolute; inset:0; overflow:hidden; background:linear-gradient(135deg, #7d3ef2 0%, #8a30f4 52%, #bd11ff 100%);">
  <div style="position:absolute; left:293px; top:231px; color:white; font-size:49px; font-weight:800; letter-spacing:-0.04em; line-height:1;">gRPC Proxy</div>
  <div class="tyk-footer-badge" style="right:8px; bottom:7px;"><div class="accent"></div><div class="wordmark">Tyk</div></div>
</div>

<!-- Notes:  -->

---
layout: none
---

<div style="position:absolute; inset:0; background:white; overflow:hidden;">
  <h1 class="tyk-title" style="position:absolute; left:44px; top:28px; margin:0; font-size:38px;">Using Tyk as a gRPC Proxy</h1>

  <div style="position:absolute; left:58px; top:127px; width:710px; color:#12162a; font-size:18px; line-height:1.24;">
    <div style="display:flex; align-items:flex-start; margin-bottom:3px;"><span style="display:inline-block; width:26px; font-size:26px; line-height:20px;">•</span><span>Tyk supports gRPC passthrough when using HTTP/2</span></div>
    <div style="display:flex; align-items:flex-start; margin-bottom:3px;"><span style="display:inline-block; width:26px; font-size:26px; line-height:20px;">•</span><span>Routes gRPC requests based on:</span></div>
    <div style="display:flex; align-items:flex-start; margin-bottom:3px; margin-left:1px;"><span style="display:inline-block; width:26px; font-size:22px; line-height:20px;">•</span><span class="tyk-code-inline" style="font-size:0.97em;">/ServiceName/MethodName</span></div>
    <div style="display:flex; align-items:flex-start; margin-bottom:1px;"><span style="display:inline-block; width:26px; font-size:26px; line-height:20px;">•</span><span>Tyk Features You Can Still Use</span></div>
    <div style="margin-left:43px; font-size:17px; line-height:1.18;">
      <div style="display:flex; align-items:flex-start; margin-bottom:2px;"><span style="display:inline-block; width:24px; font-size:20px; line-height:18px;">◦</span><span>URL rewrites</span></div>
      <div style="display:flex; align-items:flex-start; margin-bottom:2px;"><span style="display:inline-block; width:24px; font-size:20px; line-height:18px;">◦</span><span>ACLs via keys &amp; policies</span></div>
      <div style="display:flex; align-items:flex-start; margin-bottom:2px;"><span style="display:inline-block; width:24px; font-size:20px; line-height:18px;">◦</span><span>Load balancing</span></div>
      <div style="display:flex; align-items:flex-start; margin-bottom:2px;"><span style="display:inline-block; width:24px; font-size:20px; line-height:18px;">◦</span><span>Service discovery</span></div>
      <div style="display:flex; align-items:flex-start; margin-bottom:2px;"><span style="display:inline-block; width:24px; font-size:20px; line-height:18px;">◦</span><span>Authentication (JWT, OIDC, etc.)</span></div>
      <div style="display:flex; align-items:flex-start; margin-bottom:2px;"><span style="display:inline-block; width:24px; font-size:20px; line-height:18px;">◦</span><span>Rate limiting</span></div>
      <div style="display:flex; align-items:flex-start; margin-bottom:2px;"><span style="display:inline-block; width:24px; font-size:20px; line-height:18px;">◦</span><span>Logging &amp; tracing (OpenTelemetry)</span></div>
      <div style="display:flex; align-items:flex-start;"><span style="display:inline-block; width:24px; font-size:20px; line-height:18px;">◦</span><span>Mutual TLS</span></div>
    </div>
  </div>

  <div class="tyk-footer-badge" style="right:8px; bottom:7px;"><div class="accent"></div><div class="wordmark">Tyk</div></div>
</div>

<!-- Notes: Now let’s look at gRPC proxying.
 gRPC is a popular choice in modern microservice architectures because of its speed and strict contracts. Tyk supports gRPC passthrough proxying, specifically when gRPC runs over HTTP/2—its most common transport.
 Tyk handles this similarly to standard HTTP APIs. Each gRPC method is addressed via a POST to a URL formatted like /ServiceName/MethodName.
 This allows us to apply the same features we use for REST APIs—You can still apply load balancing, integrate service discovery, enforce authentication, apply rate limiting, and even trace your gRPC calls with OpenTelemetry.
 So even if your backend architecture shifts to gRPC, your API governance remains consistent and robust. -->

---
layout: none
---

<div style="position:absolute; inset:0; background:white; overflow:hidden;">
  <h1 class="tyk-title" style="position:absolute; left:43px; top:24px; margin:0; font-size:38px;">Anatomy of a gRPC Call in Tyk</h1>

  <div style="position:absolute; left:58px; top:124px; width:736px; color:#12162a; font-size:18px; line-height:1.22;">
    <div style="display:flex; align-items:flex-start; margin-bottom:3px;"><span style="display:inline-block; width:26px; font-size:26px; line-height:20px;">•</span><span>gRPC Call Format:</span></div>
    <div style="display:flex; align-items:flex-start; margin-bottom:5px; margin-left:46px;"><span style="display:inline-block; width:24px; font-size:20px; line-height:18px;">◦</span><span class="tyk-code-inline" style="font-size:0.97em;">/google.pubsub.v2.PublisherService/CreateTopic</span></div>
    <div style="display:flex; align-items:flex-start; margin-bottom:3px;"><span style="display:inline-block; width:26px; font-size:26px; line-height:20px;">•</span><span>Always uses <span class="tyk-code-inline" style="font-size:0.97em;">HTTP POST</span></span></div>
    <div style="display:flex; align-items:flex-start; margin-bottom:3px;"><span style="display:inline-block; width:26px; font-size:26px; line-height:20px;">•</span><span>Metadata → <span class="tyk-code-inline" style="font-size:0.97em;">HTTP headers</span></span></div>
    <div style="display:flex; align-items:flex-start;"><span style="display:inline-block; width:26px; font-size:26px; line-height:20px;">•</span><span>Policies and rewrites apply at method-level granularity</span></div>
  </div>

  <div class="tyk-footer-badge" style="right:8px; bottom:7px;"><div class="accent"></div><div class="wordmark">Tyk</div></div>
</div>

<!-- Notes: Let’s break down how gRPC requests are structured.
 Here's an example: /google.pubsub.v2.PublisherService/CreateTopic.
 That’s the full method path, and Tyk can match on it directly.
 All gRPC calls use the POST method, and metadata is passed as HTTP headers. This means everything in the gRPC request—method, service, headers—maps cleanly to the way Tyk operates. -->

---
layout: none
---

<div style="position:absolute; inset:0; background:white; overflow:hidden;">
  <h1 class="tyk-title" style="position:absolute; left:43px; top:24px; margin:0; font-size:38px;">Prerequisites for gRPC Proxying</h1>

  <div style="position:absolute; left:58px; top:124px; width:736px; color:#12162a; font-size:18px; line-height:1.24;">
    <div style="display:flex; align-items:flex-start; margin-bottom:4px;"><span style="display:inline-block; width:26px; font-size:26px; line-height:20px;">•</span><span>Enable HTTP/2 in tyk.conf</span></div>
    <pre class="tyk-code-block" style="font-size:17px; line-height:1.3; margin:2px 0 12px 36px;">"http_server_options": {
    "enable_http2": true
},
"proxy_enable_http2": true</pre>
    <div style="display:flex; align-items:flex-start; margin-bottom:4px;"><span style="display:inline-block; width:26px; font-size:26px; line-height:20px;">•</span><span>Match listen path to service name</span></div>
    <div style="display:flex; align-items:flex-start;"><span style="display:inline-block; width:26px; font-size:26px; line-height:20px;">•</span><span>Set <span class="tyk-code-inline" style="font-size:0.97em;">strip_listen_path: false</span></span></div>
  </div>

  <div class="tyk-footer-badge" style="right:8px; bottom:7px;"><div class="accent"></div><div class="wordmark">Tyk</div></div>
</div>

<!-- Notes: To enable gRPC support in Tyk, make sure of these three things:
 HTTP/2 must be enabled in both the server and proxy sections of your tyk.conf.
 The API's listen path must exactly match the gRPC service name.
 strip_listen_path must be set to false, so the full route is passed to the upstream service.
 Once that’s configured, Tyk can fully support your gRPC services without any custom logic or transformation. -->
