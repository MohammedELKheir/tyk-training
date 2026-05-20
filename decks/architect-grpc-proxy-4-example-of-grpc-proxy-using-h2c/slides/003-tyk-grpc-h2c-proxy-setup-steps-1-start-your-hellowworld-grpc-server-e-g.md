---
id: architect-grpc-proxy-4-example-of-grpc-proxy-using-h2c/003-tyk-grpc-h2c-proxy-setup-steps-1-start-your-hellowworld-grpc-server-e-g
deck_id: architect-grpc-proxy-4-example-of-grpc-proxy-using-h2c
order: 3
slug: tyk-grpc-h2c-proxy-setup-steps-1-start-your-hellowworld-grpc-server-e-g
title: "Tyk gRPC H2C Proxy Setup Steps 1. Start your HellowWorld gRPC server (e.g., at l"
summary: "ocalhost:50051 ) 2. In Tyk Dashboard, create a new API: a. Set Protocol to HTTP b. Uncheck Strip listen path c. Set Listen Path to /helloworld.Greeter d. Set Target URL to h2c://lo"
standalone_safe: true
reusable: true
requires_context: []
builds_on: []
recommended_next: [architect-grpc-proxy-4-example-of-grpc-proxy-using-h2c/004-testing-the-proxy-command-example-grpcurl-plaintext-proto-helloworld-pro]
customer_visible: true
notes_visibility: customer-safe
---
---
layout: default
---

<div style="position:relative; width:100%; height:100%; background:#ffffff; overflow:hidden; color:#0b0a24; font-family:Inter, Arial, sans-serif;">
  <h1 style="position:absolute; left:74px; top:20px; width:860px; margin:0; color:#5d13d8; font-size:3.03rem; line-height:1.02; font-weight:800; letter-spacing:-0.025em; border:none;">
    Tyk gRPC H2C Proxy Setup Steps
  </h1>

  <div style="position:absolute; left:110px; top:135px; width:780px; color:#0b0a24; font-size:1.05rem; line-height:1.31;">
    <div style="display:flex; gap:0.8rem; margin-bottom:0.15rem;">
      <div style="width:1.5rem; text-align:right;">1.</div>
      <div>Start your HellowWorld gRPC server (e.g., at <span style="font-family:'JetBrains Mono', Menlo, Monaco, 'Courier New', monospace; font-size:0.98em;">localhost:50051</span>)</div>
    </div>
    <div style="display:flex; gap:0.8rem; margin-bottom:0.05rem;">
      <div style="width:1.5rem; text-align:right;">2.</div>
      <div>In Tyk Dashboard, create a new API:</div>
    </div>
    <div style="margin-left:4.1rem;">
      <div style="display:flex; gap:0.9rem; margin-bottom:0.02rem;">
        <div style="width:1.1rem; text-align:right;">a.</div>
        <div>Set Protocol to <span style="font-family:'JetBrains Mono', Menlo, Monaco, 'Courier New', monospace; font-size:0.98em;">HTTP</span></div>
      </div>
      <div style="display:flex; gap:0.9rem; margin-bottom:0.02rem;">
        <div style="width:1.1rem; text-align:right;">b.</div>
        <div>Uncheck Strip listen path</div>
      </div>
      <div style="display:flex; gap:0.9rem; margin-bottom:0.02rem;">
        <div style="width:1.1rem; text-align:right;">c.</div>
        <div>Set Listen Path to <span style="font-family:'JetBrains Mono', Menlo, Monaco, 'Courier New', monospace; font-size:0.98em;">/helloworld.Greeter</span></div>
      </div>
      <div style="display:flex; gap:0.9rem; margin-bottom:0.16rem;">
        <div style="width:1.1rem; text-align:right;">d.</div>
        <div>Set Target URL to <span style="font-family:'JetBrains Mono', Menlo, Monaco, 'Courier New', monospace; font-size:0.98em;">h2c://localhost:50051</span></div>
      </div>
    </div>
    <div style="display:flex; gap:0.8rem; margin-bottom:0.12rem;">
      <div style="width:1.5rem; text-align:right;">3.</div>
      <div>Save and wait for the Gateway to reload</div>
    </div>
    <div style="display:flex; gap:0.8rem;">
      <div style="width:1.5rem; text-align:right;">4.</div>
      <div>Note: <span style="font-family:'JetBrains Mono', Menlo, Monaco, 'Courier New', monospace; font-size:0.98em;">h2c://</span> prefix is key for enabling non-TLS HTTP/2 routing</div>
    </div>
  </div>

  <div style="position:absolute; right:0; bottom:0; width:107px; height:77px; background:#050325; border-top-left-radius:34px; display:flex; align-items:center; justify-content:center; gap:6px; padding-left:12px; box-sizing:border-box;">
    <div style="width:14px; height:14px; border-radius:4px; background:#22e9bc;"></div>
    <div style="color:#ffffff; font-size:1.15rem; font-weight:800; letter-spacing:-0.04em; line-height:1;">Tyk</div>
  </div>
</div>

<!-- Notes: "Once the server is up, jump into the Tyk Dashboard to define the API. Tyk needs to know this is an h2c-based backend, so the target_url must use the h2c:// scheme. Also, don’t forget to uncheck the 'Strip listen path' setting—this ensures the full method name is passed along correctly." -->
