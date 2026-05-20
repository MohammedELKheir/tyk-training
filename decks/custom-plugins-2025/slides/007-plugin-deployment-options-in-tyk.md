---
id: custom-plugins-2025/007-plugin-deployment-options-in-tyk
deck_id: custom-plugins-2025
order: 7
slug: plugin-deployment-options-in-tyk
title: "Plugin Deployment Options in Tyk"
summary: "Local Plugins The plugin source code and configuration are stored locally on the same file system as the Tyk Gateway. Configuration is specified within the API Definition. Plugin B"
standalone_safe: true
reusable: true
requires_context: []
builds_on: []
recommended_next: [custom-plugins-2025/008-local-plugins]
customer_visible: true
notes_visibility: customer-safe
---
---
layout: default
---

<h1 style="font-size:1.86rem; font-weight:800; color:#5900CB; margin-bottom:1rem;">Plugin Deployment Options in Tyk</h1>

<div style="font-size:0.93rem; color:#03031C; line-height:1.75;">
  <div style="margin-bottom:0.9rem;">
    <div style="font-weight:800; color:#03031C;">Local Plugins</div>
    <div>The plugin source code and configuration are stored locally on the same file system as the Tyk Gateway.</div>
    <div>Configuration is specified within the API Definition.</div>
  </div>
  <div style="margin-bottom:0.9rem;">
    <div style="font-weight:800; color:#03031C;">Plugin Bundles (Remote)</div>
    <div>Plugin source code and configuration are bundled into a zip file and uploaded to a remote web server.</div>
    <div>Tyk Gateway downloads, extracts, caches, and executes these plugins for the configured phases of the API lifecycle.</div>
  </div>
  <div>
    <div style="font-weight:800; color:#03031C;">gRPC Plugins (Remote)</div>
    <div>Custom plugins are hosted on a remote server and executed via gRPC.</div>
    <div>Tyk Gateway sends requests to the gRPC server, allowing plugins to run at specific points during the API request/response lifecycle, using any preferred programming language.</div>
  </div>
</div>

<!-- Notes: Tyk provides three main deployment options.
Local Plugins live on the same file system as the Gateway and execute locally.
Plugin Bundles package source code and configuration into a zip served from a remote web server.
The Gateway downloads, extracts, caches, and runs them.
gRPC Plugins run remotely on a gRPC server, which gives you multi-language flexibility and remote execution. -->
