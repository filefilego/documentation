# Run a Storage Provider Node

Anyone can become a storage provider without any limitation or pre-registration by running a full-node with the binlayer storage engine enabled. Binalyer engine supports network filesystems so its possible for storage providers to mount and use these types of filesystems. 



## Hardware Requirements

The storage engine simply requires storage, the larger the better. However there are some signature generation algorithms which are CPU-bound meaning that you could add more resources to make it faster. In general we recommend decent CPUs with hardware support for encryption and hashing.


## Running a Provider

Using the `--binlayer` cli flag, we can run the client in storage provider mode and use `-binlayerdir="/home"` to set the destination folder for storage with `--binlayer_token="1234"` as access token for your dapps and other applications. Please note that its possible to create other tokens from this token as this is a master token and should be avoided in other applications.

```
./filefilego --rpc --http --httpport=8090 --httpaddr=127.0.0.1 --bootstrapnodes="/ip4/{ipaddresshere}/tcp/10209/p2p/{peeridhere}" --rpcservices="channel,transaction,account,block,ffg" --binlayer --binlayerdir="/home" --binlayer_token="1234"
```

### Minimum requirements

* CPU +8 cores
* 16 GB RAM
* 2 TB of space
* 100 MBit/s bandwidth


### Recommended specifications

* CPU +8 cores
* 32/64 GB RAM
* 20 TB of space
* 1000+ MBit/s bandwidth


### Join forums for support

You can join the [forums](https://forum.filefilego.com) and ask questions related to storage providers.