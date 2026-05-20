---
id: maintaining-2024/030-mongodb-sizing-ram
deck_id: maintaining-2024
order: 30
slug: mongodb-sizing-ram
title: "MongoDB - Sizing RAM"
summary: "MongoDB RAM is used for storing indexes and commonly accessed data - known as the working set - The working set typically includes: - API Definitions - Policies - Aggregated report"
standalone_safe: true
reusable: true
requires_context: []
builds_on: []
recommended_next: [maintaining-2024/031-mongodb-sizing-ram-2]
customer_visible: true
notes_visibility: customer-safe
---
---
layout: default
---

# MongoDB - Sizing RAM

- MongoDB RAM is used for storing indexes and commonly accessed data - known as the working set
- The working set typically includes:
- API Definitions
- Policies
- Aggregated report data
- Unlikely to require more than 100-200MB

<!-- Notes: For MongoDB RAM sizing, the consideration is for the indexes and any commonly accessed data. MongoDB refers to this as the working set.

What goes into the working set depends on how Tyk is used, but typically it contains API Definitions, Policies and analytics report data.

API Definitions and Policies don’t change regularly, but are accessed regularly, so are good candidates for the working set. The same can be said for aggregated report data, which is used on all Dashboard reports other that the Log Browser report. Based on the figures given in the previous slides, this is unlikely to require more than 100 or 200 megabytes. -->
