---
id: architect-graphql-11-persisting-graphql-queries/001-persisting-graphql-queries-tyk-allows-exposing-a-graphql-query-as-a-rest
deck_id: architect-graphql-11-persisting-graphql-queries
order: 1
slug: persisting-graphql-queries-tyk-allows-exposing-a-graphql-query-as-a-rest
title: "Persisting GraphQL queries Tyk allows exposing a GraphQL query as a REST endpoin"
summary: "t. Achieved using persist_graphql inside extended_paths . Configured on an HTTP-type API definition. Useful for: Creating simple, cacheable REST endpoints Predefined access to know"
standalone_safe: true
reusable: true
requires_context: []
builds_on: []
recommended_next: [architect-graphql-11-persisting-graphql-queries/002-persisting-graphql-queries-api-definition-and-versioning-setup-basic-api]
customer_visible: true
notes_visibility: customer-safe
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
