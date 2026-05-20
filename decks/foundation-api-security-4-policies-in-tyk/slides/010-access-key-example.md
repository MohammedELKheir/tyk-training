---
id: foundation-api-security-4-policies-in-tyk/010-access-key-example
deck_id: foundation-api-security-4-policies-in-tyk
order: 10
slug: access-key-example
title: "Access Key Example"
summary: "{ \"org_id\" : \"53ac07777cbb8c2d53000002\" , \"apply_policies\" : [ \"59672779fa4387000129507d\" , \"53222349fa4387004324324e\" ], \"quota_max\" : 1000 , \"rate\" : 3 , \"per\" : 1 } The key inhe"
standalone_safe: true
reusable: true
requires_context: []
builds_on: []
recommended_next: [foundation-api-security-4-policies-in-tyk/011-policies-general-vs-per-api-rules]
customer_visible: true
notes_visibility: customer-safe
---
---
layout: default
---

# Access Key Example

<div style="display:flex; gap:1.5rem; margin-top:0.5rem;">
  <div style="flex:1;">
    <div style="background:#1a1a2e; border-radius:8px; padding:14px 18px;">
      <pre style="color:#e0e0e0; font-size:0.65rem; margin:0; font-family:monospace; line-height:1.5; white-space:pre; overflow:hidden;">{
  <span style="color:#FFC107;">"org_id"</span>: <span style="color:#4CAF50;">"53ac07777cbb8c2d53000002"</span>,
  <span style="color:#FFC107;">"apply_policies"</span>: [
    <span style="color:#4CAF50;">"59672779fa4387000129507d"</span>,
    <span style="color:#4CAF50;">"53222349fa4387004324324e"</span>
  ],
  <span style="color:#FFC107;">"quota_max"</span>: <span style="color:#21E9BA;">1000</span>,
  <span style="color:#FFC107;">"rate"</span>: <span style="color:#21E9BA;">3</span>,
  <span style="color:#FFC107;">"per"</span>: <span style="color:#21E9BA;">1</span>
}</pre>
    </div>
  </div>
  <div style="flex:1; display:flex; flex-direction:column; justify-content:center; font-size:0.95rem; line-height:1.7; color:#03031C;">
    <p style="margin:0 0 0.8rem 0;">The key inherits all limits, ACLs, and quotas from the applied policies.</p>
    <p style="margin:0;">Any changes to the policy → immediately reflected for this key.</p>
  </div>
</div>

<!-- Notes: Encapsulation of rules
Policies give you a way to encapsulate security and other access settings into a pre-defined entity.
Purpose is to make your life easier when managing lots of tokens.
The important thing to understand about policies is that a single policy can apply to many tokens, so having a few policies can let you manage very large numbers of tokens easily.

They allow you to define:
An access control list, which sets which APIs, versions, endpoints and methods the policy can access.
Rate limit
Quota

Dynamically attached
When a policy is saved on the Dashboard, it only takes around 10 seconds for it to take effect on the server.
Policies are attached to request sessions at the start of the Tyk processing pipeline, so updates are take effect immediately.

Partitioning
Once a policy is assigned to a token it will override the settings of that token.
However, with policy partitioning it is possible to override only a particular part of the token – the ACL, rate limit, or quota (or any combination of the three).

No effect on open APIs
Policies have no effect one APIs which have been configured to be open.
This is because the Tyk pipeline skips all authentication so does not process any tokens provided. -->
