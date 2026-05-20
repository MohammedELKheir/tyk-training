---
id: architect-graphql-5-field-based-permissions/003-setting-up-field-based-permissions
deck_id: architect-graphql-5-field-based-permissions
order: 3
slug: setting-up-field-based-permissions
title: "Setting Up Field Based Permissions"
summary: "Restricted and allowed types and fields can also be set up via Tyk Dashboard. Optional: Configure a Policy System Management > Policies > Add Policy Apply to a Key System Managemen"
standalone_safe: true
reusable: true
requires_context: []
builds_on: []
recommended_next: [architect-graphql-5-field-based-permissions/004-setting-up-field-based-permissions-blocklist]
customer_visible: true
notes_visibility: customer-safe
---
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
