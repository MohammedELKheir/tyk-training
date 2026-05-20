---
theme: tyk
layout: default
aspectRatio: 16/9
canvasWidth: 980
highlighter: shiki
lineNumbers: false
drawings:
  persist: false
transition: slide-left
title: "TCP Proxy: Advanced Configurations"
---

<div style="position:relative; width:100%; height:100%; overflow:hidden; background:linear-gradient(135deg, #7B38F6 0%, #8F39FA 45%, #C414FF 100%);">
  <div style="position:absolute; inset:0; display:flex; align-items:center; justify-content:center; padding-top:86px;">
    <h1 style="margin:0; color:#ffffff; font-size:5.05rem; line-height:1.08; font-weight:800; text-align:center; letter-spacing:-0.04em;">Advanced<br />Configurations</h1>
  </div>

  <div style="position:absolute; right:0; bottom:0; width:180px; height:126px; background:#07051F; border-top-left-radius:56px; display:flex; align-items:flex-end; justify-content:flex-start; padding:0 24px 20px 22px; box-sizing:border-box; overflow:hidden;">
    <div style="width:18px; height:18px; background:#21E9BA; border-top-left-radius:3px; border-top-right-radius:8px; border-bottom-left-radius:13px; border-bottom-right-radius:3px; margin-right:8px; margin-bottom:6px;"></div>
    <div style="font-size:2.1rem; line-height:1; font-weight:800; color:#ffffff; letter-spacing:-0.04em; font-family:Arial, Helvetica, sans-serif;">Tyk</div>
  </div>
</div>

---
layout: default
---

<div style="position:relative; width:100%; height:100%; background:#ffffff; color:#090B2B; overflow:hidden;">
  <h1 style="position:absolute; left:76px; top:42px; margin:0; color:#5A12D6; font-size:3.28rem; line-height:1.03; font-weight:800; letter-spacing:-0.045em; white-space:nowrap;">Multiplexing &amp; Proxy Protocol</h1>

  <div style="position:absolute; left:108px; top:145px; width:810px; color:#0B1030; font-size:1.3rem; line-height:1.4;">
    <ul style="margin:0; padding-left:1.9rem; list-style-type:disc;">
      <li style="margin:0 0 0.35rem 0; padding-left:0.5rem;">Supports SNI-based multiplexing (multiple services on one port)</li>
      <li style="margin:0 0 0.35rem 0; padding-left:0.5rem;">Services must share the same protocol (e.g., TLS)</li>
      <li style="margin:0; padding-left:0.5rem;">Support for PROXY protocol (e.g., when behind another proxy)</li>
    </ul>
  </div>

  <pre style="position:absolute; left:108px; top:342px; margin:0; color:#22253D; font-size:1.16rem; line-height:1.3; font-family:Menlo, Monaco, Consolas, 'Courier New', monospace; background:transparent; white-space:pre;">"enable_proxy_protocol": true</pre>

  <div style="position:absolute; right:0; bottom:0; width:180px; height:126px; background:#07051F; border-top-left-radius:56px; display:flex; align-items:flex-end; justify-content:flex-start; padding:0 24px 20px 22px; box-sizing:border-box; overflow:hidden;">
    <div style="width:18px; height:18px; background:#21E9BA; border-top-left-radius:3px; border-top-right-radius:8px; border-bottom-left-radius:13px; border-bottom-right-radius:3px; margin-right:8px; margin-bottom:6px;"></div>
    <div style="font-size:2.1rem; line-height:1; font-weight:800; color:#ffffff; letter-spacing:-0.04em; font-family:Arial, Helvetica, sans-serif;">Tyk</div>
  </div>
</div>

<!-- Notes: "Tyk supports advanced features like SNI-based multiplexing. This lets you run multiple TCP or TLS services on the same port, as long as they use different domain names.
All services on a single port must share the same protocol—so you can't mix TCP and HTTP on the same port.
If Tyk is behind a proxy that uses the PROXY protocol, like HAProxy or Envoy, just enable enable_proxy_protocol to preserve original source IPs." -->

---
layout: default
---

<div style="position:relative; width:100%; height:100%; background:#ffffff; color:#090B2B; overflow:hidden;">
  <h1 style="position:absolute; left:76px; top:38px; margin:0; color:#5A12D6; font-size:3.9rem; line-height:1.03; font-weight:800; letter-spacing:-0.045em;">Port Whitelisting</h1>

  <p style="position:absolute; left:108px; top:150px; margin:0; color:#0B1030; font-size:1.34rem; line-height:1.3;">Custom ports must be explicitly allowed</p>

  <pre style="position:absolute; left:108px; top:200px; margin:0; color:#22253D; font-size:0.94rem; line-height:1.32; font-family:Menlo, Monaco, Consolas, 'Courier New', monospace; background:transparent; white-space:pre;">"ports_whitelist": {
  "https": {
    "ranges": [{ "from": 8000, "to": 9000 }]
  },
  "tls": {
    "ports": [6000, 6015]
  }
}</pre>

  <p style="position:absolute; left:108px; top:372px; margin:0; color:#0B1030; font-size:1.28rem; line-height:1.3;">To allow any port:</p>

  <pre style="position:absolute; left:108px; top:430px; margin:0; color:#22253D; font-size:1.02rem; line-height:1.3; font-family:Menlo, Monaco, Consolas, 'Courier New', monospace; background:transparent; white-space:pre;">"disable_ports_whitelist": true</pre>

  <div style="position:absolute; right:0; bottom:0; width:180px; height:126px; background:#07051F; border-top-left-radius:56px; display:flex; align-items:flex-end; justify-content:flex-start; padding:0 24px 20px 22px; box-sizing:border-box; overflow:hidden;">
    <div style="width:18px; height:18px; background:#21E9BA; border-top-left-radius:3px; border-top-right-radius:8px; border-bottom-left-radius:13px; border-bottom-right-radius:3px; margin-right:8px; margin-bottom:6px;"></div>
    <div style="font-size:2.1rem; line-height:1; font-weight:800; color:#ffffff; letter-spacing:-0.04em; font-family:Arial, Helvetica, sans-serif;">Tyk</div>
  </div>
</div>

<!-- Notes: "Tyk doesn't allow just any TCP port by default—it uses a whitelist to control which ports can be used.
You can allow port ranges or specific ports in your tyk.conf, as shown here. This is a safety feature to prevent abuse, especially if you allow API creation through the Dashboard.
If you do need to allow any port for flexibility, you can set disable_ports_whitelist to true—but do so with caution." -->

---
layout: default
---

<div style="position:relative; width:100%; height:100%; background:#ffffff; color:#090B2B; overflow:hidden;">
  <h1 style="position:absolute; left:76px; top:26px; margin:0; color:#5A12D6; font-size:3.25rem; line-height:1.02; font-weight:800; letter-spacing:-0.045em;">Health Checks</h1>

  <h2 style="position:absolute; left:108px; top:96px; margin:0; color:#0B1030; font-size:1.28rem; line-height:1.2; font-weight:800;">TCP Health Checks – Simple</h2>

  <pre style="position:absolute; left:108px; top:142px; margin:0; color:#22253D; font-size:0.76rem; line-height:1.2; font-family:Menlo, Monaco, Consolas, 'Courier New', monospace; background:transparent; white-space:pre;">"uptime_tests": {
  "check_list": [
    { "url": "127.0.0.1:6379", "commands": [] }
  ]
}</pre>

  <ul style="position:absolute; left:132px; top:226px; width:760px; margin:0; padding-left:1.8rem; list-style-type:disc; color:#0B1030; font-size:0.98rem; line-height:1.12;">
    <li style="padding-left:0.45rem;">Just checks if a port is open</li>
  </ul>

  <h2 style="position:absolute; left:108px; top:258px; margin:0; color:#0B1030; font-size:1.18rem; line-height:1.15; font-weight:800;">Advanced Health Checks – Redis Sentinel</h2>

  <pre style="position:absolute; left:108px; top:298px; margin:0; color:#22253D; font-size:0.67rem; line-height:1.1; font-family:Menlo, Monaco, Consolas, 'Courier New', monospace; background:transparent; white-space:pre;">"commands": [
  { "name": "send", "message": "PING\r\n" },
  { "name": "expect", "message": "+PONG" },
  { "name": "send", "message": "info replication\r\n" },
  { "name": "expect", "message": "role:master" }
]</pre>

  <ul style="position:absolute; left:132px; top:424px; width:720px; margin:0; padding-left:1.8rem; list-style-type:disc; color:#0B1030; font-size:0.95rem; line-height:1.08;">
    <li style="padding-left:0.45rem; margin-bottom:0.1rem;">Directs traffic only to Redis master</li>
    <li style="padding-left:0.45rem;">Ensures failover resiliency</li>
  </ul>

  <div style="position:absolute; right:0; bottom:0; width:180px; height:126px; background:#07051F; border-top-left-radius:56px; display:flex; align-items:flex-end; justify-content:flex-start; padding:0 24px 20px 22px; box-sizing:border-box; overflow:hidden;">
    <div style="width:18px; height:18px; background:#21E9BA; border-top-left-radius:3px; border-top-right-radius:8px; border-bottom-left-radius:13px; border-bottom-right-radius:3px; margin-right:8px; margin-bottom:6px;"></div>
    <div style="font-size:2.1rem; line-height:1; font-weight:800; color:#ffffff; letter-spacing:-0.04em; font-family:Arial, Helvetica, sans-serif;">Tyk</div>
  </div>
</div>

<!-- Notes: "TCP services can be monitored with health checks, similar to HTTP.
A basic check might just confirm whether a port is open and accepting connections.
This can be helpful in simple load balancing scenarios to avoid sending traffic to a dead upstream."

"Here's a more complex but very real-world example.
Let's say you're using Redis Sentinel and you want Tyk to always send traffic to the current Redis master.
This config performs TCP-based health checks that send Redis commands like PING and INFO, and only routes to nodes that respond with role:master.
This is an elegant way to use Tyk as a smart proxy on top of Redis—automatically failing over when needed." -->
