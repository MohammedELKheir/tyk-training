---
id: maintaining-2024/054-tyk-sync
deck_id: maintaining-2024
order: 54
slug: tyk-sync
title: "Tyk Sync"
summary: "Example CI/CD workflow"
standalone_safe: true
reusable: true
requires_context: []
builds_on: []
recommended_next: [maintaining-2024/055-hands-on-workshop-2]
customer_visible: true
notes_visibility: customer-safe
---
---
layout: default
---

<h2 style="color:#5900CB; font-size:1.5rem; font-weight:bold; margin-bottom:0.3rem;">Tyk Sync</h2>
<p style="color:#555; font-size:1rem; margin-top:0;">Example CI/CD workflow</p>

<img src="/icons/slide-054-Google-Shape-534-p69.png" style="max-width:90%; margin-top:0.5rem;" />

<!-- Notes: This sequence diagram shows the CI/CD workflow in more detail. In this scenario, the Developer uses Git and CI/CD to propagate changes from a Development Environment to a Test Environment.

In step 1, the Developer uses their Git Client to pull the latest data from the repository, which is then written to their local disk in step 2.

In step 3, they use Tyk Sync to push these changes into their Development Environment. The “sync” command is used, which will hard-sync the target environment’s API Definitions and Policies to exactly match the source data, adding data which exists in the source but not in the target, modifying data which exists in both the source and target, and deleting data which exists in the target but not in the source. The “-d” argument specifies the URL of development environment Dashboard, the “-s” argument specifies the Dashboard API key that Tyk Sync will use to authenticate with the Dashboard, and the “-p” argument specifies the path of the local data files which will pulled in steps 1 and 2. 

In step 4, Tyk Sync uses the local data files and manifest to modify the target Dashboard.

In step 5, the Developer uses the Development Environment Dashboard to makes changes to API Definitions and Policies.

Then, in step 6, they use Tyk Sync to extract these changes, by using the “dump” command. The same set of arguments are provided, but instead of “-p”, for path, the dump command uses “-t”, for target. The same path is provided, through, as the developer ... -->
