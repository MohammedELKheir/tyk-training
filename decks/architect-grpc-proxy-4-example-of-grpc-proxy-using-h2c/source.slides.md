---
theme: tyk
layout: cover
background: 'linear-gradient(135deg, #6c2df5 0%, #8a2cf8 55%, #c313ff 100%)'
aspectRatio: 16/9
canvasWidth: 980
highlighter: shiki
lineNumbers: false
drawings:
  persist: false
transition: slide-left
title: "Example of gRPC proxy using H2C"
---

<div style="position:relative; width:100%; height:100%; display:flex; align-items:center; justify-content:center; padding:0 120px; box-sizing:border-box; text-align:center;">
  <h1 style="margin:0; color:#ffffff; font-size:3.36rem; line-height:1.07; font-weight:800; letter-spacing:-0.02em; border:none; max-width:760px;">
    Example of gRPC proxy<br/>using H2C
  </h1>
  <div style="position:absolute; right:-48px; bottom:-34px; width:155px; height:112px; background:#050325; border-top-left-radius:48px; display:flex; align-items:center; justify-content:center; gap:8px; padding-left:18px; box-sizing:border-box;">
    <div style="width:20px; height:20px; border-radius:6px; background:#22e9bc;"></div>
    <div style="color:#ffffff; font-size:1.7rem; font-weight:800; letter-spacing:-0.04em; line-height:1;">Tyk</div>
  </div>
</div>

---
layout: default
---

<div style="position:relative; width:100%; height:100%; background:#ffffff; overflow:hidden; color:#0b0a24; font-family:Inter, Arial, sans-serif;">
  <h1 style="position:absolute; left:75px; top:20px; width:840px; margin:0; color:#5d13d8; font-size:3.05rem; line-height:1.02; font-weight:800; letter-spacing:-0.025em; border:none;">
    gRPC Proxy Example Using H2C
  </h1>

  <div style="position:absolute; left:110px; top:140px; width:760px; color:#0b0a24; font-size:1.02rem; line-height:1.34;">
    <ul style="margin:0; padding-left:1.3rem; list-style-type:disc;">
      <li style="margin-bottom:0.35rem; padding-left:0.45rem;">Use case: Local setup for development or internal testing</li>
      <li style="padding-left:0.45rem;">Tools required:</li>
    </ul>
    <ul style="margin:0.16rem 0 0 2.8rem; padding-left:1rem; list-style-type:circle;">
      <li style="margin-bottom:0.22rem; padding-left:0.45rem;">gRPC Server (e.g., <span style="color:#d9bdfc; text-decoration:underline;">HelloWorld example from GitHub</span>)</li>
      <li style="margin-bottom:0.22rem; padding-left:0.45rem;">gRPC Client (e.g., grpcurl)</li>
      <li style="padding-left:0.45rem;">Tyk Gateway &amp; Dashboard</li>
    </ul>
  </div>

  <div style="position:absolute; left:96px; top:470px; color:#0b0a24; font-size:1.1rem; line-height:1.2; letter-spacing:-0.01em;">
    gRPC client → Tyk Gateway → gRPC server (H2C connection)
  </div>

  <div style="position:absolute; right:0; bottom:0; width:107px; height:77px; background:#050325; border-top-left-radius:34px; display:flex; align-items:center; justify-content:center; gap:6px; padding-left:12px; box-sizing:border-box;">
    <div style="width:14px; height:14px; border-radius:4px; background:#22e9bc;"></div>
    <div style="color:#ffffff; font-size:1.15rem; font-weight:800; letter-spacing:-0.04em; line-height:1;">Tyk</div>
  </div>
</div>

<!-- Notes: In this example, we’ll walk through how to set up a gRPC proxy using H2C—HTTP/2 without TLS. This is the most straightforward way to test a gRPC setup with Tyk locally or internally. All you need is a basic gRPC server, a tool like grpcurl to simulate requests, and a running Tyk Gateway and Dashboard. -->

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
