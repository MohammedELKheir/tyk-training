---
theme: tyk
layout: default
aspectRatio: 16/9
canvasWidth: 980
highlighter: shiki
lineNumbers: false
drawings:
  persist: false
transition: slide-left
title: "Tyk OAS API Definitions"
---

<div style="position:relative; width:100%; height:100%; overflow:hidden; background:linear-gradient(135deg, #7a39f6 0%, #8f37fa 40%, #c10ef9 100%);">
  <h1 style="position:absolute; left:6.2rem; top:13.6rem; margin:0; color:#fff; font-size:3.0rem; font-weight:800; letter-spacing:0.01em; line-height:1.05;">Tyk OAS API Definitions</h1>
  <div style="position:absolute; right:-1.8rem; bottom:-1.9rem; width:8.6rem; height:5.5rem; background:#050505; border-radius:2.2rem 0 0 0;"></div>
  <img src="./images/icons/tyk-logo.png" style="position:absolute; right:1.1rem; bottom:0.7rem; width:4.2rem; opacity:0.98;" />
</div>

---
layout: default
---

<div style="padding:0.2rem 0.2rem 0 0.1rem;"><div style="color:#5a16d6; font-size:2.45rem; font-weight:800; margin:0 0 2.25rem 0; line-height:1;">Tyk OAS Definition</div><div style="display:flex; align-items:flex-start; justify-content:space-between; gap:2.5rem;"><div style="width:59%; padding-left:0.35rem;"><div style="display:flex; align-items:flex-start; margin-bottom:0.55rem;"><div style="font-size:1.45rem; line-height:1; margin-right:0.8rem; color:#111;">•</div><div style="font-size:1rem; line-height:1.4; color:#0a0a23;">Standard of defining APIs via OpenAPI Specification</div></div><div style="display:flex; align-items:flex-start; margin-bottom:0.55rem;"><div style="font-size:1.45rem; line-height:1; margin-right:0.8rem; color:#111;">•</div><div style="font-size:1rem; line-height:1.4; color:#0a0a23;">Tyk supports the importing and configuration on the OAS</div></div><div style="display:flex; align-items:flex-start;"><div style="font-size:1.45rem; line-height:1; margin-right:0.8rem; color:#111;">•</div><div style="font-size:1rem; line-height:1.4; color:#0a0a23;">Significant time and complexity savings if you are already using it to design and document your APIs</div></div></div><div style="width:34%; display:flex; justify-content:center; padding-top:0.8rem;"><img src="./images/screenshots/oas-concept-diagram.png" style="width:15.5rem; max-width:100%; object-fit:contain;" /></div></div></div>

<!-- Notes: Tyk supports the OpenAPI Specification, or OAS, which is the industry standard for defining APIs. If you're already using OAS to design and document your APIs, you can import those definitions directly into Tyk. This offers significant time savings and reduces complexity because you don't need to redefine your APIs from scratch. -->

---
layout: default
---

<div style="padding-top:0.1rem;"><div style="font-size:2.2rem; font-weight:800; line-height:1.02; color:#070724; margin-bottom:1.1rem;">What is Tyk <span style="color:#7a3ff7;">OAS API</span><br><span style="color:#7a3ff7;">definition?</span></div><div style="display:flex; align-items:flex-start;"><div style="width:29rem; display:flex; align-items:center;"><div style="width:10rem; height:11.8rem; border-radius:1rem; background:linear-gradient(180deg, #6814eb 0%, #8422f4 100%); color:white; position:relative; margin-right:1rem;"><div style="position:absolute; left:1rem; right:1rem; top:4.5rem; text-align:center; font-size:0.86rem; font-weight:600; line-height:1.2;">Tyk OAS API<br>Definition</div><img src="./images/icons/tyk-extension-icon.png" style="position:absolute; right:0.7rem; bottom:0.7rem; width:2rem;"></div><div style="font-size:2.1rem; font-weight:800; color:#6b16e6; margin-right:1rem;">=</div><div><div style="width:10rem; height:7rem; border-radius:1rem; background:linear-gradient(180deg, #6814eb 0%, #8422f4 100%); color:white; position:relative; margin-bottom:0.6rem;"><div style="position:absolute; left:1rem; right:1rem; top:2rem; text-align:center; font-size:0.86rem; font-weight:600; line-height:1.15;">OpenAPI<br>description</div><img src="./images/icons/oas-icon.png" style="position:absolute; right:0.65rem; bottom:0.6rem; width:2rem;"></div><div style="width:10rem; height:2.5rem; border-radius:0.7rem; background:linear-gradient(180deg, #6814eb 0%, #8422f4 100%); color:white; display:flex; align-items:center; padding-left:0.9rem; font-size:0.82rem; font-weight:600;">Tyk extension</div></div></div><div style="width:17rem; margin-left:0.9rem; padding-top:1rem;"><div style="display:flex; align-items:center; margin-bottom:2rem;"><div style="width:3rem; height:0.3rem; background:#2de1c2; margin-right:0.45rem;"></div><div style="width:0; height:0; border-top:0.5rem solid transparent; border-bottom:0.5rem solid transparent; border-right:0.9rem solid #2de1c2; margin-right:0.8rem;"></div><div style="font-size:0.95rem; line-height:1.3; color:#111;">From your API design tool or code editor<br><span style="color:#333;">(info, servers, paths, components, ...)</span></div></div><div style="display:flex; align-items:center;"><div style="width:3rem; height:0.3rem; background:#2de1c2; margin-right:0.45rem;"></div><div style="width:0; height:0; border-top:0.5rem solid transparent; border-bottom:0.5rem solid transparent; border-right:0.9rem solid #2de1c2; margin-right:0.8rem;"></div><div style="font-size:0.95rem; line-height:1.3; color:#111;">Export from Dashboard or Start from a template<br><span style="color:#333;">(gateway configurations, middleware configurations, listenPath, metadata, ...)</span></div></div></div></div></div>

<!-- Notes: Tyk OAS API Definition combines a standard OpenAPI description with a Tyk extension section. The OpenAPI description comes from your design tool or editor, and the Tyk extension comes from dashboard export or a template. -->

---
layout: default
---

<div style="padding-top:0.2rem;"><div style="color:#5a16d6; font-size:2.45rem; font-weight:800; margin:0 0 1.85rem 0; line-height:1;">Tyk OAS Definition</div><div style="display:flex; align-items:center; justify-content:space-between; gap:1rem; padding:0 0.9rem 0 0.55rem;"><div style="width:15.1rem; display:flex; flex-direction:column; align-items:center; gap:0.55rem;"><div style="width:100%; border:1px solid #8d8d8d; background:#fff; padding:0.2rem; box-sizing:border-box;"><div style="font-size:0.56rem; text-align:center; color:#111; margin-bottom:0.18rem;">OpenAPI 3.0</div><img src="./images/screenshots/oas-spec-left.png" style="width:100%; display:block;" /></div></div><div style="display:flex; align-items:center; gap:0.55rem; margin:0 0.15rem;"><div style="width:2.8rem; height:0.28rem; background:#7f36f6;"></div><div style="width:0; height:0; border-top:0.55rem solid transparent; border-bottom:0.55rem solid transparent; border-left:0.95rem solid #7f36f6;"></div><img src="./images/icons/tyk-logo.png" style="width:4.3rem;" /><div style="width:2.8rem; height:0.28rem; background:#7f36f6;"></div><div style="width:0; height:0; border-top:0.55rem solid transparent; border-bottom:0.55rem solid transparent; border-left:0.95rem solid #7f36f6;"></div></div><div style="width:13rem; display:flex; flex-direction:column; align-items:center; gap:0.3rem;"><div style="width:100%; border:1px solid #8d8d8d; background:#fff; padding:0.2rem; box-sizing:border-box;"><div style="font-size:0.48rem; text-align:center; color:#111; line-height:1.05; margin-bottom:0.18rem;">Tyk OAS<br />Definition</div><img src="./images/screenshots/oas-spec-right.png" style="width:100%; display:block;" /><div style="display:flex; justify-content:center; margin-top:0.18rem;"><div style="background:#8a3ffc; color:#fff; font-size:0.55rem; line-height:1; padding:0.22rem 0.42rem; border-radius:0;">x-tyk-api-gateway</div></div></div></div></div></div>

<!-- Notes: A deeper look into the different sections. On the left is an OAS 3.0 spec and upon import we can see the sections are preserved with an additional x-tyk-api-gateway added. -->

---
layout: default
---

<div style="padding-top:0.1rem; padding-right:0.5rem;">
  <h1 style="margin:0 0 0.15rem 0; color:#5a16d6; font-size:2.28rem; font-weight:800; line-height:1.05;">Tyk Vendor Extension<br />Reference</h1>

  <p style="margin:0 0 0.1rem 0; font-size:1rem; color:#0f1127; line-height:1.25;">Custom Tyk API extensions inside the OpenAPI definition.</p>
  <p style="margin:0 0 1rem 0; font-size:1rem; color:#0f1127; line-height:1.25;">Stored under the key <span style="font-family:monospace;">x-tyk-api-gateway</span>.</p>

  <p style="margin:0 0 0.35rem 0; font-size:1rem; color:#0f1127;">Main Fields</p>

  <ul style="margin:0; padding-left:1.25rem; color:#0f1127; font-size:0.92rem; line-height:1.4; max-width:42rem;">
    <li style="margin-bottom:0.8rem;"><span style="font-family:monospace;">info</span> (Info)
      <ul style="margin:0.15rem 0 0 0; padding-left:1.55rem; list-style-type:circle;">
        <li>Main metadata for the API definition</li>
      </ul>
    </li>
    <li style="margin-bottom:0.8rem;"><span style="font-family:monospace;">upstream</span> (Upstream)
      <ul style="margin:0.15rem 0 0 0; padding-left:1.55rem; list-style-type:circle;">
        <li>Configurations related to the upstream target</li>
      </ul>
    </li>
    <li style="margin-bottom:0.8rem;"><span style="font-family:monospace;">server</span> (Server)
      <ul style="margin:0.15rem 0 0 0; padding-left:1.55rem; list-style-type:circle;">
        <li>Configurations for the API server</li>
      </ul>
    </li>
    <li><span style="font-family:monospace;">middleware</span> (Middleware)
      <ul style="margin:0.15rem 0 0 0; padding-left:1.55rem; list-style-type:circle;">
        <li>Configurations for Tyk middleware</li>
      </ul>
    </li>
  </ul>

  <p style="margin:1rem 0 0 0; max-width:42rem; font-size:0.95rem; color:#0f1127; line-height:1.35;">Use <span style="font-family:monospace;">x-tyk-api-gateway</span> to enrich your OpenAPI spec with Tyk-specific runtime and security controls.</p>
</div>

<!-- Notes: Slide Intro: "Now let's look at how Tyk extends the OpenAPI Specification with our own vendor extensions." Script Body: "Tyk uses the extension key x-tyk-api-gateway inside your OpenAPI documents." "This allows you to store Tyk-specific configurations directly in the API definition, alongside the standard OpenAPI fields." "In other words, you can design and document your API in OAS as usual, but still capture the Tyk settings needed for deployment and runtime." Walkthrough of Fields: Info – "This contains the main metadata for the API definition. Think of it as the high-level details about your API." Upstream – "Here you configure how Tyk connects to the upstream target — for example, the backend service you're proxying." Server – "This defines the server-side configuration — things like the listen path, host, and protocol." Middleware – "Finally, middleware holds the configuration for all Tyk middleware. This is where you can enrich or protect requests and responses." Closing: "So with x-tyk-api-gateway, you can keep both your OpenAPI spec and your Tyk configuration in a single document. That makes APIs easier to manage, version, and deploy consistently across environments." -->

---
layout: default
---

<div style="padding-top:0.15rem;"><div style="color:#5a16d6; font-size:2.45rem; font-weight:800; margin:0 0 1rem 0; line-height:1;">Tyk OAS Definition</div><div style="display:grid; grid-template-columns:11rem 1fr; column-gap:1.25rem; align-items:start;"><div><div style="display:flex; align-items:flex-start; color:#111; font-size:0.95rem; line-height:1.25;"><div style="font-size:1.35rem; margin-right:0.5rem; line-height:1;">•</div><div>Authentication</div></div><div style="margin-left:1.5rem; margin-top:0.25rem; color:#111; font-size:0.95rem; line-height:1.35;"><div>○ Auth token</div><div>○ JWT</div><div>○ OAuth 2.0</div><div>○ mTLS</div><div>○ Basic Auth</div><div>○ Multi-Auth</div></div></div><div><img src="./images/screenshots/auth-header-bar.png" style="width:100%; display:block; border:1px solid #3a3a3a; margin-bottom:0.9rem;" /><div style="display:grid; grid-template-columns:1fr 0.62fr; gap:0.85rem; align-items:start;"><img src="./images/screenshots/security-schemes.png" style="width:100%; display:block;" /><div style="display:flex; flex-direction:column; gap:0.8rem;"><img src="./images/screenshots/auth-config.png" style="width:100%; display:block;" /><img src="./images/screenshots/xtyk-auth-config.png" style="width:100%; display:block;" /></div></div></div></div></div>

<!-- Notes: OAS securitySchemes describe ways an API may be accessed. When an apiKey securityScheme is configured in a Tyk OAS API definition, the x-tyk-api-gateway authentication mechanism becomes an authentication token, and Tyk only needs enabled set to true. -->

---
layout: default
---

<div style="padding-top:0.15rem;"><div style="color:#5a16d6; font-size:2.45rem; font-weight:800; margin:0 0 1rem 0; line-height:1;">Tyk OAS Definition</div><div style="display:flex; align-items:flex-start; color:#111; font-size:0.95rem; line-height:1.3; margin-bottom:0.8rem;"><div style="font-size:1.35rem; margin-right:0.5rem; line-height:1;">•</div><div>Validation<div style="margin-left:1.2rem; margin-top:0.2rem;">○ Automatically creates a request validation middleware in Tyk with schema in OAS</div></div></div><img src="./images/screenshots/validation-header-bar.png" style="width:72%; display:block; border:1px solid #b1b1b1; margin-left:2.6rem; margin-bottom:1rem;" /><div style="display:grid; grid-template-columns:0.82fr 1.12fr; gap:1.25rem; align-items:start;"><img src="./images/screenshots/validation-oas-schema.png" style="width:100%; display:block;" /><img src="./images/screenshots/validation-xtyk-config.png" style="width:100%; display:block;" /></div></div>

<!-- Notes: Tyk can validate request parameters and payloads against a schema provided in the OAS API definition, including schemas referenced elsewhere in the same definition. -->

---
layout: default
---

<div style="padding-top:0.15rem;"><div style="color:#5a16d6; font-size:2.45rem; font-weight:800; margin:0 0 1rem 0; line-height:1;">Tyk OAS Definition</div><div style="display:flex; align-items:flex-start; color:#111; font-size:0.95rem; line-height:1.3; margin-bottom:1.05rem;"><div style="font-size:1.35rem; margin-right:0.5rem; line-height:1;">•</div><div>Middleware<div style="margin-left:1.2rem; margin-top:0.2rem;">○ Uses operationIDs for middleware configured for each path</div><div style="margin-left:1.2rem;">○ Middleware declared in <span style="font-family:monospace;">x-tyk-api-gateway</span> section</div></div></div><div style="display:grid; grid-template-columns:0.95fr 1.08fr; gap:2rem; align-items:start; padding-top:1rem;"><img src="./images/screenshots/middleware-paths.png" style="width:100%; display:block;" /><img src="./images/screenshots/middleware-xtyk-config.png" style="width:100%; display:block;" /></div></div>

<!-- Notes: Middleware for a specific API path is linked through the operationId so the x-tyk-api-gateway configuration can refer back to the endpoint defined in the OAS paths section. -->