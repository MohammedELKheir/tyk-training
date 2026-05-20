---
id: maintaining-2024/053-moving-policies-via-tyk-sync
deck_id: maintaining-2024
order: 53
slug: moving-policies-via-tyk-sync
title: "Moving Policies - via Tyk Sync"
summary: "Example 1: Transfer from One Tyk Dashboard to Another: - tyk-sync dump: Extracts data from a Tyk Dashboard. - Git commands: Add, commit, and push changes. - tyk-sync sync: Restores"
standalone_safe: true
reusable: true
requires_context: []
builds_on: []
recommended_next: [maintaining-2024/054-tyk-sync]
customer_visible: true
notes_visibility: customer-safe
---
---
layout: default
---

# Moving Policies - via Tyk Sync

- Example 1: Transfer from One Tyk Dashboard to Another:
- tyk-sync dump: Extracts data from a Tyk Dashboard.
- Git commands: Add, commit, and push changes.
- tyk-sync sync: Restores data from GitHub to another Tyk Dashboard.
- Example 2: Dump a Specific API:
- tyk-sync dump: Extracts a specific API from a Tyk Dashboard.
- Example 3: Check Tyk Sync Version:
- tyk-sync version: Displays the current Tyk Sync version.
- Example 4: Import Tyk Example into Dashboard:
- tyk-sync examples: Lists available examples.
- tyk-sync examples show: Displays details of a specific example.
- tyk-sync examples publish: Publishes an example into the Dashboard.
- Tyk Sync streamlines API management, versioning, and synchronization workflows.

<!-- Notes: MongoDB is capable of utilising multiple CPU cores:
This means that the storage engine benefits from having multiple threads available.
It’s recommended that MongoDB has access to at least two single-core CPUs, or one multi-core CPU.

Ideally, MongoDB should have access to a separate thread for every concurrent operation:
So the more Dashboards, Pumps and multi-data centre bridges in the deployment, the more threads should be available for MongoDB. -->
