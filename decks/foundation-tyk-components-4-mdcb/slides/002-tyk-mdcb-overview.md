---
id: foundation-tyk-components-4-mdcb/002-tyk-mdcb-overview
deck_id: foundation-tyk-components-4-mdcb
order: 2
slug: tyk-mdcb-overview
title: "Tyk MDCB Overview"
summary: "Centralized control for distributed gateways - Manage geographically separated gateways from one Dashboard - Supports multi-region and hybrid deployments - Ideal for global systems"
standalone_safe: true
reusable: true
requires_context: []
builds_on: []
recommended_next: [foundation-tyk-components-4-mdcb/003-tyk-mdcb-how-does-it-work-control-plane-tyk-central-dashboard-tyk-mdcb-d]
customer_visible: true
notes_visibility: customer-safe
---
---
layout: default
---

# Tyk MDCB Overview

- Centralized control for distributed gateways
  - Manage geographically separated gateways from one Dashboard

- Supports multi-region and hybrid deployments
  - Ideal for global systems or compliance-restricted zones

- Worker Gateways polls MDCB periodically
  - API definitions, policies, certificates and keys are synced across regions

- Pushes analytics to Database (If MDCB is used for analytics)
  - Keeps visibility across the entire system

<div style="position:absolute; right:0; bottom:0; width:92px; height:52px; background:#070707; border-top-left-radius:24px; display:flex; align-items:center; justify-content:center; gap:6px; padding-left:6px;">
  <img :src="'/icons/tyk-logo.png'" style="width:15px; height:15px;" />
  <div style="font-size:1.25rem; font-weight:800; color:white; line-height:1;">Tyk</div>
</div>

<!-- Notes: Tyk’s Multi Data Center Bridge, or MDCB, provides centralized control for managing distributed Tyk Gateways.
It’s designed for scenarios where you have gateways deployed across multiple regions, or in a hybrid setup—for example, some on-premises and some in the cloud.
MDCB enables you to manage all these geographically separated gateways from a single Tyk Dashboard, making operations much simpler at scale.
Each worker gateway polls MDCB periodically to sync critical information—this includes API definitions, access policies, certificates, and keys.
This ensures consistency across regions, without requiring each gateway to connect directly to the central database.
If MDCB is also configured to handle analytics, it can push traffic and usage data back to the central database, so you maintain end-to-end visibility across all regions.
This makes MDCB ideal for global systems or compliance-restricted environments, where direct database access from every region may not be possible or allowed. -->
