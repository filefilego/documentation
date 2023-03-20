# DVPool

The DVPool protocol is designed to address the challenges associated with scaling the data verification mechanism in a distributed network. It achieves this by enabling a cluster of machines to concurrently run the PoX/PoDP consensus algorithms in parallel. The primary objective is to overcome the performance bottlenecks related to CPU/memory usage and bandwidth limitations.

## Introduction

Data verification heavily relies on cryptographic and hash functions that demand fast CPU and memory access. This process can be efficiently distributed across multiple devices to enable parallel computation, which allows for horizontal scaling by adding more machines. While it is possible to vertically scale each individual machine by adding more resources, DVPool is purposefully designed to facilitate horizontal scaling and expand the verification capacity.

## How It Works 

Data verifiers are identified within the network through their address and public keys, allowing a verifier node to function as a coordinator or load balancer, distributing tasks to a pool of devices. As these devices are internal and only visible to the verifier node, it is not necessary for the network to have knowledge of them. The diagram below provides a visual representation of this process.

```
   PoolX                                                  PoolY
┌────────┐                                             ┌────────┐
│        │                                             │        │
│ ┌────┐ │                                             │ ┌────┐ │
│ │ m1 │ │                                             │ │ m1 │ │
│ └────┘ │                                             │ └────┘ │
│        │                                             │        │
│ ┌────┐ │             ┌────────────────┐              │ ┌────┐ │
│ │ m2 │ │             │Data Verifier 1 ├─────────────►│ │ m2 │ │
│ └────┘ │             └────────────────┘              │ └────┘ │
│        │                    ...                      │        │
│ ┌────┐ │             ┌────────────────┐              │ ┌────┐ │
│ │ mn │ │◄────────────┤Data Verifier X │              │ │ mn │ │
│ └────┘ │             └────────────────┘              │ └────┘ │
│        │                                             │        │
└────────┘                                             └────────┘
```

## Bottleneck & Solution

The aforementioned architecture still faces the issue of the verifier's bandwidth bottleneck, as it relies on communication and data transfer with other nodes in the network. To address this challenge, we can leverage the bandwidth of each machine within the verifier pool by implementing a side protocol that enables direct data retrieval from network nodes. This approach effectively eliminates the bottleneck associated with the public data verifier.


