---
id: architect-universal-data-graph-3-hands-on-1-setting-up-udg/007-test-the-api-in-graphql-playground-navigate-to-the-playground-tab-in-tyk
deck_id: architect-universal-data-graph-3-hands-on-1-setting-up-udg
order: 7
slug: test-the-api-in-graphql-playground-navigate-to-the-playground-tab-in-tyk
title: "Test the API in GraphQL Playground Navigate to the Playground tab in Tyk Dashboa"
summary: "rd and run: query getUser { user(id: \"1\") { username id reviews { text } } } Expected Response: { \"data\": { \"user\": { \"username\": \"User 1\", \"id\": \"1\", \"reviews\": null } } } At th"
standalone_safe: true
reusable: true
requires_context: []
builds_on: []
recommended_next: [architect-universal-data-graph-3-hands-on-1-setting-up-udg/008-challenge-try-to-resolve-reviews-field-on-type-users-try-to-resolve-user]
customer_visible: true
notes_visibility: customer-safe
---
---
layout: default
---

<div style="position:relative; margin:-28px -48px; width:calc(100% + 96px); height:calc(100% + 56px); background:#fff; color:#0b0b2b; overflow:hidden;">
  <h1 style="margin:0; position:absolute; left:34px; top:30px; width:930px; font-size:2.75rem; line-height:1.04; font-weight:800; color:#5900cb; font-family:Inter, Arial, Helvetica, sans-serif;">Test the API in GraphQL Playground</h1>

  <div style="position:absolute; left:44px; top:156px; width:418px; color:#0b0b2b; font-family:Inter, Arial, Helvetica, sans-serif;">
    <p style="margin:0 0 10px 0; font-size:1.12rem; line-height:1.42; font-weight:800;">Navigate to the Playground tab in Tyk Dashboard and run:</p>
    <pre v-pre style="margin:0; font-size:0.92rem; line-height:1.7; color:#23233d; font-family:'Courier New', Menlo, Monaco, Consolas, monospace; background:transparent; white-space:pre;">query getUser {
  user(id: "1") {
    username
    id
    reviews {
      text
    }
  }
}</pre>
  </div>

  <div style="position:absolute; left:518px; top:162px; width:380px; color:#0b0b2b; font-family:Inter, Arial, Helvetica, sans-serif;">
    <p style="margin:0 0 10px 0; font-size:1.12rem; line-height:1.42; font-weight:800;">Expected Response:</p>
    <pre v-pre style="margin:0; font-size:0.9rem; line-height:1.72; color:#23233d; font-family:'Courier New', Menlo, Monaco, Consolas, monospace; background:transparent; white-space:pre;">{
  "data": {
    "user": {
      "username": "User 1",
      "id": "1",
      "reviews": null
    }
  }
}</pre>
    <p style="margin:34px 0 0 0; font-size:0.95rem; line-height:1.6; font-weight:500;">At this point, reviews is null because it&apos;s not yet connected. You’ll need to attach another REST data source for the <span style="font-family:'Courier New', Menlo, Monaco, Consolas, monospace;">reviews</span> field next.</p>
  </div>

  <TykFooterBadge />
</div>
