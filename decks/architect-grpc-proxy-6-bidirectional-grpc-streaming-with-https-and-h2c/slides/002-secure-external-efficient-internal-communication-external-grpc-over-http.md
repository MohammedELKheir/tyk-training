---
id: architect-grpc-proxy-6-bidirectional-grpc-streaming-with-https-and-h2c/002-secure-external-efficient-internal-communication-external-grpc-over-http
deck_id: architect-grpc-proxy-6-bidirectional-grpc-streaming-with-https-and-h2c
order: 2
slug: secure-external-efficient-internal-communication-external-grpc-over-http
title: "Secure External + Efficient Internal Communication External: gRPC over HTTPS via"
summary: "Tyk Internal: gRPC over H2C (plain HTTP/2) Common in Kubernetes environments TLS termination at ingress Plain HTTP inside cluster gRPC client ↔ Tyk Gateway (HTTPS) ↔ gRPC Server (H"
standalone_safe: true
reusable: true
requires_context: []
builds_on: []
recommended_next: [architect-grpc-proxy-6-bidirectional-grpc-streaming-with-https-and-h2c/003-prerequisites-a-grpc-server-e-g-route-guide-exposed-at-localhost-10000-t]
customer_visible: true
notes_visibility: customer-safe
---
---
layout: default
---

<div style="position:relative; width:100%; height:100%; margin:-12px 0 0 0; color:#08061f; font-family:Inter, Arial, sans-serif;">
  <h1 style="margin:0 0 0 8px; color:#5c17d7; font-size:2.18rem; line-height:1.04; font-weight:800; letter-spacing:-0.02em; border:none; width:780px;">
    Secure External + Efficient Internal<br/>Communication
  </h1>

  <div style="margin-left:20px; margin-top:1.55rem; width:760px; font-size:0.96rem; line-height:1.35; color:#0f0d28;">
    <ul style="margin:0; padding-left:1.4rem; list-style-type:disc;">
      <li style="margin-bottom:0.38rem;">External: gRPC over <strong>HTTPS</strong> via Tyk</li>
      <li style="margin-bottom:0.38rem;">Internal: gRPC over <strong>H2C</strong> (plain HTTP/2)</li>
      <li style="margin-bottom:0.18rem;">Common in <strong>Kubernetes</strong> environments</li>
    </ul>
    <ul style="margin:0.04rem 0 0 2.3rem; padding-left:1.2rem; list-style-type:circle;">
      <li style="margin-bottom:0.24rem;">TLS termination at ingress</li>
      <li>Plain HTTP inside cluster</li>
    </ul>
  </div>

  <p style="margin:2.8rem 0 0 28px; font-size:0.9rem; color:#18152f;">
    gRPC client ↔ Tyk Gateway (HTTPS) ↔ gRPC Server (H2C)
  </p>

  <div style="position:absolute; right:-54px; bottom:-38px; width:112px; height:78px; background:#090523; border-top-left-radius:34px; display:flex; align-items:center; justify-content:center; gap:7px; padding-left:12px; box-sizing:border-box;">
    <div style="width:14px; height:14px; border-radius:4px; background:#20e8bc;"></div>
    <div style="color:#ffffff; font-size:1.18rem; font-weight:800; letter-spacing:-0.04em; line-height:1;">Tyk</div>
  </div>
</div>

<!-- Notes: This example demonstrates a common pattern in Kubernetes deployments — securing external traffic with TLS while using HTTP/2 Cleartext (H2C) for internal service-to-service communication. Tyk terminates the TLS connection, then forwards gRPC traffic to the upstream server using H2C, enabling efficient bidirectional streaming. -->
