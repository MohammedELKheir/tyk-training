---
id: architect-grpc-proxy-5-secure-grpc-proxy-setup-with-tyk-and-https/003-prerequisites-for-secure-grpc-proxy
deck_id: architect-grpc-proxy-5-secure-grpc-proxy-setup-with-tyk-and-https
order: 3
slug: prerequisites-for-secure-grpc-proxy
title: "Prerequisites for Secure gRPC Proxy"
summary: "Start the gRPC server with TLS support For example: go run server.go -tls=true Expose at: grpc.test.example.com:10000 Have a valid certificate for HTTPS Tyk Gateway & Dashboard run"
standalone_safe: true
reusable: true
requires_context: []
builds_on: []
recommended_next: [architect-grpc-proxy-5-secure-grpc-proxy-setup-with-tyk-and-https/004-configure-secure-grpc-proxy-in-tyk]
customer_visible: true
notes_visibility: customer-safe
---
---
layout: default
---

<div style="position:relative; min-height:100%; padding:0 0 4rem 0; color:#0C1028;">
  <h1 style="font-size:2.78rem; line-height:1.08; font-weight:800; color:#5D16D7; margin:0 0 1.0rem 0; border:0; max-width:860px; letter-spacing:-0.02em;">Prerequisites for Secure gRPC Proxy</h1>

  <ul style="margin:0 0 0 1.1rem; padding-left:1.35rem; font-size:1.03rem; line-height:1.36; max-width:840px;">
    <li style="margin-bottom:0.14rem;">Start the <span style="color:#7D43FF;">gRPC server</span> with TLS support
      <ul style="list-style-type:circle; margin:0.18rem 0 0 1rem; padding-left:1.35rem; line-height:1.27;">
        <li style="margin-bottom:0.08rem;">For example: <code style="font-size:0.96em;">go run server.go -tls=true</code></li>
        <li>Expose at: <code style="font-size:0.96em;">grpc.test.example.com:10000</code></li>
      </ul>
    </li>
    <li style="margin-bottom:0.14rem;">Have a valid certificate for HTTPS</li>
    <li style="margin-bottom:0.14rem;">Tyk Gateway &amp; Dashboard running</li>
    <li>gRPC client installed (<code style="font-size:0.96em;">grpcurl</code> or equivalent)</li>
  </ul>

  <img src="./public/icons/tyk-logo.png" style="position:absolute; right:-0.65rem; bottom:-0.9rem; width:10.7rem; height:auto;" />
</div>

<!-- Notes: First, ensure your gRPC server is up and running with TLS. In our case, we’re using the route_guide example server which accepts a -tls=true flag. This server listens at grpc.test.example.com:10000. Also, make sure Tyk Gateway is up and that you have a valid certificate available for HTTPS termination. -->
