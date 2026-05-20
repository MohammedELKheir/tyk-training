---
id: architect-grpc-proxy-6-bidirectional-grpc-streaming-with-https-and-h2c/005-testing-bidirectional-streaming-point-client-to-https-tyk-com-8000-use-t
deck_id: architect-grpc-proxy-6-bidirectional-grpc-streaming-with-https-and-h2c
order: 5
slug: testing-bidirectional-streaming-point-client-to-https-tyk-com-8000-use-t
title: "Testing Bidirectional Streaming Point client to https://tyk.com:8000 Use the Rou"
summary: "teChat service Client sends and receives data simultaneously Traffic: External = Encrypted Internal = Plain H2C Tyk"
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

<div style="position:relative; width:100%; height:100%; margin:-12px 0 0 0; color:#08061f; font-family:Inter, Arial, sans-serif;">
  <h1 style="margin:0 0 0 8px; color:#5c17d7; font-size:2.18rem; line-height:1.04; font-weight:800; letter-spacing:-0.02em; border:none; width:860px;">
    Testing Bidirectional Streaming
  </h1>

  <div style="margin-left:20px; margin-top:1.85rem; width:760px; font-size:0.96rem; line-height:1.35; color:#0f0d28;">
    <ul style="margin:0; padding-left:1.4rem; list-style-type:disc;">
      <li style="margin-bottom:0.38rem;">Point client to <code style="font-size:0.88em;">https://tyk.com:8000</code></li>
      <li style="margin-bottom:0.38rem;">Use the <code style="font-size:0.88em;">RouteChat</code> service</li>
      <li style="margin-bottom:0.38rem;">Client sends and receives data simultaneously</li>
      <li style="margin-bottom:0.18rem;">Traffic:</li>
    </ul>
    <ul style="margin:0.04rem 0 0 2.3rem; padding-left:1.2rem; list-style-type:circle;">
      <li style="margin-bottom:0.24rem;">External = Encrypted</li>
      <li>Internal = Plain H2C</li>
    </ul>
  </div>

  <div style="position:absolute; right:-54px; bottom:-38px; width:112px; height:78px; background:#090523; border-top-left-radius:34px; display:flex; align-items:center; justify-content:center; gap:7px; padding-left:12px; box-sizing:border-box;">
    <div style="width:14px; height:14px; border-radius:4px; background:#20e8bc;"></div>
    <div style="color:#ffffff; font-size:1.18rem; font-weight:800; letter-spacing:-0.04em; line-height:1;">Tyk</div>
  </div>
</div>

<!-- Notes: Once everything is configured, point your client to the custom domain you’ve set on Tyk — in this case, https://tyk.com:8000. Initiate a RouteChat session and you should see bidirectional messages flowing in real time. This setup allows for secure ingress and efficient, low-latency internal communication. -->
