---
id: maintaining-2024/050-moving-policies-via-dashboard
deck_id: maintaining-2024
order: 50
slug: moving-policies-via-dashboard
title: "Moving Policies - via Dashboard"
summary: "Not as easy as moving API definitions - Requires working with the Dashboard API to first retrieve the policies, and then modifying the document to reinsert them in your new environ"
standalone_safe: true
reusable: true
requires_context: []
builds_on: []
recommended_next: [maintaining-2024/051-moving-apis-via-tyk-sync]
customer_visible: true
notes_visibility: customer-safe
---
---
layout: default
---

# Moving Policies - via Dashboard

- Not as easy as moving API definitions
- Requires working with the Dashboard API to first retrieve the policies, and then modifying the document to reinsert them in your new environment
- Preparation
- tyk.conf
- Edit policies.allow_explicit_policy_id to true
- tyk_analytics.conf
- Edit allow_explicit_policy_id to true
- Set enable_duplicate_slugs to true
- Get your Policy JSON file via Dashboard API
- Edit the file and enter the value of _id to id and save
- POST request to new environment using Dashboard API

<!-- Notes: MongoDB is capable of utilising multiple CPU cores:
This means that the storage engine benefits from having multiple threads available.
It’s recommended that MongoDB has access to at least two single-core CPUs, or one multi-core CPU.

Ideally, MongoDB should have access to a separate thread for every concurrent operation:
So the more Dashboards, Pumps and multi-data centre bridges in the deployment, the more threads should be available for MongoDB. -->
