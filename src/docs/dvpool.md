# DVPool

This section covers the DVPool protocol which aims to scale the data verification mechanism by enabling a cluster of machines to run the PoX/PoDP consensus algorithms in parallel. The ultimate goal is to remove the bottlenecks around:
* CPU/Memory
* Bandwidth

## Introduction

Data verifications heavily rely on cryptographic and hash functions that require fast CPU and memory access. This process can be distributed to many other devices so the calculations are performed in parallel which means by adding more machines we achieve horizontal scaling. It is always possible to vertically scale each individual machine by adding more resources but DVPool is specifically designed to horizontally scale the verification capacity.


## How It Works 

Data verifiers are identified in the network by their address and public keys which means a verifier node can act as a coordinator/load balancer to distribute work to a pool of devices. The network doesn't necessarily need to know about this pool devices since they are internal and visible to the verifier node. The following diagram illustrates how this works:

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

With the above architecture we still have the verifier's bandwidth bottleneck since it communicates and pulls data from other nodes in the network.
We can also utilize the bandwidth of each machine within the pool and by using a side protocol that can be used to pull data directly from the network nodes which in turn removes the bottleneck from the public data verifier.


