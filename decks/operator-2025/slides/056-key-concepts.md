---
id: operator-2025/056-key-concepts
deck_id: operator-2025
order: 56
slug: key-concepts
title: "Key Concepts"
summary: "```yaml Annotations Inside your Ingress YAML, you use annotations like: annotations: kubernetes.io/ingress.class: tyk tyk.io/template: myapideftemplate tyk.io/template-kind: ApiDef"
standalone_safe: true
reusable: true
requires_context: []
builds_on: []
recommended_next: [operator-2025/057-key-concepts-how-tyk-operator-handles-ingress]
customer_visible: true
notes_visibility: customer-safe
---
---
layout: default
---

# Key Concepts

```yaml
Annotations
Inside your Ingress YAML, you use annotations like:
annotations:
  kubernetes.io/ingress.class: tyk
  tyk.io/template: myapideftemplate
  tyk.io/template-kind: ApiDefinition
ingress.class: tyk: tells Kubernetes to use Tyk Operator

template: the name of a Tyk ApiDefinition or TykOasApiDefinition that acts as a config template

template-kind: which type of template is being referenced
```

<!-- Notes: "In your Ingress YAML, you add specific annotations to tell Kubernetes and Tyk Operator how to handle the resource."
"The annotation kubernetes.io/ingress.class: tyk signals Kubernetes to route this Ingress through the Tyk Operator."
"The tyk.io/template annotation specifies the name of a Tyk API definition or OAS API definition that acts as a configuration template for this API."
"And tyk.io/template-kind tells the Operator what type of template is being referenced—whether it’s a standard ApiDefinition or a TykOasApiDefinition."
"These annotations enable Tyk Operator to link your Ingress with the correct API configuration, ensuring consistent API management policies are applied automatically." -->
