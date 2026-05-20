---
id: foundation-api-security-5-api-keys/006-key-fields-explained-1-2
deck_id: foundation-api-security-5-api-keys
order: 6
slug: key-fields-explained-1-2
title: "Key Fields Explained (1/2)"
summary: "Field Description rate / per Defines rate limiting window (e.g., 1000 req/sec) quota_max Max requests in a quota period quota_remaining Remaining quota quota_renewal_rate How long"
standalone_safe: true
reusable: true
requires_context: []
builds_on: []
recommended_next: [foundation-api-security-5-api-keys/007-key-fields-explained-2-2]
customer_visible: true
notes_visibility: customer-safe
---
---
layout: default
---

# Key Fields Explained (1/2)

<table style="width:92%; margin:1.25rem auto 0 auto; border-collapse:collapse; font-size:1rem; color:#111827;">
  <thead>
    <tr>
      <th style="border:1px solid #111827; padding:0.7rem 0.85rem; text-align:center; font-weight:700;">Field</th>
      <th style="border:1px solid #111827; padding:0.7rem 0.85rem; text-align:center; font-weight:700;">Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="border:1px solid #111827; padding:0.72rem 0.85rem; font-family:Menlo, Monaco, Consolas, monospace; color:#15803d;">rate / per</td>
      <td style="border:1px solid #111827; padding:0.72rem 0.85rem;">Defines rate limiting window (e.g., 1000 req/sec)</td>
    </tr>
    <tr>
      <td style="border:1px solid #111827; padding:0.72rem 0.85rem; font-family:Menlo, Monaco, Consolas, monospace; color:#15803d;">quota_max</td>
      <td style="border:1px solid #111827; padding:0.72rem 0.85rem;">Max requests in a quota period</td>
    </tr>
    <tr>
      <td style="border:1px solid #111827; padding:0.72rem 0.85rem; font-family:Menlo, Monaco, Consolas, monospace; color:#15803d;">quota_remaining</td>
      <td style="border:1px solid #111827; padding:0.72rem 0.85rem;">Remaining quota</td>
    </tr>
    <tr>
      <td style="border:1px solid #111827; padding:0.72rem 0.85rem; font-family:Menlo, Monaco, Consolas, monospace; color:#15803d;">quota_renewal_rate</td>
      <td style="border:1px solid #111827; padding:0.72rem 0.85rem;">How long the quota lasts (e.g., 3600 = 1h)</td>
    </tr>
    <tr>
      <td style="border:1px solid #111827; padding:0.72rem 0.85rem; font-family:Menlo, Monaco, Consolas, monospace; color:#15803d;">access_rights</td>
      <td style="border:1px solid #111827; padding:0.72rem 0.85rem;">Defines which APIs/versions are accessible</td>
    </tr>
    <tr>
      <td style="border:1px solid #111827; padding:0.72rem 0.85rem; font-family:Menlo, Monaco, Consolas, monospace; color:#15803d;">org_id</td>
      <td style="border:1px solid #111827; padding:0.72rem 0.85rem;">Organization that owns the token</td>
    </tr>
  </tbody>
</table>

<div style="position:absolute; right:1.2rem; bottom:1rem; background:#000; border-radius:18px 0 0 0; padding:0.5rem 0.75rem 0.38rem 0.75rem;">
  <img src="./public/icons/image-c7795b5461f9.png" style="width:4.8rem; display:block;" />
</div>
