---
id: custom-plugins-2025/009-plugin-bundles
deck_id: custom-plugins-2025
order: 9
slug: plugin-bundles
title: "Plugin Bundles"
summary: "Plugin Bundles Pros: Reusability: Multiple plugins can be bundled together and reused across different APIs and Tyk Gateways. Centralized management: Plugins can be centrally store"
standalone_safe: true
reusable: true
requires_context: []
builds_on: []
recommended_next: [custom-plugins-2025/010-grpc-plugins]
customer_visible: true
notes_visibility: customer-safe
---
---
layout: default
---

<h1 style="font-size:2rem; font-weight:800; color:#5900CB; margin-bottom:1rem;">Plugin Bundles</h1>

<div style="font-size:0.92rem; color:#03031C; line-height:1.72;">
  <ul style="margin-top:0; padding-left:1.2rem;">
    <li><span style="font-weight:700;">Plugin Bundles</span></li>
    <li><span style="font-weight:700;">Pros:</span>
      <ul style="margin-top:0.2rem; padding-left:1.1rem;">
        <li>Reusability: Multiple plugins can be bundled together and reused across different APIs and Tyk Gateways.</li>
        <li>Centralized management: Plugins can be centrally stored and updated on a remote server.</li>
        <li>Flexible deployment: Suitable for large, distributed architectures where plugins need to be updated across multiple gateways.</li>
      </ul>
    </li>
    <li><span style="font-weight:700;">Cons:</span>
      <ul style="margin-top:0.2rem; padding-left:1.1rem;">
        <li>Network dependency: Tyk Gateway depends on the remote server, which may introduce latency or fail if the server is down.</li>
        <li>Complexity: Configuration and deployment can be more complex compared to local plugins.</li>
      </ul>
    </li>
  </ul>
</div>

<!-- Notes: Plugin Bundles package multiple plugins together and deploy them remotely.
They are great for reuse, centralized management, and large distributed systems.
The trade-offs are extra configuration complexity and dependence on a remote bundle server. -->
