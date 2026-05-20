---
id: sso-2025/015-hands-on-workshop
deck_id: sso-2025
order: 15
slug: hands-on-workshop
title: "Hands-On Workshop"
summary: "Step 1: Install Keycloak ```bash # Add Bitnami Helm repository helm repo add bitnami https://charts.bitnami.com/bitnami helm repo update # Install Keycloak with Helm helm install k"
standalone_safe: true
reusable: true
requires_context: []
builds_on: []
recommended_next: [sso-2025/016-hands-on-workshop-2]
customer_visible: true
notes_visibility: customer-safe
---
---
layout: default
---

# Hands-On Workshop

<div style="font-size:1.05rem; line-height:1.7; color:#03031C; margin-top:0.5rem;">
<p style="font-weight:600; color:#5900CB; margin-bottom:0.5rem;">Step 1: Install Keycloak</p>
</div>

```bash
# Add Bitnami Helm repository
helm repo add bitnami https://charts.bitnami.com/bitnami
helm repo update

# Install Keycloak with Helm
helm install keycloak bitnami/keycloak \
  --namespace keycloak \
  --create-namespace \
  --set auth.adminUser=admin \
  --set auth.adminPassword=admin \
  --set service.type=NodePort \
  --set service.nodePorts.http=30082 \
  --set service.nodePorts.https=30083
```

<!-- Notes: When enterprises adopt GraphQL, they quickly realize that centralizing everything into a single GraphQL service doesn't scale well. -->
