---
theme: tyk
layout: cover
background: 'linear-gradient(135deg, #7f3af4 0%, #8f39fa 52%, #c414ff 100%)'
aspectRatio: 16/9
canvasWidth: 980
highlighter: shiki
lineNumbers: false
drawings:
  persist: false
transition: slide-left
title: "Advanced gRPC Proxying Concepts"
---

# Advanced gRPC
# Proxying Concepts

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
