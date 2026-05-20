---
id: architect-grpc-proxy-5-secure-grpc-proxy-setup-with-tyk-and-https/004-configure-secure-grpc-proxy-in-tyk
deck_id: architect-grpc-proxy-5-secure-grpc-proxy-setup-with-tyk-and-https
order: 4
slug: configure-secure-grpc-proxy-in-tyk
title: "Configure Secure gRPC Proxy in Tyk"
summary: "Create a new API in the Tyk Dashboard Set Protocol to HTTPS Uncheck Strip Listen Path Upload the SSL certificate Set Custom Domain (e.g., tyk ) Set Listen Path: /routeguide.RouteGu"
standalone_safe: true
reusable: true
requires_context: []
builds_on: []
recommended_next: [architect-grpc-proxy-5-secure-grpc-proxy-setup-with-tyk-and-https/005-verifying-grpc-proxy-over-https]
customer_visible: true
notes_visibility: customer-safe
---
---
layout: default
---

<div style="position:relative; min-height:100%; padding:0 0 4rem 0; color:#0C1028;">
  <h1 style="font-size:2.78rem; line-height:1.08; font-weight:800; color:#5D16D7; margin:0 0 0.9rem 0; border:0; max-width:900px; letter-spacing:-0.02em;">Configure Secure gRPC Proxy in Tyk</h1>

  <ol style="margin:0 0 0 1.5rem; padding-left:1.25rem; font-size:1.01rem; line-height:1.34; max-width:850px;">
    <li style="margin-bottom:0.11rem;">Create a new API in the Tyk Dashboard</li>
    <li style="margin-bottom:0.11rem;">Set Protocol to <code style="font-size:0.96em;">HTTPS</code></li>
    <li style="margin-bottom:0.11rem;">Uncheck <code style="font-size:0.96em;">Strip Listen Path</code></li>
    <li style="margin-bottom:0.11rem;">Upload the SSL certificate</li>
    <li style="margin-bottom:0.11rem;">Set Custom Domain (e.g., <code style="font-size:0.96em;">tyk</code>)</li>
    <li style="margin-bottom:0.11rem;">Set Listen Path: <code style="font-size:0.96em;">/routeguide.RouteGuide</code></li>
    <li style="margin-bottom:0.11rem;">Set Target URL: <code style="font-size:0.96em;">https://grpc.test.example.com:10000</code></li>
    <li>Save and reload Gateway</li>
  </ol>

  <img src="./public/icons/tyk-logo.png" style="position:absolute; right:-0.65rem; bottom:-0.9rem; width:10.7rem; height:auto;" />
</div>

<!-- Notes: Inside the Tyk Dashboard, define a new API. Set the protocol to HTTPS and upload the certificate that will be used to secure this API. Uncheck 'strip listen path' to preserve the full gRPC method name. Then point the target URL to your gRPC server's secure endpoint. -->
