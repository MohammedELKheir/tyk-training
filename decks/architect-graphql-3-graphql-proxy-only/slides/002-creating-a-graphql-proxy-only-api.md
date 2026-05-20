---
id: architect-graphql-3-graphql-proxy-only/002-creating-a-graphql-proxy-only-api
deck_id: architect-graphql-3-graphql-proxy-only
order: 2
slug: creating-a-graphql-proxy-only-api
title: "Creating a GraphQL Proxy Only API"
summary: "**Steps to Create:** - Log in to the Tyk Dashboard - Go to APIs → Add New API → GraphQL - Provide a name and the upstream URL - If the upstream is protected: - Select Upstream Prot"
standalone_safe: true
reusable: true
requires_context: []
builds_on: []
recommended_next: []
customer_visible: true
notes_visibility: customer-safe
---
---
layout: default
---

# Creating a GraphQL Proxy Only API

**Steps to Create:**
- Log in to the Tyk Dashboard
- Go to APIs → Add New API → GraphQL
- Provide a name and the upstream URL
- If the upstream is protected:
  - Select Upstream Protected
  - Add Authorization header or Certificate
  - Optionally tick Persist headers for future use to avoid re-entering them

**Final Steps:**
- Click Configure API
- Make any additional configuration changes
- Click Save
- Your GraphQL Proxy Only API is now set up and ready to use

<!-- Notes: Now, let's go through the steps to create a GraphQL Proxy Only API in Tyk. This is a straightforward process using the Tyk Dashboard. Step-by-Step: Log in to the Tyk Dashboard Start by accessing your Tyk Dashboard. Navigate to: APIs → Add New API → GraphQL You'll see multiple API types — choose GraphQL. Provide Basic Info Enter a name for your API. Set the upstream URL — this is the URL of your existing GraphQL service. If the upstream is protected Tick "Upstream Protected". Then either -->
