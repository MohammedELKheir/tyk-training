---
id: graphql-2025/018-setting-up-field-based-permissions
deck_id: graphql-2025
order: 18
slug: setting-up-field-based-permissions
title: "Setting Up Field Based Permissions"
summary: "Restricted and allowed types and fields can also be set up via Tyk Dashboard. Optional: Configure a Policy from System Management > Policies > Add Policy. From System Management >"
standalone_safe: true
reusable: true
requires_context: []
builds_on: []
recommended_next: [graphql-2025/019-setting-up-field-based-permissions-blocklist]
customer_visible: true
notes_visibility: customer-safe
---
---
layout: default
---

# Setting Up Field Based Permissions

Restricted and allowed types and fields can also be set up via Tyk Dashboard.
Optional: Configure a Policy from System Management &gt; Policies &gt; Add Policy.
From System Management &gt; Keys &gt; Add Key select a policy or configure directly for the key.
Select your GraphQL API (marked as GraphQL).
Enable either Block list or Allow list. By default, both are disabled. It’s not possible to have both enabled at the same time - enabling one switch automatically disables the other.

<!-- Notes: Tyk makes it easy to manage field-level permissions for your GraphQL APIs — right from the Dashboard.
You can restrict or allow access to specific types and fields using either a block list or an allow list.
Here’s how you can set it up:

Step 1: Define Access via a Policy (Optional)
Navigate to:
 System Management &gt; Policies &gt; Add Policy

In the policy, select your GraphQL API — it’ll be marked clearly as a GraphQL type.

You’ll see two switches:
 Block list and Allow list.

Important note: You can enable either the block list or the allow list — not both. Turning on one will automatically disable the other.
Use the UI to select which fields or types to block or allow.


Step 2: Apply the Policy to a Key
Go to:
 System Management &gt; Keys &gt; Add Key

You can either:

Attach the policy you just created, or

Directly define GraphQL permissions for this key in the interface.

This allows you to customize access per client, ensuring internal and external users only see what they’re allowed to.

Why This Matters
This approach gives you fine-grained control without changing your upstream service — all access logic is handled by Tyk at the gateway level.
It’s a great way to enforce privacy, protect sensitive data, and customize access based on user roles or API clients. -->
