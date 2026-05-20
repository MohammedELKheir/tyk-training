---
id: architect-graphql-5-field-based-permissions/002-why-use-field-based-permissions
deck_id: architect-graphql-5-field-based-permissions
order: 2
slug: why-use-field-based-permissions
title: "Why Use Field-Based Permissions?"
summary: "Not every API consumer should see everything. Internal user can query: GraphQL Query query { accounts { owner number balance } } External user tries to access balance and gets: Err"
standalone_safe: true
reusable: true
requires_context: []
builds_on: []
recommended_next: [architect-graphql-5-field-based-permissions/003-setting-up-field-based-permissions]
customer_visible: true
notes_visibility: customer-safe
---
---
layout: default
---

<h1 style="color:#5900CB; font-size:1.8rem; font-weight:bold; margin-bottom:0.8rem;">Why Use Field-Based Permissions?</h1>

<div style="display:flex; gap:1.5rem;">
  <div style="flex:1;">
    <p style="font-size:0.95rem; font-weight:bold; color:#03031C; margin-top:0;">Not every API consumer should see everything.</p>
    <p style="font-size:0.85rem; color:#555; margin-top:0.3rem;">Internal user can query:</p>
    <div style="background:#1a1a2e; border-radius:8px; padding:12px 16px; margin-top:0.5rem;">
      <p style="color:#8438FA; font-size:0.7rem; font-weight:600; margin:0 0 4px 0;">GraphQL Query</p>
      <pre style="color:#e0e0e0; font-size:0.55rem; margin:0; font-family:monospace; line-height:1.5; white-space:pre;">query {
  accounts {
    owner
    number
    balance
  }
}</pre>
    </div>
  </div>

  <div style="flex:1;">
    <p style="font-size:0.95rem; font-weight:bold; color:#03031C; margin-top:0;">External user tries to access balance and gets:</p>
    <div style="background:#1a1a2e; border-radius:8px; padding:12px 16px; margin-top:0.5rem;">
      <p style="color:#FF6B6B; font-size:0.7rem; font-weight:600; margin:0 0 4px 0;">Error Response</p>
      <pre style="color:#e0e0e0; font-size:0.55rem; margin:0; font-family:monospace; line-height:1.5; white-space:pre;">{
  "errors": [
    {
      "message": "field: balance is restricted on type: Account"
    }
  ]
}</pre>
    </div>
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

{
  "errors": [
    {
      "message": "field: balance is restricted on type: Account"
    }
  ]
}

This is the result of field-based permissions configured in Tyk.

Why This Matters:
It enforces least privilege access — consumers only see what they're allowed to.
It reduces the risk of data leakage.
And it helps you comply with data protection and regulatory requirements, especially when exposing APIs to third parties.

So, field-based permissions are an essential part of a secure and well-governed GraphQL API strategy. -->
