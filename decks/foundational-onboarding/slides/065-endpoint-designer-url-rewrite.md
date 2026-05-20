---
id: foundational-onboarding/065-endpoint-designer-url-rewrite
deck_id: foundational-onboarding
order: 65
slug: endpoint-designer-url-rewrite
title: "**Endpoint Designer - URL Rewrite**"
summary: "Translate outbound API interface to the internal structure of your services - Specify the components of the URL to capture - Fixed regex to restructure URL - Can add conditional re"
standalone_safe: true
reusable: true
requires_context: []
builds_on: []
recommended_next: [foundational-onboarding/066-endpoint-designer-caching]
customer_visible: true
notes_visibility: customer-safe
---
---
layout: default
---

# **Endpoint Designer - URL Rewrite**

- Translate outbound API interface to the internal structure of your services
- Specify the components of the URL to capture
- Fixed regex to restructure URL
- Can add conditional rewriting logic
  - Checking URL, body, headers or session metadata

```
"url_rewrites": [{
  "path": "match/me",
  "method": "GET",
  "match_pattern": "(\w+)/(\w+)",
  "rewrite_to": "my/service?value1=$1&value2=$2"
}],
```
