---
id: tyk-streams-2025/017-tyk-as-an-api-producer-gateway-client-stream
deck_id: tyk-streams-2025
order: 17
slug: tyk-as-an-api-producer-gateway-client-stream
title: "Tyk as an API Producer Gateway (Client → Stream)"
summary: "Step 6: Start the Joker Service ```bash chmod +x joker-service.sh ./joker-service.sh ``` - Listens to Kafka `chat` topic - Generates jokes - Publishes responses to `discussion`"
standalone_safe: true
reusable: true
requires_context: []
builds_on: []
recommended_next: [tyk-streams-2025/018-tyk-as-an-api-consumer-gateway-stream-client]
customer_visible: true
notes_visibility: customer-safe
---
# Step 6: Start the Joker Service
```bash
chmod +x joker-service.sh
./joker-service.sh
```

- Listens to Kafka `chat` topic
- Generates jokes
- Publishes responses to `discussion`
