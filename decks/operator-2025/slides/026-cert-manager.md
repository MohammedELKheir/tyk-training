---
id: operator-2025/026-cert-manager
deck_id: operator-2025
order: 26
slug: cert-manager
title: "Cert Manager"
summary: "Kubernetes requires all webhook communication to be over HTTPS. The webhook server must serve a valid certificate. Kubernetes must trust the certificate used by the webhook. This i"
standalone_safe: true
reusable: true
requires_context: []
builds_on: []
recommended_next: [operator-2025/027-installing-tyk-operator]
customer_visible: true
notes_visibility: customer-safe
---
---
layout: default
---

# Cert Manager

Kubernetes requires all webhook communication to be over HTTPS.
The webhook server must serve a valid certificate.
Kubernetes must trust the certificate used by the webhook.
This is where cert-manager comes in.
cert-manager is a Kubernetes add-on that automates:
Issuing TLS certificates
Renewing expiring certs
Storing them in secrets
Works with issuers like Let’s Encrypt, HashiCorp Vault, internal PKI.
You can disable the webhook and/or manually generate TLS certificates
Example use case:
Air-gapped environments
Clusters with restricted access

<!-- Notes: "Now let’s talk about a critical requirement when working with admission webhooks in Kubernetes: secure communication."
"Kubernetes requires all webhook traffic to be encrypted using HTTPS. That means:"
"Your webhook server must serve over TLS using a valid certificate."

"And more importantly, Kubernetes must trust that certificate — or it will reject the webhook entirely."

"This is where cert-manager becomes really helpful."
"cert-manager is a Kubernetes add-on that automates the management of TLS certificates for your cluster. It can:"
"Issue certificates using trusted issuers like Let’s Encrypt, Vault, or internal PKI."

"Renew certificates before they expire — so no manual intervention is needed."

"Store the certificates securely in Kubernetes Secrets."

"This automation is especially useful for things like the Tyk Operator’s webhook server, which needs a valid TLS cert to function properly in a Kubernetes-native way."
"But what if you’re in a highly secure or air-gapped environment where cert-manager isn’t feasible?"
"In that case, you can disable the webhook in the Tyk Operator or manually generate TLS certificates and configure them yourself."
"So depending on your environment, you have flexible options — but for most cloud-native setups, using cert-manager is the recommended and scalable way to go." -->
