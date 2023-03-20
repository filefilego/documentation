
# Run a Data Verification Node

Currently, there exists a predefined set of data verifiers within the genesis block of our system. However, to allow for more nodes to participate in this process, we are developing a smart contract that enables the staking of a designated amount of coins, effectively joining the data verifier network.

## Hardware Requirements

The consensus algorithms utilized in the data verification process require a significant amount of processing power and perform encryption and hashing functions. To expedite the encryption/decryption process, we strongly advise utilizing CPUs that support the AES instruction set.

The encryption algorithms employed depend on the underlying hardware architecture's support and may include the ChaCha family of stream ciphers or AES stream cipher mode.

Before installing the CLI client, please ensure that your computer meets the necessary resource requirements. Please refer to the minimum and recommended specifications listed below.

## Running a Verifier

Using the `--verify` cli flag, we can run the client in verification mode.
```
./filefilego --rpc --http --httpport=8090 --httpaddr=127.0.0.1 --bootstrapnodes="/ip4/{ipaddresshere}/tcp/10209/p2p/{peeridhere}" --verify
```

### Minimum requirements

* CPU +8 cores with AES instruction set
* 16 GB RAM
* SSD with minimum of 512 GB
* 100 MBit/s bandwidth


### Recommended specifications

* CPU +8 cores with AES instruction set
* 32/64 GB RAM
* SSD with minimum of 1 TB
* 1000+ MBit/s bandwidth


### Join forums for support

You can join the [forums](https://forum.filefilego.com) and ask questions related to data verifiers.