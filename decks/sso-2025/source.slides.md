---
theme: tyk
layout: cover
aspectRatio: 16/9
canvasWidth: 980
highlighter: shiki
lineNumbers: false
drawings:
  persist: false
transition: slide-left
title: "Tyk Onboarding: Single Sign-On"
background: '/icons/cover-bg.png'
---

<div style="display:flex; flex-direction:column; justify-content:center; align-items:center; height:100%; text-align:center; color:white;">
  <h1 style="font-size:2.6rem; font-weight:800; color:white; margin:0; border:0;">Tyk Onboarding</h1>
  <p style="opacity:0.85; margin-top:1.5em; max-width:700px; color:white; font-size:1rem;">
    Rahmat - Sr. Customer Solutions Architect
  </p>
  <img src="/icons/tyk-logo.png" style="position:absolute; top:1.5rem; left:2rem; width:4rem; opacity:0.9;" />
</div>

---
layout: default
background: 'linear-gradient(135deg, #8438FA 0%, #8438FA 35%, #BB11FF 100%)'
---

<div style="display:flex; flex-direction:column; justify-content:center; align-items:center; height:100%; text-align:center; color:white;">
  <p style="color:#21E9BA; font-size:0.85rem; letter-spacing:2px; text-transform:uppercase; margin-bottom:0.3rem;">Module 2</p>
  <h1 style="color:white; font-size:2.5rem; font-weight:bold; margin:0;">Single Sign-On</h1>
</div>

---
layout: default
---

# Single Sign-On

<div style="font-size:1.05rem; line-height:1.7; color:#03031C; margin-top:0.5rem;">
<p style="margin-bottom:0.8rem;">Authenticate once, access multiple apps without re-entering credentials.</p>

<p style="font-weight:600; color:#5900CB; margin-bottom:0.3rem;">Benefits:</p>
<ul style="padding-left:1.2rem;">
  <li>Centralized identity management</li>
  <li>Consistent access policies</li>
  <li>Reduced password fatigue</li>
  <li>Faster onboarding/offboarding</li>
</ul>

<p style="font-weight:600; color:#5900CB; margin-top:1rem; margin-bottom:0.3rem;">Protocols:</p>
<ul style="padding-left:1.2rem;">
  <li>OpenID Connect (OIDC)</li>
  <li>OAuth 2.0</li>
  <li>SAML 2.0</li>
  <li>LDAP/Active Directory</li>
</ul>
</div>

<!-- Notes: "Single Sign-On, or SSO, means you log in once and get access to all your apps without re-entering credentials.
The benefits are clear:
Centralized identity management, so access is controlled in one place.
Consistent policies across every app.
Less password fatigue for users.
And faster onboarding or offboarding.
Behind the scenes, SSO relies on open standards like OIDC, OAuth 2.0, SAML 2.0, and integration with LDAP or Active Directory.
In short: SSO improves security, simplifies user experience, and saves IT time." -->

---
layout: default
---

# Tyk Identity Broker

<div style="font-size:1.05rem; line-height:1.7; color:#03031C; margin-top:0.5rem;">
<p style="margin-bottom:0.8rem;">TIB bridges your Identity Management Systems with Tyk Dashboard, Portal &amp; Gateway</p>
<p style="margin-bottom:0.3rem;">Middleware between Identity Providers (IdPs) and Tyk</p>

<p style="font-weight:600; color:#5900CB; margin-top:1rem; margin-bottom:0.3rem;">Key Use Cases:</p>
<ul style="padding-left:1.2rem;">
  <li>SSO for Dashboard or Portal</li>
  <li>Social logins (Google, GitHub, etc.)</li>
  <li>LDAP/AD for internal teams</li>
  <li>Token generation for mobile/web apps</li>
</ul>

<p style="font-weight:600; color:#5900CB; margin-top:1rem; margin-bottom:0.3rem;">Built-in since Tyk v3.0</p>
<p style="font-weight:600; color:#5900CB; margin-top:0.5rem; margin-bottom:0.3rem;">Two Modes:</p>
<ul style="padding-left:1.2rem;">
  <li>Internal TIB: embedded in Dashboard</li>
  <li>External TIB: standalone service</li>
</ul>
</div>

<!-- Notes: "Tyk Identity Broker, or TIB, is the bridge between your identity management systems and the Tyk Dashboard, Portal, and Gateway.
Think of it as middleware — it sits between your Identity Providers, like Google, GitHub, or Active Directory, and Tyk.
The key use cases are:
Single Sign-On for the Dashboard or Developer Portal,
Social logins using providers like Google or GitHub,
LDAP or Active Directory for internal teams,
And even token generation for mobile and web apps.
Since version 3.0, TIB has been built right into Tyk. You can run it in two modes:
Internal TIB, embedded directly in the Dashboard,
Or External TIB, as a standalone service for more complex setups.
In short, TIB gives you the flexibility to plug in any identity system you need while keeping Tyk secure and user-friendly." -->

---
layout: default
---

# SSO Flow

<div style="display:flex; gap:2rem; margin-top:0.5rem;">
  <div style="flex:1; font-size:0.95rem; line-height:1.7; color:#03031C;">
    <ol style="margin-top:0; padding-left:1.2rem;">
      <li>User initiates login via SSO endpoint.</li>
      <li>TIB redirects to IDP for authentication.</li>
      <li>Keycloak validates user and returns ID token.</li>
      <li>TIB verifies token and searches in database for user.</li>
      <li>If found, nonce code created.</li>
      <li>If not found, ad hoc user session is created.</li>
      <li>Redirects to Dashboard.</li>
    </ol>
  </div>
  <div style="flex:1.5; display:flex; align-items:center; justify-content:center;">
    <img src="/icons/sso-flow-diagram.png" style="width:100%; max-width:534px; border-radius:8px;" />
  </div>
</div>

<!-- Notes: The user starts by hitting the SSO login endpoint.
TIB redirects them to the Identity Provider.
The IDP handles the authentication and returns an ID token.
TIB verifies that token, then checks the database for the user.
If the user exists, TIB creates a nonce code.
If not, it creates an ad hoc session on the fly.
Finally, the user is seamlessly redirected into the Tyk Dashboard. -->

---
layout: default
---

# Authentication Flow

<div style="display:flex; gap:2rem; margin-top:0.5rem;">
  <div style="flex:1; font-size:0.95rem; line-height:1.7; color:#03031C;">
    <ol style="margin-top:0; padding-left:1.2rem;">
      <li>User initiates authentication via TIB.</li>
      <li>TIB validates identity via IDP.</li>
      <li>IDP requests for authentication data from the client.</li>
      <li>TIB receives accepted or rejected response from IDP.</li>
      <li>TIB requests for token from Tyk Gateway.</li>
      <li>Returns token to client.</li>
      <li>Client can now make a request to the Gateway.</li>
    </ol>
  </div>
  <div style="flex:1.5; display:flex; align-items:center; justify-content:center;">
    <img src="/icons/auth-flow-diagram.png" style="width:100%; max-width:522px; border-radius:8px;" />
  </div>
</div>

<!-- Notes: When enterprises adopt GraphQL, they quickly realize that centralizing everything into a single GraphQL service doesn't scale well. -->

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

---
layout: default
---

# Identity Providers

<div style="font-size:1.05rem; line-height:1.7; color:#03031C; margin-top:0.5rem;">
<ul style="padding-left:1.2rem;">
  <li><strong>Social:</strong> Google, GitHub, Twitter, Bitbucket, etc.</li>
  <li><strong>LDAP:</strong> Validate username/password against LDAP server</li>
  <li><strong>Proxy:</strong> Forward to external service, validate by status/response</li>
  <li><strong>SAML:</strong> Authenticate against enterprise SAML IdP</li>
</ul>
</div>

<!-- Notes: When enterprises adopt GraphQL, they quickly realize that centralizing everything into a single GraphQL service doesn't scale well. -->

---
layout: default
---

# Identity Handlers

<div style="font-size:1.05rem; line-height:1.7; color:#03031C; margin-top:0.5rem;">
<ul style="padding-left:1.2rem;">
  <li><strong>GenerateOrLoginUserProfile</strong> → Dashboard SSO</li>
  <li><strong>GenerateOrLoginDeveloperProfile</strong> → Portal SSO</li>
  <li><strong>GenerateOAuthTokenForClient</strong> → Issue Tyk OAuth token</li>
</ul>
</div>

<!-- Notes: When enterprises adopt GraphQL, they quickly realize that centralizing everything into a single GraphQL service doesn't scale well. -->

---
layout: default
---

# Profiles

<div style="font-size:1.05rem; line-height:1.7; color:#03031C; margin-top:0.5rem;">
<ul style="padding-left:1.2rem;">
  <li>Profiles define how a Provider + Handler + Action fit together</li>
  <li>Stored in MongoDB or file depending on setup</li>
  <li>Dashboard UI simplifies management</li>
  <li>Example: Azure AD (OIDC) → TIB → Dashboard SSO</li>
</ul>
</div>

<!-- Notes: When enterprises adopt GraphQL, they quickly realize that centralizing everything into a single GraphQL service doesn't scale well. -->

---
layout: default
---

# Anatomy of a Profile

<div style="font-size:1.05rem; line-height:1.7; color:#03031C; margin-top:0.5rem;">
<ul style="padding-left:1.2rem;">
  <li><strong>Core Fields:</strong> ID, OrgID, ActionType, Type, ReturnURL</li>
  <li><strong>Optional Fields:</strong> Group mappings, email claims, user ID claims</li>
  <li><strong>Security:</strong> Restrict SSO to registered users</li>
  <li><strong>Example JSON profile snippet shown in workshop</strong></li>
</ul>
</div>

<!-- Notes: When enterprises adopt GraphQL, they quickly realize that centralizing everything into a single GraphQL service doesn't scale well. -->

---
layout: default
---

# Provider-Specific Fields

<div style="font-size:1.05rem; line-height:1.7; color:#03031C; margin-top:0.5rem;">
<ul style="padding-left:1.2rem;">
  <li><strong>LDAP:</strong> server, port, DN, filters, attributes</li>
  <li><strong>Proxy:</strong> target host, OKCode/Response/Regex, token field</li>
  <li><strong>Social:</strong> callback URLs, provider keys/secrets, scopes</li>
  <li><strong>SAML:</strong> metadata URL, certs, entity ID, redirect URLs</li>
</ul>
</div>

<!-- Notes: When enterprises adopt GraphQL, they quickly realize that centralizing everything into a single GraphQL service doesn't scale well. -->

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

---
layout: default
background: '#8438FA'
---

<div style="display:flex; flex-direction:column; justify-content:center; align-items:center; height:100%; color:white; text-align:center;">
  <svg width="56" height="42" viewBox="0 0 56 42" fill="none" style="margin-bottom:1.2rem;">
    <rect x="2" y="8" width="32" height="28" rx="8" fill="#21E9BA" opacity="0.6"/>
    <rect x="18" y="2" width="32" height="28" rx="8" fill="#21E9BA" opacity="0.4"/>
  </svg>
  <h1 style="font-size:2.2rem; font-weight:bold; color:white; margin:0;">Hands-On Workshop</h1>
  <p style="font-size:0.95rem; color:#20EDBA; font-weight:bold; text-align:center; max-width:600px; margin-top:1rem;">SSO Configuration with Keycloak</p>
</div>

---
layout: default
---

# Hands-On Workshop

<div style="font-size:1.05rem; line-height:1.7; color:#03031C; margin-top:0.5rem;">
<p style="font-weight:600; color:#5900CB; margin-bottom:0.5rem;">Step 1: Install Keycloak</p>
</div>

```bash
# Add Bitnami Helm repository
helm repo add bitnami https://charts.bitnami.com/bitnami
helm repo update

# Install Keycloak with Helm
helm install keycloak bitnami/keycloak \
  --namespace keycloak \
  --create-namespace \
  --set auth.adminUser=admin \
  --set auth.adminPassword=admin \
  --set service.type=NodePort \
  --set service.nodePorts.http=30082 \
  --set service.nodePorts.https=30083
```

<!-- Notes: When enterprises adopt GraphQL, they quickly realize that centralizing everything into a single GraphQL service doesn't scale well. -->

---
layout: default
---

# Hands-On Workshop

<div style="font-size:1.05rem; line-height:1.7; color:#03031C; margin-top:0.5rem;">
<p style="font-weight:600; color:#5900CB; margin-bottom:0.5rem;">Step 2: Configure Keycloak Client</p>
<ol style="padding-left:1.2rem;">
  <li>In your desired Realm, create a client of OpenID Connect type, and set your desired Client ID.</li>
  <li>Enable client authentication, then save the client.</li>
  <li>Retrieve the Secret (from the credentials tab) of the Client you just created.</li>
  <li>Retrieve the well known endpoint of the realm.</li>
  <li>Accessible from "Realm Settings" &gt; "General" Tab &gt; OpenID Endpoint Configuration.</li>
</ol>
</div>

<!-- Notes: When enterprises adopt GraphQL, they quickly realize that centralizing everything into a single GraphQL service doesn't scale well. -->

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

---
layout: default
---

# Hands-On Workshop

<div style="font-size:1.05rem; line-height:1.7; color:#03031C; margin-top:0.5rem;">
<p style="font-weight:600; color:#5900CB; margin-bottom:0.5rem;">Step 4: Test SSO Login</p>
<ol style="padding-left:1.2rem;">
  <li>From your Identity Management Profiles click the profile you created to open it.</li>
  <li>Copy the Login URL and paste it into a browser tab.</li>
  <li>You will now see the Keycloak login form.</li>
  <li>Enter the email address and password of your Keycloak user.</li>
  <li>You should now be redirected to the Tyk Dashboard and logged in.</li>
</ol>
</div>

<!-- Notes: When enterprises adopt GraphQL, they quickly realize that centralizing everything into a single GraphQL service doesn't scale well. -->
