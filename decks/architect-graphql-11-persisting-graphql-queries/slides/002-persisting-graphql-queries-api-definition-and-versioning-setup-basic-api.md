---
id: architect-graphql-11-persisting-graphql-queries/002-persisting-graphql-queries-api-definition-and-versioning-setup-basic-api
deck_id: architect-graphql-11-persisting-graphql-queries
order: 2
slug: persisting-graphql-queries-api-definition-and-versioning-setup-basic-api
title: "Persisting GraphQL queries API Definition & Versioning Setup Basic API definitio"
summary: "n: \"proxy\": { \"listen_path\": \"/trevorblades/\", \"target_url\": \"https://countries.trevorblades.com\", \"strip_listen_path\": true } Enable versioning with: use_extended_paths: true not_"
standalone_safe: true
reusable: true
requires_context: []
builds_on: []
recommended_next: [architect-graphql-11-persisting-graphql-queries/003-persisting-graphql-queries-the-vital-part-of-this-is-the-extended-paths]
customer_visible: true
notes_visibility: customer-safe
---
---
layout: default
---

<div class="tyk-slide">
  <div class="tyk-title">Persisting GraphQL queries</div>

  <div style="position:absolute; left:42px; top:132px; width:860px; color:#03031C;">
    <div style="font-size:1.28rem; line-height:1.16; font-weight:800; margin-bottom:0.38rem;">API Definition &amp; Versioning Setup</div>
    <ul style="margin:0; padding-left:2.05rem; list-style-type:disc; font-size:1.11rem; line-height:1.46;">
      <li style="margin-bottom:0.46rem; padding-left:0.58rem;">Basic API definition:</li>
    </ul>
  </div>

  <pre class="tyk-pre" style="position:absolute; left:133px; top:204px; width:640px; font-size:0.88rem; line-height:1.72; color:#222;">"proxy": {
  "listen_path": "/trevorblades/",
  "target_url": "https://countries.trevorblades.com",
  "strip_listen_path": true
}</pre>

  <div style="position:absolute; left:42px; top:338px; width:850px; color:#03031C; font-size:1.02rem; line-height:1.34;">
    <ul style="margin:0; padding-left:2.05rem; list-style-type:disc;">
      <li style="margin-bottom:0.38rem; padding-left:0.58rem;">Enable versioning with:
        <ul style="margin:0.24rem 0 0 0.44rem; padding-left:1.98rem; list-style-type:circle;">
          <li style="margin-bottom:0.38rem; padding-left:0.48rem;"><span class="tyk-mono">use_extended_paths: true</span></li>
          <li style="padding-left:0.48rem;"><span class="tyk-mono">not_versioned: true</span></li>
        </ul>
      </li>
      <li style="padding-left:0.58rem;">GraphQL to REST middleware lives inside <span class="tyk-mono">extended_paths.persist_graphql</span>.</li>
    </ul>
  </div>

  <div class="tyk-badge">
    <img :src="'/icons/tyk-logo-badge.png'" alt="Tyk logo" />
  </div>
</div>

<!-- Notes: Here’s a basic example of an API definition for a GraphQL proxy in Tyk:
The listen_path is set to /trevorblades/.
The target_url points to the upstream GraphQL service at https://countries.trevorblades.com.
We enable strip_listen_path to remove the prefix before forwarding requests upstream.
To enable versioning with this setup:
Set use_extended_paths to true — this allows more granular path handling.
Set not_versioned to true if you want to disable automatic versioning behavior.
The important piece for GraphQL-to-REST conversion is that the middleware handling this logic lives inside the extended_paths.persist_graphql section.
This modular approach gives you flexibility to manage your API versions and expose GraphQL queries as REST endpoints with fine control -->
