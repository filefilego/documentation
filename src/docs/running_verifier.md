
# Run a Data Verification Node

Currently, there exists a predefined set of data verifiers within the genesis block of our system. However, to allow for more nodes to participate in this process, we are developing a smart contract that enables the staking of a designated amount of coins, effectively joining the data verifier network.

## Hardware Requirements

The consensus algorithms utilized in the data verification process require a significant amount of processing power and perform encryption and hashing functions. To expedite the encryption/decryption process, we strongly advise utilizing CPUs that support the AES instruction set.

The encryption algorithms employed depend on the underlying hardware architecture's support and may include the ChaCha family of stream ciphers or AES stream cipher mode.

Before installing the CLI client, please ensure that your computer meets the necessary resource requirements. Please refer to the minimum and recommended specifications listed below.

## Running a Verifier

Using the `--verify` cli flag, we can run the client in verification mode.

```
./filefilego --rpc_services="*" --search_engine --storage --storage_dir="/home/" --storage_token="admintoken" --storage_fees_byte="10000" --addr=0.0.0.0 --http --http_addr=0.0.0.0 --data_downloads_path="/home/ffg/Downloads/" --verify --data_verification_fees="0x9" data_verification_transaction_fees="0x1"
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