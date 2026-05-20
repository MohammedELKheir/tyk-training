---
id: architect-grpc-proxy-1-grpc-overview/004-prerequisites-for-grpc-proxying
deck_id: architect-grpc-proxy-1-grpc-overview
order: 4
slug: prerequisites-for-grpc-proxying
title: "Prerequisites for gRPC Proxying"
summary: "• Enable HTTP/2 in tyk.conf \"http_server_options\": { \"enable_http2\": true }, \"proxy_enable_http2\": true • Match listen path to service name • Set strip_listen_path: false Tyk"
standalone_safe: true
reusable: true
requires_context: []
builds_on: []
recommended_next: []
customer_visible: true
notes_visibility: customer-safe
---
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
