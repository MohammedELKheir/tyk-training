---
id: operator-2025/057-key-concepts-how-tyk-operator-handles-ingress
deck_id: operator-2025
order: 57
slug: key-concepts-how-tyk-operator-handles-ingress
title: "Key Concepts How Tyk Operator Handles Ingress"
summary: "Key Concepts How Tyk Operator Handles Ingress"
standalone_safe: true
reusable: true
requires_context: []
builds_on: []
recommended_next: [operator-2025/058-key-concepts-the-referenced-template-myapideftemplate-is-a-tyk-api-confi]
customer_visible: true
notes_visibility: customer-safe
---
---
layout: default
---

<h2 style="color:#5900CB; font-size:1.8rem; font-weight:bold; margin-bottom:1rem;">Key Concepts</h2>
<p style="color:#5900CB; font-weight:bold; font-size:1.1rem; margin-bottom:0.8rem;">How Tyk Operator Handles Ingress</p>
<div style="display:flex; justify-content:center;"><img src="./images/icons/slide-057-gs-538-p72.png" style="max-width:450px; max-height:400px;" /></div>

<!-- Notes: “This slide shows how key fields in a Kubernetes Ingress map directly to Tyk API settings.”
“The host field in the Ingress becomes the API’s custom domain in Tyk.”

“The secretName references the TLS certificate stored in Tyk for secure communication.”

“The path sets the API’s listen path, defining where requests are routed.”

“The backend.service.name is used to determine the upstream service URL in Tyk.”

“Finally, the tyk.io/template annotation points to the base API configuration template that controls behavior and policies.”

“This mapping lets Tyk Operator automatically create and manage APIs based on standard Kubernetes Ingress definitions.” -->
