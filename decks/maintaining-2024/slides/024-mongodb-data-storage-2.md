---
id: maintaining-2024/024-mongodb-data-storage-2
deck_id: maintaining-2024
order: 24
slug: mongodb-data-storage-2
title: "MongoDB - Data Storage"
summary: "Data stored in different collections within the database: - API Definitions: tyk_apis - Policies: tyk_policies - Organisations: tyk_organisations - Portal pages: portal_pages - Org"
standalone_safe: true
reusable: true
requires_context: []
builds_on: []
recommended_next: [maintaining-2024/025-mongodb-high-availability]
customer_visible: true
notes_visibility: customer-safe
---
---
layout: default
---

# MongoDB - Data Storage

- Data stored in different collections within the database:
- API Definitions: tyk_apis
- Policies: tyk_policies
- Organisations: tyk_organisations
- Portal pages: portal_pages
- Organisation-specific analytics: z_tyk_analyticz_&lt;ORGANISATION_ID&gt;

<!-- Notes: Tyk uses a single MongoDB database which contains many collections. 

The collections are named after the type of data they store, for example:
API Definitions are stored in “tyk_apis”
Policies are stored in “tyk_policies”
Organisations are stored in “tyk_organisations”
Portal pages are stored in “portal_pages”
Analytics data specific to an organisation is stored in “z_tyk_analyticz_” followed by the Id of the Organisation -->
