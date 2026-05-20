---
id: foundational-onboarding/059-endpoint-designer-2
deck_id: foundational-onboarding
order: 59
slug: endpoint-designer-2
title: "**Endpoint Designer**"
summary: "Method - Any valid HTTP method - Relative Path - The relative path to the target. If API is listening on /api listen path, and you want to match the /api/get URL, you should match"
standalone_safe: true
reusable: true
requires_context: []
builds_on: []
recommended_next: [foundational-onboarding/060-endpoint-designer-allowlist]
customer_visible: true
notes_visibility: customer-safe
---
---
layout: default
---

# **Endpoint Designer**

- Method
  - Any valid HTTP method
- Relative Path
  - The relative path to the target. If API is listening on /api listen path, and you want to match the /api/get URL, you should match for the /get endpoint
  - Path can contain wild cards, such as {id}, the actual value is translated into a regex. Useful to make the path more human-readable when editing.
- Plugin
  - A path can belong to multiple plug-ins, these plug-ins define the behaviour you want to impose on the matched request.
