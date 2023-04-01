# Client CLI Usage

The client CLI provides the `client` subcommand which offers an additional subset of commands to interact with a running Filefilego node.
By executing the following command we see the available functionality `./filefilego client help`
```bash
USAGE:
   filefilego client command [command options] [arguments...]

DESCRIPTION:
   
     Interact with node using JSONRPC client

COMMANDS:
   endpoint                         endpoint http://localhost:8090/rpc
   upload                           upload <filepath> <storage_access_token> <node_hash>
   get_storage_token                get_storage_token <admin_token>
   balance                          balance <address>
   send_transaction                 send_transaction <access_token> <nounce> <data> <from_address> <to_address> <tx_value> <tx_fees>
   unlock_node_identity             unlock_node_identity <passphrase>
   query                            query filehash1,filehash2,filehash3
   responses                        responses <data_query_request_hash>
   create_contracts                 create_contracts <data_query_request_hash>
   create_send_tx_with_contracts    create_send_tx_with_contracts <contract_hash1,contract_hash2> <jwt_access_token> <current_nounce> <each_tx_fee>
   download                         download <contract_hash1> <file_hash> <file_size>
   send_file_signature_to_verifier  send_file_signature_to_verifier <contract_hash1> <file_hash>
   decrypt_files                    decrypt_files <contract_hash> <file_hash1,file_hash2> <restore_full_path_file1,restore_full_path_file2>
   host_info                        host_info
```

## Configure Client with Endpoint

When running a node, the default JSONRPC2.0 server port is `8090` which we can use to interact with the node. First we need to add the endpoint so the next commands can 
properly use this endpoint. 

```bash
./filefilego client endpoint http://localhost:8090/rpc
```

Now we are ready to execute any of the above commands

## Node's Addresses

Node's address can be retrived by the following command:

```bash
./filefilego client host_info

Address:  0x4752eaa3543eff51e0c802247bef37c2e78e26b5
PeersID:  16Uiu2HAmTFHgmWhmcned8QTH3t38WkMBTeFU5xLRgsuwMTjTUe6k
Peers count:  92
```

We can also get the node's PeerID and the number of peers connected to.

## Check Address Balance

To see the balance of an address:

```bash
./filefilego client balance 0x0b9f90d53c678aff32e7abe5698a0ed8ffc49114

Balance  Balance hex  Nounce  Next Nounce  
0 FFG    0x0          0x0     0x1          


```

## Upload a File

A file can be uploaded to the node if it is running the `storage` engine. An access token is required to upload a file to the node. When running a full-node with storage
the `--storage_token="putYourSecureRandomTokenHere"` flag must be set so we can use it to issue new access tokens for applications.

```bash
./filefilego client get_storage_token "putYourSecureRandomTokenHere"

Access token:  0xf21265b6a273879386bf4a8ec64f79fcbf1bafe25e6a5cb0464143259643ca914e34cd99346d3d57b92ed8eb75e814d7a01d89f2d8a35c28eb27b6cb

```

Now that we have the access token, we can upload a file using the following command:

```bash
./filefilego client upload ~/Downloads/virtualbox-7.0_7.0.6-155176_Ubuntu_focal_amd64.deb "0xf21265b6a273879386bf4a8ec64f79fcbf1bafe25e6a5cb0464143259643ca914e34cd99346d3d57b92ed8eb75e814d7a01d89f2d8a35c28eb27b6cb"

FileName:  virtualbox-7.0_7.0.6-155176_Ubuntu_focal_amd64.deb
FileHash:  58e96be6203573ca905456b64878a710bd47241c
MerkleRoot:  0x249c6f6426682b4e41ee5939df3e233e756e8ce0b86657d19e4bc67b16092178
Size:  92393948
Error:  
```


## Unlock Node Key

Sending a transaction requires signing it first. In order to sign a transaction, first the key which signs it must be unlocked. Using the following command the node identity key can be unlocked by passing the passphrase used when the node was created:

```bash
./filefilego client unlock_node_identity "admin"

Access token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhZGRyZXNzIjoiIiwiZXhwIjoxNjg4MTQ4OTgyfQ.o5wMMkKMQw_mPyOTg_sW5nkvpif7dJ-3lsU2HtmbNo4
```

The result is a JWT token that will be used to sign a transaction


## Query the Network

Querying the network for file hashes can be done using the following command:

```bash
./filefilego client query "58e96be6203573ca905456b64878a710bd47241c"

Data query hash: 0x9719a9e489063a5d478ba89ddc35893948d105e0805de69f41637271e1c39212

PeerID                                                 Available Files  NA Files  Fees per byte             
16Uiu2HAmJKsNBBo1paeB1UiBsMQqirQcUdNcRBzEtDN2u1AeP4Wb  1                0         0.000000000000010000 FFG  

```

We used the previous file hash as a query, you could add more files by separating them using a comma:

```bash
./filefilego client query "58e96be6203573ca905456b64878a710bd47241c,83678be92035730a905456b64878a7902d35140b"
```

## Create Data Download Contracts / Send TX

In the previous step, we obtained a Data query hash e.g `0x9719a9e489063a5d478ba89ddc35893948d105e0805de69f41637271e1c39212` that we can use to create a data download contract.
Use the following command to create data download contracts:

```bash
./filefilego client create_contracts "0x9719a9e489063a5d478ba89ddc35893948d105e0805de69f41637271e1c39212"

contract number 0 hash: 0x6c449bc6acdc58e96259b40dc69b0d9063f22932e0a7e6e6b117855dde9190e9
```

The result is 1 contract that needs to be sent with a transaction, the contract hash is `0x6c449bc6acdc58e96259b40dc69b0d9063f22932e0a7e6e6b117855dde9190e9`, so next step is to create the transaction and send it to the network.

The following command sends the transaction to the network which contains the download contracts hashes and necessary data:

```bash
./filefilego client create_send_tx_with_contracts "0x6c449bc6acdc58e96259b40dc69b0d9063f22932e0a7e6e6b117855dde9190e9" "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhZGRyZXNzIjoiIiwiZXhwIjoxNjg4MTQ4OTgyfQ.o5wMMkKMQw_mPyOTg_sW5nkvpif7dJ-3lsU2HtmbNo4" "0x0" "0x5"
```

The current nounce ("0x0") can be found when you check a balance of an address, and the "0x5" is the fees for each transaction that will be used

After ~10 seconds all the participating node's including the data verifier and the file hoster node can see that the fees were paid for the contract, so data transfer can be initiated

## Download File / Decrypt

To download a file, the contract hash, file hash and the file size are required. They must match excatly the initial file metadata that were uploaded to a node

```bash
./filefilego client download "0x6c449bc6acdc58e96259b40dc69b0d9063f22932e0a7e6e6b117855dde9190e9" "58e96be6203573ca905456b64878a710bd47241c" "92393948"

File downloaded [100%]
```

Now that the file is fully downloaded, its signature must be sent to the verifier by using the following command:

```bash
./filefilego client send_file_signature_to_verifier "0x6c449bc6acdc58e96259b40dc69b0d9063f22932e0a7e6e6b117855dde9190e9" "58e96be6203573ca905456b64878a710bd47241c"
```

And finally restore the original file by the following command:

```bash
./filefilego client decrypt_files "0x6c449bc6acdc58e96259b40dc69b0d9063f22932e0a7e6e6b117855dde9190e9" "58e96be6203573ca905456b64878a710bd47241c" "/home/downloads/virtualbox-7.0_7_custom_name_you_choose.deb"
```

The last argument is the full path to where to save the file.

See `./filefilego client help` for all the available commands