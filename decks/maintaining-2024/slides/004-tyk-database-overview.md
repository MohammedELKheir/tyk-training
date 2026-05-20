---
id: maintaining-2024/004-tyk-database-overview
deck_id: maintaining-2024
order: 4
slug: tyk-database-overview
title: "Tyk Database Overview"
summary: "Tyk uses two different databases - Redis and MongoDB: - Redis stores data necessary for the Gateway - MongoDB/PostgreSQL stores data necessary for the Dashboard - Deployments witho"
standalone_safe: true
reusable: true
requires_context: []
builds_on: []
recommended_next: [maintaining-2024/005-redis]
customer_visible: true
notes_visibility: customer-safe
---
---
layout: default
---

# Tyk Database Overview

- Tyk uses two different databases - Redis and MongoDB:
  - Redis stores data necessary for the Gateway
  - MongoDB/PostgreSQL stores data necessary for the Dashboard
  - Deployments without a Dashboard do not require MongoDB/Postgres
  - Databases deployed based on vendor best-practices
  - Compatible SaaS services can be used

<!-- Notes: Tyk stores its data using two different databases: Redis and MongoDB:
Redis stores data necessary to operate the Gateway, and MongoDB stores data necessary to operate the Dashboard.

Since MongoDB is related to the Dashboard, if your Tyk deployment does not include a Dashboard then MongoDB is not required.

The databases can be deployed based on the best practices defined by the vendor. Both Redis and MongoDB have comprehensive documentation covering the architecture, deployment and configuration of their databases. It’s recommended reading for anyone deploying these databases.

Alternatively, many cloud providers offer their own database services which are compatible with Redis and MongoDB. These can be used to remove many of the burdens associated with installing, configuring and maintaining databases. Though bear in mind that some of the SaaS databases may lack some of the features of the product they are replacing, and as such may not be fully compatible with Tyk. Since this situation changes over time, it’s recommended verify compatibility before proceeding.

We’ll now look at both of these databases in more detail. -->
