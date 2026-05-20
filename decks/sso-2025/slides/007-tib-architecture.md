---
id: sso-2025/007-tib-architecture
deck_id: sso-2025
order: 7
slug: tib-architecture
title: "TIB Architecture"
summary: "Request Flow: User attempts login TIB matches request to a Profile Profile invokes: Identity Provider → validates identity Identity Handler → maps to Tyk (Dashboard, Portal, OAuth)"
standalone_safe: true
reusable: true
requires_context: []
builds_on: []
recommended_next: [sso-2025/008-identity-providers]
customer_visible: true
notes_visibility: customer-safe
---
---
layout: default
---

# TIB Architecture

<div style="font-size:1.05rem; line-height:1.7; color:#03031C; margin-top:0.5rem;">
<p style="font-weight:600; color:#5900CB; margin-bottom:0.5rem;">Request Flow:</p>
<ol style="padding-left:1.2rem;">
  <li>User attempts login</li>
  <li>TIB matches request to a Profile</li>
  <li style="list-style:none; margin-top:0.5rem; font-weight:600; color:#5900CB;">Profile invokes:</li>
  <ul style="padding-left:1.2rem; margin-top:0.3rem;">
    <li>Identity Provider → validates identity</li>
    <li>Identity Handler → maps to Tyk (Dashboard, Portal, OAuth)</li>
  </ul>
</ol>
</div>

<!-- Notes: When enterprises adopt GraphQL, they quickly realize that centralizing everything into a single GraphQL service doesn't scale well. -->
