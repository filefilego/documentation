# Introduction

<Bit/>

We have seen the rise of the Internet from the first days until now. Open internet suffers from big corporations and ISPs which censor freedom of speech. We have seen acts and statements such as SOPA, PIPA, ACTA and so many more from law-makers with the goal of controlling the Internet and the flow of information.

These days it's extremely difficult for sites like WikiLeaks, thepiratebay, and so on to operate without interruption and pressure from different oppressing parties. With these in mind, we have developed the FileFileGo protocol and stacks to allow users to access and share data without a single point of failure.

A Peer-to-peer data-sharing network with indexing/tracking, storage, full-text search, and incentive mechanism form a decentralized network that allows users to share data without a single point of failure and censorship. The architecture is designed in a way to prevent censorship and privacy issues, improves data availability with an incentive system based on game-theory concepts, and achieves fault-tolerance. To solve these challenges we propose a Peer-to-peer and decentralized data sharing network (Filefilego) for the web3 era.

Filefilego is not controlled by any individual. It's a joint effort by the Open-source community. The coin distribution is designed to be as fair as possible, with the emission of 15 Zaran (the native currency) per block which is divided by 2 every 24 months.

Filefilego is launched fairly - free of ICO/STO/IEO or pre-mine. We rely on a current PoA (Proof of Authority) consensus algorithm which will eventually be replaced by a PoS (Proof of Stake) to allow more parties to participate in the project. Support the movement by contributing to the project and develop innovative ideas that respect our digital rights, privacy, freedom of information, freedom from Internet censorship, and net neutrality.

## Why Filefilego

Let us first demonstrate the problems of existing file-sharing technologies and get a better understanding on what problems this project solves. Today, if we want to access some data over the Internet, we need to consider:

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

Filefilego network is meshnet with full nodes running the `CLI Client` which is the implementation of the specifications and the protocols. The `Wallet` application is developed to allow interaction with full nodes using their JSONRPC interface.

### The Network

1. Blockchain verifiers are responsible for running the PoA/PoS consensus algorithm and seal blocks which are then broadcasted to the network.
2. Data verifiers are part of the Proof of Transfer (PoX) and Proof of Data Possession (PoDP) consensus mechanisms. The participating nodes of the network achieve consensus on the validity of data transfer between "Storage Providers" and other nodes.
3. Storage providers utilize the "BinLayer" storage engine to host data that are referenced by the blockchain channels.



![Network of Filefilego](/ffg_net.svg)

### The Architecture

1. The core component of filefilego is the blockchain itself which currently uses PoA consensus mechanism and soon migrates to PoS (Proof-of-Stake). Libp2p is utilized for peer-to-peer communication and networking.
2. With Proof of Transfer (PoX), we make it possible to verify that data have been transferred from one node to another without downloading a copy of it. We use novel data structures and cryptography to perform the verification process.
3. Off-chain data integration with the blockchain allows us to store arbitrary-length files off-chain and link them to on-chain entities. Binlayer engine exposes an API that allows DApps and programs to upload data to the node with a proper authorization mechanism.
4. Search accuracy and flexibility are as important as the core blockchain. Our implementation supports complex queries including binary searches using a specific query language.

![Architecture of Filefilego](/ffg_arch.png)


