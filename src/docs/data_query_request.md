# Data Query Request

The Filefilego network comprises nodes that provide storage services to the network. These storage provider nodes host files that can be accessed and downloaded by other nodes within the network.

In order to locate a specific file within the network, a querying node may query the network with the file hash. The network then returns a list of nodes that have the requested file available for download. This process enables efficient and reliable lookup for files within the network.

The `Data Query Protocol` plays a crucial role in Filefilego's file retrieval process. This protocol is responsible for sending file hash queries to the network, and for uniquely identifying a data query request by hashing its request payload. The resulting hash is then used by the `Data Query Response Protocol`, which will be further discussed in the following section.


