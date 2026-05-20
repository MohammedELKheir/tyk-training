---
id: architect-graphql-12-dynamic-variables/001-dynamic-variables
deck_id: architect-graphql-12-dynamic-variables
order: 1
slug: dynamic-variables
title: "Dynamic Variables"
summary: "You can pass dynamic variables to your persisted GraphQL queries. Supported sources: Request headers URL path parameters Use Tyk context variables to reference them. Ideal for flex"
standalone_safe: true
reusable: true
requires_context: []
builds_on: []
recommended_next: [architect-graphql-12-dynamic-variables/002-dynamic-variables-2]
customer_visible: true
notes_visibility: customer-safe
---
<div style="position:relative; width:100%; height:100%; background:white; color:#03031C; overflow:hidden; padding:0;">
  <h1 style="margin:0; position:absolute; left:76px; top:34px; font-size:3.08rem; line-height:1.05; font-weight:800; color:#5900CB;">Dynamic Variables</h1>

  <div style="position:absolute; left:52px; top:124px; width:860px; font-size:1.1rem; line-height:1.78; color:#03031C;">
    <p style="margin:0 0 1rem 0; font-weight:600;">You can pass dynamic variables to your persisted GraphQL queries.</p>
    <ul style="margin:0; padding-left:1.5rem; list-style-type:disc;">
      <li style="margin:0 0 0.4rem 0; padding-left:0.7rem;">Supported sources:
        <ul style="margin:0.3rem 0 0 0; padding-left:1.9rem; list-style-type:circle;">
          <li style="margin:0 0 0.25rem 0; padding-left:0.5rem;">Request headers</li>
          <li style="margin:0; padding-left:0.5rem;">URL path parameters</li>
        </ul>
      </li>
      <li style="margin:0.35rem 0; padding-left:0.7rem;">Use Tyk context variables to reference them.</li>
      <li style="margin:0.35rem 0 0 0; padding-left:0.7rem;">Ideal for flexible query inputs without hardcoding values.</li>
    </ul>
  </div>

  <div style="position:absolute; right:-6px; bottom:-6px; width:118px; height:84px; background:#000; border-top-left-radius:28px; display:flex; align-items:flex-end; justify-content:flex-start; padding:0 16px 16px 15px; box-sizing:border-box; overflow:hidden;">
    <div style="width:18px; height:18px; background:#21E9BA; border-top-left-radius:3px; border-top-right-radius:8px; border-bottom-left-radius:13px; border-bottom-right-radius:3px; margin-right:6px; margin-bottom:2px;"></div>
    <div style="font-size:1.05rem; line-height:1; font-weight:800; color:#fff; letter-spacing:-0.03em; font-family:Arial, Helvetica, sans-serif;">Tyk</div>
  </div>
</div>

<!-- Notes: Tyk's persisted query middleware isn't limited to static variable values.
You can dynamically extract variables from the request—either from headers or from the URL path—using Tyk's request context variables.
This adds flexibility and enables more personalized or user-specific GraphQL queries using simple REST calls. -->
