---
id: architect-graphql-8-introspection/003-introspection-production
deck_id: architect-graphql-8-introspection
order: 3
slug: introspection-production
title: "Introspection (Production)"
summary: "Introspection GraphQL Introspection in Production Introspection is useful for development and debugging. In production, introspection can: Reveal sensitive schema and implementatio"
standalone_safe: true
reusable: true
requires_context: []
builds_on: []
recommended_next: [architect-graphql-8-introspection/004-introspection-queries]
customer_visible: true
notes_visibility: customer-safe
---
---
layout: default
---

# Introspection

<div style="margin-top:0.42rem; margin-left:0.65rem; max-width:740px; color:#111827;">
  <p style="margin:0 0 1.3rem 0; font-size:1.01rem; line-height:1.32;">GraphQL Introspection in Production</p>
  <ul style="margin:0; padding-left:1.72rem; font-size:0.99rem; line-height:1.5;">
    <li style="margin-bottom:0.8rem;">Introspection is useful for development and debugging.</li>
    <li style="margin-bottom:0.7rem;">In production, introspection can:</li>
  </ul>
  <ul style="margin:0 0 0.92rem 2.2rem; padding-left:1.3rem; list-style-type:circle; font-size:0.97rem; line-height:1.47;">
    <li style="margin-bottom:0.55rem;">Reveal sensitive schema and implementation details.</li>
    <li>Allow attackers to discover and map out your API.</li>
  </ul>
  <ul style="margin:0; padding-left:1.72rem; font-size:0.99rem; line-height:1.5;">
    <li style="margin-bottom:0.35rem;">If Authentication Mode is Open (Keyless):</li>
  </ul>
  <ul style="margin:0 0 0.92rem 2.2rem; padding-left:1.3rem; list-style-type:circle; font-size:0.97rem; line-height:1.47;">
    <li>Introspection is always enabled and cannot be disabled.</li>
  </ul>
  <ul style="margin:0; padding-left:1.72rem; font-size:0.99rem; line-height:1.5;">
    <li style="margin-bottom:0.35rem;">You can disable introspection per key or via security policy using:</li>
  </ul>
  <ul style="margin:0 0 0 2.2rem; padding-left:1.3rem; list-style-type:circle; font-size:0.97rem; line-height:1.47;">
    <li style="margin-bottom:0.4rem;">Tyk Dashboard</li>
    <li>Tyk Gateway API</li>
  </ul>
</div>

<div style="position:absolute; right:1.1rem; bottom:1rem; background:#03031C; border-radius:12px; padding:0.56rem 0.72rem; display:flex; align-items:center; justify-content:center;">
  <img src="./public/icons/tyk-logo.png" style="width:3.35rem;" />
</div>

<!-- Notes: GraphQL introspection is designed as a discovery and diagnostic feature to help developers during the development process. It allows tools and developers to query the API for its schema, including types, fields, and relationships.
However, enabling introspection in production can expose your API's structure, making it easier for attackers to understand and exploit potential vulnerabilities. For example, they could discover hidden mutations or sensitive fields that were not meant to be public.
A critical consideration is that if your API is configured with Open (Keyless) authentication, Tyk enables introspection by default, and this setting cannot be changed. This presents a security risk, especially for publicly accessible APIs.
Tyk allows you to control introspection more securely by disabling it on a per-key or per-policy basis. This configuration can be done through the Tyk Dashboard or programmatically through the Tyk Gateway API.
The recommendation is to disable introspection in production environments, and only enable it in development or controlled internal settings. -->
