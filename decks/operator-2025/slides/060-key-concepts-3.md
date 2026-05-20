---
id: operator-2025/060-key-concepts-3
deck_id: operator-2025
order: 60
slug: key-concepts-3
title: "Key Concepts"
summary: "Ingress Path Matching Kubernetes allows three types of path matches"
standalone_safe: true
reusable: true
requires_context: []
builds_on: []
recommended_next: []
customer_visible: true
notes_visibility: customer-safe
---
---
layout: default
---

# Key Concepts

Ingress Path Matching
Kubernetes allows three types of path matches:

<!-- Notes: When configuring paths in Kubernetes Ingress, the PathType controls how URLs are matched.
Exact means the request URL must match the path exactly. For example, /foo matches /foo but not /foo/.
Prefix matches the beginning of the URL path. For example, /foo/ as a prefix matches both /foo and /foo/.
However, prefix /foo will not match /foobar because it only matches if the path segment boundaries align.
Understanding these subtle differences helps ensure your Ingress routes behave as expected. -->
