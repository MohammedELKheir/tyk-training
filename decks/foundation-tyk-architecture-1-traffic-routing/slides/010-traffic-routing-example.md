---
id: foundation-tyk-architecture-1-traffic-routing/010-traffic-routing-example
deck_id: foundation-tyk-architecture-1-traffic-routing
order: 10
slug: traffic-routing-example
title: "Traffic Routing: Example"
summary: "API Client API Gateway API Server Requested URL http:// my-domain.com / my-api / endpoint-1 API Definition { \"domain\": \"my-domain.com\" , \"proxy\": { \"target_url\": \"http://my-api-ser"
standalone_safe: true
reusable: true
requires_context: []
builds_on: []
recommended_next: []
customer_visible: true
notes_visibility: customer-safe
---
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
