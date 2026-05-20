---
id: foundation-api-security-5-api-keys/013-key-lifetime-precedence-summary
deck_id: foundation-api-security-5-api-keys
order: 13
slug: key-lifetime-precedence-summary
title: "Key Lifetime Precedence Summary"
summary: "force_global_session_lifetime session_lifetime_respects_key_expiration Effective Lifetime true true global_session_lifetime true false global_session_lifetime false true larger of"
standalone_safe: true
reusable: true
requires_context: []
builds_on: []
recommended_next: [foundation-api-security-5-api-keys/014-recap]
customer_visible: true
notes_visibility: customer-safe
---
---
layout: default
---

# Key Lifetime Precedence Summary

<table style="width:98%; margin:1.1rem auto 0 auto; border-collapse:collapse; font-size:0.9rem; color:#111827;">
  <thead>
    <tr>
      <th style="border:1px solid #111827; padding:0.75rem 0.55rem; text-align:center; font-family:Menlo, Monaco, Consolas, monospace; color:#15803d; font-weight:500;">force_global_session_lifetime</th>
      <th style="border:1px solid #111827; padding:0.75rem 0.55rem; text-align:center; font-family:Menlo, Monaco, Consolas, monospace; color:#15803d; font-weight:500;">session_lifetime_respects_key_expiration</th>
      <th style="border:1px solid #111827; padding:0.75rem 0.55rem; text-align:center; font-family:Menlo, Monaco, Consolas, monospace; color:#15803d; font-weight:500;">Effective Lifetime</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="border:1px solid #111827; padding:0.85rem 0.6rem;">true</td>
      <td style="border:1px solid #111827; padding:0.85rem 0.6rem;">true</td>
      <td style="border:1px solid #111827; padding:0.85rem 0.6rem; font-family:Menlo, Monaco, Consolas, monospace; color:#15803d;">global_session_lifetime</td>
    </tr>
    <tr>
      <td style="border:1px solid #111827; padding:0.85rem 0.6rem;">true</td>
      <td style="border:1px solid #111827; padding:0.85rem 0.6rem;">false</td>
      <td style="border:1px solid #111827; padding:0.85rem 0.6rem; font-family:Menlo, Monaco, Consolas, monospace; color:#15803d;">global_session_lifetime</td>
    </tr>
    <tr>
      <td style="border:1px solid #111827; padding:0.85rem 0.6rem;">false</td>
      <td style="border:1px solid #111827; padding:0.85rem 0.6rem;">true</td>
      <td style="border:1px solid #111827; padding:0.85rem 0.6rem;">larger of <span style="font-family:Menlo, Monaco, Consolas, monospace; color:#15803d;">session_lifetime</span><br>or <span style="font-family:Menlo, Monaco, Consolas, monospace; color:#15803d;">expires</span></td>
    </tr>
    <tr>
      <td style="border:1px solid #111827; padding:0.85rem 0.6rem;">false</td>
      <td style="border:1px solid #111827; padding:0.85rem 0.6rem;">false</td>
      <td style="border:1px solid #111827; padding:0.85rem 0.6rem; font-family:Menlo, Monaco, Consolas, monospace; color:#15803d;">session_lifetime</td>
    </tr>
  </tbody>
</table>

<div style="position:absolute; right:1.2rem; bottom:1rem; background:#000; border-radius:18px 0 0 0; padding:0.5rem 0.75rem 0.38rem 0.75rem;">
  <img src="./public/icons/image-c7795b5461f9.png" style="width:4.8rem; display:block;" />
</div>
