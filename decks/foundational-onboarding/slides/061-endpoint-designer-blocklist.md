---
id: foundational-onboarding/061-endpoint-designer-blocklist
deck_id: foundational-onboarding
order: 61
slug: endpoint-designer-blocklist
title: "**Endpoint Designer - Blocklist**"
summary: "Blocklist - Adding a path to a Blocklist will force it to be blocked. - Useful if you are versioning your API and are deprecating a resource - Can ignore case-sensitivity ``` < HTT"
standalone_safe: true
reusable: true
requires_context: []
builds_on: []
recommended_next: [foundational-onboarding/062-endpoint-designer-method-transforms]
customer_visible: true
notes_visibility: customer-safe
---
---
layout: default
---

# **Endpoint Designer - Blocklist**

- Blocklist
  - Adding a path to a Blocklist will force it to be blocked.
  - Useful if you are versioning your API and are deprecating a resource
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
