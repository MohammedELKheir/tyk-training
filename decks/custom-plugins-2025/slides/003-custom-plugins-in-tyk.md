---
id: custom-plugins-2025/003-custom-plugins-in-tyk
deck_id: custom-plugins-2025
order: 3
slug: custom-plugins-in-tyk
title: "Custom Plugins in Tyk"
summary: "Custom Plugins enable execution of specific custom code for unique tasks, beyond Tyk’s standard middleware. Users can hook plugins into various phases of the API lifecycle. Tyk inc"
standalone_safe: true
reusable: true
requires_context: []
builds_on: []
recommended_next: [custom-plugins-2025/004-custom-middleware]
customer_visible: true
notes_visibility: customer-safe
---
---
layout: default
---

<h1 style="font-size:2rem; font-weight:800; color:#5900CB; margin-bottom:1.4rem;">Custom Plugins in Tyk</h1>

<div style="font-size:1.1rem; color:#03031C; line-height:1.9; padding-right:0.5rem;">
  <ul style="margin:0; padding-left:1.4rem;">
    <li>Custom Plugins enable execution of specific custom code for unique tasks, beyond Tyk’s standard middleware.</li>
    <li>Users can hook plugins into various phases of the API lifecycle.</li>
    <li>Tyk includes 7 hooks for custom plugins across the middleware execution order.</li>
  </ul>
</div>

<!-- Notes: Introduction:
“Custom Plugins in Tyk allow users to extend the Tyk Gateway beyond its built-in middleware.
You can write custom code to solve specific use cases like:
Custom authentication against external services.
Request/response transformations.
Advanced rate-limiting or logging logic.
The key idea is flexibility—Tyk processes the API request, and at certain points in the lifecycle, it can execute your plugin code.
Tyk provides 7 hooks that let you run custom plugins at different middleware stages.
This means you can intercept and modify the request or response as needed.
In summary, Custom Plugins help you extend Tyk’s behavior for use cases that go beyond the standard features, such as custom authentication, custom analytics, or real-time request and response transformation.” -->
