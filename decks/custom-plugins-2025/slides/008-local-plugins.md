---
id: custom-plugins-2025/008-local-plugins
deck_id: custom-plugins-2025
order: 8
slug: local-plugins
title: "Local Plugins"
summary: "Local Plugins Pros: Performance: Since the plugin code is stored locally, execution is fast with minimal latency. Simplicity: Easy to configure and manage directly within Tyk Gatew"
standalone_safe: true
reusable: true
requires_context: []
builds_on: []
recommended_next: [custom-plugins-2025/009-plugin-bundles]
customer_visible: true
notes_visibility: customer-safe
---
---
layout: default
---

<h1 style="font-size:2rem; font-weight:800; color:#5900CB; margin-bottom:1rem;">Local Plugins</h1>

<div style="font-size:0.92rem; color:#03031C; line-height:1.72;">
  <ul style="margin-top:0; padding-left:1.2rem;">
    <li><span style="font-weight:700;">Local Plugins</span></li>
    <li><span style="font-weight:700;">Pros:</span>
      <ul style="margin-top:0.2rem; padding-left:1.1rem;">
        <li>Performance: Since the plugin code is stored locally, execution is fast with minimal latency.</li>
        <li>Simplicity: Easy to configure and manage directly within Tyk Gateway.</li>
        <li>No network dependencies: No need for external communication, making it ideal for environments without external connectivity.</li>
      </ul>
    </li>
    <li><span style="font-weight:700;">Cons:</span>
      <ul style="margin-top:0.2rem; padding-left:1.1rem;">
        <li>Limited scalability: Not suitable for large, distributed environments or for reusing plugins across multiple instances of Tyk Gateway.</li>
        <li>Harder to manage updates: Every update requires manual changes on each Tyk instance.</li>
      </ul>
    </li>
  </ul>
</div>

<!-- Notes: Local Plugins are custom plugins stored and executed directly on the Tyk Gateway.
They offer low latency, simple management, and no network dependency.
The trade-off is scalability: they are harder to reuse across many gateways and every update must be applied gateway by gateway. -->
