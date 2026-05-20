---
id: graphql-2025/020-setting-up-field-based-permissions-allowlist
deck_id: graphql-2025
order: 20
slug: setting-up-field-based-permissions-allowlist
title: "Setting Up Field Based Permissions - Allowlist"
summary: "By default all Types and Fields will be unchecked. By checking a Type or Field you will allow it to be used for any GraphQL operation associated with the key. For example, the sett"
standalone_safe: true
reusable: true
requires_context: []
builds_on: []
recommended_next: [graphql-2025/021-hands-on-2]
customer_visible: true
notes_visibility: customer-safe
---
---
layout: default
---

# Setting Up Field Based Permissions - Allowlist

By default all Types and Fields will be unchecked. By checking a Type or Field you will allow it to be used for any GraphQL operation associated with the key.
For example, the settings illustrated below would only allow the following:
code field in Continent type.
code and name fields in Language type.

<!-- Notes: By default, all Types and Fields are unchecked in the permissions settings.
In this case, that means nothing is allowed until you explicitly allow access.
When you check a Type or Field, you are granting permission for that part of the schema to be used in any GraphQL operation associated with the API key.
For example, in the settings shown here:
Only the code field on the Continent type is allowed.

And for the Language type, only the code and name fields are allowed.

Any attempt by the client to query fields outside of these allowed ones will be blocked.
This approach is useful when you want a strict allow-list policy to tightly control what data clients can access, ensuring maximum security and compliance. -->
