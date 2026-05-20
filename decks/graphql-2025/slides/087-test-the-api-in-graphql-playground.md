---
id: graphql-2025/087-test-the-api-in-graphql-playground
deck_id: graphql-2025
order: 87
slug: test-the-api-in-graphql-playground
title: "Test the API in GraphQL Playground"
summary: "Navigate to the Playground tab in Tyk Dashboard and run: query getUser { user(id: \"1\") { username id reviews { text } } } Expected Response: { \"data\": { \"user\": { \"username\": \"John"
standalone_safe: true
reusable: true
requires_context: []
builds_on: []
recommended_next: [graphql-2025/088-challenge]
customer_visible: true
notes_visibility: customer-safe
---
---
layout: default
---

# Test the API in GraphQL Playground

Navigate to the Playground tab in Tyk Dashboard and run:
query getUser {
  user(id: "1") {
    username
    id
    reviews {
      text
    }
  }
}
Expected Response:
{
  "data": {
    "user": {
      "username": "John Doe",
      "id": "1",
      "reviews": null
    }
  }
}
At this point, reviews is null because it's not yet connected. You’ll need to attach another REST data source for the reviews field next.
