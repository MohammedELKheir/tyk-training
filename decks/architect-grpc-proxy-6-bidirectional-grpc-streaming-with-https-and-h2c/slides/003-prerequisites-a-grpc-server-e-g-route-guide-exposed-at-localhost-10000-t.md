---
id: architect-grpc-proxy-6-bidirectional-grpc-streaming-with-https-and-h2c/003-prerequisites-a-grpc-server-e-g-route-guide-exposed-at-localhost-10000-t
deck_id: architect-grpc-proxy-6-bidirectional-grpc-streaming-with-https-and-h2c
order: 3
slug: prerequisites-a-grpc-server-e-g-route-guide-exposed-at-localhost-10000-t
title: "Prerequisites A gRPC server (e.g. route_guide ) Exposed at localhost:10000 , TLS"
summary: "disabled A gRPC client (sample or your app) A valid certificate for HTTPS Tyk Gateway and Dashboard Set flush_interval = 1 ms in tyk.conf Tyk"
standalone_safe: true
reusable: true
requires_context: []
builds_on: []
recommended_next: [architect-grpc-proxy-6-bidirectional-grpc-streaming-with-https-and-h2c/004-tyk-api-configuration-protocol-https-upload-ssl-certificate-custom-domai]
customer_visible: true
notes_visibility: customer-safe
---
---
layout: default
---

<div style="position:relative; width:100%; height:100%; margin:-12px 0 0 0; color:#08061f; font-family:Inter, Arial, sans-serif;">
  <h1 style="margin:0 0 0 8px; color:#5c17d7; font-size:2.18rem; line-height:1.04; font-weight:800; letter-spacing:-0.02em; border:none; width:780px;">
    Prerequisites
  </h1>

  <div style="margin-left:20px; margin-top:1.9rem; width:760px; font-size:0.96rem; line-height:1.35; color:#0f0d28;">
    <ul style="margin:0; padding-left:1.4rem; list-style-type:disc;">
      <li style="margin-bottom:0.34rem;">A gRPC server (e.g. <code style="font-size:0.88em;">route_guide</code>)</li>
    </ul>
    <ul style="margin:0.02rem 0 0 2.25rem; padding-left:1.2rem; list-style-type:circle;">
      <li style="margin-bottom:0.4rem;">Exposed at <code style="font-size:0.88em;">localhost:10000</code>, TLS disabled</li>
    </ul>
    <ul style="margin:0.12rem 0 0 1.4rem; padding-left:1.4rem; list-style-type:disc;">
      <li style="margin-bottom:0.34rem;">A gRPC client (sample or your app)</li>
      <li style="margin-bottom:0.34rem;">A valid certificate for HTTPS</li>
      <li style="margin-bottom:0.34rem;">Tyk Gateway and Dashboard</li>
      <li>Set <code style="font-size:0.88em;">flush_interval = 1 ms</code> in <code style="font-size:0.88em;">tyk.conf</code></li>
    </ul>
  </div>

  <div style="position:absolute; right:-54px; bottom:-38px; width:112px; height:78px; background:#090523; border-top-left-radius:34px; display:flex; align-items:center; justify-content:center; gap:7px; padding-left:12px; box-sizing:border-box;">
    <div style="width:14px; height:14px; border-radius:4px; background:#20e8bc;"></div>
    <div style="color:#ffffff; font-size:1.18rem; font-weight:800; letter-spacing:-0.04em; line-height:1;">Tyk</div>
  </div>
</div>

<!-- Notes: Before configuring Tyk, make sure your gRPC server is running with TLS disabled. This is intentional so that we can connect over H2C. Also, the Tyk Gateway’s flush_interval should be set to 1 millisecond to ensure data is forwarded immediately, which is critical for bidirectional streaming. -->
