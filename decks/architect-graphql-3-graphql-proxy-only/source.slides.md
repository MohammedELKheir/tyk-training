---
theme: tyk
aspectRatio: 16/9
canvasWidth: 980
highlighter: shiki
lineNumbers: false
drawings:
  persist: false
transition: slide-left
title: "GraphQL Proxy Only"
---

# GraphQL Proxy Only

**Definition:** GraphQL Proxy Only is a type of GraphQL API in Tyk that:
- Uses a single data source
- Has a read-only schema
- Automatically loads schema from the upstream using introspection queries

**Key Characteristics:**
- Upstream must support introspection
- Useful for exposing existing GraphQL services securely
- Supports all Tyk features like policies and rate limiting
- Minimal configuration — no schema stitching or data merging

<!-- Notes: Let's talk about GraphQL Proxy Only, one of the modes available for managing GraphQL APIs in Tyk. Definition GraphQL Proxy Only is a simplified way of exposing an existing GraphQL service through Tyk. In this mode: Tyk acts as a pass-through — it proxies a single data source. It's read-only from a schema perspective — meaning we don't define or modify the schema in Tyk. Instead, Tyk automatically pulls the schema from the upstream using introspection queries. Key Characteristics Because Tyk -->

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
