---
id: maintaining-2024/008-redis-data-storage-3
deck_id: maintaining-2024
order: 8
slug: redis-data-storage-3
title: "Redis - data storage"
summary: "Tyk uses prefixes and namespaces in Redis key names: - Standard API key: apikey-<KEY_HASH> - OAuth API key: oauth-data.<API_ID>.oauth-clientid.<OAUTH_CLIENT_ID> - Dashboard API key"
standalone_safe: true
reusable: true
requires_context: []
builds_on: []
recommended_next: [maintaining-2024/009-redis-messaging]
customer_visible: true
notes_visibility: customer-safe
---
---
layout: default
---

# Redis - data storage

- Tyk uses prefixes and namespaces in Redis key names:
- Standard API key: apikey-&lt;KEY_HASH&gt;
- OAuth API key: oauth-data.&lt;API_ID&gt;.oauth-clientid.&lt;OAUTH_CLIENT_ID&gt;
- Dashboard API key: tyk-admin-api-&lt;DASHBOARD_API_KEY&gt;
- Dashboard user session: tyk-admin-api-&lt;SESSION_ID&gt;
- Certificate: cert-raw-&lt;CERTIFICATE_ID&gt;

<!-- Notes: When the Tyk components store data in Redis, they uses prefixes and other namespaces in the Redis key names. These are some examples:
Standard API keys start with “apikey-” then the hash of the key.
OAuth API keys start with “oauth-data.” then the id of the API the key is for, followed by “.oauth-clientid.” and the Id of the OAuth Client.
Dashboard API keys start with “tyk-admin-api-” then the Dashboard API Key.
Dashboard user sessions start with the same prefix as the Dashboard API Keys, “tyk-admin-api-”, but what then follows is the session id rather than the Dashboard API Key.
Certificates start with “cert-raw-” then the id of the certificate. -->
