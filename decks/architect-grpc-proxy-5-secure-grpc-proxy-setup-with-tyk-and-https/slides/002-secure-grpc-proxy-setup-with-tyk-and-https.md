---
id: architect-grpc-proxy-5-secure-grpc-proxy-setup-with-tyk-and-https/002-secure-grpc-proxy-setup-with-tyk-and-https
deck_id: architect-grpc-proxy-5-secure-grpc-proxy-setup-with-tyk-and-https
order: 2
slug: secure-grpc-proxy-setup-with-tyk-and-https
title: "Secure gRPC Proxy Setup with Tyk and HTTPS"
summary: "Leverages HTTPS (TLS) for encrypted transport Useful for production or public-facing services Required components: gRPC server with TLS enabled gRPC client ( grpcurl or app) SSL ce"
standalone_safe: true
reusable: true
requires_context: []
builds_on: []
recommended_next: [architect-grpc-proxy-5-secure-grpc-proxy-setup-with-tyk-and-https/003-prerequisites-for-secure-grpc-proxy]
customer_visible: true
notes_visibility: customer-safe
---
---
layout: default
---

<div style="position:relative; min-height:100%; padding:0 0 4rem 0; color:#0C1028;">
  <h1 style="font-size:2.78rem; line-height:1.08; font-weight:800; color:#5D16D7; margin:0 0 1.2rem 0; border:0; max-width:860px; letter-spacing:-0.02em;">Secure gRPC Proxy Setup with Tyk and HTTPS</h1>

  <ul style="margin:0 0 0 1.1rem; padding-left:1.35rem; font-size:1.04rem; line-height:1.42; max-width:820px;">
    <li style="margin-bottom:0.3rem;">Leverages HTTPS (TLS) for encrypted transport</li>
    <li style="margin-bottom:0.3rem;">Useful for production or public-facing services</li>
    <li style="margin-bottom:0.2rem;">Required components:
      <ul style="list-style-type:circle; margin:0.32rem 0 0 1rem; padding-left:1.35rem; line-height:1.3;">
        <li style="margin-bottom:0.12rem;">gRPC server with TLS enabled</li>
        <li style="margin-bottom:0.12rem;">gRPC client (<code style="font-size:0.96em;">grpcurl</code> or app)</li>
        <li style="margin-bottom:0.12rem;">SSL certificate</li>
        <li>Tyk Gateway and Dashboard</li>
      </ul>
    </li>
  </ul>

  <p style="position:absolute; left:0; right:0; bottom:1.45rem; margin:0; text-align:center; font-size:0.97rem; color:#161C35;">gRPC client → Tyk Gateway (HTTPS) → gRPC server (H2C connection)</p>
  <img src="./public/icons/tyk-logo.png" style="position:absolute; right:-0.65rem; bottom:-0.9rem; width:10.7rem; height:auto;" />
</div>

<!-- Notes: This example demonstrates how to set up a secure gRPC proxy using HTTPS via Tyk. This is particularly useful for production environments or when exposing your gRPC services externally. We’ll use a gRPC server that supports TLS, connect it to Tyk Gateway over HTTPS, and expose it to a client using the grpcurl tool. -->
