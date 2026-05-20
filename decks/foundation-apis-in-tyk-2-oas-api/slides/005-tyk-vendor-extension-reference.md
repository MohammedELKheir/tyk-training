---
id: foundation-apis-in-tyk-2-oas-api/005-tyk-vendor-extension-reference
deck_id: foundation-apis-in-tyk-2-oas-api
order: 5
slug: tyk-vendor-extension-reference
title: "Tyk Vendor Extension Reference"
summary: "Custom Tyk API extensions inside the OpenAPI definition. Stored under the key x-tyk-api-gateway . Main Fields info (Info) Main metadata for the API definition upstream (Upstream) C"
standalone_safe: true
reusable: true
requires_context: []
builds_on: []
recommended_next: [foundation-apis-in-tyk-2-oas-api/006-tyk-oas-definition-authentication]
customer_visible: true
notes_visibility: customer-safe
---
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
