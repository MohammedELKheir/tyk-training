---
id: graphql-2025/051-key-concepts-arguments-2
deck_id: graphql-2025
order: 51
slug: key-concepts-arguments-2
title: "Key Concepts - Arguments"
summary: "Injecting Arguments into REST Paths Templating REST URLs In the “Configure Data Source” tab: Use this template in the path field: https://example.com/user/{{ .arguments.id }} Type"
standalone_safe: true
reusable: true
requires_context: []
builds_on: []
recommended_next: [graphql-2025/052-key-concepts-arguments-3]
customer_visible: true
notes_visibility: customer-safe
---
---
layout: default
---

<h2 style="color:#5900CB; font-size:1.8rem; font-weight:bold; margin-bottom:1rem;">Key Concepts - Arguments</h2>



<div style="background:#1a1a2e; border-radius:8px; padding:12px 16px; margin-top:0.5rem; overflow:auto;">
  <pre v-pre style="color:#e0e0e0; font-size:0.6rem; margin:0; font-family:monospace; line-height:1.5; white-space:pre;">Injecting Arguments into REST Paths
Templating REST URLs
In the “Configure Data Source” tab:
Use this template in the path field:
https://example.com/user/{{ .arguments.id }}
Type { to access a dropdown of available fields and arguments.
Tip: You can dynamically inject any GraphQL argument or field this way.</pre>
</div>

<!-- Notes: When configuring your DataSource, Tyk provides a flexible way to map GraphQL arguments into your REST call.
In this case, to hit an endpoint like /user/123, you use templating like this:
 https://example.com/user/{{ .arguments.id }}
As you type the curly brace {, Tyk shows a dropdown with all the arguments and fields you can use — it’s very intuitive.
This setup allows your UDG to resolve data dynamically and efficiently, making it easier to integrate with your existing APIs without writing extra code. -->
