---
id: architect-graphql-5-field-based-permissions/005-setting-up-field-based-permissions-allowlist
deck_id: architect-graphql-5-field-based-permissions
order: 5
slug: setting-up-field-based-permissions-allowlist
title: "Setting Up Field Based Permissions - Allowlist"
summary: "By default all Types and Fields will be unchecked. By checking a Type or Field you will allow it to be used for any GraphQL operation associated with the key. For example, the sett"
standalone_safe: true
reusable: true
requires_context: []
builds_on: []
recommended_next: []
customer_visible: true
notes_visibility: customer-safe
---
---
layout: default
---

<h1 style="color:#5900CB; font-size:1.8rem; font-weight:bold; margin-bottom:0.8rem;">Setting Up Field Based Permissions - Allowlist</h1>

<div style="font-size:0.9rem; line-height:1.7; color:#03031C;">
  <p style="margin-top:0;">By default all Types and Fields will be unchecked. By checking a Type or Field you will <strong>allow</strong> it to be used for any GraphQL operation associated with the key.</p>
  <p style="margin-top:0.5rem;">For example, the settings illustrated below would only allow the following:</p>
  <ul style="padding-left:1.2rem; margin-top:0.3rem;">
    <li><strong>code</strong> field in <code style="background:#E8E0FF; padding:2px 6px; border-radius:3px;">Continent</code> type.</li>
    <li><strong>code</strong> and <strong>name</strong> fields in <code style="background:#E8E0FF; padding:2px 6px; border-radius:3px;">Language</code> type.</li>
  </ul>
</div>

<div style="margin-top:0.8rem; text-align:center;">
  <img src="./public/screenshots/allowlist-dashboard.png" style="max-width:90%; border:1px solid #ddd; border-radius:6px;" />
</div>

<!-- Notes: By default, all Types and Fields are unchecked in the permissions settings.
In this case, that means nothing is allowed until you explicitly allow access.
When you check a Type or Field, you are granting permission for that part of the schema to be used in any GraphQL operation associated with the API key.
For example, in the settings shown here:
Only the code field on the Continent type is allowed.
And for the Language type, only the code and name fields are allowed.
Any attempt by the client to query fields outside of these allowed ones will be blocked.
This approach is useful when you want a strict allow-list policy to tightly control what data clients can access, ensuring maximum security and compliance. -->
