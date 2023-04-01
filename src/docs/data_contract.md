# Introduction

In the Filefilego system, the exchange of data between nodes is facilitated through a `Data Download Contract` agreement. This agreement is essentially a message that includes important metadata pertaining to the node hosting the data, as well as the necessary fees to transfer the data to another node, or file hoster. Additionally, the message contains information about the node requesting the data, and the data verifier node responsible for verifying the transaction through PoX consensus.

For data transfer consensus to be reached, all participating nodes are required to sign the Data Download Contract and exchange the message among themselves.

# Structure of Data Download Contract

The following protobuf message defines the structure of a data download contract:

```bash
// DownloadContractProto represents a download contract.
message DownloadContractProto {
    DataQueryResponseProto file_hoster_response = 1;
    bytes file_requester_node_public_key = 2;
    repeated bytes file_hashes_needed = 3;
    // file_hashes_sizes contains the file sizes of each hash in file_hashes.
    repeated uint64 file_hashes_needed_sizes = 4;
    bytes verifier_public_key = 5;
    string verifier_fees = 6;
    bytes contract_hash = 7;
    bytes verifier_signature = 8;
}
```

The `DataQueryResponseProto` message is a key component in the process of obtaining requested files from a file hoster node in the Filefilego network. Once the file requester has received the response, a new data download contract is created that specifies the necessary files and the data verifier responsible for verifying the transfer.

The file requester then contacts a pool of data verifiers and requests that they sign the contract, which is then exchanged between the three nodes involved in the transaction.

Once the contract has been signed, the file requester creates a transaction that includes the required fees and the contract hash in the data payload. This transaction is then broadcasted to the network and, once it is included in a block, the participating nodes initiate the data transfer process.

Overall, this process ensures the secure transfer of requested files within the Filefilego network by involving multiple nodes and utilizing a signed contract to ensure the integrity of the transaction.