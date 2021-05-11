
# Run a Data Verification Node

There are currently a set of predefined data verifiers within the genesis block but we want a mechanism to allow more nodes to participate in this process therefore we are developing a smart contract which allows staking an amount of coins to automatically join the data verifiers network.

## Hardware Requirements

The consensus algorithms used in the data verification process are highly CPU-bound operations and perform encryption and hashing. We highly recommend CPUs with AES instruction set support to speed up the encryption/decryption process.
The following encryption algorithms are used depending on the hardware support of the underlying architecture:
* ChaCha family stream ciphers
* AES stream cipher mode

Before installing the CLI Client, please ensure your computer has enough resources to run it. Minimum and recommended requirements can be found below.

## Running a Verifier

Using the `verify` cli flag, we can run the client in verification mode.
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