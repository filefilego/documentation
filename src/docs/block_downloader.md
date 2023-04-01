# Block Downloader

When a full node is created from scratch, it is initialized with a genesis block by default, which represents the first block of the blockchain. This initial block serves as a starting point for the node to begin building the blockchain and tracking subsequent transactions.

To ensure that the full node remains up-to-date with the rest of the network, it must synchronize with the other nodes in the network. This synchronization process involves downloading the available blocks from other nodes within the network, and then updating its own copy of the blockchain to reflect the latest state of the network.

During synchronization, the node identifies the nodes with the highest block numbers and downloads a set of blocks from each of them until it achieves synchronization with the network. This process is commonly referred to as syncing, and its ultimate goal is to replicate the same ledger or database locally from other nodes within the network.

It's worth noting that synchronization is a crucial aspect of maintaining the integrity of the blockchain. By keeping all nodes in the network in sync, the system ensures that all transactions are validated and recorded in a consistent and secure manner. In addition, synchronization also enables nodes to verify the authenticity of transactions and prevent the possibility of double-spending, which is a common issue in decentralized systems.


Block Downloader defines the following protocol IDs:

   ```bash
    // BlockDownloaderProtocolID represents the block downloader protocol version.
    const BlockDownloaderProtocolID = "/ffg/block_downloader/1.0.0"

    // BlockchainHeightProtocolID is the protocol which returns the blockchain height of a node.
    const BlockchainHeightProtocolID = "/ffg/blockchain_height/1.0.0"
   ```