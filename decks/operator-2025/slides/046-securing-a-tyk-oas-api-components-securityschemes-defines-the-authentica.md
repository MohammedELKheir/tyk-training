---
id: operator-2025/046-securing-a-tyk-oas-api-components-securityschemes-defines-the-authentica
deck_id: operator-2025
order: 46
slug: securing-a-tyk-oas-api-components-securityschemes-defines-the-authentica
title: "Securing a Tyk OAS API components.securitySchemes: defines the authentication me"
summary: "thod (in this case, apiKey in the header). security: Applies the authentication globally to all endpoints. x-tyk-api-gateway.server.authentication: Tyk-specific extension to enable"
standalone_safe: true
reusable: true
requires_context: []
builds_on: []
recommended_next: [operator-2025/047-securing-a-tyk-oas-api-2]
customer_visible: true
notes_visibility: customer-safe
---
---
layout: default
---

<h2 style="color:#5900CB; font-size:1.8rem; font-weight:bold; margin-bottom:1rem;">Securing a Tyk OAS API</h2>

<div style="display:flex; gap:1.5rem; margin-top:0.5rem;">
  <div style="flex:1; font-size:0.9rem; line-height:1.7; color:#03031C;">components.securitySchemes: defines the authentication method (in this case, apiKey in the header).
security: Applies the authentication globally to all endpoints.
x-tyk-api-gateway.server.authentication: Tyk-specific extension to enable the authentication scheme.</div>
  <div style="flex:1.2;"><img src="./images/icons/slide-046-gs-444-p61.png" style="max-width:100%; max-height:400px;" /></div>
</div>

<!-- Notes: "This slide explains how to secure your API using API key authentication in your OpenAPI Specification."
First, under components.securitySchemes, you define the authentication method.
 In this case, it’s an apiKey passed in the header.
Next, the security section applies this authentication scheme globally to all endpoints in the API, ensuring every request requires an API key.
Finally, the x-tyk-api-gateway.server.authentication is a Tyk-specific extension that enables the defined authentication scheme in the gateway.
"This approach lets you declaratively secure your API, so authentication is consistently enforced via your API definition and managed automatically by Tyk Operator." -->
