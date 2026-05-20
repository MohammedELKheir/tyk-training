---
id: graphql-2025/022-setting-up-field-based-permissions-2
deck_id: graphql-2025
order: 22
slug: setting-up-field-based-permissions-2
title: "Setting Up Field Based Permissions"
summary: "Create a policy Create an API Key with policy Set up blocklist on the Country Type field Use the Playground and add the header as a json: { “Authorization”: “API-KEY” } Make the qu"
standalone_safe: true
reusable: true
requires_context: []
builds_on: []
recommended_next: [graphql-2025/023-complexity-limiting]
customer_visible: true
notes_visibility: customer-safe
---
---
layout: default
---

<h2 style="color:#5900CB; font-size:1.8rem; font-weight:bold; margin-bottom:1rem;">Setting Up Field Based Permissions</h2>

<div style="display:flex; gap:1.5rem;">
  <div style="flex:1.2; font-size:0.95rem; line-height:1.7; color:#03031C;">
    Create a policy
Create an API Key with policy
Set up blocklist on the Country Type field
Use the Playground and add the header as a json:
{
  “Authorization”: “API-KEY”
}
Make the query:
  </div>
  <div style="flex:1; background:#1a1a2e; border-radius:8px; padding:12px 16px; overflow:auto;">
    <pre style="color:#e0e0e0; font-size:0.6rem; margin:0; font-family:monospace; line-height:1.5; white-space:pre;">query {
  countries {
    code
    name
    emoji
  }
}</pre>
  </div>
</div>

<!-- Notes: query {
  countries {
    code
    name
    emoji
  }
} -->
