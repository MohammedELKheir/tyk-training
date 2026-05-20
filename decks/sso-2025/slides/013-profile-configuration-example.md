---
id: sso-2025/013-profile-configuration-example
deck_id: sso-2025
order: 13
slug: profile-configuration-example
title: "Profile Configuration Example"
summary: "{ \"ActionType\" : \"GenerateOAuthTokenForClient\" , \"ID\" : \"keycloak-profile\" , \"OrgID\" : \"ORG_ID\" , \"IdentityHandlerConfig\" : { \"DashboardCredential\" : \"DASHBOARD_ADMIN_API_KEY\" , \"P"
standalone_safe: true
reusable: true
requires_context: []
builds_on: []
recommended_next: [sso-2025/014-hands-on-workshop-sso-configuration-with-keycloak]
customer_visible: true
notes_visibility: customer-safe
---
---
layout: default
---

# Profile Configuration Example

<div style="display:flex; gap:0.5rem; margin-top:0.8rem;">
  <div style="flex:2; background:#1a1a2e; border-radius:8px; padding:10px 14px;">
    <pre style="color:#e0e0e0; font-size:0.5rem; margin:0; font-family:monospace; line-height:1.45; white-space:pre; overflow:hidden;">{
  <span style="color:#FFC107;">"ActionType"</span>: <span style="color:#4CAF50;">"GenerateOAuthTokenForClient"</span>,
  <span style="color:#FFC107;">"ID"</span>: <span style="color:#4CAF50;">"keycloak-profile"</span>,
  <span style="color:#FFC107;">"OrgID"</span>: <span style="color:#4CAF50;">"ORG_ID"</span>,
  <span style="color:#FFC107;">"IdentityHandlerConfig"</span>: {
    <span style="color:#FFC107;">"DashboardCredential"</span>: <span style="color:#4CAF50;">"DASHBOARD_ADMIN_API_KEY"</span>,
    <span style="color:#FFC107;">"PolicyID"</span>: <span style="color:#4CAF50;">"POLICY_ID"</span>
  },
  <span style="color:#FFC107;">"IdentityProvider"</span>: {
    <span style="color:#FFC107;">"Name"</span>: <span style="color:#4CAF50;">"OpenIDConnect"</span>,
    <span style="color:#FFC107;">"OpenIDConnectConfig"</span>: {
      <span style="color:#FFC107;">"ClientID"</span>: <span style="color:#4CAF50;">"tyk-tib"</span>,
      <span style="color:#FFC107;">"ClientSecret"</span>: <span style="color:#4CAF50;">"SECRET"</span>,
      <span style="color:#FFC107;">"CallbackBaseURL"</span>: <span style="color:#4CAF50;">"http://&lt;TIB_HOST&gt;:3010/auth/keycloak-profile/openid-connect/callback"</span>,
      <span style="color:#FFC107;">"IssuerURL"</span>: <span style="color:#4CAF50;">"http://&lt;KEYCLOAK_HOST&gt;/realms/TykSSO"</span>
    }
  }
}</pre>
  </div>

  <div style="flex:1.2; display:flex; flex-direction:column; justify-content:center; gap:0.6rem; padding-right:0.5rem;">
    <div style="display:flex; align-items:center;">
      <p style="font-size:0.8rem; font-weight:600; margin:0; color:#333; text-align:right; width:100%;">ID – Profile name</p>
    </div>
    <div style="display:flex; align-items:center;">
      <div style="flex:1; height:1px; background:#2196F3;"></div>
    </div>
    <div style="display:flex; align-items:center;">
      <p style="font-size:0.8rem; font-weight:600; margin:0; color:#333; text-align:right; width:100%;">OrgID – Tyk Organization ID</p>
    </div>
    <div style="display:flex; align-items:center;">
      <div style="flex:1; height:1px; background:#2196F3;"></div>
    </div>
    <div style="display:flex; align-items:center;">
      <p style="font-size:0.8rem; font-weight:600; margin:0; color:#333; text-align:right; width:100%;">ActionType – Action to perform</p>
    </div>
    <div style="display:flex; align-items:center;">
      <div style="flex:1; height:1px; background:#2196F3;"></div>
    </div>
    <div style="display:flex; align-items:center;">
      <p style="font-size:0.8rem; font-weight:600; margin:0; color:#333; text-align:right; width:100%;">IdentityHandlerConfig – Policy mapping</p>
    </div>
    <div style="display:flex; align-items:center;">
      <div style="flex:1; height:1px; background:#2196F3;"></div>
    </div>
    <div style="display:flex; align-items:center;">
      <p style="font-size:0.8rem; font-weight:600; margin:0; color:#333; text-align:right; width:100%;">IdentityProvider – IdP config</p>
    </div>
  </div>
</div>

<!-- Notes: When enterprises adopt GraphQL, they quickly realize that centralizing everything into a single GraphQL service doesn't scale well. -->
