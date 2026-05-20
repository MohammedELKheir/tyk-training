---
id: custom-plugins-2025/014-bundling-plugins-2
deck_id: custom-plugins-2025
order: 14
slug: bundling-plugins-2
title: "Bundling Plugins"
summary: "How Plugin Bundles Work ZIP contains source code + manifest file. API definition references the plugin bundle name. Tyk Gateway downloads, caches, extracts, and executes plugins fr"
standalone_safe: true
reusable: true
requires_context: []
builds_on: []
recommended_next: [custom-plugins-2025/015-bundler-cli-tool]
customer_visible: true
notes_visibility: customer-safe
---
---
layout: default
---

<h1 style="font-size:2rem; font-weight:800; color:#5900CB; margin-bottom:1rem;">Bundling Plugins</h1>

<div style="font-size:0.9rem; color:#03031C; line-height:1.7;">
  <div style="font-weight:800; color:#03031C; margin-bottom:0.35rem;">How Plugin Bundles Work</div>
  <ul style="margin-top:0; padding-left:1.2rem;">
    <li>ZIP contains source code + manifest file.</li>
    <li>API definition references the plugin bundle name.</li>
    <li>Tyk Gateway downloads, caches, extracts, and executes plugins from the bundle.</li>
  </ul>
  <div style="font-weight:800; color:#03031C; margin:0.8rem 0 0.35rem 0;">Bundle Caching</div>
  <ul style="margin-top:0; padding-left:1.2rem;">
    <li>Plugin bundles are cached locally for efficiency.</li>
    <li>Use unique filenames (e.g. version numbers) to update bundles.</li>
    <li>Cache location: <code>{TYK_ROOT}/{CONFIG_MIDDLEWARE_PATH}/bundles</code></li>
  </ul>
</div>

```json
{
  "enable_bundle_downloader": true,
  "bundle_base_url": "http://my-bundle-server.com/bundles/",
  "public_key_path": "/path/to/my/pubkey",
  "enable_coprocess": true
}
```

<!-- Notes: A plugin bundle is a ZIP containing source code and manifest.json.
The API definition points to the bundle name, and Tyk handles downloading, caching, extracting, and executing it.
Bundles are cached locally for performance.
To enable them, update tyk.conf with bundle downloader settings, base URL, public key path, and coprocess support if needed. -->
