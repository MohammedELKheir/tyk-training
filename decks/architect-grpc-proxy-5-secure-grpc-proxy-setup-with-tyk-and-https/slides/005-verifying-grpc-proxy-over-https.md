---
id: architect-grpc-proxy-5-secure-grpc-proxy-setup-with-tyk-and-https/005-verifying-grpc-proxy-over-https
deck_id: architect-grpc-proxy-5-secure-grpc-proxy-setup-with-tyk-and-https
order: 5
slug: verifying-grpc-proxy-over-https
title: "Verifying gRPC Proxy Over HTTPS"
summary: "Verifying gRPC Proxy Over HTTPS"
standalone_safe: true
reusable: true
requires_context: []
builds_on: []
recommended_next: []
customer_visible: true
notes_visibility: customer-safe
---
---
layout: default
---

<div style="margin:-1.5rem -3.5rem; height:100%; background:white; overflow:hidden;">
  <img src="./public/reference/slide-005-source.png" style="width:100%; height:100%; object-fit:cover; object-position:center;" />
</div>

<!-- Notes: To test the setup, use grpcurl without the -plaintext flag. This ensures you're connecting over TLS. If everything is configured properly, you'll get a successful response from the gRPC server through the Tyk Gateway, confirming your secure proxy is working. -->
