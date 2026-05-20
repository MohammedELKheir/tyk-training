---
id: architect-universal-data-graph-3-hands-on-1-setting-up-udg/006-connect-the-user-query-to-the-users-rest-api-in-the-schema-tab-select-th
deck_id: architect-universal-data-graph-3-hands-on-1-setting-up-udg
order: 6
slug: connect-the-user-query-to-the-users-rest-api-in-the-schema-tab-select-th
title: "Connect the user Query to the Users REST API In the Schema tab, select the field"
summary: "user under Query Choose Data Source Type → REST Choose Use External Data Source Fill in: Datasource Name: getUserById HTTP Method: GET URL: http://localhost:4000/users/{{.args.id}}"
standalone_safe: true
reusable: true
requires_context: []
builds_on: []
recommended_next: [architect-universal-data-graph-3-hands-on-1-setting-up-udg/007-test-the-api-in-graphql-playground-navigate-to-the-playground-tab-in-tyk]
customer_visible: true
notes_visibility: customer-safe
---
---
layout: default
---

<div style="position:relative; margin:-28px -48px; width:calc(100% + 96px); height:calc(100% + 56px); background:#fff; color:#0b0b2b; overflow:hidden;">
  <h1 style="margin:0; position:absolute; left:34px; top:30px; width:900px; font-size:2.9rem; line-height:1.06; font-weight:800; color:#5900cb; font-family:Inter, Arial, Helvetica, sans-serif;">Connect the user Query to the Users REST API</h1>

  <div style="position:absolute; left:44px; top:156px; width:760px; color:#0b0b2b; font-family:Inter, Arial, Helvetica, sans-serif;">
    <ul style="margin:0; padding-left:1.7rem; font-size:1rem; line-height:1.63; list-style-type:disc;">
      <li style="padding-left:0.8rem; margin-bottom:0.14rem;">In the Schema tab, select the field <span style="font-family:'Courier New', Menlo, Monaco, Consolas, monospace;">user</span> under Query</li>
      <li style="padding-left:0.8rem; margin-bottom:0.14rem;">Choose Data Source Type → REST</li>
      <li style="padding-left:0.8rem; margin-bottom:0.14rem;">Choose Use External Data Source</li>
      <li style="padding-left:0.8rem; margin-bottom:0.14rem;">Fill in:</li>
    </ul>
    <div style="margin:8px 0 0 28px; font-size:0.98rem; line-height:1.58;">
      <div><span style="font-weight:700;">Datasource Name:</span> <span style="font-family:'Courier New', Menlo, Monaco, Consolas, monospace;">getUserById</span></div>
      <div><span style="font-weight:700;">HTTP Method:</span> GET</div>
      <div><span style="font-weight:700;">URL:</span> <span style="font-family:'Courier New', Menlo, Monaco, Consolas, monospace;">http://localhost:4000/users/&#123;&#123;.args.id&#125;&#125;</span></div>
      <div>(This uses GraphQL args as a dynamic path param)</div>
      <div>(Optional) Add headers if needed</div>
      <div>Save &amp; Update API</div>
    </div>
  </div>

  <TykFooterBadge />
</div>
