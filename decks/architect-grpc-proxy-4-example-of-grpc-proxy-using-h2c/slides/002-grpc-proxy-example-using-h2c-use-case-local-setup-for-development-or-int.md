---
id: architect-grpc-proxy-4-example-of-grpc-proxy-using-h2c/002-grpc-proxy-example-using-h2c-use-case-local-setup-for-development-or-int
deck_id: architect-grpc-proxy-4-example-of-grpc-proxy-using-h2c
order: 2
slug: grpc-proxy-example-using-h2c-use-case-local-setup-for-development-or-int
title: "gRPC Proxy Example Using H2C Use case: Local setup for development or internal t"
summary: "esting Tools required: gRPC Server (e.g., HelloWorld example from GitHub ) gRPC Client (e.g., grpcurl) Tyk Gateway & Dashboard gRPC client → Tyk Gateway → gRPC server (H2C connecti"
standalone_safe: true
reusable: true
requires_context: []
builds_on: []
recommended_next: [architect-grpc-proxy-4-example-of-grpc-proxy-using-h2c/003-tyk-grpc-h2c-proxy-setup-steps-1-start-your-hellowworld-grpc-server-e-g]
customer_visible: true
notes_visibility: customer-safe
---
---
layout: default
---

<div style="position:relative; width:100%; height:100%; background:#ffffff; overflow:hidden; color:#0b0a24; font-family:Inter, Arial, sans-serif;">
  <h1 style="position:absolute; left:75px; top:20px; width:840px; margin:0; color:#5d13d8; font-size:3.05rem; line-height:1.02; font-weight:800; letter-spacing:-0.025em; border:none;">
    gRPC Proxy Example Using H2C
  </h1>

  <div style="position:absolute; left:110px; top:140px; width:760px; color:#0b0a24; font-size:1.02rem; line-height:1.34;">
    <ul style="margin:0; padding-left:1.3rem; list-style-type:disc;">
      <li style="margin-bottom:0.35rem; padding-left:0.45rem;">Use case: Local setup for development or internal testing</li>
      <li style="padding-left:0.45rem;">Tools required:</li>
    </ul>
    <ul style="margin:0.16rem 0 0 2.8rem; padding-left:1rem; list-style-type:circle;">
      <li style="margin-bottom:0.22rem; padding-left:0.45rem;">gRPC Server (e.g., <span style="color:#d9bdfc; text-decoration:underline;">HelloWorld example from GitHub</span>)</li>
      <li style="margin-bottom:0.22rem; padding-left:0.45rem;">gRPC Client (e.g., grpcurl)</li>
      <li style="padding-left:0.45rem;">Tyk Gateway &amp; Dashboard</li>
    </ul>
  </div>

  <div style="position:absolute; left:96px; top:470px; color:#0b0a24; font-size:1.1rem; line-height:1.2; letter-spacing:-0.01em;">
    gRPC client → Tyk Gateway → gRPC server (H2C connection)
  </div>

  <div style="position:absolute; right:0; bottom:0; width:107px; height:77px; background:#050325; border-top-left-radius:34px; display:flex; align-items:center; justify-content:center; gap:6px; padding-left:12px; box-sizing:border-box;">
    <div style="width:14px; height:14px; border-radius:4px; background:#22e9bc;"></div>
    <div style="color:#ffffff; font-size:1.15rem; font-weight:800; letter-spacing:-0.04em; line-height:1;">Tyk</div>
  </div>
</div>

<!-- Notes: In this example, we’ll walk through how to set up a gRPC proxy using H2C—HTTP/2 without TLS. This is the most straightforward way to test a gRPC setup with Tyk locally or internally. All you need is a basic gRPC server, a tool like grpcurl to simulate requests, and a running Tyk Gateway and Dashboard. -->
