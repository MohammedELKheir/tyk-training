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
title: "Persisting GraphQL queries"
---

<div class="tyk-slide">
  <div class="tyk-title">Persisting GraphQL queries</div>

  <div style="position:absolute; left:60px; top:133px; width:838px; color:#03031C; font-size:1.12rem; line-height:1.54;">
    <ul style="margin:0; padding-left:2.05rem; list-style-type:disc;">
      <li style="margin-bottom:0.72rem; padding-left:0.5rem;">Tyk allows exposing a GraphQL query as a REST endpoint.</li>
      <li style="margin-bottom:0.72rem; padding-left:0.5rem;">Achieved using <span class="tyk-mono">persist_graphql</span> inside <span class="tyk-mono">extended_paths</span>.</li>
      <li style="margin-bottom:0.72rem; padding-left:0.5rem;">Configured on an HTTP-type API definition.</li>
      <li style="margin-bottom:0.18rem; padding-left:0.5rem;">Useful for:
        <ul style="margin:0.36rem 0 0 0.42rem; padding-left:1.96rem; list-style-type:circle;">
          <li style="margin-bottom:0.42rem; padding-left:0.42rem;">Creating simple, cacheable REST endpoints</li>
          <li style="padding-left:0.48rem;">Predefined access to known GraphQL operations</li>
        </ul>
      </li>
    </ul>
  </div>

  <div style="position:absolute; left:42px; top:360px; width:848px; color:#03031C;">
    <div style="font-size:1.08rem; line-height:1.2; font-weight:800; margin-bottom:0.28rem;">Requirements:</div>
    <ul style="margin:0; padding-left:2.05rem; list-style-type:disc; font-size:0.99rem; line-height:1.26;">
      <li style="margin-bottom:0.56rem; padding-left:0.58rem;">The <span class="tyk-mono">target_url</span> must point to a GraphQL upstream.</li>
      <li style="padding-left:0.58rem;"><span class="tyk-mono">enable_context_vars</span> must be set to <span class="tyk-mono">true</span>.</li>
    </ul>
  </div>

  <div class="tyk-badge">
    <img :src="'/icons/tyk-logo-badge.png'" alt="Tyk logo" />
  </div>
</div>

<!-- Notes: Tyk allows you to expose a GraphQL query as a REST endpoint using the persist_graphql feature inside extended_paths.
This is configured on an HTTP-type API definition, not a GraphQL type.
It’s especially useful for:
Creating simple, cacheable REST endpoints from complex GraphQL queries.
Providing predefined access to specific GraphQL operations without exposing the full schema.
To use this feature, two requirements must be met:
The target_url must point to a valid GraphQL upstream.
enable_context_vars must be set to true.
This approach lets you combine the flexibility of GraphQL with the simplicity and caching benefits of REST. -->

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

---
layout: default
---

<div class="tyk-slide">
  <div class="tyk-title">Persisting GraphQL queries</div>

  <div style="position:absolute; left:42px; top:132px; width:850px; color:#03031C;">
    <div style="font-size:1.19rem; line-height:1.16; font-weight:800; margin-bottom:0.32rem;">The vital part of this is the <span class="tyk-mono" style="font-size:0.98em;">extended_paths.persist_graphql</span> field</div>
    <div style="font-size:1.02rem; line-height:1.22; font-weight:400; margin-bottom:0.56rem;">Sample persist_graphql configuration:</div>
  </div>

  <pre class="tyk-pre" style="position:absolute; left:42px; top:208px; width:860px; font-size:0.68rem; line-height:1.74; color:#333;">"persist_graphql": [
  {
    "method": "GET",
    "path": "/getContinentByCode",
    "operation": "query ($continentCode: ID!) { continent(code: $continentCode)
{ code name countries { name } } }",
    "variables": {
      "continentCode": "EU"
    }
  }
]</pre>

  <div class="tyk-badge">
    <img :src="'/icons/tyk-logo-badge.png'" alt="Tyk logo" />
  </div>
</div>

<!-- Notes: Once the API definition is in place, versioning plays an important role — even if you're not managing multiple versions.
By setting not_versioned: true and providing a "Default" version, you activate the GraphQL-to-REST middleware. This is where the persist_graphql configuration lives. -->

---
layout: default
---

<div class="tyk-slide">
  <div class="tyk-title">Persisting GraphQL queries</div>

  <div style="position:absolute; left:42px; top:130px; width:500px; color:#03031C;">
    <div style="font-size:1.24rem; line-height:1.16; font-weight:800; margin-bottom:0.82rem;">Each entry includes:</div>
    <ul style="margin:0; padding-left:2.05rem; list-style-type:disc; font-size:1.03rem; line-height:1.42;">
      <li style="margin-bottom:0.56rem; padding-left:0.58rem;">method – e.g., <span class="tyk-mono">GET</span></li>
      <li style="margin-bottom:0.56rem; padding-left:0.58rem;">path – e.g., <span class="tyk-mono">/getContinentByCode</span></li>
      <li style="margin-bottom:0.56rem; padding-left:0.58rem;">operation – the GraphQL query</li>
      <li style="padding-left:0.58rem;">variables – parameters passed to the query</li>
    </ul>
  </div>

  <pre class="tyk-pre" style="position:absolute; left:544px; top:147px; width:392px; font-size:0.67rem; line-height:1.68; color:#333;">{
  "data": {
    "continent": {
      "code": "EU",
      "name": "Europe",
      "countries": [
        {
          "name": "Andorra"
        },
        ...
      ]
    }
  }
}</pre>

  <div class="tyk-badge">
    <img :src="'/icons/tyk-logo-badge.png'" alt="Tyk logo" />
  </div>
</div>

<!-- Notes: In this final step, we configure the actual persisted query.
The path /getContinentByCode becomes a usable REST endpoint.
When Tyk receives a GET request to that path, it will construct and send the defined GraphQL operation to the upstream — in this case, fetching the continent by code.
The query and variables are hardcoded, so it's predictable and easy to cache or control. -->
