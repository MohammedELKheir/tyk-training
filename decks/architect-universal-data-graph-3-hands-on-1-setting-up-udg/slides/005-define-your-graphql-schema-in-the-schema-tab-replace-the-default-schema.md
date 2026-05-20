---
id: architect-universal-data-graph-3-hands-on-1-setting-up-udg/005-define-your-graphql-schema-in-the-schema-tab-replace-the-default-schema
deck_id: architect-universal-data-graph-3-hands-on-1-setting-up-udg
order: 5
slug: define-your-graphql-schema-in-the-schema-tab-replace-the-default-schema
title: "Define Your GraphQL Schema In the Schema tab, replace the default schema with: t"
summary: "ype Mutation { default: String } type Query { user(id: String): User } type Review { id: String text: String userId: String user: User } type User { id: String username: String rev"
standalone_safe: true
reusable: true
requires_context: []
builds_on: []
recommended_next: [architect-universal-data-graph-3-hands-on-1-setting-up-udg/006-connect-the-user-query-to-the-users-rest-api-in-the-schema-tab-select-th]
customer_visible: true
notes_visibility: customer-safe
---
---
layout: default
---

<div style="position:relative; margin:-28px -48px; width:calc(100% + 96px); height:calc(100% + 56px); background:#fff; color:#0b0b2b; overflow:hidden;">
  <h1 style="margin:0; position:absolute; left:34px; top:30px; font-size:3.45rem; line-height:1.03; font-weight:800; color:#5900cb; font-family:Inter, Arial, Helvetica, sans-serif;">Define Your GraphQL Schema</h1>

  <div style="position:absolute; left:44px; top:156px; width:700px; color:#0b0b2b; font-family:Inter, Arial, Helvetica, sans-serif;">
    <p style="margin:0 0 8px 0; font-size:1.13rem; line-height:1.4; font-weight:800;">In the Schema tab, replace the default schema with:</p>
    <div style="margin:0; font-size:0.95rem; line-height:1.45; color:#23233d; font-family:'Courier New', Menlo, Monaco, Consolas, monospace; background:transparent;">
      <div>type Mutation {</div>
      <div style="padding-left:28px;">default: String</div>
      <div>}</div>
      <div style="height:18px;"></div>
      <div>type Query {</div>
      <div style="padding-left:28px;">user(id: String): User</div>
      <div>}</div>
      <div style="height:18px;"></div>
      <div>type Review {</div>
      <div style="padding-left:28px;">id: String</div>
      <div style="padding-left:28px;">text: String</div>
      <div style="padding-left:28px;">userId: String</div>
      <div style="padding-left:28px;">user: User</div>
      <div>}</div>
      <div style="height:18px;"></div>
      <div>type User {</div>
      <div style="padding-left:28px;">id: String</div>
      <div style="padding-left:28px;">username: String</div>
      <div style="padding-left:28px;">reviews: [Review]</div>
      <div>}</div>
    </div>
  </div>

  <TykFooterBadge />
</div>
