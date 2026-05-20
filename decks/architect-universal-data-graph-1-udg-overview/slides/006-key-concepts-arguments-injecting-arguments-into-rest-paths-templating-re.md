---
id: architect-universal-data-graph-1-udg-overview/006-key-concepts-arguments-injecting-arguments-into-rest-paths-templating-re
deck_id: architect-universal-data-graph-1-udg-overview
order: 6
slug: key-concepts-arguments-injecting-arguments-into-rest-paths-templating-re
title: "Key Concepts - Arguments Injecting Arguments into REST Paths Templating REST URL"
summary: "s In the “Configure Data Source” tab: Use this template in the path field: https://example.com/user/{{ .arguments.id }} Type { to access a dropdown of available fields and argument"
standalone_safe: true
reusable: true
requires_context: []
builds_on: []
recommended_next: [architect-universal-data-graph-1-udg-overview/007-key-concepts-arguments]
customer_visible: true
notes_visibility: customer-safe
---
---
layout: default
---

<div style="position:relative; width:100%; min-height:520px; padding-right:7.6rem; color:#10122c;">
  <h1 style="margin:0 0 0.65rem 0; color:#5B11D9; font-size:3.1rem; line-height:1.02; font-weight:900;">Key Concepts - Arguments</h1>
  <p style="margin:0 0 0.22rem 0; font-size:0.95rem; font-weight:800;">Injecting Arguments into REST Paths</p>
  <p style="margin:0 0 0.08rem 0; font-size:0.82rem; font-weight:700;">Templating REST URLs</p>
  <p style="margin:0 0 0.08rem 0; font-size:0.78rem;">In the “Configure Data Source” tab:</p>
  <p style="margin:0 0 0.08rem 0; font-size:0.78rem;">Use this template in the path field:</p>
  <pre v-pre style="margin:0 0 0.55rem 0; background:transparent; color:#171932; font-size:0.84rem; line-height:1.38; font-family:'SFMono-Regular', Menlo, Monaco, Consolas, monospace; white-space:pre;">https://example.com/user/{{ .arguments.id }}</pre>
  <p style="margin:0 0 0.08rem 0; font-size:0.75rem;">Type <span style="font-family:'SFMono-Regular', Menlo, Monaco, Consolas, monospace;">{</span> to access a dropdown of available fields and arguments.</p>
  <p style="margin:0; font-size:0.75rem;">Tip: You can dynamically inject any GraphQL argument or field this way.</p>
  <div style="position:absolute; right:-1.1rem; bottom:-0.55rem; width:8.4rem; height:5rem; background:#03030d; border-top-left-radius:2rem; display:flex; align-items:center; justify-content:center;">
    <img src="./public/icons/tyk-logo.png" style="width:4.2rem;" />
  </div>
</div>

<!-- Notes: When configuring your DataSource, Tyk provides a flexible way to map GraphQL arguments into your REST call.
In this case, to hit an endpoint like /user/123, you use templating like this: https://example.com/user/{{ .arguments.id }}
As you type the curly brace {, Tyk shows a dropdown with all the arguments and fields you can use — it’s very intuitive.
This setup allows your UDG to resolve data dynamically and efficiently, making it easier to integrate with your existing APIs without writing extra code. -->
