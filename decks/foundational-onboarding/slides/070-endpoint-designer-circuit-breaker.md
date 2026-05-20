---
id: foundational-onboarding/070-endpoint-designer-circuit-breaker
deck_id: foundational-onboarding
order: 70
slug: endpoint-designer-circuit-breaker
title: "**Endpoint Designer - Circuit Breaker**"
summary: "Sets percentage of failed requests before tripping circuit breaker - Can trigger an event in Tyk that fires a webhook - Gateway stops all inbound request to configured endpoint for"
standalone_safe: true
reusable: true
requires_context: []
builds_on: []
recommended_next: [foundational-onboarding/071-endpoint-designer-tracking-endpoints]
customer_visible: true
notes_visibility: customer-safe
---
---
layout: default
---

# **Endpoint Designer - Circuit Breaker**

- Sets percentage of failed requests before tripping circuit breaker
- Can trigger an event in Tyk that fires a webhook
- Gateway stops all inbound request to configured endpoint for recovery time period
- During recovery time period, Gateway will periodically issue request to upstream
  - If reconnect, circuit breaker will be reset and another event is triggered
  - Called "half open" state and can be disabled
