---
id: tyk-streams-2025/015-hands-on-workshop
deck_id: tyk-streams-2025
order: 15
slug: hands-on-workshop
title: "Hands-On Workshop"
summary: "Step 4: Create Producer Stream API ```bash curl -H \"Authorization: \" -H \"Content-Type: application/vnd.tyk.streams.oas\" http://localhost:3000/api/apis/streams -d @producer.json ```"
standalone_safe: true
reusable: true
requires_context: []
builds_on: []
recommended_next: [tyk-streams-2025/016-example-scenario-overview]
customer_visible: true
notes_visibility: customer-safe
---
# Step 4: Create Producer Stream API
```bash
curl -H "Authorization: <your-api-key>"              -H "Content-Type: application/vnd.tyk.streams.oas"              http://localhost:3000/api/apis/streams              -d @producer.json
```

- Create `producer.json`
- This API receives `POST /chat`
- Tyk publishes incoming messages into Kafka
