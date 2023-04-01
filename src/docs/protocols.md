# Introduction

The Filefilego system employs a series of protocol specifications that enable communication and consensus among nodes within the network. These protocols utilize protobuf messages in their wire formats, which are exchanged between nodes.

In Filefilego, there are five distinct protocol categories that have been developed, which include:

1. **Block Downloader Protocol**
2. **Data Query Request Protocol**
3. **Data Query Response Protocol**
4. **Data Verification Protocol**
5. **Super Light Node Protocol**

In addition to the aforementioned protocols, Filefilego has been designed to accommodate a diverse range of node types, each with its own set of specific protocol requirements. A full node, for example, is able to perform all of the functions of the network, and as such, is required to support all of the protocols developed within the system.

On the other hand, a super light node is designed to operate with minimal computational and storage resources, and as such, only requires a subset of the protocols that have been developed. These nodes can leverage the capabilities of another full node, which offers delegated work, to execute tasks that are beyond their individual capacity.

In summary, the Filefilego system has been engineered to offer a high degree of flexibility to accommodate nodes with varying degrees of resources and capabilities. This enables the system to be highly adaptable to diverse use cases and ensures that every node within the network can effectively participate and contribute to the overall functioning of the system.