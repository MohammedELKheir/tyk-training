---
id: operator-2025/055-control-kubernetes-ingress-resources
deck_id: operator-2025
order: 55
slug: control-kubernetes-ingress-resources
title: "Control Kubernetes Ingress Resources"
summary: "Ingress is a Kubernetes resource that defines how external HTTP/S traffic should be routed to internal services. An Ingress Controller is the engine that actually reads Ingress rul"
standalone_safe: true
reusable: true
requires_context: []
builds_on: []
recommended_next: [operator-2025/056-key-concepts]
customer_visible: true
notes_visibility: customer-safe
---
---
layout: default
---

# Control Kubernetes Ingress Resources

Ingress is a Kubernetes resource that defines how external HTTP/S traffic should be routed to internal services.
An Ingress Controller is the engine that actually reads Ingress rules and applies them.
The Tyk Operator acts like a smart Ingress Controller by:
Reading existing Ingress resources
Creating corresponding APIs in Tyk Gateway
Applying API management features like:
Authentication
Rate limiting
Monitoring
Transformations
You don’t have to manually define each API in Tyk—it generates them based on your Ingress resources and a template.

<!-- Notes: "Ingress is a Kubernetes resource that controls how external HTTP or HTTPS traffic is routed to internal services within the cluster."
"An Ingress Controller is the component that actually implements those routing rules by watching the Ingress resources and configuring the traffic flow accordingly."
"The Tyk Operator enhances this model by acting like a smart Ingress Controller."
"It watches your existing Ingress resources and automatically creates matching APIs inside the Tyk Gateway."
"Not only does it set up the routing, but it also applies API management features such as authentication, rate limiting, monitoring, and transformations."
"This means you don’t need to manually define every API inside Tyk. Instead, the Operator generates APIs dynamically based on your Kubernetes Ingress rules and a predefined template, streamlining the process significantly." -->
