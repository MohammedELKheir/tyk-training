---
id: architect-universal-data-graph-1-udg-overview/016-udg-header-management-header-precedence-rules-when-header-keys-overlap-t
deck_id: architect-universal-data-graph-1-udg-overview
order: 16
slug: udg-header-management-header-precedence-rules-when-header-keys-overlap-t
title: "UDG Header Management Header Precedence Rules When header keys overlap, Tyk appl"
summary: "ies priority: Header name Header value Defined on level example-header data-source-value data source datasource1 $tyk_context.jwt_claims_datasource1 data source request-id $tyk_con"
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

<div style="position:relative; width:100%; min-height:520px; padding-right:7.6rem; color:#10122c;">
  <h1 style="margin:0 0 0.65rem 0; color:#5B11D9; font-size:3.1rem; line-height:1.02; font-weight:900;">UDG Header Management</h1>
  <p style="margin:0 0 0.16rem 0; font-size:0.95rem; font-weight:800;">Header Precedence Rules</p>
  <p style="margin:0 0 0.55rem 0; font-size:0.78rem;">When header keys overlap, Tyk applies priority:</p>
  <div style="margin-left:1.1rem; width:700px; border:3px solid #11142d; border-radius:2rem; overflow:hidden;">
    <table style="width:100%; border-collapse:collapse; font-size:0.78rem; color:#11142d;">
      <thead>
        <tr>
          <th style="padding:0.85rem 1rem; text-align:left; font-weight:900; border-right:2px solid #7B2FF2; border-bottom:2px solid #11142d; width:34%;">Header name</th>
          <th style="padding:0.85rem 1rem; text-align:left; font-weight:900; border-right:2px solid #7B2FF2; border-bottom:2px solid #11142d; width:40%;">Header value</th>
          <th style="padding:0.85rem 1rem; text-align:left; font-weight:900; border-bottom:2px solid #11142d; width:26%;">Defined on level</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style="padding:0.95rem 1rem; border-right:2px solid #7B2FF2; border-bottom:2px solid #7B2FF2;">example-header</td>
          <td style="padding:0.95rem 1rem; border-right:2px solid #7B2FF2; border-bottom:2px solid #7B2FF2;">data-source-value</td>
          <td style="padding:0.95rem 1rem; border-bottom:2px solid #7B2FF2;">data source</td>
        </tr>
        <tr>
          <td style="padding:0.95rem 1rem; border-right:2px solid #7B2FF2; border-bottom:2px solid #7B2FF2;">datasource1</td>
          <td style="padding:0.95rem 1rem; border-right:2px solid #7B2FF2; border-bottom:2px solid #7B2FF2;">$tyk_context.jwt_claims_datasource1</td>
          <td style="padding:0.95rem 1rem; border-bottom:2px solid #7B2FF2;">data source</td>
        </tr>
        <tr>
          <td style="padding:0.95rem 1rem; border-right:2px solid #7B2FF2;">request-id</td>
          <td style="padding:0.95rem 1rem; border-right:2px solid #7B2FF2;">$tyk_context.request_id</td>
          <td style="padding:0.95rem 1rem;">global</td>
        </tr>
      </tbody>
    </table>
  </div>
  <p style="margin:0.92rem 0 0 0; font-size:0.76rem;">Data Source header overrides Global header if both define the same key.</p>
  <div style="position:absolute; right:-1.1rem; bottom:-0.55rem; width:8.4rem; height:5rem; background:#03030d; border-top-left-radius:2rem; display:flex; align-items:center; justify-content:center;">
    <img src="./public/icons/tyk-logo.png" style="width:4.2rem;" />
  </div>
</div>

<!-- Notes: Now, if you define the same header at both the global and data source levels, the data source version takes precedence.
This gives you flexibility — you can set broad headers by default, but override them where needed for specific upstream APIs.
In this example, example-header is defined at both levels, but the data source’s value wins.
This rule helps prevent conflicts and gives you precise control over how each API call is formed. -->
