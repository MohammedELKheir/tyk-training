---
theme: tyk
layout: cover
background: 'linear-gradient(135deg, #6f2df5 0%, #8f2dff 52%, #c01bff 100%)'
aspectRatio: 16/9
canvasWidth: 980
highlighter: shiki
lineNumbers: false
drawings:
  persist: false
transition: slide-left
title: "Bidirectional gRPC Streaming with HTTPS & H2C"
---

<div style="position:relative; width:100%; height:100%; overflow:hidden;">
  <div style="display:flex; align-items:center; justify-content:center; width:100%; height:100%; padding:0 150px; box-sizing:border-box; text-align:center;">
    <h1 style="margin:0; color:#ffffff; font-size:3.05rem; line-height:1.12; font-weight:800; letter-spacing:-0.02em; border:none; text-shadow:none;">
      Bidirectional gRPC<br/>Streaming with HTTPS<br/>&amp; H2C
    </h1>
  </div>
  <div style="position:fixed; right:-18px; bottom:-18px; width:112px; height:78px; background:#090523; border-top-left-radius:34px; display:flex; align-items:center; justify-content:center; gap:7px; padding-left:12px; box-sizing:border-box;">
    <div style="width:14px; height:14px; border-radius:4px; background:#20e8bc;"></div>
    <div style="color:#ffffff; font-size:1.18rem; font-weight:800; letter-spacing:-0.04em; line-height:1;">Tyk</div>
  </div>
</div>

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

---
layout: default
---

<div style="position:relative; width:100%; height:100%; margin:-12px 0 0 0; color:#08061f; font-family:Inter, Arial, sans-serif;">
  <h1 style="margin:0 0 0 8px; color:#5c17d7; font-size:2.18rem; line-height:1.04; font-weight:800; letter-spacing:-0.02em; border:none; width:780px;">
    Prerequisites
  </h1>

  <div style="margin-left:20px; margin-top:1.9rem; width:760px; font-size:0.96rem; line-height:1.35; color:#0f0d28;">
    <ul style="margin:0; padding-left:1.4rem; list-style-type:disc;">
      <li style="margin-bottom:0.34rem;">A gRPC server (e.g. <code style="font-size:0.88em;">route_guide</code>)</li>
    </ul>
    <ul style="margin:0.02rem 0 0 2.25rem; padding-left:1.2rem; list-style-type:circle;">
      <li style="margin-bottom:0.4rem;">Exposed at <code style="font-size:0.88em;">localhost:10000</code>, TLS disabled</li>
    </ul>
    <ul style="margin:0.12rem 0 0 1.4rem; padding-left:1.4rem; list-style-type:disc;">
      <li style="margin-bottom:0.34rem;">A gRPC client (sample or your app)</li>
      <li style="margin-bottom:0.34rem;">A valid certificate for HTTPS</li>
      <li style="margin-bottom:0.34rem;">Tyk Gateway and Dashboard</li>
      <li>Set <code style="font-size:0.88em;">flush_interval = 1 ms</code> in <code style="font-size:0.88em;">tyk.conf</code></li>
    </ul>
  </div>

  <div style="position:absolute; right:-54px; bottom:-38px; width:112px; height:78px; background:#090523; border-top-left-radius:34px; display:flex; align-items:center; justify-content:center; gap:7px; padding-left:12px; box-sizing:border-box;">
    <div style="width:14px; height:14px; border-radius:4px; background:#20e8bc;"></div>
    <div style="color:#ffffff; font-size:1.18rem; font-weight:800; letter-spacing:-0.04em; line-height:1;">Tyk</div>
  </div>
</div>

<!-- Notes: Before configuring Tyk, make sure your gRPC server is running with TLS disabled. This is intentional so that we can connect over H2C. Also, the Tyk Gateway’s flush_interval should be set to 1 millisecond to ensure data is forwarded immediately, which is critical for bidirectional streaming. -->

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
