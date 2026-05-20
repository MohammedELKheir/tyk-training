---
id: operator-2025/059-key-concepts-2
deck_id: operator-2025
order: 59
slug: key-concepts-2
title: "Key Concepts"
summary: "Naming Convention: <namespace>-<ingress_name>-<hash(host + path)> Example: default-httpbin-ingress-78acd160d Automatic Syncing: When you update the Ingress (e.g., add new paths, ch"
standalone_safe: true
reusable: true
requires_context: []
builds_on: []
recommended_next: [operator-2025/060-key-concepts-3]
customer_visible: true
notes_visibility: customer-safe
---
---
layout: default
---

# Key Concepts

Naming Convention:
&lt;namespace&gt;-&lt;ingress_name&gt;-&lt;hash(host + path)&gt;
Example: default-httpbin-ingress-78acd160d
Automatic Syncing:
When you update the Ingress (e.g., add new paths, change services), Tyk Operator:
Detects the change
Updates the corresponding APIs in Tyk
Keeps everything in sync without manual effort

<!-- Notes: Naming Convention for APIs created by Tyk Operator:
The API name is constructed as:
 &lt;namespace&gt;-&lt;ingress_name&gt;-&lt;hash(host + path)&gt;

Example:
 default-httpbin-ingress-78acd160d

Why this matters:
 This naming scheme ensures each API name is unique and easily traceable to its Kubernetes Ingress resource. The hash helps avoid conflicts when you have similar hosts or paths.
Automatic Syncing with Tyk Operator
When you update your Kubernetes Ingress—like adding new paths or changing backend services—

The Tyk Operator automatically detects those changes

It then updates the corresponding APIs inside Tyk Gateway accordingly

This keeps your API definitions in Tyk perfectly in sync with your Kubernetes Ingress resources

All without requiring any manual intervention, saving time and reducing errors -->
