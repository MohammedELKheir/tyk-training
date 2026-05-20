---
id: foundation-apis-in-tyk-2-oas-api/008-tyk-oas-definition-middleware
deck_id: foundation-apis-in-tyk-2-oas-api
order: 8
slug: tyk-oas-definition-middleware
title: "Tyk OAS Definition - Middleware"
summary: "Tyk OAS Definition • Middleware ○ Uses operationIDs for middleware configured for each path ○ Middleware declared in x-tyk-api-gateway section"
standalone_safe: true
reusable: true
requires_context: []
builds_on: []
recommended_next: []
customer_visible: true
notes_visibility: customer-safe
---
---
layout: default
---

<div style="padding-top:0.15rem;"><div style="color:#5a16d6; font-size:2.45rem; font-weight:800; margin:0 0 1rem 0; line-height:1;">Tyk OAS Definition</div><div style="display:flex; align-items:flex-start; color:#111; font-size:0.95rem; line-height:1.3; margin-bottom:1.05rem;"><div style="font-size:1.35rem; margin-right:0.5rem; line-height:1;">•</div><div>Middleware<div style="margin-left:1.2rem; margin-top:0.2rem;">○ Uses operationIDs for middleware configured for each path</div><div style="margin-left:1.2rem;">○ Middleware declared in <span style="font-family:monospace;">x-tyk-api-gateway</span> section</div></div></div><div style="display:grid; grid-template-columns:0.95fr 1.08fr; gap:2rem; align-items:start; padding-top:1rem;"><img src="./images/screenshots/middleware-paths.png" style="width:100%; display:block;" /><img src="./images/screenshots/middleware-xtyk-config.png" style="width:100%; display:block;" /></div></div>

<!-- Notes: Middleware for a specific API path is linked through the operationId so the x-tyk-api-gateway configuration can refer back to the endpoint defined in the OAS paths section. -->
