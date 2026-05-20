---
id: foundational-onboarding/062-endpoint-designer-method-transforms
deck_id: foundational-onboarding
order: 62
slug: endpoint-designer-method-transforms
title: "**Endpoint Designer - Method Transforms**"
summary: "Method Transform - Change the method of a request - Simplify API consumption via single interface - Combined with body transformation and context variables for dynamism ``` method_"
standalone_safe: true
reusable: true
requires_context: []
builds_on: []
recommended_next: [foundational-onboarding/063-endpoint-designer-body-transforms]
customer_visible: true
notes_visibility: customer-safe
---
---
layout: default
---

# **Endpoint Designer - Method Transforms**

- Method Transform
  - Change the method of a request
  - Simplify API consumption via single interface
  - Combined with body transformation and context variables for dynamism

```
method_transforms: [
 {
   path: "post",
   method: "GET",
   to_method: "POST"
 }
],
```
