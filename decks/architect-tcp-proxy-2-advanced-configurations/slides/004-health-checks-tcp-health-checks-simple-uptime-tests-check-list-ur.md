---
id: architect-tcp-proxy-2-advanced-configurations/004-health-checks-tcp-health-checks-simple-uptime-tests-check-list-ur
deck_id: architect-tcp-proxy-2-advanced-configurations
order: 4
slug: health-checks-tcp-health-checks-simple-uptime-tests-check-list-ur
title: "Health Checks TCP Health Checks – Simple \"uptime_tests\": { \"check_list\": [ { \"ur"
summary: "l\": \"127.0.0.1:6379\", \"commands\": [] } ] } Just checks if a port is open Advanced Health Checks – Redis Sentinel \"commands\": [ { \"name\": \"send\", \"message\": \"PING\\r\\n\" }, { \"name\":"
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
