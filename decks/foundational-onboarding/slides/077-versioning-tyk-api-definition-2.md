---
id: foundational-onboarding/077-versioning-tyk-api-definition-2
deck_id: foundational-onboarding
order: 77
slug: versioning-tyk-api-definition-2
title: "**Versioning Tyk API Definition**"
summary: "All versions can have an expiry date set in the Expires field. - Retain deprecated endpoints in newer versions as mock responses for user-friendly handling. - Options: Return an er"
standalone_safe: true
reusable: true
requires_context: []
builds_on: []
recommended_next: [foundational-onboarding/078-demo-quick-look-at-versioning-tyk-api-definitions]
customer_visible: true
notes_visibility: customer-safe
---
---
layout: default
---

# **Versioning Tyk API Definition**

- All versions can have an expiry date set in the Expires field.
- Retain deprecated endpoints in newer versions as mock responses for user-friendly handling.
- Options: Return an error or redirect to the new endpoint for better user experience.
- Tyk's access control model supports granular permissions.
- Grant access to a version by adding it to a policy for API tokens.
- Applies to all tokens assigned to the policy, ensuring access to both old and new versions.
