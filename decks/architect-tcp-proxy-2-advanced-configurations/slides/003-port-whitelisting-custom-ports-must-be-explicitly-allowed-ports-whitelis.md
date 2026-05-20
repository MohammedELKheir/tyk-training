---
id: architect-tcp-proxy-2-advanced-configurations/003-port-whitelisting-custom-ports-must-be-explicitly-allowed-ports-whitelis
deck_id: architect-tcp-proxy-2-advanced-configurations
order: 3
slug: port-whitelisting-custom-ports-must-be-explicitly-allowed-ports-whitelis
title: "Port Whitelisting Custom ports must be explicitly allowed \"ports_whitelist\": { \""
summary: "https\": { \"ranges\": [{ \"from\": 8000, \"to\": 9000 }] }, \"tls\": { \"ports\": [6000, 6015] } } To allow any port: \"disable_ports_whitelist\": true Tyk"
standalone_safe: true
reusable: true
requires_context: []
builds_on: []
recommended_next: [architect-tcp-proxy-2-advanced-configurations/004-health-checks-tcp-health-checks-simple-uptime-tests-check-list-ur]
customer_visible: true
notes_visibility: customer-safe
---
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
