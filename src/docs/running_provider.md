# Run a Storage Provider Node

Becoming a storage provider on the Filefilego network is a simple process that does not require any registration or restrictions. Providers can join by running a full-node with the storage engine enabled, which supports network filesystems, allowing storage providers to mount and use these types of filesystems.

## Hardware Requirements

The storage engine primarily requires storage space, with larger capacity being advantageous. While certain signature generation algorithms are CPU-bound, adding more resources can enhance processing speed. As a general recommendation, it is advisable to utilize CPUs with hardware support for encryption and hashing.

## Running a Provider

To operate the client in storage provider mode, the `--storage` cli flag is utilized, with the `--storage_dir="~/StorageDirectory"` command setting the destination folder for storage. The `--storage_token="1234"` flag sets the access token for dapps and other applications. However, it is important to note that this token is a master token and should not be used for other applications. Separate tokens should be created for each application as needed.

Linux/Unix: 

```
filefilego --node_identity_passphrase=yournodeidentitypassword --rpc_services="*" --search_engine --storage --storage_dir="~/StorageDirectory/" --storage_token="1234" --storage_fees_byte="10000" --addr=0.0.0.0 --http --http_addr=0.0.0.0 --data_downloads_path="~/FFG_Downloads" --bootstrap_nodes="/ip4/18.159.124.250/tcp/10209/p2p/16Uiu2HAmVXbhxA1tiA9PRZJWwSk5jdMfWXbfeGWaubVeT7MZu8ie"
```

Windows:

```
filefilego.exe --node_identity_passphrase=yournodeidentitypassword --rpc_services="*" --search_engine --storage --storage_dir="~/StorageDirectory/" --storage_token="1234" --storage_fees_byte="10000" --addr=0.0.0.0 --http --http_addr=0.0.0.0 --data_downloads_path="~/FFG_Downloads" --bootstrap_nodes="/ip4/18.159.124.250/tcp/10209/p2p/16Uiu2HAmVXbhxA1tiA9PRZJWwSk5jdMfWXbfeGWaubVeT7MZu8ie"
```

Please make sure the `--storage_dir="~/StorageDirectory/"` and `--data_downloads_path="~/FFG_Downloads"` directories exist.

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