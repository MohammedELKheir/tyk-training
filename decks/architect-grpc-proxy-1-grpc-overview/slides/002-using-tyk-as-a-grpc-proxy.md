---
id: architect-grpc-proxy-1-grpc-overview/002-using-tyk-as-a-grpc-proxy
deck_id: architect-grpc-proxy-1-grpc-overview
order: 2
slug: using-tyk-as-a-grpc-proxy
title: "Using Tyk as a gRPC Proxy"
summary: "• Tyk supports gRPC passthrough when using HTTP/2 • Routes gRPC requests based on: • /ServiceName/MethodName • Tyk Features You Can Still Use ◦ URL rewrites ◦ ACLs via keys & polic"
standalone_safe: true
reusable: true
requires_context: []
builds_on: []
recommended_next: [architect-grpc-proxy-1-grpc-overview/003-anatomy-of-a-grpc-call-in-tyk]
customer_visible: true
notes_visibility: customer-safe
---
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
