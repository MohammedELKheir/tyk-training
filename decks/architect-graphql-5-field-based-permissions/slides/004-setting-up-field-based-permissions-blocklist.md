---
id: architect-graphql-5-field-based-permissions/004-setting-up-field-based-permissions-blocklist
deck_id: architect-graphql-5-field-based-permissions
order: 4
slug: setting-up-field-based-permissions-blocklist
title: "Setting Up Field Based Permissions - Blocklist"
summary: "By default all Types and Fields will be unchecked. By checking a Type or Field you will disallow to use it for any GraphQL operation associated with the key. For example, the setti"
standalone_safe: true
reusable: true
requires_context: []
builds_on: []
recommended_next: [architect-graphql-5-field-based-permissions/005-setting-up-field-based-permissions-allowlist]
customer_visible: true
notes_visibility: customer-safe
---
---
layout: default
---

<h1 style="color:#5900CB; font-size:1.8rem; font-weight:bold; margin-bottom:0.8rem;">Setting Up Field Based Permissions - Blocklist</h1>

<div style="font-size:0.9rem; line-height:1.7; color:#03031C;">
  <p style="margin-top:0;">By default all Types and Fields will be unchecked. By checking a Type or Field you will <strong>disallow</strong> to use it for any GraphQL operation associated with the key.</p>
  <p style="margin-top:0.5rem;">For example, the settings illustrated below would block the following:</p>
  <ul style="padding-left:1.2rem; margin-top:0.3rem;">
    <li><strong>code</strong> and <strong>countries</strong> fields in <code style="background:#E8E0FF; padding:2px 6px; border-radius:3px;">Continent</code> type.</li>
    <li><strong>latt</strong> and <strong>longt</strong> fields in <code style="background:#E8E0FF; padding:2px 6px; border-radius:3px;">Coordinates</code> type.</li>
  </ul>
</div>

<div style="margin-top:0.8rem; text-align:center;">
  <img src="./public/screenshots/blocklist-dashboard.png" style="max-width:90%; border:1px solid #ddd; border-radius:6px;" />
</div>

<!-- Notes: By default, all Types and Fields are unchecked in the permissions settings.
This means everything is allowed unless you explicitly block something.
When you check a Type or Field, you're telling Tyk to disallow access to that part of the schema for any GraphQL operations made using the associated API key.
For example, in the settings shown here:
The fields code and countries on the Continent type are blocked.
The fields latt and longt on the Coordinates type are blocked as well.
So if a client tries to query these blocked fields, they will get an error — access will be denied.
This allows you to precisely control which parts of your GraphQL API clients can access, helping secure sensitive or irrelevant data without modifying your backend. -->
