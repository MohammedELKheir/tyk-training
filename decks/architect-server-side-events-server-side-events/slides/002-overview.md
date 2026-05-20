---
id: architect-server-side-events-server-side-events/002-overview
deck_id: architect-server-side-events-server-side-events
order: 2
slug: overview
title: "Overview"
summary: "SSE: Server pushes updates to client via HTTP - One-way only (server → client) **Use cases:** - Stock tickers - Notifications - Activity feeds - Simpler alternative to WebSockets w"
standalone_safe: true
reusable: true
requires_context: []
builds_on: []
recommended_next: [architect-server-side-events-server-side-events/003-gateway-configuration-for-sse]
customer_visible: true
notes_visibility: customer-safe
---
---
layout: default
---

# Overview

- SSE: Server pushes updates to client via HTTP
- One-way only (server → client)

**Use cases:**
  - Stock tickers
  - Notifications
  - Activity feeds

- Simpler alternative to WebSockets when no client-to-server messaging is needed

<!-- Notes: "Server-Sent Events are ideal for real-time updates where the client doesn't need to send data back — things like dashboards, notifications, or live data feeds. They work over standard HTTP, so they're firewall-friendly and easy to implement. Tyk Gateway can act as an SSE proxy to relay those server updates to your clients." -->
