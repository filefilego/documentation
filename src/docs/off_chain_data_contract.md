# Off-Chain Data Download Contracts

Filefilego's emphasis on privacy has led to the adoption of measures to prevent tracking of data transfers through the network using on-chain metadata. To this end, the storage of a `DownloadContractProto` in a transaction data payload has been avoided. Instead, only the download contract hash is referenced in the transaction payload, with the actual contract being exchanged between nodes. This approach ensures that the actual content of the data download contract remains hidden, thereby enhancing the privacy of the network's users.

By avoiding the storage of the `DownloadContractProto` in the transaction data payload, Filefilego enhances the privacy of its users by preventing any sensitive information from being exposed on the blockchain. This is particularly important for users who are concerned about their privacy and want to protect their data from prying eyes.

In addition, this approach also helps to reduce the size of the transactions, making them more efficient and faster to process. This is because the transaction payload only contains a reference to the download contract hash, rather than the entire contract itself.

Furthermore, by allowing nodes to exchange the actual contract between themselves, Filefilego promotes a more decentralized network.

Overall, by prioritizing privacy and decentralization, Filefilego aims to create a more user-friendly and efficient file-sharing network that is accessible to everyone while maintaining high levels of security and privacy.