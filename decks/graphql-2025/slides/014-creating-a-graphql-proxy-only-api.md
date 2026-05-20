---
id: graphql-2025/014-creating-a-graphql-proxy-only-api
deck_id: graphql-2025
order: 14
slug: creating-a-graphql-proxy-only-api
title: "Creating a GraphQL Proxy Only API"
summary: "Steps to Create: Log in to the Tyk Dashboard Go to APIs → Add New API → GraphQL Provide a name and the upstream URL If the upstream is protected: Select Upstream Protected Add Auth"
standalone_safe: true
reusable: true
requires_context: []
builds_on: []
recommended_next: [graphql-2025/015-managing-schema]
customer_visible: true
notes_visibility: customer-safe
---
---
layout: default
---

# Creating a GraphQL Proxy Only API

Steps to Create:
Log in to the Tyk Dashboard
Go to APIs → Add New API → GraphQL
Provide a name and the upstream URL
If the upstream is protected:
Select Upstream Protected
Add Authorization header or Certificate
Optionally tick Persist headers for future use to avoid re-entering them

Final Steps:
Click Configure API
Make any additional configuration changes
Click Save
Your GraphQL Proxy Only API is now set up and ready to use.


<!-- Notes: Now, let’s go through the steps to create a GraphQL Proxy Only API in Tyk. This is a straightforward process using the Tyk Dashboard.
Step-by-Step:
Log in to the Tyk Dashboard
 Start by accessing your Tyk Dashboard.

Navigate to: APIs → Add New API → GraphQL
 You’ll see multiple API types — choose GraphQL.

Provide Basic Info

Enter a name for your API.

Set the upstream URL — this is the URL of your existing GraphQL service.

If the upstream is protected

Tick “Upstream Protected”.

Then either:

Add the Authorization header (e.g., Bearer token), or

Upload a Client Certificate, depending on the upstream’s security method.

Optionally, tick “Persist headers” so you don’t need to re-enter them when updating the schema later.

Final Steps:
Click “Configure API”
 This will validate and load the schema from the upstream using introspection.

Make any additional changes

You can apply rate limiting, set access policies, or configure OpenTelemetry if needed.

Click “Save”

And that’s it! Your GraphQL Proxy Only API is now live and managed by Tyk.

This setup allows you to quickly expose and govern an existing GraphQL service with minimal configuration. -->
