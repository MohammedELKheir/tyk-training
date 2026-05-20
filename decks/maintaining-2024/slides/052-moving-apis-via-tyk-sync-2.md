---
id: maintaining-2024/052-moving-apis-via-tyk-sync-2
deck_id: maintaining-2024
order: 52
slug: moving-apis-via-tyk-sync-2
title: "Moving APIs - via Tyk Sync"
summary: "Command Overview: - Dump: Extracts APIs and Policies into a directory for backup or transfer. - Publish: Publishes API definitions from Git to Tyk Gateway or Dashboard. - Sync: Syn"
standalone_safe: true
reusable: true
requires_context: []
builds_on: []
recommended_next: [maintaining-2024/053-moving-policies-via-tyk-sync]
customer_visible: true
notes_visibility: customer-safe
---
---
layout: default
---

# Moving APIs - via Tyk Sync

- Command Overview:
- Dump: Extracts APIs and Policies into a directory for backup or transfer.
- Publish: Publishes API definitions from Git to Tyk Gateway or Dashboard.
- Sync: Synchronizes API Gateway with contents of a GitHub repository.
- Update: Updates matching APIs or Policies in the target without creating new ones.
- Command Usage:
- tyk-sync dump: Extracts and creates a spec file for syncing.
- tyk-sync publish: Publishes API definitions from Git to Tyk.
- tyk-sync sync: Synchronizes Tyk Gateway with a GitHub repository.
- tyk-sync update: Updates existing APIs or Policies.
- Prerequisites:
- Dashboard and Gateway configurations must meet specific criteria for ID matching.
- Installation:
- Available via Docker and Packagecloud.
- Docker commands provided for installation and usage.

<!-- Notes: MongoDB is capable of utilising multiple CPU cores:
This means that the storage engine benefits from having multiple threads available.
It’s recommended that MongoDB has access to at least two single-core CPUs, or one multi-core CPU.

Ideally, MongoDB should have access to a separate thread for every concurrent operation:
So the more Dashboards, Pumps and multi-data centre bridges in the deployment, the more threads should be available for MongoDB. -->
