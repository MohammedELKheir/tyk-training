---
id: architect-graphql-5-field-based-permissions/001-understanding-the-graphql-schema
deck_id: architect-graphql-5-field-based-permissions
order: 1
slug: understanding-the-graphql-schema
title: "Understanding the GraphQL Schema"
summary: "GraphQL Schema type Query { accounts: [Account!] } type Account { owner: String! number: ID! balance: Float! } Query: The entry point of your API accounts returns a list of Account"
standalone_safe: true
reusable: true
requires_context: []
builds_on: []
recommended_next: [architect-graphql-5-field-based-permissions/002-why-use-field-based-permissions]
customer_visible: true
notes_visibility: customer-safe
---
<h1 style="color:#5900CB; font-size:1.8rem; font-weight:bold; margin-bottom:0.8rem;">Understanding the GraphQL Schema</h1>

<div style="display:flex; gap:1.5rem;">
  <div style="flex:1; background:#1a1a2e; border-radius:8px; padding:14px 18px; align-self:flex-start;">
    <p style="color:#8438FA; font-size:0.75rem; font-weight:600; margin:0 0 6px 0;">GraphQL Schema</p>
    <pre style="color:#e0e0e0; font-size:0.6rem; margin:0; font-family:monospace; line-height:1.5; white-space:pre;">type Query {
  accounts: [Account!]
}
type Account {
  owner: String!
  number: ID!
  balance: Float!
}</pre>
  </div>

  <div style="flex:1.2; font-size:0.95rem; line-height:1.7; color:#03031C;">
    <p style="font-weight:bold; margin-top:0; color:#5900CB;">Query: The entry point of your API</p>
    <p style="margin-top:0.5rem;">accounts returns a list of Account objects</p>
    <p style="font-weight:bold; margin-top:0.8rem; color:#5900CB;">Account Type:</p>
    <ul style="padding-left:1.2rem; margin-top:0.3rem;">
      <li><strong>owner:</strong> Name of account holder</li>
      <li><strong>number:</strong> Unique account number</li>
      <li><strong>balance:</strong> Sensitive field showing current balance</li>
    </ul>
  </div>
</div>

<!-- Notes: Let's take a look at a basic GraphQL query structure for our API.
The entry point for this API is a query called accounts.
When this query is executed, it returns a list of Account objects.

Now, what does an Account object look like?
Here are its key fields:
owner: This is the name of the account holder — a simple string field.
number: This is the unique account number, which identifies the account.
balance: This is a sensitive field — it shows the current balance in the account.

Depending on your use case, you may want to apply fine-grained access control to fields like balance, especially if different users or roles should see different levels of information.
This is where Tyk's GraphQL security features — like field-level permissions and policies — can really shine. -->
