---
id: operator-2025/058-key-concepts-the-referenced-template-myapideftemplate-is-a-tyk-api-confi
deck_id: operator-2025
order: 58
slug: key-concepts-the-referenced-template-myapideftemplate-is-a-tyk-api-confi
title: "Key Concepts The referenced template (myapideftemplate) is a Tyk API configurati"
summary: "on, like this: This template might define: Auth type (e.g., JWT, OAuth) Rate limits Headers Plugins Tyk will copy this template, and only override: Domain Path TLS cert Upstream se"
standalone_safe: true
reusable: true
requires_context: []
builds_on: []
recommended_next: [operator-2025/059-key-concepts-2]
customer_visible: true
notes_visibility: customer-safe
---
---
layout: default
---

<h2 style="color:#5900CB; font-size:1.8rem; font-weight:bold; margin-bottom:1rem;">Key Concepts</h2>
<p style="font-size:0.95rem; color:#03031C; margin-bottom:1rem;">The referenced template (myapideftemplate) is a Tyk API configuration, like this:</p>
<div style="display:flex; gap:1.5rem; margin-top:0.5rem;">
  <div style="flex:1;"><img src="./images/icons/slide-058-gs-548-p73.png" style="max-width:100%; max-height:350px;" /></div>
  <div style="flex:1.2;">
    <p style="font-weight:600; margin:0 0 0.5rem 0;">This template might define:</p>
    <ul style="font-size:0.9rem; line-height:1.7; padding-left:1rem; color:#333;"><li>Auth type (e.g., JWT, OAuth)</li><li>Rate limits</li><li>Headers</li><li>Plugins</li></ul>
    <p style="font-weight:600; margin-top:1rem;">Tyk will copy this template, and only override:</p>
    <ul style="font-size:0.9rem; line-height:1.7; padding-left:1rem; color:#333;"><li>Domain</li><li>Path</li><li>TLS cert</li><li>Upstream service</li></ul>
  </div>
</div>

<!-- Notes: “This slide explains what a Tyk API template typically defines.”
“Templates usually specify things like authentication type — for example, JWT or OAuth.”

“They also define rate limits, headers, and plugins to apply consistently across APIs.”

“When Tyk Operator creates an API from an Ingress, it copies this template.”

“Then, it overrides only the specific details from the Ingress, such as the domain, path, TLS certificate, and upstream service URL.” -->
