---
id: custom-plugins-2025/018-jsvm-custom-plugin-w-bundles
deck_id: custom-plugins-2025
order: 18
slug: jsvm-custom-plugin-w-bundles
title: "JSVM Custom plugin /w Bundles"
summary: "Create 2 plugins within the gateway directory: injectCustomHeader.js and tracingHeader.js . Create a manifest.json file and define both plugins in the JSON file. Use Tyk bundler CL"
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

<h1 style="font-size:1.95rem; font-weight:800; color:#5900CB; margin-bottom:1rem;">JSVM Custom plugin /w Bundles</h1>

<div style="font-size:0.88rem; color:#03031C; line-height:1.65;">
  <ol style="margin:0; padding-left:1.2rem;">
    <li>Create 2 plugins within the gateway directory: <code>injectCustomHeader.js</code> and <code>tracingHeader.js</code>.</li>
    <li>Create a <code>manifest.json</code> file and define both plugins in the JSON file.</li>
    <li>Use Tyk bundler CLI to create a bundle and serve it to the web server.</li>
    <li>Ensure you have a web server up and running.</li>
    <li>Update the API definition to receive plugins via the bundle.</li>
    <li>Test via Postman.</li>
  </ol>
</div>

```json
"custom_middleware_bundle": "bundle.zip"
```
