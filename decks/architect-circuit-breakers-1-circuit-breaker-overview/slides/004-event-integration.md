---
id: architect-circuit-breakers-1-circuit-breaker-overview/004-event-integration
deck_id: architect-circuit-breakers-1-circuit-breaker-overview
order: 4
slug: event-integration
title: "Event Integration"
summary: "Circuit Breakers ## Event Integration **Tyk can emit events:** - When the circuit breaker trips. - When it resets. **Use these events for:** - Monitoring & alerting. - Automation o"
standalone_safe: true
reusable: true
requires_context: []
builds_on: []
recommended_next: [architect-circuit-breakers-1-circuit-breaker-overview/005-circuit-breakers-use-cases]
customer_visible: true
notes_visibility: customer-safe
---
---
layout: default
---

# Circuit Breakers

## Event Integration

**Tyk can emit events:**

- When the circuit breaker trips.
- When it resets.

**Use these events for:**

- Monitoring & alerting.
- Automation of recovery workflows.

<!-- Notes: What's more, Tyk can trigger events when the breaker trips and resets. These events can be consumed by your monitoring or alerting systems—or even used to automate recovery processes. This feature strengthens your observability and reinforces the resilience of your API architecture. -->
