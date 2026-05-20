---
id: custom-plugins-2025/015-bundler-cli-tool
deck_id: custom-plugins-2025
order: 15
slug: bundler-cli-tool
title: "Bundler CLI Tool"
summary: "The Bundler tool is a CLI service, provided by the Gateway as part of its binary since v2.8. To create plugin bundles, you will need Manifest.json Plugin source code files Certific"
standalone_safe: true
reusable: true
requires_context: []
builds_on: []
recommended_next: [custom-plugins-2025/016-bundles-manifest-files]
customer_visible: true
notes_visibility: customer-safe
---
---
layout: default
---

<h1 style="font-size:2rem; font-weight:800; color:#5900CB; margin-bottom:1rem;">Bundler CLI Tool</h1>

<div style="font-size:0.9rem; color:#03031C; line-height:1.7;">
  <div>The Bundler tool is a CLI service, provided by the Gateway as part of its binary since v2.8.</div>
  <div style="margin-top:0.7rem; font-weight:800; color:#03031C;">To create plugin bundles, you will need</div>
  <ul style="margin-top:0.2rem; padding-left:1.2rem;">
    <li>Manifest.json</li>
    <li>Plugin source code files</li>
    <li>Certificate key (optional)</li>
  </ul>
</div>

```bash
$ tyk bundle build
```

<div style="font-size:0.84rem; color:#555; line-height:1.6; margin-top:0.7rem;">
  The resulting file contains the specified files and a modified manifest.json with checksum and signature fields applied when required. By default, Tyk attempts to sign plugin bundles for improved security.
</div>

<!-- Notes: The Bundler CLI Tool packages everything needed for a plugin into a ZIP bundle.
You need a manifest.json, plugin source files, and optionally a certificate key.
The command is tyk bundle build.
Tyk then generates a bundle with checksum and signature information to support secure deployment. -->
