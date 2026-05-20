---
id: maintaining-2024/051-moving-apis-via-tyk-sync
deck_id: maintaining-2024
order: 51
slug: moving-apis-via-tyk-sync
title: "Moving APIs - via Tyk Sync"
summary: "Tyk Sync is a command-line tool and Go library designed for synchronizing API definitions and Security Policies from a Git repository or file system into Tyk. - Versioning and Sync"
standalone_safe: true
reusable: true
requires_context: []
builds_on: []
recommended_next: [maintaining-2024/052-moving-apis-via-tyk-sync-2]
customer_visible: true
notes_visibility: customer-safe
---
---
layout: default
---

# Moving APIs - via Tyk Sync

- Tyk Sync is a command-line tool and Go library designed for synchronizing API definitions and Security Policies from a Git repository or file system into Tyk.
- Versioning and Sync:
- Enables versioning of Tyk configurations to Git or files.
- Facilitates one-way synchronization from Git or files to Tyk.
- Workflow:
- Developers configure and test APIs locally.
- Utilizes commands like tyk-sync dump to convert APIs to transportable format.
- Follows Git practices, creating Pull Requests for peer review.
- Approved changes trigger deployment pipeline with commands like tyk-sync sync.
- Features:
- Works with Tyk Gateway and Tyk Dashboard installations.
- Supports dump, sync, update, and publish commands.
- Specialized support for Git integration.
- Does not work with Keys, specifically designed for APIs and Policies.

<!-- Notes: MongoDB is capable of utilising multiple CPU cores:
This means that the storage engine benefits from having multiple threads available.
It’s recommended that MongoDB has access to at least two single-core CPUs, or one multi-core CPU.

Ideally, MongoDB should have access to a separate thread for every concurrent operation:
So the more Dashboards, Pumps and multi-data centre bridges in the deployment, the more threads should be available for MongoDB. -->
