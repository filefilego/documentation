# Data Verification

The `Data Verification Protocol` plays a critical role in ensuring the integrity and security of the data transfer process in the Filefilego network. The protocol makes use of cryptographic and hash algorithms to enable a data verifier node to run the Proof of Data Transfer consensus algorithm.

After the data query responses have been received and a `Data Download Contract` has been created (see [here](./data_contract.md)), the data verifier node can begin its work. The main goal of the protocol is to verify that the data being transferred from the file hoster node to the requester node is indeed the requested data, without the verifier node needing to access the entire file. This helps to ensure that the data transfer process is secure and that the requester node receives the correct data.

The `Data Verification Protocol` is also responsible for ensuring that the data transfer process is efficient and that the nodes involved in the transfer are not overwhelmed with excessive traffic. By using cryptographic and hash algorithms, the protocol minimizes the amount of data that needs to be transferred and ensures that the transfer process is optimized for speed and reliability.

Overall, the Data Verification Protocol is a critical component of the Filefilego network, enabling secure and efficient data transfers between nodes.

Here is a list of the protocol specifications:


```bash
// ReceiveMerkleTreeProtocolID is a protocol which receives the merkle tree nodes.
ReceiveMerkleTreeProtocolID = "/ffg/dataverification_receive_merkletree/1.0.0"

// FileTransferProtocolID is a protocol which is used to transfer files from file hoster to downloader node.
FileTransferProtocolID = "/ffg/dataverification_file_transfer/1.0.0"

// ReceiveKeyIVRandomizedFileSegmentsAndDataProtocolID is a protocol which receives the encryotion data and the raw unencrypted file segments to verifier.
ReceiveKeyIVRandomizedFileSegmentsAndDataProtocolID = "/ffg/dataverification_receive_keyivrandomsegments_data/1.0.0"

// EncryptionDataTransferProtocolID is a protocol which transfers the key data from verifier to file requester.
EncryptionDataTransferProtocolID = "/ffg/dataverification_encryption_data_transfer/1.0.0"

// ContractTransferProtocolID is a protocol which transfers download contracts between nodes.
ContractTransferProtocolID = "/ffg/dataverification_contract_transfer/1.0.0"

// ContractVerifierAcceptanceProtocolID is a protocol which accepts incoming download contracts and seal them by verifier.
ContractVerifierAcceptanceProtocolID = "/ffg/dataverification_contract_accept/1.0.0"
```