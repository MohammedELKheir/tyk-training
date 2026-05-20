---
id: architect-grpc-proxy-4-example-of-grpc-proxy-using-h2c/004-testing-the-proxy-command-example-grpcurl-plaintext-proto-helloworld-pro
deck_id: architect-grpc-proxy-4-example-of-grpc-proxy-using-h2c
order: 4
slug: testing-the-proxy-command-example-grpcurl-plaintext-proto-helloworld-pro
title: "Testing the Proxy • Command Example: grpcurl -plaintext \\ -proto helloworld.prot"
summary: "o \\ -d '{\"name\": \"joe\"}' \\ tyk-gateway:8080 \\ helloworld.Greeter/SayHello • Expected Response: {\"message\": \"Hello joe\"} Tyk"
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

<h1 style="font-size:3.08rem; line-height:1.02; font-weight:800; letter-spacing:-0.025em; color:#5d13d8; margin:0 0 1.3rem 0; border:none;">
  Testing the Proxy
</h1>

<div style="margin-left:1.7rem; color:#0b0a24; font-size:1.05rem; line-height:1.35;">
  <div style="display:flex; align-items:flex-start; gap:0.9rem; margin-bottom:0.3rem;">
    <div style="font-size:1.5rem; line-height:1; margin-top:0.02rem;">•</div>
    <div>Command Example:</div>
  </div>
</div>

<pre style="margin:0 0 0 4.55rem; color:#23233f; font-size:0.84rem; line-height:1.56; font-family:'JetBrains Mono', Menlo, Monaco, 'Courier New', monospace; white-space:pre; background:transparent;">grpcurl -plaintext \
  -proto helloworld.proto \
  -d '&#123;"name": "joe"&#125;' \
  tyk-gateway:8080 \
  helloworld.Greeter/SayHello</pre>

<div style="margin-left:1.7rem; color:#0b0a24; font-size:1.05rem; line-height:1.35; margin-top:1.25rem;">
  <div style="display:flex; align-items:flex-start; gap:0.9rem; margin-bottom:0.3rem;">
    <div style="font-size:1.5rem; line-height:1; margin-top:0.02rem;">•</div>
    <div>Expected Response:</div>
  </div>
</div>

<pre style="margin:0 0 0 4.55rem; color:#23233f; font-size:0.84rem; line-height:1.56; font-family:'JetBrains Mono', Menlo, Monaco, 'Courier New', monospace; white-space:pre; background:transparent;">&#123;"message": "Hello joe"&#125;</pre>

<div style="position:absolute; right:0; bottom:0; width:107px; height:77px; background:#050325; border-top-left-radius:34px; display:flex; align-items:center; justify-content:center; gap:6px; padding-left:12px; box-sizing:border-box;">
  <div style="width:14px; height:14px; border-radius:4px; background:#22e9bc;"></div>
  <div style="color:#ffffff; font-size:1.15rem; font-weight:800; letter-spacing:-0.04em; line-height:1;">Tyk</div>
</div>

<!-- Notes: "Once the setup is done, you can use grpcurl to send a test request through the Tyk Gateway. The -plaintext flag is important—it tells grpcurl not to use TLS, aligning with our h2c setup. If everything’s configured correctly, you'll see a friendly message returned: 'Hello joe'." -->
