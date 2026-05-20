---
id: maintaining-2024/058-upgrading-tyk-2
deck_id: maintaining-2024
order: 58
slug: upgrading-tyk-2
title: "Upgrading Tyk"
summary: "Regardless of your deployment choice (Linux, Docker, Kubernetes), we recommend the following upgrade process: - Backup your Tyk deployment - Get/update the latest binary (i.e. upda"
standalone_safe: true
reusable: true
requires_context: []
builds_on: []
recommended_next: [maintaining-2024/059-upgrading-tyk-linux]
customer_visible: true
notes_visibility: customer-safe
---
---
layout: default
---

# Upgrading Tyk

- Regardless of your deployment choice (Linux, Docker, Kubernetes), we recommend the following upgrade process:
- Backup your Tyk deployment
- Get/update the latest binary (i.e. update the docker image name in the command, Kubernetes manifest or values.yaml of Helm chart or get the latest packages with apt get)
- Use individual deployment best practices for a rolling update (in local, non-shared, non-production environments simply restart the gateway)
- Check the log to see that the new version is used and that the gateway is up and running
- Check that the gateway is healthy using the open /hello endpoint of the Gateway API.

<!-- Notes: MongoDB is capable of utilising multiple CPU cores:
This means that the storage engine benefits from having multiple threads available.
It’s recommended that MongoDB has access to at least two single-core CPUs, or one multi-core CPU.

Ideally, MongoDB should have access to a separate thread for every concurrent operation:
So the more Dashboards, Pumps and multi-data centre bridges in the deployment, the more threads should be available for MongoDB. -->
