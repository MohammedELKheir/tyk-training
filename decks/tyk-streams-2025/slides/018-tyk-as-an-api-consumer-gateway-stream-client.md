---
id: tyk-streams-2025/018-tyk-as-an-api-consumer-gateway-stream-client
deck_id: tyk-streams-2025
order: 18
slug: tyk-as-an-api-consumer-gateway-stream-client
title: "Tyk as an API Consumer Gateway (Stream → Client)"
summary: "Step 7: Test — Listen for SSE Events ```bash # Terminal 1 curl -N http://tyk-gateway.localhost:8080/jippity-discuss/sse ``` ## Step 8: Test — Send Requests to Tyk Stream Producer `"
standalone_safe: true
reusable: true
requires_context: []
builds_on: []
recommended_next: [tyk-streams-2025/019-prerequisites]
customer_visible: true
notes_visibility: customer-safe
---
# Step 7: Test — Listen for SSE Events
```bash
# Terminal 1
curl -N http://tyk-gateway.localhost:8080/jippity-discuss/sse
```

## Step 8: Test — Send Requests to Tyk Stream Producer
```bash
# Terminal 2
curl -X POST           http://tyk-gateway.localhost:8080/jippity-chat/chat           -H "Content-Type: text/plain"           -d "Tell me a joke."
```
