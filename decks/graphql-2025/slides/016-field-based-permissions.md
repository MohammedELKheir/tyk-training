---
id: graphql-2025/016-field-based-permissions
deck_id: graphql-2025
order: 16
slug: field-based-permissions
title: "Field Based Permissions"
summary: "Query: The entry point of your API accounts returns a list of Account objects Account Type: owner: Name of account holder number: Unique account number balance: Sensitive field sho"
standalone_safe: true
reusable: true
requires_context: []
builds_on: []
recommended_next: [graphql-2025/017-field-based-permissions-2]
customer_visible: true
notes_visibility: customer-safe
---
---
layout: default
---

<h2 style="color:#5900CB; font-size:1.8rem; font-weight:bold; margin-bottom:1rem;">Field Based Permissions</h2>

<div style="display:flex; gap:1.5rem;">
  <div style="flex:1.2; font-size:0.95rem; line-height:1.7; color:#03031C;">
    Query: The entry point of your API
accounts returns a list of Account objects
Account Type:
owner: Name of account holder
number: Unique account number
balance: Sensitive field showing current balance 
  </div>
  <div style="flex:1; background:#1a1a2e; border-radius:8px; padding:12px 16px; overflow:auto;">
    <pre style="color:#e0e0e0; font-size:0.6rem; margin:0; font-family:monospace; line-height:1.5; white-space:pre;">Understanding the GraphQL Schema
type Query {
  accounts: [Account!]
}
type Account {
  owner: String!
  number: ID!
  balance: Float!
}</pre>
  </div>
</div>

<!-- Notes: Let’s take a look at a basic GraphQL query structure for our API.
The entry point for this API is a query called accounts.
When this query is executed, it returns a list of Account objects.

Now, what does an Account object look like?
Here are its key fields:
owner: This is the name of the account holder — a simple string field.

number: This is the unique account number, which identifies the account.

balance: This is a sensitive field — it shows the current balance in the account.

Depending on your use case, you may want to apply fine-grained access control to fields like balance, especially if different users or roles should see different levels of information.
This is where Tyk’s GraphQL security features — like field-level permissions and policies — can really shine. -->
