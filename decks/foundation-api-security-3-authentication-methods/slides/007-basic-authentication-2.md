---
id: foundation-api-security-3-authentication-methods/007-basic-authentication-2
deck_id: foundation-api-security-3-authentication-methods
order: 7
slug: basic-authentication-2
title: "Basic Authentication"
summary: "Extracting Credentials from the Request Payload Some APIs, like SOAP, may include credentials in the request body instead of HTTP headers. Tyk can handle this by using regular expr"
standalone_safe: true
reusable: true
requires_context: []
builds_on: []
recommended_next: [foundation-api-security-3-authentication-methods/008-basic-authentication-3]
customer_visible: true
notes_visibility: customer-safe
---
---
layout: default
---

# Basic Authentication

<p style="font-weight:700; margin-bottom:0.4rem;">Extracting Credentials from the Request Payload</p>

<ul class="bullet-tight" style="font-size:0.92rem; line-height:1.4;">
  <li>Some APIs, like SOAP, may include credentials in the request body instead of HTTP headers.</li>
  <li>Tyk can handle this by using regular expressions to extract credentials directly from the body.</li>
</ul>

<div style="display:flex; gap:1rem; align-items:flex-start; margin-top:0.8rem;">
  <div style="flex:1.35;">
    <div class="code-card">
      <pre>x-tyk-api-gateway:
  server:
    authentication:
      enabled: true
      securitySchemes:
        myAuthScheme:
          enabled: true
          extractCredentialsFromBody:
            enabled: true
            userRegexp: '&lt;User&gt;(.*)&lt;/User&gt;'
            passwordRegexp: '&lt;Password&gt;(.*)&lt;/Password&gt;'</pre>
    </div>
  </div>
  <div style="flex:0.9; font-size:0.86rem; line-height:1.4; color:#4e4e74; padding-top:0.5rem;">
    Regex patterns must capture only one group — the actual username and password values.
  </div>
</div>

<!-- Notes: In some legacy or specialized API use cases—like SOAP—credentials might be passed in the body of the request rather than in the headers. While this is non-standard from a RESTful perspective, Tyk supports it through regex-based extraction. With this feature, you define patterns that match the username and password in the request payload. For example, if the request XML body includes tags like <User> and <Password>, we use regular expressions to extract the values within those tags. The extractCredentialsFromBody field in the Tyk configuration allows us to enable this functionality and specify the regex patterns. Just make sure each regex has exactly one match group — that’s the part Tyk will use as the actual credential. This makes Tyk flexible enough to support a wide range of API formats, including those that don’t follow modern standards. -->
