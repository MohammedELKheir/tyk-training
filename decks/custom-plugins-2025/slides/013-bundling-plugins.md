---
id: custom-plugins-2025/013-bundling-plugins
deck_id: custom-plugins-2025
order: 13
slug: bundling-plugins
title: "Bundling Plugins"
summary: "Plugin(s) source + manifest.json Upload Web server external or remote Download Tyk Gateway cache, extract, execute Centralized management, scalable distribution, and cached executi"
standalone_safe: true
reusable: true
requires_context: []
builds_on: []
recommended_next: [custom-plugins-2025/014-bundling-plugins-2]
customer_visible: true
notes_visibility: customer-safe
---
---
layout: default
---

<h1 style="font-size:2rem; font-weight:800; color:#5900CB; margin-bottom:1rem;">Bundling Plugins</h1>

<div style="position:relative; height:360px; margin-top:0.8rem;">
  <div style="position:absolute; left:12px; top:110px; width:130px; height:96px; border:2px solid #e2e2e2; border-radius:16px; background:white; display:flex; align-items:center; justify-content:center; text-align:center; color:#555; font-size:0.82rem; box-shadow:0 2px 8px rgba(0,0,0,0.06);">Plugin(s)<br><span style="font-size:0.68rem;">source + manifest.json</span></div>
  <div style="position:absolute; left:182px; top:110px; width:96px; height:96px; border:2px solid #e2e2e2; border-radius:16px; background:white; display:flex; align-items:center; justify-content:center; text-align:center; color:#555; font-size:0.8rem; box-shadow:0 2px 8px rgba(0,0,0,0.06);">Upload</div>
  <div style="position:absolute; left:320px; top:110px; width:120px; height:96px; border:2px solid #e2e2e2; border-radius:16px; background:white; display:flex; align-items:center; justify-content:center; text-align:center; color:#555; font-size:0.8rem; box-shadow:0 2px 8px rgba(0,0,0,0.06);">Web server<br><span style="font-size:0.68rem;">external or remote</span></div>
  <div style="position:absolute; left:482px; top:110px; width:110px; height:96px; border:2px solid #e2e2e2; border-radius:16px; background:white; display:flex; align-items:center; justify-content:center; text-align:center; color:#555; font-size:0.8rem; box-shadow:0 2px 8px rgba(0,0,0,0.06);">Download</div>
  <div style="position:absolute; left:634px; top:110px; width:146px; height:96px; border:2px solid #e2e2e2; border-radius:16px; background:white; display:flex; align-items:center; justify-content:center; text-align:center; color:#8438FA; font-weight:700; font-size:0.8rem; box-shadow:0 2px 8px rgba(0,0,0,0.06);">Tyk Gateway<br><span style="font-size:0.68rem; color:#555; font-weight:500;">cache, extract, execute</span></div>
  <div style="position:absolute; left:143px; top:155px; width:28px; height:4px; background:#d7d7d7;"></div>
  <div style="position:absolute; left:168px; top:149px; width:0; height:0; border-top:8px solid transparent; border-bottom:8px solid transparent; border-left:12px solid #d7d7d7;"></div>
  <div style="position:absolute; left:279px; top:155px; width:28px; height:4px; background:#d7d7d7;"></div>
  <div style="position:absolute; left:304px; top:149px; width:0; height:0; border-top:8px solid transparent; border-bottom:8px solid transparent; border-left:12px solid #d7d7d7;"></div>
  <div style="position:absolute; left:441px; top:155px; width:28px; height:4px; background:#d7d7d7;"></div>
  <div style="position:absolute; left:466px; top:149px; width:0; height:0; border-top:8px solid transparent; border-bottom:8px solid transparent; border-left:12px solid #d7d7d7;"></div>
  <div style="position:absolute; left:593px; top:155px; width:28px; height:4px; background:#d7d7d7;"></div>
  <div style="position:absolute; left:618px; top:149px; width:0; height:0; border-top:8px solid transparent; border-bottom:8px solid transparent; border-left:12px solid #d7d7d7;"></div>
  <div style="position:absolute; left:38px; top:246px; width:742px; font-size:0.86rem; line-height:1.65; color:#03031C; text-align:center;">
    Centralized management, scalable distribution, and cached execution across multiple gateways.
  </div>
</div>

<!-- Notes: Bundling plugins centralizes plugin management for multiple gateways.
First you create the plugin source code and a manifest.json file.
Then upload the bundle to a web server.
When a Gateway starts or reloads the API, it downloads the bundle, caches it, extracts it, and executes the plugin according to the API definition. -->
