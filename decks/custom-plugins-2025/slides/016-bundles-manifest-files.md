---
id: custom-plugins-2025/016-bundles-manifest-files
deck_id: custom-plugins-2025
order: 16
slug: bundles-manifest-files
title: "Bundles - Manifest Files"
summary: "Contains critical configuration details for the plugin bundle. Lists the source code files to be included. Files not specified in the manifest will not be included, even if present"
standalone_safe: true
reusable: true
requires_context: []
builds_on: []
recommended_next: [custom-plugins-2025/017-javascript-custom-plugin]
customer_visible: true
notes_visibility: customer-safe
---
---
layout: default
---

<h1 style="font-size:2rem; font-weight:800; color:#5900CB; margin-bottom:1rem;">Bundles - Manifest Files</h1>

<div style="display:flex; gap:1rem; align-items:flex-start;">
  <div style="flex:1; font-size:0.88rem; color:#03031C; line-height:1.7;">
    <ul style="margin-top:0; padding-left:1.2rem;">
      <li>Contains critical configuration details for the plugin bundle.</li>
      <li>Lists the source code files to be included.</li>
      <li>Files not specified in the manifest will not be included, even if present in the directory.</li>
    </ul>
    <div style="font-weight:800; color:#03031C; margin:0.7rem 0 0.3rem 0;">Key Notes</div>
    <ul style="margin-top:0; padding-left:1.2rem;">
      <li><code>custom_middleware</code> block defines pre and post execution logic.</li>
      <li><code>driver</code> specifies the plugin language (e.g. Python).</li>
      <li><code>checksum</code> and <code>signature</code> are auto-filled during the build process.</li>
    </ul>
  </div>
  <div style="flex:0 0 245px;">
    <img src="./images/icons/slide-016-Google-Shape;166;p31.png" style="width:100%; border:1px solid #ddd; border-radius:10px;" />
  </div>
</div>

<!-- Notes: The manifest file is critical because it defines what goes into the bundle and how the plugin should execute.
Only files listed in the manifest are included.
The custom_middleware block defines pre and post logic, the driver declares the language, and checksum or signature fields support integrity and trust. -->
