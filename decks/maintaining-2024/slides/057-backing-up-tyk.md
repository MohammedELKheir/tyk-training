---
id: maintaining-2024/057-backing-up-tyk
deck_id: maintaining-2024
order: 57
slug: backing-up-tyk
title: "Backing up Tyk"
summary: "Essential to have a fresh backup, especially before changes or upgrades. - Configuration Files Backup: - Regularly backup config files for all relevant components. - Use a version"
standalone_safe: true
reusable: true
requires_context: []
builds_on: []
recommended_next: [maintaining-2024/058-upgrading-tyk-2]
customer_visible: true
notes_visibility: customer-safe
---
---
layout: default
---

# Backing up Tyk

- Essential to have a fresh backup, especially before changes or upgrades.
- Configuration Files Backup:
- Regularly backup config files for all relevant components.
- Use a version control system, such as Git.
- Config Files per Component:
- Tyk Gateway: tyk.conf
- Tyk Pump: pump.conf
- Tyk Dashboard (Self-Managed): tyk_analytics.conf
- MDCB: tyk_sink.conf
- Hybrid Tyk Gateway: tyk.hybrid.conf
- Certificates Directory:
- Backup certificates and keys defined in config files.
- Middleware Directory for Custom Plugins:
- Regularly back up the middleware directory for custom plugins.
- Backup databases
- Use best practice from official documentation

<!-- Notes: MongoDB is capable of utilising multiple CPU cores:
This means that the storage engine benefits from having multiple threads available.
It’s recommended that MongoDB has access to at least two single-core CPUs, or one multi-core CPU.

Ideally, MongoDB should have access to a separate thread for every concurrent operation:
So the more Dashboards, Pumps and multi-data centre bridges in the deployment, the more threads should be available for MongoDB. -->
