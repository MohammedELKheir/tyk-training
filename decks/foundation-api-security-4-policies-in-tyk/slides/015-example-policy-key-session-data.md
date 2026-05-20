---
id: foundation-api-security-4-policies-in-tyk/015-example-policy-key-session-data
deck_id: foundation-api-security-4-policies-in-tyk
order: 15
slug: example-policy-key-session-data
title: "Example (Policy + Key Session Data)"
summary: "Example"
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

<div style="position:relative; width:100%; height:100%;">
  <div style="position:absolute; left:5.9%; top:4.5%; color:#5900CB; font-size:3.35rem; font-weight:700; line-height:1;">
    Example
  </div>

  <img
    src="./images/icons/slide-015-Google-Shape;184;p28.png"
    style="position:absolute; left:16.5%; top:1.5%; width:48%; height:79%; object-fit:contain;"
  />
</div>

<!-- Notes: This example shows how Policy data is combined with Key data, resulting in the session data used by the Gateway to process the request.

The left side of the diagram has the Policy objects. The right side of the diagram shows the sequence as the request is processed by the Gateway.

The colour-coding and lines show the relationships between the data.

Starting at the top right with the Request, it provides an Authorization header containing a key.

The Gateway uses that value to retrieve the key data from the database. This is what's shown in the Key box.

The Key defines the Policies it's associated with in the "apply_policies" property. In this case it has 2 Policies, as linked by the teal colour and line.

The Gateway processes these Policies and merges them with the Key to create the session data.

In this case, the Policies are partitioned, with one Policies defining the Rate Limit data, and the other Policy defining the Quota and Access Rights data.

These are merged into the Key data as shown by the Yellow and Pink colours and lines.

This data is then used by the Gateway during the rest of the request lifecycle. -->
