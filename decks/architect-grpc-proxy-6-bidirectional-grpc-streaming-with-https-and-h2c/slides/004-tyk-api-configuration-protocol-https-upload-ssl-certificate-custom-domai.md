---
id: architect-grpc-proxy-6-bidirectional-grpc-streaming-with-https-and-h2c/004-tyk-api-configuration-protocol-https-upload-ssl-certificate-custom-domai
deck_id: architect-grpc-proxy-6-bidirectional-grpc-streaming-with-https-and-h2c
order: 4
slug: tyk-api-configuration-protocol-https-upload-ssl-certificate-custom-domai
title: "Tyk API Configuration Protocol: HTTPS Upload SSL certificate Custom domain: tyk."
summary: "com Listen path: /routeguide.RouteGuide RouteChat method will be used (bidirectional) Target URL: h2c://localhost:10000 Tyk"
standalone_safe: true
reusable: true
requires_context: []
builds_on: []
recommended_next: [architect-grpc-proxy-6-bidirectional-grpc-streaming-with-https-and-h2c/005-testing-bidirectional-streaming-point-client-to-https-tyk-com-8000-use-t]
customer_visible: true
notes_visibility: customer-safe
---
---
layout: default
---

<div style="position:relative; width:100%; height:100%; margin:-12px 0 0 0; color:#08061f; font-family:Inter, Arial, sans-serif;">
  <h1 style="margin:0 0 0 8px; color:#5c17d7; font-size:2.18rem; line-height:1.04; font-weight:800; letter-spacing:-0.02em; border:none; width:780px;">
    Tyk API Configuration
  </h1>

  <div style="margin-left:24px; margin-top:1.9rem; width:760px; color:#0f0d28;">
    <ol style="margin:0; padding-left:1.2rem; font-size:0.95rem; line-height:1.9;">
      <li><span>Protocol: <strong>HTTPS</strong></span></li>
      <li><span>Upload SSL certificate</span></li>
      <li><span>Custom domain: <code style="font-size:0.88em;">tyk.com</code></span></li>
      <li><span>Listen path: <code style="font-size:0.88em;">/routeguide.RouteGuide</code></span></li>
    </ol>
    <p style="margin:0.35rem 0 0 3.4rem; font-size:0.9rem; color:#18152f;">RouteChat method will be used (bidirectional)</p>
    <ol start="1" style="margin:0.25rem 0 0 0; padding-left:1.2rem; font-size:0.95rem; line-height:1.9;">
      <li><span>Target URL: <code style="font-size:0.88em;">h2c://localhost:10000</code></span></li>
    </ol>
  </div>

  <div style="position:absolute; right:-54px; bottom:-38px; width:112px; height:78px; background:#090523; border-top-left-radius:34px; display:flex; align-items:center; justify-content:center; gap:7px; padding-left:12px; box-sizing:border-box;">
    <div style="width:14px; height:14px; border-radius:4px; background:#20e8bc;"></div>
    <div style="color:#ffffff; font-size:1.18rem; font-weight:800; letter-spacing:-0.04em; line-height:1;">Tyk</div>
  </div>
</div>

<!-- Notes: In the Tyk Dashboard, create a new API definition. Set the protocol to HTTPS so clients can connect securely. Then, point the target URL to the internal gRPC server using the h2c:// prefix. This instructs Tyk to forward requests using HTTP/2 without TLS, ideal for intra-cluster calls. -->
