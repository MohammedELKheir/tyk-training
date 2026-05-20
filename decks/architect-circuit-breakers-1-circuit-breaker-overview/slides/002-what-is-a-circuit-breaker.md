---
id: architect-circuit-breakers-1-circuit-breaker-overview/002-what-is-a-circuit-breaker
deck_id: architect-circuit-breakers-1-circuit-breaker-overview
order: 2
slug: what-is-a-circuit-breaker
title: "What is a Circuit Breaker?"
summary: "Circuit Breakers ## What is a Circuit Breaker? - A protective mechanism that maintains system stability. - Prevents repeated failures and overloading of failing services. - Tempora"
standalone_safe: true
reusable: true
requires_context: []
builds_on: []
recommended_next: [architect-circuit-breakers-1-circuit-breaker-overview/003-circuit-breaker-diagram]
customer_visible: true
notes_visibility: customer-safe
---
---
layout: default
---

# Circuit Breakers

## What is a Circuit Breaker?

- A protective mechanism that maintains system stability.
- Prevents repeated failures and overloading of failing services.
- Temporarily blocks calls to unstable services, allowing them time to recover.
- Ensures overall system continues functioning during partial failures.

## Circuit Breakers in Tyk

- Configurable per endpoint.
- Monitors HTTP 500+ response rates from upstream services.
- If failures exceed a threshold:
  - Circuit breaker trips.
  - Tyk blocks further requests to that endpoint.
  - Returns HTTP 503 to clients.
- After a defined cooldown period, the breaker resets and resumes traffic.

<!-- Notes: In distributed systems, failure is inevitable—but system-wide failure doesn't have to be. This is where circuit breakers come in. They act as a protective mechanism, stopping repeated calls to a service that's already failing. This prevents overload and gives the faulty service time to recover, helping the rest of the system remain operational.
Tyk offers powerful circuit breaker capabilities that can be configured at the endpoint level. It tracks how often upstream services return error responses—specifically those with HTTP status codes of 500 and above. If the failure rate crosses a predefined threshold, the circuit breaker trips. Tyk will then block any more requests to that endpoint, returning a 503 response to clients instead. This block remains in place for a set cooldown period. -->
