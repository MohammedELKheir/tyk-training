---
id: tyk-streams-2025/013-architecture-and-flow
deck_id: tyk-streams-2025
order: 13
slug: architecture-and-flow
title: "Architecture & Flow"
summary: "Step 1: Clone Demo Repository ```bash git clone https://github.com/TykTechnologies/tyk-demo cd tyk-demo ``` ## Step 2: Enable Tyk Streams ```bash # .env DASHBOARD_LICENCE= GATEWAY_"
standalone_safe: true
reusable: true
requires_context: []
builds_on: []
recommended_next: [tyk-streams-2025/014-request-lifecycle]
customer_visible: true
notes_visibility: customer-safe
---
# Step 1: Clone Demo Repository
```bash
git clone https://github.com/TykTechnologies/tyk-demo
cd tyk-demo
```

## Step 2: Enable Tyk Streams
```bash
# .env
DASHBOARD_LICENCE=<your-dashboard-license>
GATEWAY_IMAGE_REPO=tyk-gateway-ee
TYK_DB_STREAMING_ENABLED=true
TYK_GW_STREAMING_ENABLED=true
```
