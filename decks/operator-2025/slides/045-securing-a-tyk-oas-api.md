---
id: operator-2025/045-securing-a-tyk-oas-api
deck_id: operator-2025
order: 45
slug: securing-a-tyk-oas-api
title: "Securing a Tyk OAS API"
summary: "Update Tyk OAS Definition Modify existing Tyk OAS API Definition to include the API key authentication configuration. OAS definition stored in a file named oas-api-definition.json"
standalone_safe: true
reusable: true
requires_context: []
builds_on: []
recommended_next: [operator-2025/046-securing-a-tyk-oas-api-components-securityschemes-defines-the-authentica]
customer_visible: true
notes_visibility: customer-safe
---
---
layout: default
---

# Securing a Tyk OAS API

Update Tyk OAS Definition
Modify existing Tyk OAS API Definition to include the API key authentication configuration.
OAS definition stored in a file named oas-api-definition.json
ConfigMap named tyk-oas-api-config in the tyk namespace
Modify your Tyk OAS API Definition oas-api-definition.json as follow:

<!-- Notes: "To enhance your API security, you might want to add authentication, such as API key validation, to your Tyk OAS API Definition."
Where to update:
Your OpenAPI Specification file — in this example, oas-api-definition.json.

This file is referenced by the ConfigMap named tyk-oas-api-config in the tyk namespace.

What to do:
Modify the OAS file to include the relevant Tyk extensions for API key authentication.

Typically, this involves adding security schemes and applying them to the API paths inside the OAS JSON or YAML.

Once updated:
You reapply the updated ConfigMap to Kubernetes.

The Tyk Operator detects the changes and reconciles the API in Tyk accordingly.

"This method keeps your API configuration, including security, consistent and managed declaratively via Kubernetes and the Tyk Operator." -->
