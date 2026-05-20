---
id: foundation-apis-in-tyk-2-oas-api/006-tyk-oas-definition-authentication
deck_id: foundation-apis-in-tyk-2-oas-api
order: 6
slug: tyk-oas-definition-authentication
title: "Tyk OAS Definition - Authentication"
summary: "Tyk OAS Definition • Authentication ○ Auth token ○ JWT ○ OAuth 2.0 ○ mTLS ○ Basic Auth ○ Multi-Auth"
standalone_safe: true
reusable: true
requires_context: []
builds_on: []
recommended_next: [foundation-apis-in-tyk-2-oas-api/007-tyk-oas-definition-validation]
customer_visible: true
notes_visibility: customer-safe
---
---
layout: default
---

<div style="padding-top:0.15rem;"><div style="color:#5a16d6; font-size:2.45rem; font-weight:800; margin:0 0 1rem 0; line-height:1;">Tyk OAS Definition</div><div style="display:grid; grid-template-columns:11rem 1fr; column-gap:1.25rem; align-items:start;"><div><div style="display:flex; align-items:flex-start; color:#111; font-size:0.95rem; line-height:1.25;"><div style="font-size:1.35rem; margin-right:0.5rem; line-height:1;">•</div><div>Authentication</div></div><div style="margin-left:1.5rem; margin-top:0.25rem; color:#111; font-size:0.95rem; line-height:1.35;"><div>○ Auth token</div><div>○ JWT</div><div>○ OAuth 2.0</div><div>○ mTLS</div><div>○ Basic Auth</div><div>○ Multi-Auth</div></div></div><div><img src="./images/screenshots/auth-header-bar.png" style="width:100%; display:block; border:1px solid #3a3a3a; margin-bottom:0.9rem;" /><div style="display:grid; grid-template-columns:1fr 0.62fr; gap:0.85rem; align-items:start;"><img src="./images/screenshots/security-schemes.png" style="width:100%; display:block;" /><div style="display:flex; flex-direction:column; gap:0.8rem;"><img src="./images/screenshots/auth-config.png" style="width:100%; display:block;" /><img src="./images/screenshots/xtyk-auth-config.png" style="width:100%; display:block;" /></div></div></div></div></div>

<!-- Notes: OAS securitySchemes describe ways an API may be accessed. When an apiKey securityScheme is configured in a Tyk OAS API definition, the x-tyk-api-gateway authentication mechanism becomes an authentication token, and Tyk only needs enabled set to true. -->
