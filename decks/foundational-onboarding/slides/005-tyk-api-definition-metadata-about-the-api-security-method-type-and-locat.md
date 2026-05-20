---
id: foundational-onboarding/005-tyk-api-definition-metadata-about-the-api-security-method-type-and-locat
deck_id: foundational-onboarding
order: 5
slug: tyk-api-definition-metadata-about-the-api-security-method-type-and-locat
title: "Tyk API Definition Metadata about the API Security method type and location of c"
summary: "redentials Version data and middleware configurations for list operations Target and listener setup { \"name\" : \"My API\" , \"slug\" : \"my-api\" , \"api_id\" : \"abc123\" , \"org_id\" : \"defa"
standalone_safe: true
reusable: true
requires_context: []
builds_on: []
recommended_next: [foundational-onboarding/006-tyk-oas-definition-standard-of-defining-apis-via-openapi-specification-t]
customer_visible: true
notes_visibility: customer-safe
---
---
layout: default
---
<h1 style="font-size:2rem; font-weight:700; color:#5900CB; margin-bottom:1rem;">Tyk API Definition</h1>

<div style="display:flex; gap:0.5rem; margin-top:0.8rem;">
<div style="flex:1.2; display:flex; flex-direction:column; justify-content:center; gap:0.3rem; padding-right:0.5rem;">
<div style="display:flex; align-items:center;">
<p style="font-size:0.8rem; font-weight:600; margin:0; color:#333; text-align:right; width:100%;">Metadata about the API</p>
</div>
<div style="display:flex; align-items:center;">
<div style="flex:1; height:1px; background:#2196F3;"></div>
</div>
<div style="display:flex; align-items:center;">
<p style="font-size:0.8rem; font-weight:600; margin:0; color:#333; text-align:right; width:100%;">Security method type and location of credentials</p>
</div>
<div style="display:flex; align-items:center;">
<div style="flex:1; height:1px; background:#2196F3;"></div>
</div>
<div style="display:flex; align-items:center;">
<p style="font-size:0.8rem; font-weight:600; margin:0; color:#333; text-align:right; width:100%;">Version data and middleware configurations for list operations</p>
</div>
<div style="display:flex; align-items:center;">
<div style="flex:1; height:1px; background:#2196F3;"></div>
</div>
<div style="display:flex; align-items:center;">
<p style="font-size:0.8rem; font-weight:600; margin:0; color:#333; text-align:right; width:100%;">Target and listener setup</p>
</div>
</div>
<div style="flex:2; background:#1a1a2e; border-radius:8px; padding:12px 16px;">
<pre style="color:#e0e0e0; font-size:0.55rem; margin:0; font-family:monospace; line-height:1.5; white-space:pre; overflow:hidden;">{
  <span style="color:#FFC107;">"name"</span>: <span style="color:#4CAF50;">"My API"</span>,
  <span style="color:#FFC107;">"slug"</span>: <span style="color:#4CAF50;">"my-api"</span>,
  <span style="color:#FFC107;">"api_id"</span>: <span style="color:#4CAF50;">"abc123"</span>,
  <span style="color:#FFC107;">"org_id"</span>: <span style="color:#4CAF50;">"default"</span>,
  <span style="color:#FFC107;">"auth"</span>: {
    <span style="color:#FFC107;">"auth_header_name"</span>: <span style="color:#4CAF50;">"Authorization"</span>
  },
  <span style="color:#FFC107;">"definition"</span>: {
    <span style="color:#FFC107;">"location"</span>: <span style="color:#4CAF50;">"header"</span>,
    <span style="color:#FFC107;">"key"</span>: <span style="color:#4CAF50;">"x-api-version"</span>
  },
  <span style="color:#FFC107;">"version_data"</span>: {
    <span style="color:#FFC107;">"not_versioned"</span>: <span style="color:#FF9800;">false</span>,
    <span style="color:#FFC107;">"versions"</span>: {}
  },
  <span style="color:#FFC107;">"proxy"</span>: {
    <span style="color:#FFC107;">"listen_path"</span>: <span style="color:#4CAF50;">"/my-api/"</span>,
    <span style="color:#FFC107;">"target_url"</span>: <span style="color:#4CAF50;">"http://upstream:8080"</span>,
    <span style="color:#FFC107;">"strip_listen_path"</span>: <span style="color:#FF9800;">true</span>
  },
  <span style="color:#FFC107;">"active"</span>: <span style="color:#FF9800;">true</span>,
  <span style="color:#FFC107;">"domain"</span>: <span style="color:#4CAF50;">""</span>
}</pre>
</div>
</div>
