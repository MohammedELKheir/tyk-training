---
id: operator-2025/011-kubernetes-operator
deck_id: operator-2025
order: 11
slug: kubernetes-operator
title: "Kubernetes Operator"
summary: "Definition: An operator is a custom controller that manages complex, domain-specific applications or workloads. Built on Controllers: Operators use controllers to manage Custom Res"
standalone_safe: true
reusable: true
requires_context: []
builds_on: []
recommended_next: [operator-2025/012-reconciliation]
customer_visible: true
notes_visibility: customer-safe
---
---
layout: default
---

# Kubernetes Operator

Definition: An operator is a custom controller that manages complex, domain-specific applications or workloads.
Built on Controllers: Operators use controllers to manage Custom Resources (CRDs).
Extends Kubernetes: Operators understand the application lifecycle — including installation, upgrades, backups, configuration changes, etc.
Human Expertise in Code: Acts as a Kubernetes user
Example: The Tyk Operator manages API definitions and security policies by watching custom resources like TykOasApiDefinition.

<!-- Notes: "Now that we’ve covered controllers, let’s talk about Operators—which are essentially custom controllers designed to manage more complex, domain-specific applications."
"An Operator is a specialized controller that goes beyond just keeping pods running—it encodes human operational knowledge into software. It understands how to install, configure, upgrade, and even recover a specific type of application."
"Operators are built on top of the controller pattern. They use Custom Resource Definitions (CRDs) to introduce new Kubernetes-native objects that represent parts of your application."
"In that way, Operators extend Kubernetes itself—they make complex systems feel like native Kubernetes resources."
"Think of an Operator as a robotic system administrator. It behaves like a Kubernetes user that constantly watches for changes, and takes actions to ensure everything is configured correctly."
"A great example of this is the Tyk Operator. It watches for custom resources like TykOasApiDefinition, and ensures that APIs, policies, and other configurations are properly deployed and kept in sync with what’s declared."
"This allows you to manage the full lifecycle of APIs declaratively—just like how Kubernetes manages the lifecycle of your applications." -->
