---
theme: tyk
aspectRatio: 16/9
canvasWidth: 980
highlighter: shiki
lineNumbers: false
drawings:
  persist: false
transition: slide-left
title: "Tyk Training Slides 2024 - Maintaining"
layout: cover
background: '/icons/slide-001-Google-Shape-67-p16.png'
---

<div style="display:flex; flex-direction:column; justify-content:center; height:100%; color:white;">
  <img src="/icons/slide-001-Google-Shape-69-p16.png" style="width:62px; height:32px; margin-bottom:1rem;" />
  <h1 style="font-size:2.6rem; font-weight:800; color:white; margin:0;">Tyk Onboarding</h1>
  <p style="font-size:1rem; color:white; margin-top:1rem;">Sr. Customer Solutions Architect</p>
</div>

---
layout: default
---

<div style="display:flex; flex-direction:column; height:100%;">
  <h1 style="color:#5900CB; font-size:2.5rem; font-weight:bold; margin-bottom:0.5rem;">Agenda</h1>
  <p style="color:#8438FA; font-size:1.2rem; font-weight:600; margin-bottom:1rem;">Maintenance</p>

  <div style="display:flex; flex-direction:column; gap:1rem;">
    <div style="display:flex; align-items:flex-start; gap:0.8rem;">
      <div style="background:#8438FA; color:white; width:48px; height:48px; border-radius:8px; display:flex; align-items:center; justify-content:center; font-weight:bold; font-size:1.1rem; flex-shrink:0;">01</div>
      <div>
        <p style="font-weight:600; font-size:1.05rem; margin:0; color:#03031C;">Working with data</p>
        <p style="font-size:0.85rem; color:#555; margin:2px 0 0 0;">Understanding Tyk objects<br/>Managing databases</p>
      </div>
    </div>
    <div style="display:flex; align-items:flex-start; gap:0.8rem;">
      <div style="background:#8438FA; color:white; width:48px; height:48px; border-radius:8px; display:flex; align-items:center; justify-content:center; font-weight:bold; font-size:1.1rem; flex-shrink:0;">02</div>
      <div>
        <p style="font-weight:600; font-size:1.05rem; margin:0; color:#03031C;">Migration between environments</p>
        <p style="font-size:0.85rem; color:#555; margin:2px 0 0 0;">Promote APIs from Dev to Prod</p>
      </div>
    </div>
    <div style="display:flex; align-items:flex-start; gap:0.8rem;">
      <div style="background:#8438FA; color:white; width:48px; height:48px; border-radius:8px; display:flex; align-items:center; justify-content:center; font-weight:bold; font-size:1.1rem; flex-shrink:0;">03</div>
      <div>
        <p style="font-weight:600; font-size:1.05rem; margin:0; color:#03031C;">Upgrading Tyk</p>
        <p style="font-size:0.85rem; color:#555; margin:2px 0 0 0;">Understanding upgrade strategies<br/>Steps to deploy and configure Tyk</p>
      </div>
    </div>
    <div style="display:flex; align-items:flex-start; gap:0.8rem;">
      <div style="background:#8438FA; color:white; width:48px; height:48px; border-radius:8px; display:flex; align-items:center; justify-content:center; font-weight:bold; font-size:1.1rem; flex-shrink:0;">04</div>
      <div>
        <p style="font-weight:600; font-size:1.05rem; margin:0; color:#03031C;">Performance Tuning</p>
        <p style="font-size:0.85rem; color:#555; margin:2px 0 0 0;">Performance Tune Tyk</p>
      </div>
    </div>
    <div style="display:flex; align-items:flex-start; gap:0.8rem;">
      <div style="background:#8438FA; color:white; width:48px; height:48px; border-radius:8px; display:flex; align-items:center; justify-content:center; font-weight:bold; font-size:1.1rem; flex-shrink:0;">05</div>
      <div>
        <p style="font-weight:600; font-size:1.05rem; margin:0; color:#03031C;">Monitoring</p>
        <p style="font-size:0.85rem; color:#555; margin:2px 0 0 0;">Using OTel for monitoring</p>
      </div>
    </div>
  </div>
</div>

---
layout: default
background: 'linear-gradient(135deg, #8438FA 0%, #8438FA 35%, #BB11FF 100%)'
---

<div style="display:flex; flex-direction:column; justify-content:center; align-items:center; height:100%; text-align:center; color:white;">
  <p style="color:#21E9BA; font-size:0.85rem; letter-spacing:2px; text-transform:uppercase; margin-bottom:0.3rem;">Module 6</p>
  <h1 style="color:white; font-size:2.5rem; font-weight:bold; margin:0;">Working with Data</h1>
  <p style="color:rgba(255,255,255,0.8); font-size:1.1rem; margin-top:0.8rem;">Understanding data and Tyk objects<br/>Database housekeeping</p>
</div>

---
layout: default
---

# Tyk Database Overview

- Tyk uses two different databases - Redis and MongoDB:
  - Redis stores data necessary for the Gateway
  - MongoDB/PostgreSQL stores data necessary for the Dashboard
  - Deployments without a Dashboard do not require MongoDB/Postgres
  - Databases deployed based on vendor best-practices
  - Compatible SaaS services can be used

<!-- Notes: Tyk stores its data using two different databases: Redis and MongoDB:
Redis stores data necessary to operate the Gateway, and MongoDB stores data necessary to operate the Dashboard.

Since MongoDB is related to the Dashboard, if your Tyk deployment does not include a Dashboard then MongoDB is not required.

The databases can be deployed based on the best practices defined by the vendor. Both Redis and MongoDB have comprehensive documentation covering the architecture, deployment and configuration of their databases. It’s recommended reading for anyone deploying these databases.

Alternatively, many cloud providers offer their own database services which are compatible with Redis and MongoDB. These can be used to remove many of the burdens associated with installing, configuring and maintaining databases. Though bear in mind that some of the SaaS databases may lack some of the features of the product they are replacing, and as such may not be fully compatible with Tyk. Since this situation changes over time, it’s recommended verify compatibility before proceeding.

We’ll now look at both of these databases in more detail. -->

---
layout: default
background: '#8438FA'
---

<div style="display:flex; flex-direction:column; justify-content:center; align-items:center; height:100%; color:white; text-align:center;">
  <img src="/icons/redis-icon.png" style="width:80px; height:80px; margin-bottom:1rem; opacity:0.9;" />
  <h1 style="font-size:2.2rem; font-weight:bold; color:white; margin:0;">Redis</h1>
  <p style="font-size:0.95rem; color:rgba(255,255,255,0.8); max-width:600px; margin-top:1rem;">In-memory data store and caching system, often used as a fast and scalable key-value database</p>
</div>

---
layout: default
---

# Redis - data storage

- Used by the Gateway for storage of:
- API Keys
- Cached responses
- Temporary analytics
- Emergency configuration (for worker Gateways in MDCB deployments)
- Uptime test allocation
- Liveness probe data

<!-- Notes: Redis is necessary for the operation of the Gateway, which uses Redis to store:
API keys.
Cached responses from the upstream API Server.
Temporary analytics data.
Emergency configuration data, which is used by worker Gateways in MDCB deployments if they become disconnected from their control plane.
Allocation of uptime tests, where a specific Gateway is allocated the role of performing uptime tests.
Liveness probe data, which is used by the Gateways to verify Redis connectivity. -->

---
layout: default
---

# Redis - data storage

- Used by the Dashboard for storage of:
- Dashboard user sessions
- Dashboard API keys
- SSO nonces
- Certificates
- Gateway registrations

<!-- Notes: It’s also used by the Dashboard to store:
Session objects for Dashboard users when they log in
Dashboard API keys
Nonces used during single sign-on
Certificates
Gateways which have registered with the Dashboard -->

---
layout: default
---

# Redis - data storage

- Tyk uses prefixes and namespaces in Redis key names:
- Standard API key: apikey-&lt;KEY_HASH&gt;
- OAuth API key: oauth-data.&lt;API_ID&gt;.oauth-clientid.&lt;OAUTH_CLIENT_ID&gt;
- Dashboard API key: tyk-admin-api-&lt;DASHBOARD_API_KEY&gt;
- Dashboard user session: tyk-admin-api-&lt;SESSION_ID&gt;
- Certificate: cert-raw-&lt;CERTIFICATE_ID&gt;

<!-- Notes: When the Tyk components store data in Redis, they uses prefixes and other namespaces in the Redis key names. These are some examples:
Standard API keys start with “apikey-” then the hash of the key.
OAuth API keys start with “oauth-data.” then the id of the API the key is for, followed by “.oauth-clientid.” and the Id of the OAuth Client.
Dashboard API keys start with “tyk-admin-api-” then the Dashboard API Key.
Dashboard user sessions start with the same prefix as the Dashboard API Keys, “tyk-admin-api-”, but what then follows is the session id rather than the Dashboard API Key.
Certificates start with “cert-raw-” then the id of the certificate. -->

---
layout: default
---

# Redis - Messaging

- Publisher/subscriber messaging for the Gateway and Dashboard:
- Zero configuration
- Hot reloads
- Distributed rate limiter
- Messages can be signed for authenticity using a digital signature:
- Gateway configuration: set allow_insecure_configs to false and public_key_path to path of public key
- Dashboard configuration: set private_key_path to path of private key

<!-- Notes: Redis has a messaging system based on the publisher/subscriber pattern. Tyk uses this functionality to send messages within a Gateway Cluster and also between the Gateways and the Dashboard they are registered with. There are several scenarios which use this features:
Zero configuration, where the Dashboard publishes its connection details so that Gateways can automatically configure themselves to connect to it.
Hot reloads, which are triggered when a change occurs to an API Definition or Policy. The Dashboard publishes the hot reload message, causing the Gateways to request the API Definitions and Policies from the Dashboard so they have the latest configuration.
Distributed rate limiter, where Gateways share load information with each other, allowing them to adapt how rate limits are enforced when operating as a cluster.

The messages sent via the publisher/subscriber channels can be cryptographically signed by the Dashboard using a digital signature, enabling the Gateway to authenticate them:
To use this, generate a public and private key pair.
Then, update two settings in the Gateway configuration file. Set “allow_insecure_configs” to “false” and “public_key_path” to the path to the public key.
The Dashboard configuration also needs to be updated, setting “private_key_path” to the path of the private key. -->

---
layout: default
---

# Redis - Security

- From Redis 6, TLS is an optional built-in feature:
- Must be compiled from source to enable TLS
- Use 3rd party applications, such as Spiped
- SaaS offerings provide secure endpoints
- Set redis.use_ssl to true in Gateway configuration
- Set redis_use_ssl to true in Dashboard configuration

<!-- Notes: The standard build of Redis does not support TLS. But there are two options for using TLS. The first is to build the application from source code, passing the argument “BUILD_TLS=true” when running the “make” command. The second approach is to use a third party tool, such as “S-Pipe-D”, which will operate as a secure proxy between the Redis client and server. Alternatively, SaaS platforms which offer Redis-compatible services generally also provide secure endpoints to connect to.

When using TLS with Redis, the Gateway and Dashboard must be configured by setting the Redis “use_ssl” property to “true” in the Gateway and Dashboard configuration files.

This may not be necessary if Tyk and Redis are operating within a private network where Redis is not exposed. -->

---
layout: default
---

# Redis - Persistence

- Redis has two approaches for persistence:
- Redis Database Backup (RDB), is a point-in-time snapshots of the database
- Append Only File (AOF), is a log of all write operations
- Both approaches can be used simultaneously
- RDB is the traditional database backup snapshot:
- Use the SAVE or BGSAVE commands
- Creates file called dump.rdb
- Can be scheduled

<!-- Notes: Redis is an in-memory database, meaning that database operations are conducted in RAM. But data can be persisted to disk using two approaches, known as RDB and AOF.

The Redis Database Backup approach creates point-in-time snapshots of the database, which can be used to restore the database to a previous state. Whereas the Append Only File approach generates a log of all the write operations, which Redis replays when it restarts to rebuild its database.

Both of these approaches can be used at the same time. Though Redis will prevent certain elements of these approaches from activating at the same time to avoid heavy disk usage.

To create a backup using RDB, the Redis CLI “SAVE” and “BGSAVE” commands can be used. This will create a “dump.rdb” file on the local disk. Redis can be configured to perform this command on a regular interval if certain number of changes have occurred. Should something go wrong in between these intervals then whatever data was written since the last update would be lost. It’s recommended to periodically transfer the “dump.rdb” files to external storage. -->

---
layout: default
---

# Redis - Persistence

- AOF allows for instances to automatically re-populate data after restarting:
- Set appendonly to true in the Redis configuration file
- Operations which modify data are written to AOF every second
- AOF is rewritten to optimise the file and reduce size

<!-- Notes: The AOF approach is typically used to repopulate the Redis database in memory after the process restarts. It’s enabled by setting “appendonly” to “true” in the Redis configuration file. 

By default, any operations which cause data to be modified are written to the AOF every second. This is the recommended interval, as it balances durability and performance. But it can be configured to write after every operation (which impacts performance), or it can be left to the operating system kernel to decide, which typically will be every 30 seconds. 

Redis also automatically rewrites the AOF to optimise it and prevent it from getting unnecessarily large. This process generates a new AOF based on the data currently in the database, creating the shortest AOF possible. -->

---
layout: default
---

# Redis - High Availability

- Redis has two approaches for high availability - Sentinel and Cluster:
- Requires a minimum of three separate hosts for high availability
- All Redis instances must be able to communicate with each other
- Data is replicated from a Master instance to one or more Replica instances
- Asynchronous replication with an eventually consistent system
- A majority of Sentinels/Masters is required for failover to occur
- A Replica is promoted to Master during failover
- IP and port remapping can cause issues

<!-- Notes: There are two approaches for running Redis in a highly available manner, they’re called Sentinel and Cluster.

Both of these approaches require the deployment to be spread across a minimum of three independent hosts which are not expected to fail simultaneously.

Each Redis instance must be able to communicate with every other instance, as data needs to be replicated between them. Tyk components must also be able to communicate with every instance.

Data is written to the Master instances, which then replicate the data to one or more Replicas.

Data replication is asynchronous, which means that it is “eventually consistent” - Redis server confirms writes to clients before propagating them to the replicas. This is done for performance reasons, but results in a small chance of losing acknowledged writes. Though this is very unlikely - a Replica would need to be promoted to Master before a propagated write reaches it.

For failover to occur, a majority of Sentinels or Masters (depending on the HA approach taken) are required. So in a deployment with 3 Masters, 2 of them need to be available for a failover to occur, meaning that the deployment cannot handle the simultaneous failure of more than 1 Master. Increasing the size of the cluster can make it more resilient to failure: a deployment with 5 Masters can survive if up to 2 of them fail simultaneously.

Should a Master fail, and a failover is possible, then a Replica is promoted to a Master. -->

---
layout: default
---

# Redis - Sentinel

- Sentinel instances are responsible for discovery, monitoring and failover
- Minimum of three Sentinel instances are required:
- Majority required for failover
- Sentinels can share same host as data bearing instances

<!-- Notes: Redis Sentinel is the standard approach for running Redis in a highly available way.

It uses a special Sentinel instance, which is responsible for handling discovery, monitoring and failover within the deployment.

A minimum of three Sentinel instances are required in a deployment, and they should be deployed across hosts which are not expected to fail simultaneously. A majority of Sentinels is required for a failover to occur - so that would be 2 out of the 3 shown in this diagram.

The diagram shows a basic deployment across 5 hosts. Hosts 1 and 2 are the data bearing instances, containing the Master and Replica. The remaining hosts contain the three Sentinel instances. The red line shows the data replication between the Master and Replica, and the blue line shows the discovery, monitoring and failover between the Sentinels and the Master and Replica.
Additional Replica instances could be added to handle the simultaneous failure of hosts 1 and 2.
Also, it would be possible to reduce the number of hosts, from 5 to 3, by deploying Sentinel nodes on the same hosts as the Master and Replica. So, Sentinel S1 would be deployed onto host 1 with Master M1, and S2 onto host 2 with Replica R1. -->

---
layout: default
---

# Redis - Cluster

- Redis Cluster uses a sharded data set:
- Horizontal scaling option
- Minimum of 3 Master instances required:
- Master majority required for failover
- Cluster message bus used for intra-instance communication
- Replica can share hosts with Master that does not cover same shard

<!-- Notes: One of the major differences between the Sentinel and Cluster approaches is that the data set in Cluster is sharded, which means it is split up into separate chunks and spread across multiple instances. The diagram shows three Master instances; M1, M2 and M3, each contains a different part of the database. It also shows the Replica for each master; R1, R2 and R3.

Splitting the database up in this way presents a good way to scale horizontally. This is an advantage over Sentinel, which can only scale vertically.

Redis Cluster instances are all data bearing, either as a Master or a Replica. There is no Sentinel-type instance here. The Master instances propagate their data to their Replicas, shown on the diagram as the red lines. Additional Replica instances can be added to increase the robustness of the deployment.

A minimum of three Master instances are required in the cluster, and a majority of Master instances are required for a failover to occur. Meaning that a 3 Master deployment, such as the one in the diagram can survive the failure of one Master instance. In Redis cluster, the Master instances play the role of the Sentinel when handling failover.

The instances communicate with each other across the cluster bus, shown on the diagram as the blue lines. This handles such things as failure detection, configuration updates and failover authorisation.

It is possible to reduce the number of hosts needed to deploy a cluster from 6 to 3. This is achieved by deploying multipl... -->

---
layout: default
---

# Redis - Error Handling

- In the event of Redis failure, the Gateway will temporarily disable Redis-based functionality:
- Key lookups - APIs which use authentication based on Redis key lookups will return errors
- Rate limits and Quotas
- Redis Pub/Sub messaging
- Recording analytics data
- Once Redis availability is restored, Gateway functionality will resume
- Gateway will report Redis status as fail via health check endpoint

<!-- Notes: In the event that the Gateway’s connectivity with Redis fails, the Gateway will temporarily disable all Redis-based functionality, including:
Key lookups. APIs which use authentication based on Redis key lookups, such as standard bearer tokens, will return errors. But APIs without authentication, or those which use non-Redis based methods such as JWT, will continue to function.
Rate limiting and Quotas.
Messaging based on Redis Pub/Sub, like hot reloads signals or zero-configuration lookups, will no longer be possible.
Analytics data will not be recorded.

Once Redis availability is restored, all Redis-based functionality is automatically resumed.

While Redis is unavailable to the Gateway, it will report the Redis status as “fail” via the health check endpoint. It will also write an error message in the application log stating “Connection to Redis failed”. -->

---
layout: default
---

# Redis - Sizing disk/RAM

- API Keys:
- Depends on number of Keys stored
- Typical API Key is approximately 1KB
- Example: 1,000 API Keys @ 1KB = 1MB
- Cached responses:
- Depends on number of responses cached per second, average response size and cache lifetime
- Example: 1,000 responses cached per second @ 20KB with 60 seconds lifetime = 1.2GB

<!-- Notes: Now let’s look at how Redis infrastructure is sized.

Redis operates from RAM, and persists to disk. So the Redis sizing for both of these will be approximately the same. The amount of required depends on the extent to which various elements of Tyk are used.

The requirement for API keys depends on the number of keys stored:
A typical API key is approximately 1 kilobyte in size, which means that 1,000 API keys requires 1 megabyte.

The requirement for cached responses depends on the number of responses cached per second, the average response size and the cache lifetime:
For example, if 1,000 responses are cached per second with an average size of 20 kilobytes each and a lifetime of 60 seconds, that would require approximately 1.2 gigabytes. -->

---
layout: default
---

# Redis - Sizing disk/RAM

- Temporary analytics:
- Depends on number of requests per second, pump purge delay and average combined request and response size (if recording detailed analytics)
- Recording detailed analytics can significantly impact storage requirement
- Base analytics record is approximately 1KB
- Example: 1,000 requests per second @ 50KB average combined size plus 1KB base record data, with a pump purge delay of 10 seconds = 510MB

<!-- Notes: The requirement for temporary analytics depends on the number of requests per second the Gateway is processing, the delay between analytics data purge performed by the Pump and, if detailed analytics recording if enabled, the average combined request and response size. 

Choosing to record detailed analytics can significantly increase the storage requirements as it stores the full request and response object.

The base analytics record is approximately 1 kilobyte without the detailed analytics data. This contains the metadata of the request, such as the API requested and the IP address of the client.

The sizing requirement to temporarily store 1,000 requests per second with average combined size of the request and response of 50 kilobytes, plus the 1 kilobyte of analytics metadata and a Pump purge delay of 10 seconds is approximately 510 megabytes. -->

---
layout: default
---

# Redis - Sizing disk/RAM

- Emergency configuration:
- Depends on number and size of API Definitions and Policies
- API Definition ranges from 15KB to more than 100KB
- Policy ranges from 1KB to more than 5KB
- Example: 100 API Definitions @ 50KB and 500 Policies @ 2KB = 6MB
- Dashboard sessions:
- Depends on the number of concurrent Dashboard sessions
- Typical Dashboard user session object is 1KB
- Example: 10 concurrent Dashboard sessions @ 1KB = 10KB

<!-- Notes: The requirement for emergency configuration data depends on the number and size of the API Definitions and Policies:
A typical API Definition can range in size from 15 kilobytes to over 100 kilobytes, depending on the amount of versions and depth of configuration. Adding many Virtual Endpoints, which can be stored in base64 encoded format directly in the API Definition could push the size well beyond 100 kilobytes.
A typical Policy can range in size from 1 kilobytes to more than 5 kilobytes.
For example, to store 100 API Definitions at an average size of 50 kilobytes and 500 Policies at an average for 2 kilobytes requires approximately 6 megabytes.

The requirement for Dashboard sessions depends on the number of concurrent Dashboard sessions:
A typical Dashboard user session objects is approximately 1 kilobyte.
To store 10 concurrent Dashboard sessions requires approximately 10 kilobytes.

The total for these Redis examples comes to less than 2 gigabytes. But these are just examples, provided to explain of how Redis sizing calculations can be made. Each deployment will be different, so should be given careful consideration, with additional capacity provisioned to allow for underestimation, changes in configuration, projected growth, handling of traffic spikes and data backup processes. -->

---
layout: default
---

# Redis - Sizing disk/RAM

- Configure the operating system to allow memory to be overcommitted:
- Forked process needs to duplicate data
- Additional RAM required for BGSAVE backup process
- Set vm.overcommit_memory to 1 in /etc/sysctl.conf to allow Redis process to be forked without requiring double the memory

<!-- Notes: When Redis performs a data backup using the BGSAVE command, it requires additional RAM:
This is because Redis creates a fork to perform the backup process, which causes the operating system to evaluate whether there is enough RAM available to do this.
In a normal situation the operating system checks that there is enough for the entire process to be duplicated, meaning that if Redis is consuming 4 gigabytes of RAM, an additional 4 gigabytes of RAM is required for it to perform a backup. However, in reality, only a small fraction of the RAM is actually needed to perform the fork and backup process.
So, to avoid needing double the memory available to perform a Redis backup, configure the operating system to allow memory to be overcommitted. This is achieved by setting the “vm.overcommit_memory” setting to “1” in the “/etc/sysctl.conf” file. Redis cover this, and other administrative setup tips, in their documentation - it’s recommended to read through it. -->

---
layout: default
---

# Redis - Sizing CPU

- Redis executes commands in a single-threaded manner:
- Multi-core CPUs do not offer much advantage
- Higher API throughput requires higher frequency processor
- Use cluster approach to increase performance
- Redis bottleneck is not normally CPU, usually either memory or network

<!-- Notes: Redis is a single-threaded application:
This means that it doesn’t benefit from multi-core CPUs.
It’s better to have a higher frequency processor with fewer cores than a slower frequency processor with more cores.
If higher performance is needed, then Redis can be deployed as a cluster, allowing it to split processing across multiple nodes.

The CPU is not normally the bottleneck for Redis, it’s usually either memory or network. -->

---
layout: default
background: '#8438FA'
---

<div style="display:flex; flex-direction:column; justify-content:center; align-items:center; height:100%; color:white; text-align:center;">
  <h1 style="font-size:2.2rem; font-weight:bold; color:white; margin:0;">MongoDB</h1>
  <p style="font-size:0.95rem; color:rgba(255,255,255,0.8); max-width:600px; margin-top:1rem;">NoSQL database that uses a document-oriented model, storing data in flexible, JSON-like BSON format, and is designed for scalability and high performance.</p>
</div>

---
layout: default
---

# MongoDB - Data Storage

- Used by the Dashboard for storage of all Dashboard-managed data, with exception of API Keys and Certificates
- Used by the Pump for storage of analytics data

<!-- Notes: The Dashboard uses MongoDB for storage of all Dashboard-managed data, with the exception of API Keys. This includes API Definitions, Policies, Webhooks, Dashboard Users, and Portal data such as Pages, Developers and Key Requests.

The Pump uses MongoDB to store analytics data, which it has extracted from Redis. Typically this will be processed and stored as both aggregated and non-aggregated forms. -->

---
layout: default
---

# MongoDB - Data Storage

- Data stored in different collections within the database:
- API Definitions: tyk_apis
- Policies: tyk_policies
- Organisations: tyk_organisations
- Portal pages: portal_pages
- Organisation-specific analytics: z_tyk_analyticz_&lt;ORGANISATION_ID&gt;

<!-- Notes: Tyk uses a single MongoDB database which contains many collections. 

The collections are named after the type of data they store, for example:
API Definitions are stored in “tyk_apis”
Policies are stored in “tyk_policies”
Organisations are stored in “tyk_organisations”
Portal pages are stored in “portal_pages”
Analytics data specific to an organisation is stored in “z_tyk_analyticz_” followed by the Id of the Organisation -->

---
layout: default
---

# MongoDB - High Availability

- MongoDB uses Replica Sets for high availability:
- Requires a minimum of three separate hosts for high availability
- All members of Replica Set must be able to communicate with each other
- Election occurs if Primary becomes inaccessible
- Members can have different priorities, to determine the new Primary
- A majority of Replica Set members are required for an election
- Non-voting members: cannot vote, but do hold data
- Arbiters: can vote, but do not hold data

<!-- Notes: MongoDB uses what it calls Replica Sets to enable high availability deployments:
These deployments must consist of at least three hosts in order to be highly available. A three member replica set has a fault tolerance of 1 member, whereas a five member replica set has a fault tolerance of 2 members. 
All members of the Replica Set must be able to communicate with each other. The purpose of this is to maintain a heartbeat between members, which provides a means of detecting when a member becomes inaccessible.
If the Primary member becomes inaccessible, then a new primary is elected from the remaining members.
Members can be given a priority, to determine which member is elected the new Primary. This might be useful to keep the Primary in a particular data centre, or on a high performance host.
In order to hold an election, a majority of members are required. This means that in the event of a network partition, the members on the minority side will not hold an election, and if the primary is within the minority group it will automatically step down as primary and become a secondary. This also means that replica sets must consist of an odd number of members, so that in the event of network partitions there will be majority and minority groups.
There are two other types of member beyond the Primary and Secondary members. The first of these is the non-voting member; which cannot vote, but does hold data. Since MongoDB has a maximum number of 7 voting members per Replica Set, the n... -->

---
layout: default
---

# MongoDB - Replica Set

- Data replicated from Primary to one or more Secondary instances
- Heartbeat maintained between all instances

<!-- Notes: This diagram provide a basic illustration of a 3-member Replica Set.

Data is replicated from the primary member to the two Secondary members, as shown by the green line.

The heartbeat is maintained between all three instances, as shown by the blue line. The members ping each other every two seconds and will mark another member as inaccessible if a response is not returned within 10 seconds.

The members are spread across three separate hosts to reduce the risk of more than one member becoming inaccessible simultaneously. -->

---
layout: default
---

# MongoDB - Sizing Disk

- System configuration:
- Depends on the number of API Definitions, Policies etc
- Not likely to be of significant size
- Non-aggregated analytics
- Depends on the number of requests and payload size for detailed recording
- Basic analytics record is less than 2KB
- Detailed recording adds size of request and response payload
- Example: 1m requests @ 2KB without detailed recording = 2GB
- Example: 1m requests @ 2KB with detailed recording @ 50KB = 52GB

<!-- Notes: MongoDB disk space sizing is based on system configuration and analytics data.

System configuration consists of the data for API Definitions, Policies and so on. In general, these are relatively small objects and it’s not likely there there will be large quantities of them. This means that system configuration storage is not a significant aspect when sizing for MongoDB. Just like the Redis example, a typical API Definition is around 50 kilobytes, and a Policy around 2 kilobytes; so a couple of hundred megabytes should be enough to cover this.

The next consideration is analytics data, of which there are two types; aggregated and non-aggregated.

Non-aggregated analytics contain information about every request and response handled by the Gateway. They are used by the Dashboard for the Log Browser report. The high quantity of records is the reason why non-aggregated analytics usually account for the majority of storage in MongoDB:
The most important factors to consider are the number of API requests and, if detailed analytics recording is enabled, the average payload size.
The size of a basic analytics record, without detailed recording, is approximately 2 kilobytes.
But if detailed recording is enabled, then the request and response payloads are stored in the analytics, which can significantly increase the size of each record.
For example, for 1 million requests without detailed recording, only the 2 kilobyte basic record is needed. This requires approximately 2 gigabytes of ... -->

---
layout: default
---

# MongoDB - Sizing Disk

- Aggregated analytics:
- Depends on the number of APIs, API versions, Tags, Keys, OAuth Clients, Endpoints, Geolocations and API Error Codes
- Only active data is recorded
- Does not vary based on API throughput
- Aggregated into hourly chunks
- 1KB per item stored in the aggregated record
- Example: 1000 active API keys + 100 active APIs + 100 versions = 1.2MB per hourly record (29MB per day, or 2.6GB for 90 days)

<!-- Notes: Aggregated analytics don’t require as much data. They are used by the Dashboard to display reports for different types of information; APIs, API versions, Tags, Keys and API error codes:
Each record contains the aggregated data for each of these types of information, which sounds like a lot, but the records only contain “active” data. This means that if an API isn’t accessed during the hour, it will not be included in the aggregated analytic record. 
In addition, because the data is aggregated, the volume of requests makes no difference; an API which receives 10 requests requires the same storage as one which receives 10 million.
The data is aggregated into hourly chunks.
Each of the items represented in the record requires approximately 1 kilobyte of space in the aggregated record, whether it’s an API, Tag or Key.
For example, if there are 1,000 active API keys, 100 active APIs, and 100 active versions. Each of these items takes approximately 1 kilobyte to store in the hourly record, which gives a storage requirement of 1.2 megabytes, which equates to about 29 megabytes per day, or 2.6 gigabytes for 90 days. -->

---
layout: default
---

# MongoDB - Managing Size

- Utilise storage strategies to manage database size:
- Capped collection: limits the size of analytics collections
- Time-to-live index: limits the ages of analytics records
- MongoDB CLI: MongoDB CLI query to remove analytics records

<!-- Notes: There are a few strategies which can be used to mitigate the growth of analytics data.

The first approach is to use a capped collection. This is a MongoDB feature which puts a maximum size on a collection, preventing it from exceeding a pre-defined number of bytes. It works like a circular buffer, if a new record is inserted which causes the limit to be reached, then the oldest record is automatically removed to make room. This is useful for situations where an absolute size limit is needed, but it does not work well for situations where analytics need to be stored for a particular number of days.

The second approach is to use a time-to-live index. This is another MongoDB feature where an indexed date field is used to expire data from a collection. MongoDB will automatically remove data once it reaches a particular age. This is useful for situations where analytics data needs to be stored for a particular number of days, but does not work well for situations where an absolute size limit is needed - the exact opposite to the capped collection approach. Note that the time-to-live and capped collection approaches are not compatible, so cannot be combined.

The third approach is to use the MongoDB CLI. The MongoDB CLI can be used to manipulate documents, including removing them based on a query. This approach gives a lot of flexibility in selecting data for removal, but would likely need to be run on a regular schedule using a cron job or similar. -->

---
layout: default
---

# MongoDB - Sizing RAM

- MongoDB RAM is used for storing indexes and commonly accessed data - known as the working set
- The working set typically includes:
- API Definitions
- Policies
- Aggregated report data
- Unlikely to require more than 100-200MB

<!-- Notes: For MongoDB RAM sizing, the consideration is for the indexes and any commonly accessed data. MongoDB refers to this as the working set.

What goes into the working set depends on how Tyk is used, but typically it contains API Definitions, Policies and analytics report data.

API Definitions and Policies don’t change regularly, but are accessed regularly, so are good candidates for the working set. The same can be said for aggregated report data, which is used on all Dashboard reports other that the Log Browser report. Based on the figures given in the previous slides, this is unlikely to require more than 100 or 200 megabytes. -->

---
layout: default
---

# MongoDB - Sizing RAM

- Non-aggregated analytics data collections can require large indexes:
- Approximately 160MB per 1 million analytics documents
- Aggregated indexes are usually small as there are far fewer documents

<!-- Notes: The element which is likely to require the majority of RAM are the indexes. Most of these will not grow large, because the collections do not hold many documents. The exceptions are the collections which hold the non-aggregated analytics data, as these collections store a document for each request and response pair, so could contain millions of documents, requiring large indexes.

The indexes for non-aggregated analytics collections require about 160 megabytes per 1 million analytics documents.

The indexes for aggregated analytics collections are usually small, as only one record is produced each hour, meaning there are far fewer documents to index. -->

---
layout: default
---

# MongoDB - Sizing CPU

- MongoDB is capable of utilising multiple CPU cores:
- Storage engine benefits from multiple threads
- Recommended for MongoDB to have access to at least two single-core CPUs, or one multi-core CPU
- Ideally one thread available for every concurrent operation:
- More Dashboards, Pumps and MDCBs requires more available threads

<!-- Notes: MongoDB is capable of utilising multiple CPU cores:
This means that the storage engine benefits from having multiple threads available.
It’s recommended that MongoDB has access to at least two single-core CPUs, or one multi-core CPU.

Ideally, MongoDB should have access to a separate thread for every concurrent operation:
So the more Dashboards, Pumps and multi-data centre bridges in the deployment, the more threads should be available for MongoDB. -->

---
layout: default
background: '#8438FA'
---

<div style="display:flex; flex-direction:column; justify-content:center; align-items:center; height:100%; color:white; text-align:center;">
  <h1 style="font-size:2.2rem; font-weight:bold; color:white; margin:0;">PostgreSQL</h1>
  <p style="font-size:0.95rem; color:rgba(255,255,255,0.8); max-width:600px; margin-top:1rem;">Open-source relational database management system (RDBMS) known for its extensibility, compliance with SQL standards, and support for complex queries and transactions.</p>
</div>

---
layout: default
---

# Postgres - Data Storage

- Used by the Dashboard for storage of all Dashboard-managed data, with exception of API Keys and Certificates
- Used by the Pump for storage of analytics data

<!-- Notes: The Dashboard uses Postgres for storage of all Dashboard-managed data, with the exception of API Keys. This includes API Definitions, Policies, Webhooks, Dashboard Users, and Portal data such as Pages, Developers and Key Requests.

The Pump uses Postgres to store analytics data, which it has extracted from Redis. Typically this will be processed and stored as both aggregated and non-aggregated forms. -->

---
layout: default
---

# Postgres - Data Storage

- Data stored in different tables within the database:
- API Definitions: tyk_apis
- Policies: tyk_policies
- Organisations: tyk_organisations
- Portal pages: portal_pages
- Analytics: tyk_analytics

<!-- Notes: Tyk uses a single MongoDB database which contains many collections. 

The collections are named after the type of data they store, for example:
API Definitions are stored in “tyk_apis”
Policies are stored in “tyk_policies”
Organisations are stored in “tyk_organisations”
Portal pages are stored in “portal_pages”
Analytics data specific to an organisation is stored in “z_tyk_analyticz_” followed by the Id of the Organisation -->

---
layout: default
---

# Postgres - High Availability

- Postgres has 2 main ways of replication
- Physical replication
- Logical replication
- Physical replication
- Maintains a full copy of the entire data of a cluster
- Entire set of data on the primary server is copied to the replica which acts as a standby node
- Good for disaster recovery
- Logical replication
- Replicates data objects and their changes based on a unique identifier
- Copies database objects in a row-based model as opposed to physical replication
- Good for clustering due to performance

<!-- Notes: MongoDB uses what it calls Replica Sets to enable high availability deployments:
These deployments must consist of at least three hosts in order to be highly available. A three member replica set has a fault tolerance of 1 member, whereas a five member replica set has a fault tolerance of 2 members. 
All members of the Replica Set must be able to communicate with each other. The purpose of this is to maintain a heartbeat between members, which provides a means of detecting when a member becomes inaccessible.
If the Primary member becomes inaccessible, then a new primary is elected from the remaining members.
Members can be given a priority, to determine which member is elected the new Primary. This might be useful to keep the Primary in a particular data centre, or on a high performance host.
In order to hold an election, a majority of members are required. This means that in the event of a network partition, the members on the minority side will not hold an election, and if the primary is within the minority group it will automatically step down as primary and become a secondary. This also means that replica sets must consist of an odd number of members, so that in the event of network partitions there will be majority and minority groups.
There are two other types of member beyond the Primary and Secondary members. The first of these is the non-voting member; which cannot vote, but does hold data. Since MongoDB has a maximum number of 7 voting members per Replica Set, the n... -->

---
layout: default
---

# PostgreSQL

- Using a combination of streaming replication, Patroni & Etcd for automated failover, and HAProxy for load balancing thus achieving HA:
- Continuous Synchronization by streaming write-ahead logs (WAL) from primary to standby nodes
- HAProxy monitors health of servers (Primary & Standby)
- Distributes incoming database connections
- Etcd acts as a distributed key-value store for configuration management
- Patroni manages failover and PostgreSQL cluster management, monitors health of servers & checking status & connectivity
- Orchestrates standby promotion if there are issues detected on primary server

<img src="/icons/slide-037-Google-Shape-390-p52.png" style="max-width:80%; margin-top:0.5rem;" />


---
layout: default
---

# Postgres - Sizing Disk

- System configuration:
- Depends on the number of API Definitions, Policies etc
- Not likely to be of significant size
- Non-aggregated analytics
- Depends on the number of requests and payload size for detailed recording
- Basic analytics record is less than 2KB
- Detailed recording adds size of request and response payload
- Example: 1m requests @ 2KB without detailed recording = 2GB
- Example: 1m requests @ 2KB with detailed recording @ 50KB = 52GB

<!-- Notes: MongoDB disk space sizing is based on system configuration and analytics data.

System configuration consists of the data for API Definitions, Policies and so on. In general, these are relatively small objects and it’s not likely there there will be large quantities of them. This means that system configuration storage is not a significant aspect when sizing for MongoDB. Just like the Redis example, a typical API Definition is around 50 kilobytes, and a Policy around 2 kilobytes; so a couple of hundred megabytes should be enough to cover this.

The next consideration is analytics data, of which there are two types; aggregated and non-aggregated.

Non-aggregated analytics contain information about every request and response handled by the Gateway. They are used by the Dashboard for the Log Browser report. The high quantity of records is the reason why non-aggregated analytics usually account for the majority of storage in MongoDB:
The most important factors to consider are the number of API requests and, if detailed analytics recording is enabled, the average payload size.
The size of a basic analytics record, without detailed recording, is approximately 2 kilobytes.
But if detailed recording is enabled, then the request and response payloads are stored in the analytics, which can significantly increase the size of each record.
For example, for 1 million requests without detailed recording, only the 2 kilobyte basic record is needed. This requires approximately 2 gigabytes of ... -->

---
layout: default
---

# Postgres - Sizing Disk

- Aggregated analytics:
- Depends on the number of APIs, API versions, Tags, Keys, OAuth Clients, Endpoints, Geolocations and API Error Codes
- Only active data is recorded
- Does not vary based on API throughput
- Aggregated into hourly chunks
- 1KB per item stored in the aggregated record
- Example: 1000 active API keys + 100 active APIs + 100 versions = 1.2MB per hourly record (29MB per day, or 2.6GB for 90 days)

<!-- Notes: Aggregated analytics don’t require as much data. They are used by the Dashboard to display reports for different types of information; APIs, API versions, Tags, Keys and API error codes:
Each record contains the aggregated data for each of these types of information, which sounds like a lot, but the records only contain “active” data. This means that if an API isn’t accessed during the hour, it will not be included in the aggregated analytic record. 
In addition, because the data is aggregated, the volume of requests makes no difference; an API which receives 10 requests requires the same storage as one which receives 10 million.
The data is aggregated into hourly chunks.
Each of the items represented in the record requires approximately 1 kilobyte of space in the aggregated record, whether it’s an API, Tag or Key.
For example, if there are 1,000 active API keys, 100 active APIs, and 100 active versions. Each of these items takes approximately 1 kilobyte to store in the hourly record, which gives a storage requirement of 1.2 megabytes, which equates to about 29 megabytes per day, or 2.6 gigabytes for 90 days. -->

---
layout: default
---

# Postgres - Managing Size

- Postgres does not have in-built functionality to cap collections
- Create a regular table and implementing custom logic to manage the size and rotation of the data
- pgcron
- Time based retention
- Use a regular table and periodically delete older records based on a timestamp column
- Size based retention
- Implement a custom logic to track the size of the table and delete older records when the table reaches a certain size
- Table Sharding
- Tyk splits creates a new table on a per-day basis

<!-- Notes: There are a few strategies which can be used to mitigate the growth of analytics data.

The first approach is to use a capped collection. This is a MongoDB feature which puts a maximum size on a collection, preventing it from exceeding a pre-defined number of bytes. It works like a circular buffer, if a new record is inserted which causes the limit to be reached, then the oldest record is automatically removed to make room. This is useful for situations where an absolute size limit is needed, but it does not work well for situations where analytics need to be stored for a particular number of days.

The second approach is to use a time-to-live index. This is another MongoDB feature where an indexed date field is used to expire data from a collection. MongoDB will automatically remove data once it reaches a particular age. This is useful for situations where analytics data needs to be stored for a particular number of days, but does not work well for situations where an absolute size limit is needed - the exact opposite to the capped collection approach. Note that the time-to-live and capped collection approaches are not compatible, so cannot be combined.

The third approach is to use the MongoDB CLI. The MongoDB CLI can be used to manipulate documents, including removing them based on a query. This approach gives a lot of flexibility in selecting data for removal, but would likely need to be run on a regular schedule using a cron job or similar. -->

---
layout: default
---

# Postgres - Sizing RAM

- Postgres RAM is used for a number of processes
- Shared Buffers
- Maintenance Work Memory
- Sorting and Index Operations
- Connection-related Memory

<!-- Notes: PostgreSQL uses a configuration parameter called shared_buffers to determine the amount of memory allocated for caching data. This is a crucial setting and should be set based on the available RAM on your system. shared_buffers configuration parameter determines the amount of memory that the database server uses for caching data in memory. These buffers serve as a cache for frequently accessed data, allowing the database to retrieve information more quickly without having to read from disk every time a query is executed.

As a rule of thumb, allocating 25-30% of your available RAM to shared_buffers is often recommended. However, the absolute value depends on the overall system requirements and the size of your database.

maintenance operations such as sorting and creating indexes. These maintenance operations are part of the routine tasks that PostgreSQL performs to keep the database organized and optimized

PostgreSQL uses memory for each connection to the database. -->

---
layout: default
---

# Postgres - Sizing CPU

- Postgres is capable of utilising multiple CPU cores:
- Storage engine benefits from multiple threads
- Recommended for Postgres to have access to at least two single-core CPUs, or one multi-core CPU
- Ideally one thread available for every concurrent operation:
- More Dashboards, Pumps and MDCBs requires more available threads

<!-- Notes: MongoDB is capable of utilising multiple CPU cores:
This means that the storage engine benefits from having multiple threads available.
It’s recommended that MongoDB has access to at least two single-core CPUs, or one multi-core CPU.

Ideally, MongoDB should have access to a separate thread for every concurrent operation:
So the more Dashboards, Pumps and multi-data centre bridges in the deployment, the more threads should be available for MongoDB. -->

---
layout: default
background: '#8438FA'
---

<div style="display:flex; flex-direction:column; justify-content:center; align-items:center; height:100%; color:white; text-align:center;">
  <svg width="56" height="42" viewBox="0 0 56 42" fill="none" style="margin-bottom:1.2rem;">
    <rect x="2" y="8" width="32" height="28" rx="8" fill="#21E9BA" opacity="0.6"/>
    <rect x="18" y="2" width="32" height="28" rx="8" fill="#21E9BA" opacity="0.4"/>
  </svg>
  <h1 style="font-size:2.2rem; font-weight:bold; color:white; margin:0;">Backing-up and Restoring</h1>
  <p style="font-size:0.95rem; color:#20EDBA; font-weight:bold; text-align:center; max-width:600px; margin-top:1rem;">Explore methods of backing up and restoring Databases</p>
</div>

---
layout: default
---

# Backup &amp; Restore - Redis

- Backup Process:
- Use SAVE or BGSAVE commands for snapshot backups.
- Syntax: SAVE (synchronous) or BGSAVE (asynchronous).
- Backup Options:
- Snapshot Backup: Entire dataset at a point in time.
- Append-Only File (AOF): Logs changes for point-in-time recovery.
- Scheduled Backups:
- Schedule regular backups using cron jobs or third-party tools.
- Restoration Process:
- Use BGREWRITEAOF for AOF file replay.
- Restart Redis with the snapshot file for snapshot backups.
- Persistence Options:
- Choose between RDB (Snapshot) and AOF (Append-Only File) persistence.
- Configure persistence in the Redis configuration file.

<!-- Notes: MongoDB is capable of utilising multiple CPU cores:
This means that the storage engine benefits from having multiple threads available.
It’s recommended that MongoDB has access to at least two single-core CPUs, or one multi-core CPU.

Ideally, MongoDB should have access to a separate thread for every concurrent operation:
So the more Dashboards, Pumps and multi-data centre bridges in the deployment, the more threads should be available for MongoDB. -->

---
layout: default
---

# Backup &amp; Restore - MongoDB

- Backup Process:
- Utilize mongodump command.
- Syntax: mongodump --host &lt;hostname&gt; --port &lt;port&gt; --out &lt;backup_directory&gt;
- Backup Options:
- Full Backup: Entire database.
- Specific Database: --db &lt;database_name&gt;.
- Collection: --collection &lt;collection_name&gt;.
- Automated Backups:
- Set up periodic backups using tools like MongoDB Atlas or cron jobs.
- Restoration Process:
- Use mongorestore command.
- Syntax: mongorestore --host &lt;hostname&gt; --port &lt;port&gt; --db &lt;database_name&gt; &lt;backup_directory&gt;

<!-- Notes: MongoDB is capable of utilising multiple CPU cores:
This means that the storage engine benefits from having multiple threads available.
It’s recommended that MongoDB has access to at least two single-core CPUs, or one multi-core CPU.

Ideally, MongoDB should have access to a separate thread for every concurrent operation:
So the more Dashboards, Pumps and multi-data centre bridges in the deployment, the more threads should be available for MongoDB. -->

---
layout: default
---

# Backup &amp; Restore - Postgres

- Backup Process:
- Use pg_dump for logical backups.
- Syntax: pg_dump -h &lt;hostname&gt; -p &lt;port&gt; -U &lt;username&gt; -d &lt;database_name&gt; -f &lt;backup_file&gt;
- Backup Options:
- Full Database: --format=custom or --format=directory.
- Specific Table: --table &lt;table_name&gt;.
- Compression: -F c for custom format with compression.
- Point-in-Time Recovery (PITR):
- Archive WAL (Write-Ahead Logging) files for continuous backups.
- Use pg_basebackup or tools like Barman for PITR.
- Automated Backups:
- Implement periodic backups with tools like pg_cron or scheduling in cron jobs.
- Restoration Process:
- Use pg_restore for logical restoration.
- Syntax: pg_restore -h &lt;hostname&gt; -p &lt;port&gt; -U &lt;username&gt; -d &lt;database_name&gt; &lt;backup_file&gt;

<!-- Notes: MongoDB is capable of utilising multiple CPU cores:
This means that the storage engine benefits from having multiple threads available.
It’s recommended that MongoDB has access to at least two single-core CPUs, or one multi-core CPU.

Ideally, MongoDB should have access to a separate thread for every concurrent operation:
So the more Dashboards, Pumps and multi-data centre bridges in the deployment, the more threads should be available for MongoDB. -->

---
layout: default
background: '#8438FA'
---

<div style="display:flex; flex-direction:column; justify-content:center; align-items:center; height:100%; color:white; text-align:center;">
  <svg width="56" height="42" viewBox="0 0 56 42" fill="none" style="margin-bottom:1.2rem;">
    <rect x="2" y="8" width="32" height="28" rx="8" fill="#21E9BA" opacity="0.6"/>
    <rect x="18" y="2" width="32" height="28" rx="8" fill="#21E9BA" opacity="0.4"/>
  </svg>
  <h1 style="font-size:2.2rem; font-weight:bold; color:white; margin:0;">Hands-On Workshop</h1>
  <p style="font-size:0.95rem; color:#20EDBA; font-weight:bold; text-align:center; max-width:600px; margin-top:1rem;">Diving in databases<br/>Backing up and restoring databases</p>
</div>

---
layout: default
background: 'linear-gradient(135deg, #8438FA 0%, #8438FA 35%, #BB11FF 100%)'
---

<div style="display:flex; flex-direction:column; justify-content:center; align-items:center; height:100%; text-align:center; color:white;">
  <p style="color:#21E9BA; font-size:0.85rem; letter-spacing:2px; text-transform:uppercase; margin-bottom:0.3rem;">Module 7</p>
  <h1 style="color:white; font-size:2.5rem; font-weight:bold; margin:0;">Migration between Environments</h1>
  <p style="color:rgba(255,255,255,0.8); font-size:1.1rem; margin-top:0.8rem;">Understanding data and Tyk objects<br/>Database housekeeping</p>
</div>

---
layout: default
---

# Moving APIs - via Dashboard

- Use the Export functionality of the Dashboard to download the API definition as JSON and import it into your new installation
- In tyk_analytics.conf change enable_duplicate_slugs to true to retain API ID
- From the API Designer, select your API.
- Click EXPORT
- Save and rename the JSON file
- In your new environment, click IMPORT API
- Select the From Tyk Definition tab and paste the contents of the JSON file into the code editor and click GENERATE API
- This will now import the API Definition into your new environment, if you have kept the API ID in the JSON document as is, the ID will remain the same
- Doing a manual migration using the Dashboard is useful for moving individual APIs
- Suitable for developer workflows without a VCS e.g GitHub

<!-- Notes: MongoDB is capable of utilising multiple CPU cores:
This means that the storage engine benefits from having multiple threads available.
It’s recommended that MongoDB has access to at least two single-core CPUs, or one multi-core CPU.

Ideally, MongoDB should have access to a separate thread for every concurrent operation:
So the more Dashboards, Pumps and multi-data centre bridges in the deployment, the more threads should be available for MongoDB. -->

---
layout: default
---

# Moving Policies - via Dashboard

- Not as easy as moving API definitions
- Requires working with the Dashboard API to first retrieve the policies, and then modifying the document to reinsert them in your new environment
- Preparation
- tyk.conf
- Edit policies.allow_explicit_policy_id to true
- tyk_analytics.conf
- Edit allow_explicit_policy_id to true
- Set enable_duplicate_slugs to true
- Get your Policy JSON file via Dashboard API
- Edit the file and enter the value of _id to id and save
- POST request to new environment using Dashboard API

<!-- Notes: MongoDB is capable of utilising multiple CPU cores:
This means that the storage engine benefits from having multiple threads available.
It’s recommended that MongoDB has access to at least two single-core CPUs, or one multi-core CPU.

Ideally, MongoDB should have access to a separate thread for every concurrent operation:
So the more Dashboards, Pumps and multi-data centre bridges in the deployment, the more threads should be available for MongoDB. -->

---
layout: default
---

# Moving APIs - via Tyk Sync

- Tyk Sync is a command-line tool and Go library designed for synchronizing API definitions and Security Policies from a Git repository or file system into Tyk.
- Versioning and Sync:
- Enables versioning of Tyk configurations to Git or files.
- Facilitates one-way synchronization from Git or files to Tyk.
- Workflow:
- Developers configure and test APIs locally.
- Utilizes commands like tyk-sync dump to convert APIs to transportable format.
- Follows Git practices, creating Pull Requests for peer review.
- Approved changes trigger deployment pipeline with commands like tyk-sync sync.
- Features:
- Works with Tyk Gateway and Tyk Dashboard installations.
- Supports dump, sync, update, and publish commands.
- Specialized support for Git integration.
- Does not work with Keys, specifically designed for APIs and Policies.

<!-- Notes: MongoDB is capable of utilising multiple CPU cores:
This means that the storage engine benefits from having multiple threads available.
It’s recommended that MongoDB has access to at least two single-core CPUs, or one multi-core CPU.

Ideally, MongoDB should have access to a separate thread for every concurrent operation:
So the more Dashboards, Pumps and multi-data centre bridges in the deployment, the more threads should be available for MongoDB. -->

---
layout: default
---

# Moving APIs - via Tyk Sync

- Command Overview:
- Dump: Extracts APIs and Policies into a directory for backup or transfer.
- Publish: Publishes API definitions from Git to Tyk Gateway or Dashboard.
- Sync: Synchronizes API Gateway with contents of a GitHub repository.
- Update: Updates matching APIs or Policies in the target without creating new ones.
- Command Usage:
- tyk-sync dump: Extracts and creates a spec file for syncing.
- tyk-sync publish: Publishes API definitions from Git to Tyk.
- tyk-sync sync: Synchronizes Tyk Gateway with a GitHub repository.
- tyk-sync update: Updates existing APIs or Policies.
- Prerequisites:
- Dashboard and Gateway configurations must meet specific criteria for ID matching.
- Installation:
- Available via Docker and Packagecloud.
- Docker commands provided for installation and usage.

<!-- Notes: MongoDB is capable of utilising multiple CPU cores:
This means that the storage engine benefits from having multiple threads available.
It’s recommended that MongoDB has access to at least two single-core CPUs, or one multi-core CPU.

Ideally, MongoDB should have access to a separate thread for every concurrent operation:
So the more Dashboards, Pumps and multi-data centre bridges in the deployment, the more threads should be available for MongoDB. -->

---
layout: default
---

# Moving Policies - via Tyk Sync

- Example 1: Transfer from One Tyk Dashboard to Another:
- tyk-sync dump: Extracts data from a Tyk Dashboard.
- Git commands: Add, commit, and push changes.
- tyk-sync sync: Restores data from GitHub to another Tyk Dashboard.
- Example 2: Dump a Specific API:
- tyk-sync dump: Extracts a specific API from a Tyk Dashboard.
- Example 3: Check Tyk Sync Version:
- tyk-sync version: Displays the current Tyk Sync version.
- Example 4: Import Tyk Example into Dashboard:
- tyk-sync examples: Lists available examples.
- tyk-sync examples show: Displays details of a specific example.
- tyk-sync examples publish: Publishes an example into the Dashboard.
- Tyk Sync streamlines API management, versioning, and synchronization workflows.

<!-- Notes: MongoDB is capable of utilising multiple CPU cores:
This means that the storage engine benefits from having multiple threads available.
It’s recommended that MongoDB has access to at least two single-core CPUs, or one multi-core CPU.

Ideally, MongoDB should have access to a separate thread for every concurrent operation:
So the more Dashboards, Pumps and multi-data centre bridges in the deployment, the more threads should be available for MongoDB. -->

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

---
layout: default
background: '#8438FA'
---

<div style="display:flex; flex-direction:column; justify-content:center; align-items:center; height:100%; color:white; text-align:center;">
  <svg width="56" height="42" viewBox="0 0 56 42" fill="none" style="margin-bottom:1.2rem;">
    <rect x="2" y="8" width="32" height="28" rx="8" fill="#21E9BA" opacity="0.6"/>
    <rect x="18" y="2" width="32" height="28" rx="8" fill="#21E9BA" opacity="0.4"/>
  </svg>
  <h1 style="font-size:2.2rem; font-weight:bold; color:white; margin:0;">Hands-On Workshop</h1>
  <p style="font-size:0.95rem; color:#20EDBA; font-weight:bold; text-align:center; max-width:600px; margin-top:1rem;">Exploring Tyk-Sync</p>
</div>

---
layout: default
background: 'linear-gradient(135deg, #8438FA 0%, #8438FA 35%, #BB11FF 100%)'
---

<div style="display:flex; flex-direction:column; justify-content:center; align-items:center; height:100%; text-align:center; color:white;">
  <p style="color:#21E9BA; font-size:0.85rem; letter-spacing:2px; text-transform:uppercase; margin-bottom:0.3rem;">Module 7</p>
  <h1 style="color:white; font-size:2.5rem; font-weight:bold; margin:0;">Upgrading Tyk</h1>
  <p style="color:rgba(255,255,255,0.8); font-size:1.1rem; margin-top:0.8rem;">Understanding data and Tyk objects<br/>Database housekeeping</p>
</div>

---
layout: default
---

# Backing up Tyk

- Essential to have a fresh backup, especially before changes or upgrades.
- Configuration Files Backup:
- Regularly backup config files for all relevant components.
- Use a version control system, such as Git.
- Config Files per Component:
- Tyk Gateway: tyk.conf
- Tyk Pump: pump.conf
- Tyk Dashboard (Self-Managed): tyk_analytics.conf
- MDCB: tyk_sink.conf
- Hybrid Tyk Gateway: tyk.hybrid.conf
- Certificates Directory:
- Backup certificates and keys defined in config files.
- Middleware Directory for Custom Plugins:
- Regularly back up the middleware directory for custom plugins.
- Backup databases
- Use best practice from official documentation

<!-- Notes: MongoDB is capable of utilising multiple CPU cores:
This means that the storage engine benefits from having multiple threads available.
It’s recommended that MongoDB has access to at least two single-core CPUs, or one multi-core CPU.

Ideally, MongoDB should have access to a separate thread for every concurrent operation:
So the more Dashboards, Pumps and multi-data centre bridges in the deployment, the more threads should be available for MongoDB. -->

---
layout: default
---

# Upgrading Tyk

- Regardless of your deployment choice (Linux, Docker, Kubernetes), we recommend the following upgrade process:
- Backup your Tyk deployment
- Get/update the latest binary (i.e. update the docker image name in the command, Kubernetes manifest or values.yaml of Helm chart or get the latest packages with apt get)
- Use individual deployment best practices for a rolling update (in local, non-shared, non-production environments simply restart the gateway)
- Check the log to see that the new version is used and that the gateway is up and running
- Check that the gateway is healthy using the open /hello endpoint of the Gateway API.

<!-- Notes: MongoDB is capable of utilising multiple CPU cores:
This means that the storage engine benefits from having multiple threads available.
It’s recommended that MongoDB has access to at least two single-core CPUs, or one multi-core CPU.

Ideally, MongoDB should have access to a separate thread for every concurrent operation:
So the more Dashboards, Pumps and multi-data centre bridges in the deployment, the more threads should be available for MongoDB. -->

---
layout: default
---

# Upgrading Tyk - Linux 

- Components installation order in a production environment
- In a production environment, where we recommend installing the Dashboard, Gateway and Pump on separate machines, you should upgrade components in the following sequence:
- Tyk Dashboard
- Tyk Gateway
- Tyk Pump
- Tyk is compatible with a blue-green or rolling update strategy.
- For a single-machine installation, follow the instructions below for your operating system.
- Ubuntu Upgrade
- Use apt to update and upgrade as you would normally do with other apps.
- RHEL Upgrade
- Example for release v5.0.0
- sudo yum upgrade tyk-dashboard-5.0.0
- Use the exact version to avoid upgrading other unrelated packages. You can find the package you want in the Packagecloud.

<!-- Notes: MongoDB is capable of utilising multiple CPU cores:
This means that the storage engine benefits from having multiple threads available.
It’s recommended that MongoDB has access to at least two single-core CPUs, or one multi-core CPU.

Ideally, MongoDB should have access to a separate thread for every concurrent operation:
So the more Dashboards, Pumps and multi-data centre bridges in the deployment, the more threads should be available for MongoDB. -->

---
layout: default
background: '#8438FA'
---

<div style="display:flex; flex-direction:column; justify-content:center; align-items:center; height:100%; color:white; text-align:center;">
  <svg width="56" height="42" viewBox="0 0 56 42" fill="none" style="margin-bottom:1.2rem;">
    <rect x="2" y="8" width="32" height="28" rx="8" fill="#21E9BA" opacity="0.6"/>
    <rect x="18" y="2" width="32" height="28" rx="8" fill="#21E9BA" opacity="0.4"/>
  </svg>
  <h1 style="font-size:2.2rem; font-weight:bold; color:white; margin:0;">Hands-On Workshop</h1>
  <p style="font-size:0.95rem; color:#20EDBA; font-weight:bold; text-align:center; max-width:600px; margin-top:1rem;">Upgrading Tyk Deployment</p>
</div>
