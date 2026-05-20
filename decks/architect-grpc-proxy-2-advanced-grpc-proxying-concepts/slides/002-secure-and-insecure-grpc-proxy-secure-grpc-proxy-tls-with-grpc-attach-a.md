---
id: architect-grpc-proxy-2-advanced-grpc-proxying-concepts/002-secure-and-insecure-grpc-proxy-secure-grpc-proxy-tls-with-grpc-attach-a
deck_id: architect-grpc-proxy-2-advanced-grpc-proxying-concepts
order: 2
slug: secure-and-insecure-grpc-proxy-secure-grpc-proxy-tls-with-grpc-attach-a
title: "Secure and Insecure gRPC Proxy Secure gRPC Proxy TLS with gRPC • Attach a certif"
summary: "icate to the API in Tyk • gRPC service will then be available via HTTPS Insecure gRPC Proxy (h2c) h2c (HTTP/2 Cleartext) • Useful for service-to-service traffic • Set target_url to"
standalone_safe: true
reusable: true
requires_context: []
builds_on: []
recommended_next: [architect-grpc-proxy-2-advanced-grpc-proxying-concepts/003-streaming-support-in-grpc-tyk-supports-client-streaming-server-streaming]
customer_visible: true
notes_visibility: customer-safe
---
---
layout: default
---

<div style="position:relative; width:100%; height:100%; overflow:hidden; background:#ffffff; color:#0a0c2c; font-family:Arial, Helvetica, sans-serif;">
  <div style="position:absolute; left:89px; top:36px; width:845px; color:#5b12d6; font-size:3.18rem; line-height:1.02; font-weight:800; letter-spacing:-0.04em; white-space:nowrap;">Secure and Insecure gRPC Proxy</div>
  <div style="position:absolute; left:106px; top:144px; color:#0a0c2c; font-size:1.15rem; line-height:1.34; font-weight:800;">Secure gRPC Proxy</div>
  <div style="position:absolute; left:106px; top:177px; color:#0a0c2c; font-size:1.1rem; line-height:1.18; font-weight:400;">TLS with gRPC</div>
  <div style="position:absolute; left:119px; top:210px; color:#0a0c2c; font-size:1.03rem; line-height:1.25; font-weight:400;">•&nbsp;&nbsp;Attach a certificate to the API in Tyk</div>
  <div style="position:absolute; left:119px; top:243px; color:#0a0c2c; font-size:1.03rem; line-height:1.25; font-weight:400;">•&nbsp;&nbsp;gRPC service will then be available via HTTPS</div>
  <div style="position:absolute; left:106px; top:316px; color:#0a0c2c; font-size:1.15rem; line-height:1.34; font-weight:800;">Insecure gRPC Proxy (h2c)</div>
  <div style="position:absolute; left:106px; top:349px; color:#0a0c2c; font-size:1.1rem; line-height:1.18; font-weight:400;">h2c (HTTP/2 Cleartext)</div>
  <div style="position:absolute; left:119px; top:382px; color:#0a0c2c; font-size:1.03rem; line-height:1.25; font-weight:400;">•&nbsp;&nbsp;Useful for service-to-service traffic</div>
  <div style="position:absolute; left:119px; top:415px; color:#0a0c2c; font-size:1.03rem; line-height:1.25; font-weight:400;">•&nbsp;&nbsp;Set target_url to h2c://my-grpc-service</div>
  <div style="position:absolute; left:119px; top:448px; color:#0a0c2c; font-size:1.03rem; line-height:1.25; font-weight:400;">•&nbsp;&nbsp;No TLS required</div>
  <div style="position:absolute; left:873px; top:489px; width:78px; height:44px; background:#07051f; border-top-left-radius:24px; display:flex; align-items:flex-end; justify-content:flex-start; padding:0 10px 8px 10px; box-sizing:border-box; overflow:hidden;">
    <div style="width:7px; height:7px; background:#21e9ba; border-top-left-radius:1px; border-top-right-radius:3px; border-bottom-left-radius:5px; border-bottom-right-radius:1px; margin-right:4px; margin-bottom:5px;"></div>
    <div style="font-size:1.05rem; line-height:1; font-weight:800; color:#ffffff; letter-spacing:-0.04em;">Tyk</div>
  </div>
</div>

<!-- Notes: Let’s now talk about securing your gRPC APIs.
Tyk supports secure gRPC proxying via HTTPS. All you need to do is attach a TLS certificate to your API definition—just like you would for any other REST API in Tyk.
Once the certificate is in place, clients can access the gRPC service securely over HTTPS.
Now, there are also cases where TLS is not needed—for example, internal service-to-service communication.
For those cases, Tyk supports h2c, or HTTP/2 Cleartext. This is essentially gRPC without encryption.
To use this, just point your API’s target_url to a URL with the h2c:// prefix.
This is handy for non-production setups or environments where TLS is handled by a different layer. -->
