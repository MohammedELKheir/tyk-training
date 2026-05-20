---
id: foundation-api-security-4-policies-in-tyk/014-example-policy-combination-diagram
deck_id: foundation-api-security-4-policies-in-tyk
order: 14
slug: example-policy-combination-diagram
title: "Example (Policy Combination Diagram)"
summary: "Example"
standalone_safe: true
reusable: true
requires_context: []
builds_on: []
recommended_next: [foundation-api-security-4-policies-in-tyk/015-example-policy-key-session-data]
customer_visible: true
notes_visibility: customer-safe
---
---
layout: default
---

<div style="position:relative; width:100%; height:100%;">
  <div style="position:absolute; left:5.9%; top:4.5%; color:#5900CB; font-size:3.35rem; font-weight:700; line-height:1;">
    Example
  </div>

  <img
    src="./images/icons/slide-014-Google-Shape;176;p27.png"
    style="position:absolute; left:23.5%; top:10%; width:46%; height:72%; object-fit:contain;"
  />
</div>

<!-- Notes: This example illustrates how Policies can be combined and the effect this has on the Key.

On the left side of the diagram are 5 Policies. 4 are partitioned Policies; A, B, C and D. And Policy E is a standard Policy. For the sake of simplicity, only three properties are shown; Access Rights, Quotas and Rate Limit.

On the right side of the diagram are 5 keys. The properties shown in the Keys are colour-code to match the Policies they are inherited from.

Starting at the top;
Key 1 is associated with Policy A. Policy A is a partitioned Policy which only defines Access Rights, so Key 1 inherits only that property, leaving the Key's other properties, Quota and Rate Limit, to be defined directly on the Key itself.
Key 2 is associated with three Policies; A, B and D. Each of these Policies is partitioned, and none of the partitions overlap, so this is ok. This means that each of the Key's properties is defined by a different Policy.
Key 3 is associated with two Policies; A and C. This is much like the last example, but in this case, Policy C defines two properties, but they don't overlap with Policy A, so this is ok.
Key 4 is associated with two Policies D and E. This is a mixture of different types of Policy, Policy D is partitioned and Policy E is normal. This results in Policy D's properties overriding Policy E's properties; so although Policy E defines a Quota, the Key uses the Quota from Policy D, as it is a partitioned Policy.
Key 5 is associated with one Policy, E. Policy E is a standard Policy, so all of its properties are inherited. -->
