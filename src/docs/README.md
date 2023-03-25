# Introduction

<Bit/>

The FileFileGo protocol is a peer-to-peer data-sharing network designed for the web3 era, with an incentive mechanism, full-text search, storage, and indexing/tracking. Its decentralized architecture enables users to share data without censorship or a single point of failure. By leveraging game-theory concepts, FileFileGo incentivizes participation and ensures data availability while achieving fault-tolerance and preserving privacy.

As the internet has grown, it has become increasingly vulnerable to censorship and control by large corporations and ISPs. Governments have also attempted to regulate the flow of information online, making it challenging for informational platforms to operate without interruption. The FileFileGo protocol was developed to address these issues and enable users to access and share information freely.

FileFileGo is an open-source community project, with no centralized control or ownership. Its coin distribution is designed to be fair, with an emission of 40 FFG per block that decreases by half every 24 months. The protocol is launched without ICO/STO/IEO or pre-mine, relying on a Proof of Authority consensus algorithm that will eventually transition to Proof of Stake to allow more stakeholders to participate.

By supporting FileFileGo, users can help promote digital rights, privacy, freedom of information, and net neutrality. We encourage contributions and innovative ideas to ensure that the internet remains an open and decentralized platform.

## Why Filefilego

To gain a better understanding of the problems that this project aims to solve, let us first examine the shortcomings of current file-sharing technologies. When accessing data online, several factors must be taken into consideration, including:

1. **Where to find the data (Location)**

For instance, if we want to download the `Tor Browser`, we search it on a search engine and then get redirected to a site like `https://www.torproject.org/`.

We consider it the `location` to download the data, which in this case is a `domain` that points to an `IP Address` (We excluded DNS for simplicity)

2. **How to get the data (Transfer Protocols)**

Now in that page, we might see a download link like `http://xxx/tor-browser-linux64-x.0.x_en-US.tar.xz`. The method/protocol to download the data is by using `HTTP`. It could be `FTP`, a `Torrent` file or something else. We call these methods `Transfer Protocols`.

In the context of censorship, the `Location` part of data sharing is what most ISPs and other service providers including domain registrars and hosting companies block, null route and ban.

Below, some of the common unsolved problems and challenges are listed with their corresponding solutions.


Check the [Comparison](./comparison.md) page for more information regarding other systems and protocols.

### Problems

| x | Description          | 
|---|----------------------| 
| :red_circle:| Centralized indexer/tracker/lister like most torrent sites are subject to censorship and domain seizure.   | 
| :red_circle:| XDCC, BitTorrent, and Cyberlockers provide the Transfer method rather than a complete file sharing solution with a built-in indexer, viewer, full-text functionality, incentive mechanism, and decentralized nature.                 | 
| :red_circle:| IP addresses are completely exposed and additional paid services such as VPN and proxy servers are required to protect privacy. | 
| :red_circle:| Extremely slow speeds force users to pay for a premium account. | 
| :red_circle:| Subscription and premium requirements and unwanted recurring payments | 
| :red_circle:| No incentive to retain data therefore inactive files are deleted after a few days | 


### Solutions

| :heavy_check_mark: | Description          | 
|---|----------------------| 
| :heavy_check_mark:| All the components of filefilego are decentralized and communicate in a Peer-to-peer model rather than a Client-server model where the server or domain/DNS is the central point of failure. With this design, filefilego tolerates thousands of node failures.  | 
| :heavy_check_mark:| XDCC, BitTorrent, FTP, HTTP are only Transport and communication protocols, whereas filefilego a set of specifications and implementations that form a network that consists of Transport and communication protocols (transfer data between nodes), blockchain, and application logic ( public ledger and the file-sharing logic ), full-text search engine and a storage layer for off-chain data.       | 
| :heavy_check_mark:| Encrypted traffic to prevent ISPs and other third parties from traffic inspection. Privacy-first design, to relay traffic through a set of intermediate peers. | 
| :heavy_check_mark:| In filefilego its up to the storage provider to decide between a free or a Pay-us-you-go model. You only pay for usage without any subscription and a recurring payment.  | 
| :heavy_check_mark:| With the above Pay-us-you-go model in place, storage providers have the incentives to store and retain data for longer periods. | 





## How It Works

The Filefilego network is a meshnet consisting of full nodes that run the CLI Client, which implements the network's specifications and protocols. The Wallet application has been developed to facilitate interaction with full nodes by utilizing their JSONRPC interface.

### The Network

1. The responsibility of running the PoA/PoS consensus algorithm and sealing blocks that are broadcasted to the network lies with the blockchain verifiers.
2. Within the Proof of Transfer (PoX) and Proof of Data Possession (PoDP) consensus mechanisms, data verifiers play a crucial role. They assist in achieving consensus on the validity of data transfer between Storage Providers and other nodes within the network.
3. The storage of data that is referred to by blockchain channels is facilitated by Storage Providers utilizing the Storage engine.



![Network of Filefilego](/documentation/ffg_net.svg)

### The Architecture

1. The blockchain serves as the fundamental element of filefilego, presently utilizing the PoA consensus mechanism and transitioning towards PoS (Proof-of-Stake). Peer-to-peer communication and networking are facilitated through the use of Libp2p.
2. Our Proof of Transfer (PoX) technology allows the verification of data transfer between nodes without requiring the download of a copy. This verification process is enabled through the use of innovative data structures and cryptography.
3. Our off-chain data integration strategy with the blockchain allows for the storage of files with arbitrary lengths off-chain, linked to on-chain entities. The Storage engine exposes an API that provides DApps and programs with the ability to upload data to the node with a proper authorization mechanism.
4. The accuracy and flexibility of the search feature are paramount to our system, and our implementation supports complex queries, including binary searches, through a query language.

![Architecture of Filefilego](/documentation/ffg_arch.png)


