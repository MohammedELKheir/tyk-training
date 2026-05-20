---
id: custom-plugins-2025/010-grpc-plugins
deck_id: custom-plugins-2025
order: 10
slug: grpc-plugins
title: "gRPC Plugins"
summary: "gRPC Plugins (Remote) Pros: Language flexibility: You can write plugins in any gRPC-supported language, offering more flexibility for developers. Scalability: Ideal for large-scale"
standalone_safe: true
reusable: true
requires_context: []
builds_on: []
recommended_next: [custom-plugins-2025/011-plugin-development-flow]
customer_visible: true
notes_visibility: customer-safe
---
---
layout: default
---

<h1 style="font-size:2rem; font-weight:800; color:#5900CB; margin-bottom:1rem;">gRPC Plugins</h1>

<div style="font-size:0.92rem; color:#03031C; line-height:1.72;">
  <ul style="margin-top:0; padding-left:1.2rem;">
    <li><span style="font-weight:700;">gRPC Plugins (Remote)</span></li>
    <li><span style="font-weight:700;">Pros:</span>
      <ul style="margin-top:0.2rem; padding-left:1.1rem;">
        <li>Language flexibility: You can write plugins in any gRPC-supported language, offering more flexibility for developers.</li>
        <li>Scalability: Ideal for large-scale environments where plugins need to run across distributed systems.</li>
        <li>Separation of concerns: Plugins are executed remotely, keeping the Tyk Gateway lightweight.</li>
      </ul>
    </li>
    <li><span style="font-weight:700;">Cons:</span>
      <ul style="margin-top:0.2rem; padding-left:1.1rem;">
        <li>Network latency: Involves remote execution, which can add network latency depending on the server’s location and load.</li>
        <li>More complex setup: Requires additional infrastructure such as a gRPC server and more configuration.</li>
        <li>Potential failures: Relies on external gRPC server availability, which could lead to service disruptions if the server fails.</li>
      </ul>
    </li>
  </ul>
</div>

<!-- Notes: gRPC Plugins give you the most flexibility because they can be written in many languages and run remotely.
They are ideal for distributed systems and strong separation of concerns.
But they require extra infrastructure, more setup, and careful handling of latency and service availability. -->
