---
theme: tyk
layout: cover
background: 'linear-gradient(135deg, #8438FA 0%, #8438FA 35%, #BB11FF 100%)'
aspectRatio: 16/9
canvasWidth: 980
highlighter: shiki
lineNumbers: false
drawings:
  persist: false
transition: slide-left
title: "API Security with Tyk: Session Objects"
---

<div style="position:relative; display:flex; flex-direction:column; justify-content:center; align-items:center; height:100%; text-align:center; color:white; padding-top:1.2rem;">
  <h1 style="font-size:3.25rem; font-weight:800; color:white; margin:0; line-height:1.02; border:0;">API Security with Tyk:</h1>
  <h2 style="font-size:2.45rem; font-weight:800; color:white; margin:0.45rem 0 0 0; line-height:1.05; border:0;">Session Objects</h2>
  <p style="opacity:0.88; margin-top:1.35rem; max-width:640px; color:white; font-size:1rem; line-height:1.45;">
    Learn how Tyk handles identity, access, and lifecycle through session objects.
  </p>
  <div style="position:fixed; bottom:0.8rem; right:0.9rem; background:#000; border-radius:22px 0 0 0; padding:0.72rem 0.95rem 0.52rem 0.95rem;">
  <img src="./public/icons/image-c7795b5461f9.png" style="width:5.4rem; display:block;" />
</div>
</div>

---
layout: default
---

# What is a Session Object?

<div style="margin-top:1.1rem; font-size:1.2rem; line-height:1.65; color:#111827;">
  <ul style="padding-left:2rem; margin:0;">
    <li style="margin-bottom:0.8rem;">In Tyk, every identity maps to a Session Object.</li>
    <li style="margin-bottom:0.35rem;">Supported identity types:</li>
  </ul>
  <ul style="padding-left:4rem; margin:0.15rem 0 0 0; list-style-type:circle;">
    <li>Bearer Tokens</li>
    <li>HMAC Keys</li>
    <li>JSON Web Tokens (JWT)</li>
    <li>OpenID Connect (OIDC) identities</li>
    <li>Basic Auth users</li>
  </ul>
  <ul style="padding-left:2rem; margin:0.7rem 0 0 0;">
    <li>Think of it as the user’s metadata — how Tyk knows who is accessing what and how.</li>
  </ul>
</div>

<div style="position:absolute; right:1.2rem; bottom:1rem; background:#000; border-radius:18px 0 0 0; padding:0.5rem 0.75rem 0.38rem 0.75rem;">
  <img src="./public/icons/image-c7795b5461f9.png" style="width:4.8rem; display:block;" />
</div>

---
layout: default
---

# What Does a Session Object Contain?

<div style="margin-top:1.2rem; font-size:1.2rem; line-height:1.75; color:#111827;">
  <p style="margin:0 0 0.55rem 0;">A session object defines:</p>
  <ul style="padding-left:2rem; margin:0;">
    <li>Rate limit rules</li>
    <li>Quota limits</li>
    <li>Access Control List (ACL)</li>
    <li>Policy ID (if used)</li>
    <li>Expiry time of the access</li>
    <li>Optional metadata and alias for identification</li>
  </ul>
</div>

<div style="position:absolute; right:1.2rem; bottom:1rem; background:#000; border-radius:18px 0 0 0; padding:0.5rem 0.75rem 0.38rem 0.75rem;">
  <img src="./public/icons/image-c7795b5461f9.png" style="width:4.8rem; display:block;" />
</div>

---
layout: default
---

# Where are Session Objects Stored?

<div style="margin-top:0.8rem; font-size:1.15rem; line-height:1.65; color:#111827;">
  <ul style="padding-left:2rem; margin:0;">
    <li style="margin-bottom:0.45rem;">Stored in Redis (not MongoDB or Gateway memory).</li>
    <li>Stored as:</li>
  </ul>
  <div style="margin:1.05rem 0 1rem 2.7rem; font-family:Menlo, Monaco, Consolas, monospace; font-size:1.08rem; color:#15803d;">
    &lt;hashed_token_string&gt; : &lt;session_object_JSON&gt;
  </div>
  <ul style="padding-left:2rem; margin:0;">
    <li style="margin-bottom:0.45rem;">Tokens are hashed for security.</li>
    <li>Use Alias to identify sessions in logs and analytics.</li>
  </ul>
</div>

<div style="position:absolute; right:1.2rem; bottom:1rem; background:#000; border-radius:18px 0 0 0; padding:0.5rem 0.75rem 0.38rem 0.75rem;">
  <img src="./public/icons/image-c7795b5461f9.png" style="width:4.8rem; display:block;" />
</div>

---
layout: default
---

# API Keys

<div style="display:flex; gap:1.6rem; align-items:flex-start; margin-top:0.8rem;">
  <div style="flex:1.1; font-size:1.1rem; line-height:1.65; color:#111827;">
    <ul style="padding-left:2rem; margin:0;">
      <li style="margin-bottom:0.8rem;">Underlying data structure for keys stored in Tyk (in Redis)</li>
      <li style="margin-bottom:0.8rem;">Every auth type in the gateway will result in a structure like this existing under the hood.</li>
      <li>Can be hashed with a number of algorithms i.e. murmur 64/128, sha1/256 or not at all.</li>
    </ul>
  </div>
  <div style="flex:0.98; display:flex; justify-content:flex-end;">
    <img src="./public/screenshots/image-6cecfed92e6e.png" style="width:100%; max-width:380px; border-radius:6px; box-shadow:0 8px 24px rgba(0,0,0,0.14);" />
  </div>
</div>

<div style="position:absolute; right:1.2rem; bottom:1rem; background:#000; border-radius:18px 0 0 0; padding:0.5rem 0.75rem 0.38rem 0.75rem;">
  <img src="./public/icons/image-c7795b5461f9.png" style="width:4.8rem; display:block;" />
</div>

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

---
layout: default
---

# Key Fields Explained (2/2)

<table style="width:88%; margin:1.45rem auto 0 auto; border-collapse:collapse; font-size:1rem; color:#111827;">
  <thead>
    <tr>
      <th style="border:1px solid #111827; padding:0.7rem 0.85rem; text-align:center; font-weight:700;">Field</th>
      <th style="border:1px solid #111827; padding:0.7rem 0.85rem; text-align:center; font-weight:700;">Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="border:1px solid #111827; padding:0.72rem 0.85rem; font-family:Menlo, Monaco, Consolas, monospace; color:#15803d;">apply_policies</td>
      <td style="border:1px solid #111827; padding:0.72rem 0.85rem;">List of attached policy IDs</td>
    </tr>
    <tr>
      <td style="border:1px solid #111827; padding:0.72rem 0.85rem; font-family:Menlo, Monaco, Consolas, monospace; color:#15803d;">meta_data</td>
      <td style="border:1px solid #111827; padding:0.72rem 0.85rem;">Custom info for transforms/middleware</td>
    </tr>
    <tr>
      <td style="border:1px solid #111827; padding:0.72rem 0.85rem; font-family:Menlo, Monaco, Consolas, monospace; color:#15803d;">tags</td>
      <td style="border:1px solid #111827; padding:0.72rem 0.85rem;">Tags added to analytics</td>
    </tr>
    <tr>
      <td style="border:1px solid #111827; padding:0.72rem 0.85rem; font-family:Menlo, Monaco, Consolas, monospace; color:#15803d;">alias</td>
      <td style="border:1px solid #111827; padding:0.72rem 0.85rem;">Human-readable identifier</td>
    </tr>
    <tr>
      <td style="border:1px solid #111827; padding:0.72rem 0.85rem; font-family:Menlo, Monaco, Consolas, monospace; color:#15803d;">is_inactive</td>
      <td style="border:1px solid #111827; padding:0.72rem 0.85rem;">If true → denies access</td>
    </tr>
    <tr>
      <td style="border:1px solid #111827; padding:0.72rem 0.85rem; font-family:Menlo, Monaco, Consolas, monospace; color:#15803d;">expires</td>
      <td style="border:1px solid #111827; padding:0.72rem 0.85rem;">UNIX timestamp for key expiry</td>
    </tr>
  </tbody>
</table>

<div style="position:absolute; right:1.2rem; bottom:1rem; background:#000; border-radius:18px 0 0 0; padding:0.5rem 0.75rem 0.38rem 0.75rem;">
  <img src="./public/icons/image-c7795b5461f9.png" style="width:4.8rem; display:block;" />
</div>

---
layout: default
---

# Metadata & Alias

<div style="margin-top:0.65rem; font-size:1.08rem; line-height:1.5; color:#111827;">
  <p style="font-size:1.12rem; margin:0 0 0.55rem 0;">Metadata</p>
  <ul style="padding-left:2rem; margin:0;">
    <li>Key/value pairs for user context (e.g., user_id, email, plan_type)</li>
    <li>Can be injected into:</li>
  </ul>
  <ul style="padding-left:4rem; margin:0.15rem 0 0 0; list-style-type:circle;">
    <li>Headers</li>
    <li>URL rewrites</li>
    <li>Request/Response transforms</li>
    <li>Virtual Endpoints</li>
  </ul>
  <ul style="padding-left:2rem; margin:0.3rem 0 0 0;">
    <li>Used for personalization, validation, or upstream enrichment.</li>
  </ul>

  <p style="font-size:1.12rem; margin:1rem 0 0.55rem 0;">Alias</p>
  <ul style="padding-left:2rem; margin:0;">
    <li>Human-readable identifier for a token</li>
    <li>Appears in logs and analytics (important because tokens are hashed in Redis)</li>
  </ul>
</div>

<div style="position:absolute; right:1.2rem; bottom:1rem; background:#000; border-radius:18px 0 0 0; padding:0.5rem 0.75rem 0.38rem 0.75rem;">
  <img src="./public/icons/image-c7795b5461f9.png" style="width:4.8rem; display:block;" />
</div>

---
layout: default
---

# Session Metadata in Action

<div style="margin-top:0.95rem; font-size:1.18rem; line-height:1.6; color:#111827;">
  <p style="margin:0 0 0.55rem 0;">Metadata can be used by:</p>
  <ul style="padding-left:2rem; margin:0 0 1.1rem 0;">
    <li>URL Rewrite</li>
    <li>Header Transformations</li>
    <li>Body Transformations</li>
    <li>Virtual Endpoints</li>
    <li>Custom Plugins</li>
  </ul>
  <p style="margin:0 0 0.55rem 0;">Example use case:</p>
  <p style="margin:0; font-size:1.15rem;">
    Inject <span style="font-family:Menlo, Monaco, Consolas, monospace; color:#15803d;">meta_data.user_email</span> into a header for upstream logging.
  </p>
</div>

<div style="position:absolute; right:1.2rem; bottom:1rem; background:#000; border-radius:18px 0 0 0; padding:0.5rem 0.75rem 0.38rem 0.75rem;">
  <img src="./public/icons/image-c7795b5461f9.png" style="width:4.8rem; display:block;" />
</div>

---
layout: default
---

# Expiry vs Invalidation

<div style="margin-top:1rem; color:#111827;">
  <div style="display:grid; grid-template-columns: 260px 1fr; row-gap:1.2rem; column-gap:2rem; font-size:1.08rem; line-height:1.45; align-items:start;">
    <div style="font-weight:700; text-align:center;">Term</div>
    <div style="font-weight:700; text-align:center;">Meaning</div>
    <div style="font-weight:700;">Expiry</div>
    <div>Token remains in Redis but is no longer valid — returns <span style="font-family:Menlo, Monaco, Consolas, monospace; color:#15803d;">401 Key has expired.</span></div>
    <div style="font-weight:700;">Invalidation / Deletion</div>
    <div>Token is deleted from Redis — returns <span style="font-family:Menlo, Monaco, Consolas, monospace; color:#15803d;">400 Access disallowed.</span></div>
  </div>

  <div style="margin-top:3rem; margin-left:2rem; max-width:780px;">
    <p style="font-weight:700; margin:0 0 0.55rem 0; font-size:1.05rem;">Important:</p>
    <p style="margin:0; font-size:1.08rem; line-height:1.45;">Developers who hardcode tokens may need expiry to notify renewal instead of full invalidation.</p>
  </div>
</div>

<div style="position:absolute; right:1.2rem; bottom:1rem; background:#000; border-radius:18px 0 0 0; padding:0.5rem 0.75rem 0.38rem 0.75rem;">
  <img src="./public/icons/image-c7795b5461f9.png" style="width:4.8rem; display:block;" />
</div>

---
layout: default
---

# Key Lifetime and Expiry

<div style="margin-top:0.9rem; font-size:1.12rem; line-height:1.55; color:#111827; max-width:860px;">
  <p style="margin:0 0 0.9rem 0;">Tyk distinguishes between:</p>
  <ul style="padding-left:2rem; margin:0 0 1.45rem 0;">
    <li>Expiry: token can’t be used (but still in Redis)</li>
    <li>Lifetime: how long token stays in Redis before deletion</li>
  </ul>

  <p style="margin:0; font-size:1.35rem; font-weight:800;">Controlling Key Lifetime</p>
  <p style="margin:0.15rem 0 0.9rem 0;">You can control key deletion at:</p>
  <ol style="padding-left:2.2rem; margin:0 0 1.2rem 0;">
    <li>API level → <span style="font-family:Menlo, Monaco, Consolas, monospace; color:#15803d;">session_lifetime</span> in API definition</li>
    <li>Gateway level → <span style="font-family:Menlo, Monaco, Consolas, monospace; color:#15803d;">global_session_lifetime</span> in <span style="font-family:Menlo, Monaco, Consolas, monospace; color:#15803d;">tyk.conf</span></li>
  </ol>

  <p style="margin:0; font-size:1.08rem;">Note: a <span style="font-family:Menlo, Monaco, Consolas, monospace; color:#15803d;">0</span> value means infinite lifetime (never deleted).</p>
</div>

<div style="position:absolute; right:1.2rem; bottom:1rem; background:#000; border-radius:18px 0 0 0; padding:0.5rem 0.75rem 0.38rem 0.75rem;">
  <img src="./public/icons/image-c7795b5461f9.png" style="width:4.8rem; display:block;" />
</div>

---
layout: default
---

# Lifetime Example

<div style="margin-top:1.25rem; color:#111827; max-width:860px;">
  <p style="margin:0 0 1.25rem 0; font-size:1.3rem;">Example:</p>
  <p style="margin:0 0 1.4rem 0; font-family:Menlo, Monaco, Consolas, monospace; color:#15803d; font-size:1.38rem;">"session_lifetime": 86400</p>
  <p style="margin:0 0 1.6rem 0; font-size:1.18rem;">→ Token deleted from Redis after 24 hours of creation.</p>
  <p style="margin:0; font-size:1.18rem; line-height:1.45;">
    ⚠️ Use <span style="font-family:Menlo, Monaco, Consolas, monospace; color:#15803d;">session_lifetime_respects_key_expiration: true</span> to prevent early deletion.
  </p>
</div>

<div style="position:absolute; right:1.2rem; bottom:1rem; background:#000; border-radius:18px 0 0 0; padding:0.5rem 0.75rem 0.38rem 0.75rem;">
  <img src="./public/icons/image-c7795b5461f9.png" style="width:4.8rem; display:block;" />
</div>

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

---
layout: default
---

# Recap

<div style="margin-top:1.2rem; font-size:1.18rem; line-height:1.7; color:#111827; max-width:860px;">
  <ul style="padding-left:2rem; margin:0;">
    <li>Session Object = Identity + Access Metadata</li>
    <li>Stored in Redis (hashed key → JSON object)</li>
    <li>Controls rate limit, quota, ACL, expiry, and policy</li>
    <li>Metadata enhances flexibility and customization</li>
    <li>Separate expiry and deletion behavior</li>
    <li>Key lifetime configurable at API or Gateway level</li>
  </ul>
</div>

<div style="position:absolute; right:1.2rem; bottom:1rem; background:#000; border-radius:18px 0 0 0; padding:0.5rem 0.75rem 0.38rem 0.75rem;">
  <img src="./public/icons/image-c7795b5461f9.png" style="width:4.8rem; display:block;" />
</div>
