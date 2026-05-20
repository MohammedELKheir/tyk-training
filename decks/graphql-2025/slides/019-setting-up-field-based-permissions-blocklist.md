---
id: graphql-2025/019-setting-up-field-based-permissions-blocklist
deck_id: graphql-2025
order: 19
slug: setting-up-field-based-permissions-blocklist
title: "Setting Up Field Based Permissions - Blocklist"
summary: "By default all Types and Fields will be unchecked. By checking a Type or Field you will disallow to use it for any GraphQL operation associated with the key. For example, the setti"
standalone_safe: true
reusable: true
requires_context: []
builds_on: []
recommended_next: [graphql-2025/020-setting-up-field-based-permissions-allowlist]
customer_visible: true
notes_visibility: customer-safe
---
---
layout: default
---

# Setting Up Field Based Permissions - Blocklist

By default all Types and Fields will be unchecked. By checking a Type or Field you will disallow to use it for any GraphQL operation associated with the key.
For example, the settings illustrated below would block the following:
code and countries fields in Continent type.
latt and longt fields in Coordinates type.

<!-- Notes: By default, all Types and Fields are unchecked in the permissions settings.
This means everything is allowed unless you explicitly block something.
When you check a Type or Field, you’re telling Tyk to disallow access to that part of the schema for any GraphQL operations made using the associated API key.
For example, in the settings shown here:
The fields code and countries on the Continent type are blocked.

The fields latt and longt on the Coordinates type are blocked as well.

So if a client tries to query these blocked fields, they will get an error — access will be denied.
This allows you to precisely control which parts of your GraphQL API clients can access, helping secure sensitive or irrelevant data without modifying your backend. -->
