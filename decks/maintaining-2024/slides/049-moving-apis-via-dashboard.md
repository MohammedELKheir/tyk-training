---
id: maintaining-2024/049-moving-apis-via-dashboard
deck_id: maintaining-2024
order: 49
slug: moving-apis-via-dashboard
title: "Moving APIs - via Dashboard"
summary: "Use the Export functionality of the Dashboard to download the API definition as JSON and import it into your new installation - In tyk_analytics.conf change enable_duplicate_slugs"
standalone_safe: true
reusable: true
requires_context: []
builds_on: []
recommended_next: [maintaining-2024/050-moving-policies-via-dashboard]
customer_visible: true
notes_visibility: customer-safe
---
---
layout: default
---

# Moving APIs - via Dashboard

- Use the Export functionality of the Dashboard to download the API definition as JSON and import it into your new installation
- In tyk_analytics.conf change enable_duplicate_slugs to true to retain API ID
- From the API Designer, select your API.
- Click EXPORT
- Save and rename the JSON file
- In your new environment, click IMPORT API
- Select the From Tyk Definition tab and paste the contents of the JSON file into the code editor and click GENERATE API
- This will now import the API Definition into your new environment, if you have kept the API ID in the JSON document as is, the ID will remain the same
- Doing a manual migration using the Dashboard is useful for moving individual APIs
- Suitable for developer workflows without a VCS e.g GitHub

<!-- Notes: MongoDB is capable of utilising multiple CPU cores:
This means that the storage engine benefits from having multiple threads available.
It’s recommended that MongoDB has access to at least two single-core CPUs, or one multi-core CPU.

Ideally, MongoDB should have access to a separate thread for every concurrent operation:
So the more Dashboards, Pumps and multi-data centre bridges in the deployment, the more threads should be available for MongoDB. -->
