---
id: custom-plugins-2025/017-javascript-custom-plugin
deck_id: custom-plugins-2025
order: 17
slug: javascript-custom-plugin
title: "Javascript custom plugin"
summary: "Step 1: Create a plugin within the gateway directory. injectCustomHeader.js Step 2: Modify the API definition on the Dashboard. Test via Postman. ```json \"pre\": [ { \"disabled\": fal"
standalone_safe: true
reusable: true
requires_context: []
builds_on: []
recommended_next: [custom-plugins-2025/018-jsvm-custom-plugin-w-bundles]
customer_visible: true
notes_visibility: customer-safe
---
---
layout: default
---

<h1 style="font-size:2rem; font-weight:800; color:#5900CB; margin-bottom:1rem;">Javascript custom plugin</h1>

<div style="display:flex; gap:1rem; align-items:flex-start;">
  <div style="flex:1; font-size:0.9rem; color:#03031C; line-height:1.7;">
    <div><span style="font-weight:800; color:#5900CB;">Step 1:</span> Create a plugin within the gateway directory.</div>
    <div style="margin-top:0.25rem;"><code>injectCustomHeader.js</code></div>
    <div style="margin-top:0.8rem;"><span style="font-weight:800; color:#5900CB;">Step 2:</span> Modify the API definition on the Dashboard.</div>
    <div style="margin-top:0.8rem;">Test via Postman.</div>
  </div>
  <div style="flex:1;">

```json
"pre": [
  {
    "disabled": false,
    "name": "injectCustomHeader",
    "path": "/opt/tyk-gateway/jsvm/injectCustomHeader.js",
    "require_session": false,
    "raw_body_only": false
  }
]
```

  </div>
</div>
