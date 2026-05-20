---
id: maintaining-2024/009-redis-messaging
deck_id: maintaining-2024
order: 9
slug: redis-messaging
title: "Redis - Messaging"
summary: "Publisher/subscriber messaging for the Gateway and Dashboard: - Zero configuration - Hot reloads - Distributed rate limiter - Messages can be signed for authenticity using a digita"
standalone_safe: true
reusable: true
requires_context: []
builds_on: []
recommended_next: [maintaining-2024/010-redis-security]
customer_visible: true
notes_visibility: customer-safe
---
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
