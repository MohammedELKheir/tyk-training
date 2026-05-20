---
id: graphql-2025/017-field-based-permissions-2
deck_id: graphql-2025
order: 17
slug: field-based-permissions-2
title: "Field Based Permissions"
summary: "External user tries to access balance and gets: { \"errors\": [ { \"message\": \"field: balance is restricted on type: Account\" } ] } Why Use Field-Based Permissions? Not every API cons"
standalone_safe: true
reusable: true
requires_context: []
builds_on: []
recommended_next: [graphql-2025/018-setting-up-field-based-permissions]
customer_visible: true
notes_visibility: customer-safe
---
---
layout: default
---

<h2 style="color:#5900CB; font-size:1.8rem; font-weight:bold; margin-bottom:1rem;">Field Based Permissions</h2>

<div style="display:flex; gap:1.5rem;">
  <div style="flex:1.2; font-size:0.95rem; line-height:1.7; color:#03031C;">
    External user tries to access balance and gets:
{
  "errors": [
    {
      "message": "field: balance is restricted on type: Account"
    }
  ]
}
  </div>
  <div style="flex:1; background:#1a1a2e; border-radius:8px; padding:12px 16px; overflow:auto;">
    <pre style="color:#e0e0e0; font-size:0.6rem; margin:0; font-family:monospace; line-height:1.5; white-space:pre;">Why Use Field-Based Permissions?
Not every API consumer should see everything.
Internal user can query:
query {
  accounts {
    owner
    number
    balance
  }
}</pre>
  </div>
</div>

<!-- Notes: In GraphQL, it's easy to request only the data you need — which is a powerful feature.
But with that power comes a risk: Not every API consumer should be able to see everything.
For example:
An internal user — like a back-office system — might be allowed to query all fields of the Account type, including sensitive data like the account balance.

query {
  accounts {
    owner
    number
    balance
  }
}

This is perfectly fine for trusted internal users.

However, when an external user — say, a third-party developer — tries to run the same query, they may not be authorized to see sensitive fields like balance.
Instead of getting the data, they get a clear error message:
json
CopyEdit
{
  "errors": [
    {
      "message": "field: balance is restricted on type: Account"
    }
  ]
}

This is the result of field-based permissions configured in Tyk.

Why This Matters:
It enforces least privilege access — consumers only see what they’re allowed to.

It reduces the risk of data leakage.

And it helps you comply with data protection and regulatory requirements, especially when exposing APIs to third parties.

So, field-based permissions are an essential part of a secure and well-governed GraphQL API strategy. -->
