---
id: tyk-streams-2025/016-example-scenario-overview
deck_id: tyk-streams-2025
order: 16
slug: example-scenario-overview
title: "Example Scenario Overview"
summary: "Step 5: Create Consumer Stream API ```bash curl -H \"Authorization: \" -H \"Content-Type: application/vnd.tyk.streams.oas\" http://localhost:3000/api/apis/streams -d @consumer.json ```"
standalone_safe: true
reusable: true
requires_context: []
builds_on: []
recommended_next: [tyk-streams-2025/017-tyk-as-an-api-producer-gateway-client-stream]
customer_visible: true
notes_visibility: customer-safe
---
# Step 5: Create Consumer Stream API
```bash
curl -H "Authorization: <your-api-key>"              -H "Content-Type: application/vnd.tyk.streams.oas"              http://localhost:3000/api/apis/streams              -d @consumer.json
```

- Create `consumer.json`
- Subscribe to Kafka topic `discussion`
- Deliver messages to clients using SSE
