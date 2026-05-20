---
id: architect-circuit-breakers-1-circuit-breaker-overview/003-circuit-breaker-diagram
deck_id: architect-circuit-breakers-1-circuit-breaker-overview
order: 3
slug: circuit-breaker-diagram
title: "Circuit Breaker Diagram"
summary: "Circuit Breaker Diagram"
standalone_safe: true
reusable: true
requires_context: []
builds_on: []
recommended_next: [architect-circuit-breakers-1-circuit-breaker-overview/004-event-integration]
customer_visible: true
notes_visibility: customer-safe
---
---
layout: default
---

<div style="position: relative; width: 100%; height: 100%; overflow: hidden; background: white;">
  <img
    src="./public/screenshots/circuit-breaker-diagram.png"
    style="position: absolute; left: 1.67%; top: 2.96%; width: 84.67%; height: 94.07%; object-fit: fill;"
  />

  <div
    style="
      position: absolute;
      left: 89.17%;
      top: 86.11%;
      width: 10.83%;
      height: 13.89%;
      background: #08061d;
      border-radius: 1.6rem 1.6rem 0 0;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 1.1rem 0.85rem 0.7rem;
      box-sizing: border-box;
    "
  >
    <img src="./public/icons/tyk-logo.png" style="width: 100%; height: auto;" />
  </div>
</div>

<!-- Notes: GraphQL is a modern way to work with APIs. It lets clients define exactly what data they need, which means we're no longer over-fetching or under-fetching like we often do with REST.
One of the biggest advantages is the ability to make a single request for complex, nested data — instead of stitching together multiple REST calls. This leads to cleaner, more efficient frontends, especially in mobile and data-rich applications.
Flexibility is another win — GraphQL is backend-agnostic, and works across languages and data sources.
Strong typing and introspection allow developers to confidently build and explore APIs. Combined with the ability to evolve schemas without breaking clients, GraphQL is not just powerful — it's sustainable for growing teams and complex systems. -->
