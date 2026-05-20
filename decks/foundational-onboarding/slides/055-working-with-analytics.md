---
id: foundational-onboarding/055-working-with-analytics
deck_id: foundational-onboarding
order: 55
slug: working-with-analytics
title: "Working with Analytics"
summary: "Analytics data can be filtered by the Pump: - Allows analytics to be sent to different data stores - Filtering based on API Ids, Organisation Ids and HTTP response status codes - F"
standalone_safe: true
reusable: true
requires_context: []
builds_on: []
recommended_next: [foundational-onboarding/056-hands-on-workshop-viewing-aggregated-analytics-and-raw-logs-both-detaile]
customer_visible: true
notes_visibility: customer-safe
---
---
layout: default
---


# Working with Analytics

<div style="font-size:1.1rem; line-height:2; margin-top:1.5rem; max-width:800px;">

- Analytics data can be filtered by the Pump:
  - Allows analytics to be sent to different data stores
  - Filtering based on API Ids, Organisation Ids and HTTP response status codes
  - Filtering operates as either <em>include</em> or <em>exclude</em>, not both
  - The exclude operation takes precedence

- Add Ids to list properties within filters section of pump configuration:
  - Include: `api_ids`, `org_ids`, `response_codes`
  - Exclude: `skip_api_ids`, `skip_org_ids`, `skip_response_codes`
  - Leave empty to operate as normal and process all analytics

</div>
