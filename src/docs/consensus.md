# Consensus Mechanisms

Within Filefilego, every full node maintains a local copy of the database or ledger, and it is essential for these nodes to establish consensus on the current state of the blockchain. The two primary types of consensus mechanisms utilized are:

- Block Consensus:

    1. Proof-of-Authority (PoA)
    2. Proof-of-Stake (PoS)

- Data Verification Consensus:

    1. Proof of Transfer (PoX)
    2. Proof of Data Possession (PoDP)

Given a block-time of 10 seconds, it is crucial to select a consensus algorithm that maximizes processing efficiency while handling a high transaction volume. In the initial phase of FileFileGo, we have opted for Proof of Authority as our consensus mechanism, with plans to transition to a PoS mechanism in the future. Using PoW-based algorithms poses a significant risk for new blockchains, as there exist vast pools of computing power that can be leveraged to perform 51% attacks, despite the inherent safety of PoW by design.

## Proof-of-Authority (PoA)

At present, we employ PoA as our block sealing mechanism, with a designated group of validators who were included in the genesis block. Nevertheless, we have expanded this mechanism to accommodate the addition and removal of validators, which can be facilitated by either an authority node or a contract. Additionally, nodes can stake to become validators, further enhancing the inclusivity of the consensus mechanism.

## Proof-of-Stake (PoS)

Moving forward, we plan to phase out our current PoA mechanism in favor of Proof-of-Stake, enabling a broader range of entities to participate in the block mining process. As part of our broader blockchain governance strategy, we aim to increase the number of parties and developers involved in the network, thereby expanding our pool of stakeholders. The Proof-of-Stake mechanism serves as a powerful incentive towards this end.

## Proof-of-Transfer (PoX) - Proof-of-Data Possession (PoDP)

PoX and PoDP are both part of the `Data Verification Consensus` category, which are utilized to verify and challenge data transfer contracts. These mechanisms are essential for enabling us to determine, in a deterministic and mathematically sound manner, whether a node has effectively transferred data within the network. Without these mechanisms, this process would be unfeasible.

### Problem

Let us suppose that `node_1` needs to download some `data_x`, owned by `node_2`, and pay for the fees required by `node_2`. What happens in the case of Byzantine fault nodes? How do we verify successful data transfer to destination nodes and prevent the following malicious cases:
1. `node_1` is a dishonest node that reports `data_x` as invalid, to avoid paying the fees.
2. `node_2` is a dishonest node that serves `data_y` to `node_1` and claims that it's `data_x`.

### Solution


The network can resist Byzantine faults if `node_x` can broadcast (peer-to-peer) a value x, and satisfy the following:

1. If `node_x` is an honest node, then all honest nodes agree on the value x.
2. In any case, all honest nodes agree on the same value y.

Proof of Transfer presents a solution to precisely these challenges. This consensus mechanism is designed to enable honest nodes within the network to verify and reach agreement that `node_2` has indeed transferred `data_x` to `node_1`. To accomplish this, we introduce a set of verifiers whose role is to challenge the participating nodes.

While a simple and straightforward approach would be to send the requisite data to a verifier and subsequently forward it to the destination node, such an approach would generate bandwidth and storage bottlenecks on the verifiers, thereby decreasing the network's overall throughput. As such, the proposed solution must satisfy stringent requirements for minimal bandwidth and storage/memory utilization.


```
              ┌───────────┐
     ┌────────►[verifiers]◄─────────┐
     │        └───────────┘         │
┌────┴───┐                     ┌────┴───┐
│        │                     │        │
│ node_1 ◄─────────────────────► node_2 │
│        │                     │        │
└────────┘                     ├────────┤
                               │ data_x │
                               └────────┘

```


#### Merkle Tree

Verifiers can use Merkle Trees as a data integrity verification mechanism without having access to the actual data. Participating nodes must generate Merkle trees which are used by verifiers for comparison and other operations.

```
     ABCD 
    /    \ 
   AB    CD 
  / \    / \ 
 A   B  C   D   
```

*ABCD*  is a merkle root. To prove the validity of *C*, for instance, all that's needed is *D*, so it can be proven that *C|D=CD*, *AB*, so it can be proven that *AB|CD=ABCD*.

#### The Algorithm

To address the challenges posed by bandwidth and storage limitations, verifiers may employ Merkle Trees as a data integrity verification mechanism, without necessitating access to the actual data. In this framework, participating nodes are responsible for generating Merkle trees that verifiers subsequently utilize for comparison and other operations.

1. **Data Discovery:** Multiple wire protocols have been developed to facilitate communication between nodes within the network. The `Data Query protocol` is the first protocol utilized by nodes, enabling them to broadcast queries to the network via a gossip channel and receive a response via direct communication. In essence, this protocol enables a node to inquire about the host of a specific piece of data.

```
             1. Data Query Request
                    ┌───────┐
    ┌───────────────►[nodes]├───────────────┐
    │               └───────┘               │
┌───┴────┐                             ┌────▼───┐
│        │                             │        │
│ node_1 │                             │ node_2 │
│        │                             │        │
└───▲────┘                             └───┬────┘
    │        2. Data Query Response        │
    └──────────────────────────────────────┘
```

2. **Smart Contract:** The `Data Query Response` payload contains all the requisite information for preparing a smart contract transaction. Once the transaction is prepared, it is broadcast to the network, subsequently selected by a verifier for further processing.

```
┌──────────────────────────────────────┐
│              TRANSACTION             │
├──────────────────────────────────────┤
│  Data :                              │
│        - Data query response         │
│        - Remote node signature       │
│  Value:                              │
│        - Fees required by node       │
│                                      │
│  Fees :                              │
│        - Fees collected by verifier  │
│                                      │
│  To   :                              │
│        - Network verifier            │
└──────────────────────────────────────┘

```



3. **Verification:** The verifier (`v1`) interacts with participating nodes and issues a challenge to the node hosting the data (`node_2`). The challenge consists of the following steps:
* `node_2` creates a Merkle tree that matches the original Merkle root of `data_x` that was initially uploaded.
* `v1` decides on the number and order of blocks/data ranges to be sent to `node_1` by `node_2`, while concealing the order of the blocks from `node_1`.
* `v1` requests a fixed range of data from `node_2`, which is then encrypted using a random key (`k1`) by `v1` and transmitted to `node_1`.

At this stage, `node_1` possesses both `data_z` and `data_enc`, but lacks the necessary knowledge to reassemble them in the correct order to retrieve the original file. `v1` can validate the integrity of the data that has been transmitted to `node_1`, and if it matches the original Merkle tree's identity, the decryption key `k1` is transmitted to `node_1` along with the order of the blocks. `node_1` can then reassemble all of the components to obtain the original data file. The final step involves releasing the fees to `node_2` by `v1`.

This algorithm allows for the simultaneous achievement of Proof of Transfer and Proof of Data Possession.

```
            ┌───┬───┬───┬───┬───┬───┬───┬───┐
Data Blocks:│ a │ b │ c │ d │ e │ f │ g │ h │
            └───┴───┴───┴───┴───┴───┴───┴───┘
              0   1   2   3   4   5   6   7
              │   │   │   │   │   │   │   │
              └───┘   └───┘   └───┘   └───┘
               h01     h23     h45     h67
                │       │       │       │
                └───────┘       └───────┘
                h(h01+h23)     h(h45+h67)
                    │               │
                    │               │
                    └───────────────┘
         Merkle root:  h(h(h01+h23)+h(h45+h67))
```



## Why not Proof-of-Work

Newer blockchains, like FileFileGo, are vulnerable to attacks based on Proof of Work (PoW), such as the 51% attack, where the attacker can use a majority of the computing power to reverse transactions on the blockchain. This is because large pools of computing power are easily accessible these days, making such attacks feasible. In addition to the risk of such attacks, there are other factors that make PoW less desirable when compared to other consensus mechanisms such as Proof of Stake (PoS), which is the subject of ongoing debates.