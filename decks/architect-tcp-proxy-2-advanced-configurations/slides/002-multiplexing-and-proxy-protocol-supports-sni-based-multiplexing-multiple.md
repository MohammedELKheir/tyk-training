---
id: architect-tcp-proxy-2-advanced-configurations/002-multiplexing-and-proxy-protocol-supports-sni-based-multiplexing-multiple
deck_id: architect-tcp-proxy-2-advanced-configurations
order: 2
slug: multiplexing-and-proxy-protocol-supports-sni-based-multiplexing-multiple
title: "Multiplexing & Proxy Protocol Supports SNI-based multiplexing (multiple services"
summary: "on one port) Services must share the same protocol (e.g., TLS) Support for PROXY protocol (e.g., when behind another proxy) \"enable_proxy_protocol\": true Tyk"
standalone_safe: true
reusable: true
requires_context: []
builds_on: []
recommended_next: [architect-tcp-proxy-2-advanced-configurations/003-port-whitelisting-custom-ports-must-be-explicitly-allowed-ports-whitelis]
customer_visible: true
notes_visibility: customer-safe
---
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
