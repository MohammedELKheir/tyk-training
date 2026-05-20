---
id: operator-2025/024-installing-and-configuring-tyk-operator
deck_id: operator-2025
order: 24
slug: installing-and-configuring-tyk-operator
title: "Installing and Configuring Tyk Operator"
summary: "**Pre-requisites:** Tyk deployment - Tyk Cloud or Self-managed Policy ID matching configuration: Dashboard configuration set to true: allow_explicit_policy_id Enable_duplicate_slug"
standalone_safe: true
reusable: true
requires_context: []
builds_on: []
recommended_next: [operator-2025/025-admission-webhooks]
customer_visible: true
notes_visibility: customer-safe
---
---
layout: default
---

# Installing and Configuring Tyk Operator


**Pre-requisites:**
Tyk deployment - Tyk Cloud or Self-managed
Policy ID matching configuration:
Dashboard configuration set to true:
allow_explicit_policy_id
Enable_duplicate_slugs
Gateway configuration set to true:
Policies.allow_explicit_policy_id
User credentials from the Dashboard
Tyk Operator user above should write access to APIs, Certificates, Policies etc.
Turn off write access for all other users

<!-- Notes: "Before you can use the Tyk Operator effectively, there are a few important prerequisites to set up."
"First, you’ll need a running Tyk deployment. This can be either Tyk Cloud or a self-managed instance."
"Second, you must ensure that explicit policy ID mapping is enabled."
"In the Dashboard config, set allow_explicit_policy_id and enable_duplicate_slugs to true."
"In the Gateway config, make sure policies.allow_explicit_policy_id is also set to true."
allow_explicit_policy_id: true
What it does: Allows you to manually set the ID for a policy when creating it through the Dashboard API.

Why it matters: The Tyk Operator uses a policy ID defined in your Custom Resource. If this setting is false, the Dashboard would override the ID with a generated one, breaking the sync.

In context: Ensures the policy created by the Operator has the exact ID you define in Kubernetes, maintaining consistency.

🔧 enable_duplicate_slugs: true
What it does: Allows multiple APIs to have the same slug (URL path segment).

Why it matters: In GitOps or CI/CD pipelines, you might deploy similar APIs across different environments or teams that share naming conventions.

In context: Prevents slug collisions that could otherwise cause deployment errors when the Operator applies new API configurations.

Gateway Config Flag
🔧 policies.allow_explicit_policy_id: true
What it does: Allows the Gateway to respect manually assigned policy IDs from the config bundle (or API call), rather than auto-generating them.

Why it matters: If you're using Tyk Operator to push policy definitions, the Gateway must accept those defined IDs so it can properly apply the right policy to each API key or token.

In context: Keeps the Gateway aligned with what’s declared in Kubernetes, supporting predictable and controlled API security.
"Next, you’ll need a set of user credentials from the Dashboard. This user will act as the Tyk Operator's system user."
"It’s important that this user has write access to manage APIs, Cer -->
