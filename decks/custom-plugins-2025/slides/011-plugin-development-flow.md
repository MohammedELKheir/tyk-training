---
id: custom-plugins-2025/011-plugin-development-flow
deck_id: custom-plugins-2025
order: 11
slug: plugin-development-flow
title: "Plugin Development Flow"
summary: "Step 1: Initialize Go Module Create a folder for your plugin. Initialize Go modules - go mod init tyk-plugin Step 2: Write the Plugin Plugin structure: A Go main package. An export"
standalone_safe: true
reusable: true
requires_context: []
builds_on: []
recommended_next: [custom-plugins-2025/012-deploying-plugins-tyk-classic-def]
customer_visible: true
notes_visibility: customer-safe
---
---
layout: default
---

<h1 style="font-size:2rem; font-weight:800; color:#5900CB; margin-bottom:1rem;">Plugin Development Flow</h1>

<div style="font-size:0.9rem; color:#03031C; line-height:1.65;">
  <div style="margin-bottom:0.55rem;"><span style="font-weight:800; color:#5900CB;">Step 1: Initialize Go Module</span></div>
  <ul style="margin-top:0; padding-left:1.2rem;">
    <li>Create a folder for your plugin.</li>
    <li>Initialize Go modules - <code>go mod init tyk-plugin</code></li>
  </ul>
  <div style="margin:0.7rem 0 0.55rem 0;"><span style="font-weight:800; color:#5900CB;">Step 2: Write the Plugin</span></div>
  <ul style="margin-top:0; padding-left:1.2rem;">
    <li>Plugin structure:</li>
    <li>A Go main package.</li>
    <li>An exported function like <code>AddFooBarHeader()</code> for custom logic.</li>
  </ul>
  <div style="margin:0.7rem 0 0.55rem 0;"><span style="font-weight:800; color:#5900CB;">Step 3: Sync Dependencies</span></div>
  <ul style="margin-top:0; padding-left:1.2rem;">
    <li>Run <code>go mod tidy</code></li>
  </ul>
  <div style="margin:0.7rem 0 0.55rem 0;"><span style="font-weight:800; color:#5900CB;">Step 4: Build the Plugin</span></div>
  <ul style="margin-top:0; padding-left:1.2rem;">
    <li>Build the Go plugin as a shared library (.so) using Tyk’s Docker image or Go commands.</li>
  </ul>
</div>

```bash
func AddFooBarHeader() {
    // Custom logic here
}

docker run --rm -v `pwd`:/plugin-source \
  tykio/tyk-plugin-compiler:v5.2.1 plugin.so
```

<!-- Notes: First set up the plugin workspace and initialize Go modules.
Then write the plugin as a Go main package with an exported function such as AddFooBarHeader.
Next, sync dependencies with go mod tidy.
Finally, build the plugin as a shared library, for example with Tyk’s plugin compiler Docker image or Go build tooling. -->
