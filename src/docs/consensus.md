# Consensus Mechanisms

In filefilego, all full nodes keep a local copy of the database/ledger, and there must a way for these nodes to reach agreement regarding the state of the blockchain. We have 2 main types of consensus mechanisms:

- Block Consensus:

    1. Proof-of-Authority (PoA)
    2. Proof-of-Stake (PoS)

- Data Verification Consensus:

    1. Proof of Transfer (PoX)
    2. Proof of Data Possession (PoDP)

Block-time of 10 seconds requires an appropriate consensus algorithm that doesn't waste much processing power and is efficient enough to process a high volume of transactions. For the first phase of FileFileGo, we choose to use Proof of Authority to achieve consensus, and later on a PoS mechanism will replace the current algorithm. PoW based algorithms are risky (PoW is safe by design) for new blockchains since there are already huge pools of computing power out there and can be used to perform 51% attacks.

## Proof-of-Authority (PoA)

We currently use PoA to seal blocks by a set of validators. These validators are part of the genesis block, however we have extended this mechanism to support addition and deletion of verifiers either by an authority node, or a contract which allows nodes to stake in order to become verifiers.

## Proof-of-Stake (PoS)

In the future, proof-of-stake will eventually replace the current PoA mechanism so different parties can participate in the block mining process. In terms of blockchain governance, we want more parties and developers to get involved and increase the stakeholders, and one of the incentives is the Proof-of-Stake mechanism.

## Proof-of-Transfer (PoX) - Proof-of-Data Possession (PoDP)

PoX and PoDP belong to the `Data Verification Consensus` category which are used to challenge and verify data transfer contracts. Without these mechanisms it would be impossible for us to deterministicly and mathematically prove that a node has successfully transfered data within the network.


### Problem

Let us suppose that `node_1` needs to download some `data_x`, owned by `node_2`, and pay for the fees required by `node_2`. What happens in the case of Byzantine fault nodes? How do we verify successful data transfer to destination nodes and prevent the following malicious cases:
1. `node_1` is a dishonest node that reports `data_x` as invalid, to avoid paying the fees.
2. `node_2` is a dishonest node that serves `data_y` to `node_1` and claims that it's `data_x`.

### Solution


The network can resist Byzantine faults if `node_x` can broadcast (peer-to-peer) a value x, and satisfy the following:

1. If `node_x` is an honest node, then all honest nodes agree on the value x.
2. In any case, all honest nodes agree on the same value y.

Proof of Transfer solves exactly these problems. It is designed so that honest nodes within the network can verify and agree that `node_2` has successfully transferred `data_x` to `node_1`. In order to achieve this consensus mechanism, we introduce a set of verifiers which are responsible to challenge the participating nodes. A simple and straightforward approach would be to send the required data to a verifier and then forward it to the destination node. However, this approach introduces bandwidth and storage bottlenecks on the verifiers which in turn decreases the throughput of the overall network. The solution must have minimal bandwidth and storage/memory requirements.

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

In this section, the complete life cycle of a data transfer verification is demonstrated.

1. **Data Discovery:** There are several wire protocols created to allow nodes to communicate with each other. The first protocol used by nodes is the `Data Query` protocol which allows nodes to broadcast queries to the network throughout a gossip channel and get the response back by using direct communication. Simply put, a node asks who hosts a specific piece of data.

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

2. **Smart Contract:** The `Data Query Response` payload contains all the information needed to prepare a smart contract transaction. This transaction is then broadcasted to the network which is then selected by a verifier.

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



3. **Verification:** Verifier(`v1`) communicates with the participating nodes and generates a challenge for the node which hosts the data(`node_2`). The challenge consists of the following steps:
* `node_2` should create a Merkle tree that matches the original Merkle root of `data_x` uploaded in the first place.
* `v1` decides the **order** and the **number of blocks/data** ranges to be sent to `node_1` by `node_2`. We don't want to reveal the order of blocks to `node_1` yet.
* `v1` asks `node_2` for a fixed range of data, which will be encrypted using a random key `k1` as `data_enc` by `v1` and sent to `node_1`.

At this stage, `node_1` has some `data_z`, plus some `data_enc` but has no knowledge on how to reassemble them in order to get the original file. Now, `v1` can validate the integrity of the data sent to `node_1` and if they match the original Merkle tree's identity, then the decryption key `k1` is sent to `node_1`. The order of the blocks will also be sent, so `node_1` can put all the parts together to reassemble the data. The final step is to release the fees to `node_2` by `v1`. 

With this algorithm, we simultaneously achieve Proof of Transfer and Proof of Data Posession.
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

New blockchains suchs as filefilego are in risk of PoW-based attacks such as 51% attack where the blockchain can be reverted to exclude specific transactions. In simple words, these days its common to access huge amount of computing power and therefore perform 51% attacks. There are other reasons for not using PoW, which goes back to the `PoW vs PoS` debates.