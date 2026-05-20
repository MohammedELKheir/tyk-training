---
id: foundational-onboarding/060-endpoint-designer-allowlist
deck_id: foundational-onboarding
order: 60
slug: endpoint-designer-allowlist
title: "**Endpoint Designer - Allowlist**"
summary: "Allowlist - Adding a path to a Allowlist will cause the entire API to become blocked - Very select access rules for your services - Can ignore case-sensitivity ``` < HTTP/1.1 403 F"
standalone_safe: true
reusable: true
requires_context: []
builds_on: []
recommended_next: [foundational-onboarding/061-endpoint-designer-blocklist]
customer_visible: true
notes_visibility: customer-safe
---
---
layout: default
---

# **Endpoint Designer - Allowlist**

- Allowlist
  - Adding a path to a Allowlist will cause the entire API to become blocked
  - Very select access rules for your services
  - Can ignore case-sensitivity

```
< HTTP/1.1 403 Forbidden
< Content-Type: application/json
< Date: Thu, 19 Jul 2018 21:42:43 GMT
< Content-Length: 50
<
{
 "error": "Requested endpoint is forbidden"
}
```
