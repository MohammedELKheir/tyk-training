---
id: custom-plugins-2025/005-plugin-types
deck_id: custom-plugins-2025
order: 5
slug: plugin-types
title: "Plugin Types"
summary: "Plugin Type Description Go Plugin Native plugins implemented in Go, the same language Tyk Gateway uses. Best for high-performance production workloads. gRPC Plugins Executed remote"
standalone_safe: true
reusable: true
requires_context: []
builds_on: []
recommended_next: [custom-plugins-2025/006-how-it-works]
customer_visible: true
notes_visibility: customer-safe
---
---
layout: default
---

<h1 style="font-size:2rem; font-weight:800; color:#5900CB; margin-bottom:1rem;">Plugin Types</h1>

<table style="width:100%; border-collapse:collapse; font-size:0.72rem; color:#03031C;">
  <thead>
    <tr style="background:#6d6d6d; color:white;">
      <th style="padding:0.5rem; text-align:left; border:1px solid #cfcfcf; width:22%;">Plugin Type</th>
      <th style="padding:0.5rem; text-align:left; border:1px solid #cfcfcf;">Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="padding:0.48rem; border:1px solid #d8d8d8; font-weight:700;">Go Plugin</td>
      <td style="padding:0.48rem; border:1px solid #d8d8d8;">Native plugins implemented in Go, the same language Tyk Gateway uses. Best for high-performance production workloads.</td>
    </tr>
    <tr style="background:#fafafa;">
      <td style="padding:0.48rem; border:1px solid #d8d8d8; font-weight:700;">gRPC Plugins</td>
      <td style="padding:0.48rem; border:1px solid #d8d8d8;">Executed remotely on a gRPC server, enabling development in any gRPC-compatible language.</td>
    </tr>
    <tr>
      <td style="padding:0.48rem; border:1px solid #d8d8d8; font-weight:700;">JavaScript (JSVM)</td>
      <td style="padding:0.48rem; border:1px solid #d8d8d8;">Lightweight ECMAScript 5 plugins that run in Tyk’s JavaScript virtual machine for fast customizations.</td>
    </tr>
    <tr style="background:#fafafa;">
      <td style="padding:0.48rem; border:1px solid #d8d8d8; font-weight:700;">Python Plugins</td>
      <td style="padding:0.48rem; border:1px solid #d8d8d8;">Embedded directly into Tyk Gateway, allowing Python code to run inside the same process.</td>
    </tr>
  </tbody>
</table>

<div style="margin-top:1rem; font-size:0.82rem; color:#555; line-height:1.6;">
  Choose the plugin type that aligns with your team’s expertise, deployment model, and performance requirements.
</div>

<!-- Notes: Go Plugins run natively in Tyk and give you the best performance.
gRPC Plugins let you write plugin logic in any gRPC-compatible language and execute it remotely.
JavaScript Plugins are lightweight and good for quick customizations or prototyping.
Python Plugins are useful for teams already comfortable with Python and wanting fast iteration.
Choose based on your use case, team skills, and performance needs. -->
