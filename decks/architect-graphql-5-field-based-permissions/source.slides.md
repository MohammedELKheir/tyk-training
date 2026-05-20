---
theme: tyk
layout: default
aspectRatio: 16/9
canvasWidth: 980
highlighter: shiki
lineNumbers: false
drawings:
  persist: false
transition: slide-left
title: "Field Based Permissions"
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

---
layout: default
---

<h1 style="color:#5900CB; font-size:1.8rem; font-weight:bold; margin-bottom:0.8rem;">Setting Up Field Based Permissions</h1>

<div style="font-size:0.95rem; line-height:1.8; color:#03031C;">
  <p style="margin-top:0;">Restricted and allowed types and fields can also be set up via Tyk Dashboard.</p>

  <div style="display:flex; gap:1rem; margin-top:1rem;">
    <div style="flex:1;">
      <div style="border-left:4px solid #8438FA; padding-left:12px; margin-bottom:0.8rem;">
        <p style="font-weight:600; margin:0 0 0.3rem 0;">Optional: Configure a Policy</p>
        <p style="font-size:0.9rem; color:#555; margin:0;">System Management &gt; Policies &gt; Add Policy</p>
      </div>
    </div>
    <div style="flex:1;">
      <div style="border-left:4px solid #8438FA; padding-left:12px; margin-bottom:0.8rem;">
        <p style="font-weight:600; margin:0 0 0.3rem 0;">Apply to a Key</p>
        <p style="font-size:0.9rem; color:#555; margin:0;">System Management &gt; Keys &gt; Add Key — select a policy or configure directly for the key.</p>
      </div>
    </div>
  </div>

  <div style="margin-top:0.8rem; background:#f0f0f0; border-radius:8px; padding:12px 16px;">
    <p style="font-weight:600; margin:0 0 0.3rem 0;">Key Points:</p>
    <ul style="padding-left:1.2rem; margin:0.3rem 0 0 0;">
      <li>Select your GraphQL API (marked as <strong>GraphQL</strong>).</li>
      <li>Enable either <strong>Block list</strong> or <strong>Allow list</strong>. By default, both are disabled.</li>
      <li>It's not possible to have both enabled at the same time — enabling one switch automatically disables the other.</li>
    </ul>
  </div>
</div>

<!-- Notes: Tyk makes it easy to manage field-level permissions for your GraphQL APIs — right from the Dashboard.
You can restrict or allow access to specific types and fields using either a block list or an allow list.
Here's how you can set it up:

Step 1: Define Access via a Policy (Optional)
Navigate to: System Management > Policies > Add Policy
In the policy, select your GraphQL API — it'll be marked clearly as a GraphQL type.
You'll see two switches: Block list and Allow list.
Important note: You can enable either the block list or the allow list — not both. Turning on one will automatically disable the other.
Use the UI to select which fields or types to block or allow.

Step 2: Apply the Policy to a Key
Go to: System Management > Keys > Add Key
You can either:
Attach the policy you just created, or
Directly define GraphQL permissions for this key in the interface.

This allows you to customize access per client, ensuring internal and external users only see what they're allowed to.

Why This Matters
This approach gives you fine-grained control without changing your upstream service — all access logic is handled by Tyk at the gateway level.
It's a great way to enforce privacy, protect sensitive data, and customize access based on user roles or API clients. -->

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
