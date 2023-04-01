# Data Query Response

In the previous section, we explored the use of the Data Query Request to search for specific files on the Filefilego network. This section will elaborate on the process by which a storage provider node responds to a data query request using the Data Query Response protocol.

When a data query request is broadcasted across the network, storage provider nodes will search their internal databases to determine if they host the requested files. The node will then construct a Data Query Response and attempt to communicate the results directly back to the requester.

If the querying node is located behind a NAT and is unable to be connected to directly, the data query responses will be broadcasted to the verifiers. The querying node can then retrieve the responses using a side protocol, which is designed specifically to allow super light nodes and any node that is restricted behind a NAT or protected network to effectively obtain their query responses.

Data Query Response defines the following protocol IDs:

```bash
// ProtocolID represents the response protocol version
ProtocolID = "/ffg/dataquery_response/1.0.0"

// DataQueryResponseTransferProtocolID is a protocol to handle sending data query responses to a querying node.
// this protocol will be mostly used by verifiers to act as a proxy so node's which cant be dialed back by the
// file hoster can pull the data query response from the verifiers.
DataQueryResponseTransferProtocolID = "/ffg/dataquery_response_transfer/1.0.0"
```