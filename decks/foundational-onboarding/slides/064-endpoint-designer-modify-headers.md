---
id: foundational-onboarding/064-endpoint-designer-modify-headers
deck_id: foundational-onboarding
order: 64
slug: endpoint-designer-modify-headers
title: "**Endpoint Designer - Modify Headers**"
summary: "Can be set globally for entire API - Request or Response headers - Delete and/or add headers - Can inject custom dynamic data - meta_data field in key can be referenced via $tyk.me"
standalone_safe: true
reusable: true
requires_context: []
builds_on: []
recommended_next: [foundational-onboarding/065-endpoint-designer-url-rewrite]
customer_visible: true
notes_visibility: customer-safe
---
---
layout: default
---

# **Endpoint Designer - Modify Headers**

- Can be set globally for entire API
- Request or Response headers
- Delete and/or add headers
- Can inject custom dynamic data
  - meta_data field in key can be referenced via $tyk.meta.FIELDNAME
  - Context data can be referenced via $tyk_context.NAME

```
  "transform_headers": [
    {
      "delete_headers": ["authorization"],
      "add_headers": {"x-widgets-secret": "the-secret-widget-key-is-secret"},
      "path": "widgets{rest}",
      "method": "GET"
    }
```
