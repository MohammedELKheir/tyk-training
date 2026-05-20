---
id: custom-plugins-2025/012-deploying-plugins-tyk-classic-def
deck_id: custom-plugins-2025
order: 12
slug: deploying-plugins-tyk-classic-def
title: "Deploying Plugins Tyk Classic Def"
summary: "Step 1: Open Tyk Classic API Definition Editor. Select your API from the list of created APIs. Click View Raw Definition to access the API Definition editor. Step 2: Edit the custo"
standalone_safe: true
reusable: true
requires_context: []
builds_on: []
recommended_next: [custom-plugins-2025/013-bundling-plugins]
customer_visible: true
notes_visibility: customer-safe
---
---
layout: default
---

<h1 style="font-size:1.85rem; font-weight:800; color:#5900CB; margin-bottom:1rem;">Deploying Plugins Tyk Classic Def</h1>

<div style="display:flex; gap:1.1rem; align-items:flex-start;">
  <div style="flex:1.1; font-size:0.88rem; color:#03031C; line-height:1.7;">
    <div style="margin-bottom:0.65rem;"><span style="font-weight:800; color:#5900CB;">Step 1:</span> Open Tyk Classic API Definition Editor.</div>
    <div style="margin-bottom:0.65rem;">Select your API from the list of created APIs.</div>
    <div style="margin-bottom:0.65rem;">Click View Raw Definition to access the API Definition editor.</div>
    <div style="margin-bottom:0.65rem;"><span style="font-weight:800; color:#5900CB;">Step 2:</span> Edit the <code>custom_middleware</code> section with the necessary plugin settings.</div>
    <div><span style="font-weight:800; color:#5900CB;">Step 3:</span> Save changes by clicking Update.</div>
  </div>
  <div style="flex:1;">

```json
"custom_middleware": {
  "pre": [
    {
      "name": "myCustomPlugin",
      "path": "/opt/tyk-gateway/plugins/plugin.so",
      "driver": "otto/goplugin"
    }
  ]
}
```

  </div>
</div>

<!-- Notes: Start in the Tyk Dashboard and open the API you want to change.
Use View Raw Definition to access the full JSON configuration.
Update the custom_middleware block with your plugin path, name, and driver.
Then click Update so Tyk reloads the API Definition and loads the configured plugin. -->
