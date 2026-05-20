---
theme: tyk
aspectRatio: 16/9
canvasWidth: 980
highlighter: shiki
lineNumbers: false
drawings:
  persist: false
transition: slide-left
title: "Traffic Routing"
layout: cover
background: 'linear-gradient(135deg, #7d3df2 0%, #8e38f7 38%, #c114ff 100%)'
---

<div style="position:relative; width:100%; height:100%; display:flex; flex-direction:column; justify-content:center; align-items:center; color:white; text-align:center; overflow:hidden;">
  <h1 style="margin:0; color:white; font-size:2.18rem; font-weight:800; line-height:1.1; border:0;">Traffic Routing</h1>
  <p style="margin:1.7rem 0 0 0; width:500px; max-width:500px; color:white; font-size:0.92rem; line-height:1.42; opacity:0.96;">
    Traffic Routing is how Tyk directs API requests to the right backend, while applying security and tracking along the way.
  </p>
  <div style="position:absolute; right:0; bottom:0; width:88px; height:62px; background:#050505; border-top-left-radius:20px; display:flex; align-items:center; justify-content:center;">
    <img src="./public/icons/tyk-logo.png" style="width:46px; height:auto;" />
  </div>
</div>

---
layout: default
---

<div style="position:relative; width:100%; height:100%; overflow:hidden;">
  <h1 style="margin:0; padding-left:0.18rem; color:#6517d9; font-size:2.95rem; font-weight:800; line-height:1.02; letter-spacing:-0.03em;">API Request Flow</h1>
  <div style="display:flex; justify-content:center; align-items:flex-start; margin-top:1.65rem; transform:scale(0.78); transform-origin:top center;">
    <TykTrafficRoutingFlow />
  </div>
  <div style="position:absolute; right:0; bottom:0; width:88px; height:62px; background:#050505; border-top-left-radius:20px; display:flex; align-items:center; justify-content:center;">
    <img src="./public/icons/tyk-logo.png" style="width:46px; height:auto;" />
  </div>
</div>

<!-- Notes: Let’s understand how API requests flow through the Tyk Gateway. Let's follow the journey of a typical request. -->

---
layout: default
---

<div style="position:relative; width:100%; height:100%; overflow:hidden;">
  <h1 style="margin:0; padding-left:0.18rem; color:#6517d9; font-size:2.95rem; font-weight:800; line-height:1.02; letter-spacing:-0.03em;">API Request Flow</h1>
  <div style="display:flex; justify-content:center; align-items:flex-start; margin-top:1.65rem; transform:scale(0.78); transform-origin:top center;">
    <TykTrafficRoutingFlow :client-to-gateway="true" />
  </div>
  <div style="position:absolute; right:0; bottom:0; width:88px; height:62px; background:#050505; border-top-left-radius:20px; display:flex; align-items:center; justify-content:center;">
    <img src="./public/icons/tyk-logo.png" style="width:46px; height:auto;" />
  </div>
</div>

<!-- Notes: A client sends a request to an API that's managed by Tyk.
Once the request reaches the Tyk Gateway, it immediately tries to match the incoming request's URL path to the "listen paths" of the APIs it's managing
Each API definition in Tyk's memory has a unique listen path. The Gateway compares the incoming request URL to these paths. If it finds a match, it knows which API should handle the request.
Now that Tyk has identified the correct API, it prepares to process the request according to that API's specific configuration -->

---
layout: default
---

<div style="position:relative; width:100%; height:100%; overflow:hidden;">
  <h1 style="margin:0; padding-left:0.18rem; color:#6517d9; font-size:2.95rem; font-weight:800; line-height:1.02; letter-spacing:-0.03em;">API Request Flow</h1>
  <div style="display:flex; justify-content:center; align-items:flex-start; margin-top:1.65rem; transform:scale(0.78); transform-origin:top center;">
    <TykTrafficRoutingFlow :gateway-to-redis="true" />
  </div>
  <div style="position:absolute; right:0; bottom:0; width:88px; height:62px; background:#050505; border-top-left-radius:20px; display:flex; align-items:center; justify-content:center;">
    <img src="./public/icons/tyk-logo.png" style="width:46px; height:auto;" />
  </div>
</div>

<!-- Notes: Tyk immediately checks if the request is authenticated and authorized. This process involves several steps:

First, Tyk extracts the authentication token from the request. This could be from the Authorization header, a query parameter, or a cookie, depending on the API's configuration.
Next, Tyk looks up this token in its Redis database. Each access key is stored as a record in Redis, containing important metadata.

Tyk checks several things:
1. Does the key exist in Redis?
2. Has the key expired?
3. Does the key have permission to access this specific API and endpoint?
4. Are there any rate limits or quotas that have been exceeded?

If the key is valid and has the necessary permissions, Tyk allows the request to proceed. This are Tyk’s core processing which includes:

Tyk performs its core functions, which typically include:

Authentication
Authorization
Rate limiting
Quota checking -->

---
layout: default
---

<div style="position:relative; width:100%; height:100%; overflow:hidden;">
  <h1 style="margin:0; padding-left:0.18rem; color:#6517d9; font-size:2.95rem; font-weight:800; line-height:1.02; letter-spacing:-0.03em;">API Request Flow</h1>
  <div style="display:flex; justify-content:center; align-items:flex-start; margin-top:1.5rem; transform:scale(0.78); transform-origin:top center;">
    <TykTrafficRoutingFlow :show-gear="true" />
  </div>
  <div style="position:absolute; right:0; bottom:0; width:88px; height:62px; background:#050505; border-top-left-radius:20px; display:flex; align-items:center; justify-content:center;">
    <img src="./public/icons/tyk-logo.png" style="width:46px; height:auto;" />
  </div>
</div>

<!-- Notes: Before the request is proxied to the upstream API, "post" middleware are executed.
Post-processing middleware can be used for tasks like request transformation, additional logging, or any final modifications before the request is sent upstream -->

---
layout: default
---

<div style="position:relative; width:100%; height:100%; overflow:hidden;">
  <h1 style="margin:0; padding-left:0.18rem; color:#6517d9; font-size:2.95rem; font-weight:800; line-height:1.02; letter-spacing:-0.03em;">API Request Flow</h1>
  <div style="display:flex; justify-content:center; align-items:flex-start; margin-top:1.65rem; transform:scale(0.78); transform-origin:top center;">
    <TykTrafficRoutingFlow :gateway-to-server="true" />
  </div>
  <div style="position:absolute; right:0; bottom:0; width:88px; height:62px; background:#050505; border-top-left-radius:20px; display:flex; align-items:center; justify-content:center;">
    <img src="./public/icons/tyk-logo.png" style="width:46px; height:auto;" />
  </div>
</div>

<!-- Notes: Tyk then routes the request to the appropriate backend service
When proxying to an API Server, the target URL can be defined in a number of ways:
Target URL property of the API Definition (single or multiple)
Dynamically set by a service discovery endpoint
Dynamically set by the URL Rewrite plugin
Dynamically set by custom middleware
Defined as a GraphQL Data Source -->

---
layout: default
---

<div style="position:relative; width:100%; height:100%; overflow:hidden;">
  <h1 style="margin:0; padding-left:0.18rem; color:#6517d9; font-size:2.95rem; font-weight:800; line-height:1.02; letter-spacing:-0.03em;">API Request Flow</h1>
  <div style="display:flex; justify-content:center; align-items:flex-start; margin-top:1.65rem; transform:scale(0.78); transform-origin:top center;">
    <TykTrafficRoutingFlow :server-to-gateway="true" />
  </div>
  <div style="position:absolute; right:0; bottom:0; width:88px; height:62px; background:#050505; border-top-left-radius:20px; display:flex; align-items:center; justify-content:center;">
    <img src="./public/icons/tyk-logo.png" style="width:46px; height:auto;" />
  </div>
</div>

<!-- Notes: The backend API processes the request and sends a response back to Tyk.

Tyk can also transform the response if needed, perhaps removing sensitive data or adding custom headers. -->

---
layout: default
---

<div style="position:relative; width:100%; height:100%; overflow:hidden;">
  <h1 style="margin:0; padding-left:0.18rem; color:#6517d9; font-size:2.95rem; font-weight:800; line-height:1.02; letter-spacing:-0.03em;">API Request Flow</h1>
  <div style="display:flex; justify-content:center; align-items:flex-start; margin-top:1.65rem; transform:scale(0.78); transform-origin:top center;">
    <TykTrafficRoutingFlow :gateway-to-redis="true" />
  </div>
  <div style="position:absolute; right:0; bottom:0; width:88px; height:62px; background:#050505; border-top-left-radius:20px; display:flex; align-items:center; justify-content:center;">
    <img src="./public/icons/tyk-logo.png" style="width:46px; height:auto;" />
  </div>
</div>

<!-- Notes: Before sending the response back to the client, Tyk logs analytics data about the request. -->

---
layout: default
---

<div style="position:relative; width:100%; height:100%; overflow:hidden;">
  <h1 style="margin:0; padding-left:0.18rem; color:#6517d9; font-size:2.95rem; font-weight:800; line-height:1.02; letter-spacing:-0.03em;">API Request Flow</h1>
  <div style="display:flex; justify-content:center; align-items:flex-start; margin-top:1.65rem; transform:scale(0.78); transform-origin:top center;">
    <TykTrafficRoutingFlow :gateway-to-client-back="true" />
  </div>
  <div style="position:absolute; right:0; bottom:0; width:88px; height:62px; background:#050505; border-top-left-radius:20px; display:flex; align-items:center; justify-content:center;">
    <img src="./public/icons/tyk-logo.png" style="width:46px; height:auto;" />
  </div>
</div>

<!-- Notes: Before sending the response back to the client, Tyk logs analytics data about the request.
And there you have it! That's how Tyk Gateway manages the flow of API requests, providing security, control, and insights every step of the way -->

---
layout: fullscreen
---

<div style="position:relative; width:100%; height:100%; background:#fff; overflow:hidden; padding:0;">
  <div style="position:absolute; left:0; top:0; width:24px; height:116px; background:#2f3d9b;"></div>
  <h1 style="position:absolute; left:58px; top:48px; margin:0; color:#111322; font-size:40px; font-weight:800; line-height:1.04; letter-spacing:-0.03em;">Traffic Routing: Example</h1>

  <div style="position:absolute; left:148px; top:158px; width:104px; display:flex; flex-direction:column; align-items:center; color:#111;">
    <img src="./public/icons/client-icon.png" style="width:58px; height:58px; object-fit:contain;" />
    <div style="margin-top:8px; font-size:13px;">API Client</div>
  </div>

  <div style="position:absolute; left:148px; top:302px; width:104px; display:flex; flex-direction:column; align-items:center; color:#111;">
    <img src="./public/icons/gateway-icon.png" style="width:64px; height:64px; object-fit:contain; transform:rotate(90deg);" />
    <div style="margin-top:8px; font-size:13px;">API Gateway</div>
  </div>

  <div style="position:absolute; left:148px; top:446px; width:104px; display:flex; flex-direction:column; align-items:center; color:#111;">
    <img src="./public/icons/server-icon.png" style="width:66px; height:66px; object-fit:contain;" />
    <div style="margin-top:8px; font-size:13px;">API Server</div>
  </div>

  <svg viewBox="0 0 980 552" style="position:absolute; inset:0; width:100%; height:100%;">
    <defs>
      <marker id="example-arrow" markerWidth="10" markerHeight="10" refX="5" refY="5" orient="auto" markerUnits="strokeWidth">
        <path d="M0,0 L10,5 L0,10 z" fill="#202020" />
      </marker>
    </defs>
    <line x1="200" y1="220" x2="200" y2="287" stroke="#202020" stroke-width="1.6" marker-end="url(#example-arrow)" />
    <line x1="200" y1="362" x2="200" y2="431" stroke="#202020" stroke-width="1.6" marker-end="url(#example-arrow)" />
  </svg>

  <div style="position:absolute; left:348px; top:156px; width:498px; border:1px dashed #6d6d6d; background:#fff; padding:8px 12px 10px 12px; box-sizing:border-box;">
    <div style="font-size:11px; color:#111; margin-bottom:8px;">Requested URL</div>
    <div style="font-family:'SFMono-Regular',Menlo,Monaco,Consolas,monospace; font-size:15px; line-height:1.28; color:#111; white-space:nowrap; padding-left:14px;">
      <span>http://</span><span style="color:#3fd4c6;">my-domain.com</span><span>/</span><span style="color:#ff5a62;">my-api</span><span>/</span><span style="color:#3d56c9;">endpoint-1</span>
    </div>
  </div>

  <div style="position:absolute; left:348px; top:292px; width:498px; border:1px dashed #6d6d6d; background:#fff; padding:8px 12px 10px 12px; box-sizing:border-box;">
    <div style="font-size:11px; color:#111; margin-bottom:7px;">API Definition</div>
    <div style="font-family:'SFMono-Regular',Menlo,Monaco,Consolas,monospace; font-size:11px; line-height:1.14; color:#111; padding-left:14px;">
      <div>{</div>
      <div style="padding-left:14px;">"domain": <span style="color:#3fd4c6;">"my-domain.com"</span>,</div>
      <div style="padding-left:14px;">"proxy": {</div>
      <div style="padding-left:28px;">"target_url": <span style="color:#e0ab33;">"http://my-api-server.com/"</span>,</div>
      <div style="padding-left:28px;">"listen_path": <span style="color:#ff5a62;">"/my-api"</span>,</div>
      <div style="padding-left:28px;">"strip_listen_path": true</div>
      <div style="padding-left:14px;">}</div>
      <div>}</div>
    </div>
  </div>

  <div style="position:absolute; left:348px; top:446px; width:498px; border:1px dashed #6d6d6d; background:#fff; padding:8px 12px 10px 12px; box-sizing:border-box;">
    <div style="font-size:11px; color:#111; margin-bottom:8px;">Target URL</div>
    <div style="font-family:'SFMono-Regular',Menlo,Monaco,Consolas,monospace; font-size:15px; line-height:1.28; color:#111; white-space:nowrap; padding-left:14px;">
      <span style="color:#e0ab33;">http://my-api-server.com</span><span>/</span><span style="color:#3d56c9;">endpoint-1</span>
    </div>
  </div>
</div>

<!-- Notes: This example shows how the Gateway processes a URL requested by an API Client and turns in into a Target URL sent to an API Server. The diagram uses colour-coding to show where the data matches during the request lifecycle.

At the top of the diagram is the API Client, it has requested the URL my-domain.com/my-api/endpoint-1.

This request goes to the API Gateway, which matches against the API Definitions it has loaded. In this example, both the domain and path elements of the requested URL are used to match against the API Definition. The domain is highlighted in green, and the path in red.

You can see that the API Definition has corresponding fields for this data, called “domain” and “listen_path”. This is how the Gateway knows that this is the correct API Definition to use.

Now that the API Definition has been matched, the Gateway can calculate the Target URL. It does this by taking the “target_url” field and appending the requested path to it.

The Target URL is highlighted in yellow, and has the value “http://my-api-server.com/”. Note that it’s a full URL, including the HTTP scheme. It’s important to include the scheme in the Target URL.

Before the Gateway can add the path to the Target URL, it must decide whether to include the listen path element. This is determined by the “strip_listen_path” field. In this case it is set to “true”, so the Gateway will not include it. But it will include any subsequent path elements, which in this example is “endpoint-1”, highlighted in blue.

This results in a Target URL of http://my-api-server.com/endpoint-1. -->
