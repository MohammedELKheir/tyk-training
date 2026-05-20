---
id: foundational-onboarding/068-endpoint-designer-validate-json
deck_id: foundational-onboarding
order: 68
slug: endpoint-designer-validate-json
title: "**Endpoint Designer - Validate JSON**"
summary: "Verify user requests against a specified JSON schema - Ensures data to API is in right format - Request is rejected if format not met with custom error code ``` \"validate_json\": {"
standalone_safe: true
reusable: true
requires_context: []
builds_on: []
recommended_next: [foundational-onboarding/069-endpoint-designer-virtual-endpoint]
customer_visible: true
notes_visibility: customer-safe
---
---
layout: default
---

# **Endpoint Designer - Validate JSON**

- Verify user requests against a specified JSON schema
- Ensures data to API is in right format
- Request is rejected if format not met with custom error code

```
"validate_json": {
  "method": "POST",
  "path": "/me",
  "schema": {..schema..}, // JSON object
  "error_response_code": 422 // 422 default however can override.
}
```
