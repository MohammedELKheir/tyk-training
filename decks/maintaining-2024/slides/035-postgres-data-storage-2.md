---
id: maintaining-2024/035-postgres-data-storage-2
deck_id: maintaining-2024
order: 35
slug: postgres-data-storage-2
title: "Postgres - Data Storage"
summary: "Data stored in different tables within the database: - API Definitions: tyk_apis - Policies: tyk_policies - Organisations: tyk_organisations - Portal pages: portal_pages - Analytic"
standalone_safe: true
reusable: true
requires_context: []
builds_on: []
recommended_next: [maintaining-2024/036-postgres-high-availability]
customer_visible: true
notes_visibility: customer-safe
---
---
layout: default
---

# Postgres - Data Storage

- Data stored in different tables within the database:
- API Definitions: tyk_apis
- Policies: tyk_policies
- Organisations: tyk_organisations
- Portal pages: portal_pages
- Analytics: tyk_analytics

<!-- Notes: Tyk uses a single MongoDB database which contains many collections. 

The collections are named after the type of data they store, for example:
API Definitions are stored in “tyk_apis”
Policies are stored in “tyk_policies”
Organisations are stored in “tyk_organisations”
Portal pages are stored in “portal_pages”
Analytics data specific to an organisation is stored in “z_tyk_analyticz_” followed by the Id of the Organisation -->
