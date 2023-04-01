# Super Light Node

A Super Light Node is a type of node in the Filefilego network that has limited hardware resources but can still participate in the network and perform certain functionalities. Unlike a full node, a super light node does not need to maintain a complete copy of the blockchain ledger. Instead, it relies on other nodes within the network to perform certain operations, such as retrieving balances and current nonces of addresses, and constructing transactions.

The Super Light Node Protocol is designed to allow a full node to be queried by other light nodes. By using this protocol, common actions can be delegated to full nodes, such as querying the states of individual addresses or retrieving channel node items from the database. This allows super light nodes to perform tasks that would otherwise be too resource-intensive for them.

Overall, the Super Light Node Protocol helps to make the Filefilego network more accessible to nodes with limited resources, while still allowing them to participate in the network and perform important functionalities.

One important use case for Super Light Node Protocol implementation is to allow the GUI Wallet application to run without downloading the whole state of the blockchain while allowing it to download data, send transactions and explore the channels.