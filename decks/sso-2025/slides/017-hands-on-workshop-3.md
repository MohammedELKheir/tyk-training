---
id: sso-2025/017-hands-on-workshop-3
deck_id: sso-2025
order: 17
slug: hands-on-workshop-3
title: "Hands-On Workshop"
summary: "Step 3: Create TIB Profile in Tyk Dashboard Log in to your Dashboard and select Identity Management, located under System Management. Create a profile, give it a name and select \"L"
standalone_safe: true
reusable: true
requires_context: []
builds_on: []
recommended_next: [sso-2025/018-hands-on-workshop-4]
customer_visible: true
notes_visibility: customer-safe
---
---
layout: default
---

# Hands-On Workshop

<div style="font-size:1.05rem; line-height:1.7; color:#03031C; margin-top:0.5rem;">
<p style="font-weight:600; color:#5900CB; margin-bottom:0.5rem;">Step 3: Create TIB Profile in Tyk Dashboard</p>
<ol style="padding-left:1.2rem;">
  <li>Log in to your Dashboard and select Identity Management, located under System Management.</li>
  <li>Create a profile, give it a name and select "Login to Tyk Dashboard".</li>
  <li>Set the provider type as "OpenID Connect".</li>
  <li>Fill in the Client ID, Client Secret and Discovery URL/endpoint from Keycloak.</li>
  <li>Copy the callback URL from Tyk and then you can click "Create Profile" to save the profile.</li>
  <li>Go to Keycloak, and paste the callback URL you just copied to "Valid redirect URIs" in the Keycloak Client, and then save the client.</li>
  <li>This can be accessed by selecting the "Settings" tab when viewing a Keycloak client.</li>
  <li>Save the profile.</li>
</ol>
</div>

<!-- Notes: When enterprises adopt GraphQL, they quickly realize that centralizing everything into a single GraphQL service doesn't scale well. -->
