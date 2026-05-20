---
id: maintaining-2024/059-upgrading-tyk-linux
deck_id: maintaining-2024
order: 59
slug: upgrading-tyk-linux
title: "Upgrading Tyk - Linux"
summary: "Components installation order in a production environment - In a production environment, where we recommend installing the Dashboard, Gateway and Pump on separate machines, you sho"
standalone_safe: true
reusable: true
requires_context: []
builds_on: []
recommended_next: [maintaining-2024/060-hands-on-workshop-3]
customer_visible: true
notes_visibility: customer-safe
---
---
layout: default
---

# Upgrading Tyk - Linux 

- Components installation order in a production environment
- In a production environment, where we recommend installing the Dashboard, Gateway and Pump on separate machines, you should upgrade components in the following sequence:
- Tyk Dashboard
- Tyk Gateway
- Tyk Pump
- Tyk is compatible with a blue-green or rolling update strategy.
- For a single-machine installation, follow the instructions below for your operating system.
- Ubuntu Upgrade
- Use apt to update and upgrade as you would normally do with other apps.
- RHEL Upgrade
- Example for release v5.0.0
- sudo yum upgrade tyk-dashboard-5.0.0
- Use the exact version to avoid upgrading other unrelated packages. You can find the package you want in the Packagecloud.

<!-- Notes: MongoDB is capable of utilising multiple CPU cores:
This means that the storage engine benefits from having multiple threads available.
It’s recommended that MongoDB has access to at least two single-core CPUs, or one multi-core CPU.

Ideally, MongoDB should have access to a separate thread for every concurrent operation:
So the more Dashboards, Pumps and multi-data centre bridges in the deployment, the more threads should be available for MongoDB. -->
