---
id: architect-grpc-proxy-2-advanced-grpc-proxying-concepts/003-streaming-support-in-grpc-tyk-supports-client-streaming-server-streaming
deck_id: architect-grpc-proxy-2-advanced-grpc-proxying-concepts
order: 3
slug: streaming-support-in-grpc-tyk-supports-client-streaming-server-streaming
title: "Streaming Support in gRPC Tyk supports: • Client Streaming • Server Streaming •"
summary: "Bidirectional Streaming Set flush_interval = 1 (ms) in tyk.conf : \"http_server_options\": { \"flush_interval\": 1 } Tyk"
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

<div style="position:relative; width:100%; height:100%; overflow:hidden; background:#ffffff; color:#0a0c2c; font-family:Arial, Helvetica, sans-serif;">
  <div style="position:absolute; left:89px; top:36px; width:820px; color:#5b12d6; font-size:3.45rem; line-height:1.02; font-weight:800; letter-spacing:-0.04em; white-space:nowrap;">Streaming Support in gRPC</div>
  <div style="position:absolute; left:106px; top:149px; color:#0a0c2c; font-size:1.08rem; line-height:1.22; font-weight:400;">Tyk supports:</div>
  <div style="position:absolute; left:119px; top:183px; color:#0a0c2c; font-size:1.06rem; line-height:1.25; font-weight:400;">•&nbsp;&nbsp;Client Streaming</div>
  <div style="position:absolute; left:119px; top:217px; color:#0a0c2c; font-size:1.06rem; line-height:1.25; font-weight:400;">•&nbsp;&nbsp;Server Streaming</div>
  <div style="position:absolute; left:119px; top:251px; color:#0a0c2c; font-size:1.06rem; line-height:1.25; font-weight:400;">•&nbsp;&nbsp;Bidirectional Streaming</div>
  <div style="position:absolute; left:106px; top:331px; color:#0a0c2c; font-size:1.08rem; line-height:1.24; font-weight:400;">Set <span style="font-family:Menlo, Monaco, Consolas, 'Courier New', monospace;">flush_interval = 1</span> (ms) in <span style="font-family:Menlo, Monaco, Consolas, 'Courier New', monospace;">tyk.conf</span>:</div>
  <div style="position:absolute; left:106px; top:369px; color:#22253d; font-family:Menlo, Monaco, Consolas, 'Courier New', monospace; font-size:0.88rem; line-height:1.38; white-space:pre;">"http_server_options": {<br />&nbsp;&nbsp;"flush_interval": 1<br />}</div>
  <div style="position:absolute; left:873px; top:489px; width:78px; height:44px; background:#07051f; border-top-left-radius:24px; display:flex; align-items:flex-end; justify-content:flex-start; padding:0 10px 8px 10px; box-sizing:border-box; overflow:hidden;">
    <div style="width:7px; height:7px; background:#21e9ba; border-top-left-radius:1px; border-top-right-radius:3px; border-bottom-left-radius:5px; border-bottom-right-radius:1px; margin-right:4px; margin-bottom:5px;"></div>
    <div style="font-size:1.05rem; line-height:1; font-weight:800; color:#ffffff; letter-spacing:-0.04em;">Tyk</div>
  </div>
</div>

<!-- Notes: Tyk also supports all types of gRPC streaming—including client-side, server-side, and bidirectional streams.
One important tuning parameter here is flush_interval. This controls how quickly Tyk forwards upstream responses to the client.
For streaming to work smoothly, set flush_interval to a very low value—we recommend 1 millisecond—so Tyk can forward data in real time without buffering delays. -->
