# Client Installation

## Prerequisites

In order to compile and install `filefilego CLI Client` from source, open up your terminal in the desired directory and run the following command:

<code-group>
   <code-block title="Linux/Unix" active>
   ```bash
   # Follow the instructions to install golang on your system
   https://golang.org/doc/install
   ```
   </code-block>

   <code-block title="Windows">
   ```bash
   # Download: go1.x.x.windows-amd64.msi and install the package
   https://golang.org/dl/
   #Download tdm64-gcc-x.x.x.exe if you are on a 64-bit machine
   #-- or ---
   #Download tdm-gcc-9.2.0.exe if you are on a 32-bit machine
   #Most of the modern CPUs are 64-bit based so go for the first binary
   https://jmeubank.github.io/tdm-gcc/
   #Download:
   #64-bit Git for Windows Setup
   #-- or --
   #32-bit Git for Windows Setup
   https://git-scm.com/download/win
   ```
   </code-block>
</code-group>


Once these dependencies are installed, you can proceed with the compilation process.

## Compilation

This section will help you compile and test your program


1. Clone the main repository from github

   <code-group>
      <code-block title="Linux/Unix" active>
      ```bash
   git clone https://github.com/filefilego/filefilego.git
   cd filefilego
   make build
      ```
      </code-block>

      <code-block title="Windows">
      ```bash
   git clone https://github.com/filefilego/filefilego.git
   cd filefilego
   go build -o cmd/filefilego/filefilego.exe cmd/filefilego/main.go
      ```
      </code-block>
   </code-group>

  You will have the output executable file under `cmd/filefilego/`. You can navigate to the output directory with `cd cmd/filefilego/` and then run the commands in the following sections.

## Configuring and Running

Before we run the cli client, we need to create a node identification key which is basically your node's identity in the filefilego network. When you run the node, you are required to unlock the node key first. Please follow the instructions


1. Create Node Identity Key (Used for encryption and network identification) Replace `thisismynodespassword` with your own password

   <code-group>
   <code-block title="Linux/Unix" active>
   ```bash
   ./filefilego address create_node_key thisismynodespassword
   ```
   </code-block>

   <code-block title="Windows">
   ```bash
   filefilego.exe address create_node_key thisismynodespassword
   ```
   </code-block>
   </code-group>

2. Create additional accounts if needed. Replace `mypassword` with your own password

   <code-group>
   <code-block title="Linux/Unix" active>
   ```bash
   ./filefilego address create mypassword
   ```
   </code-block>

   <code-block title="Windows">
   ```bash
   filefilego.exe address create mypassword
   ```
   </code-block>
   </code-group>

3. List the created accounts

   You will get json filenames that contain the address of your created account in step 3.

   <code-group>
   <code-block title="Linux/Unix" active>
   ```bash
   ./filefilego address list
   ```
   </code-block>

   <code-block title="Windows">
   ```bash
   filefilego.exe address list
   ```
   </code-block>
   </code-group>

4. Run the full node


   <code-group>
   <code-block title="Linux/Unix" active>
   ```bash
   ./filefilego --node_identity_passphrase=yournodeidentitypassword --rpc_services="*" --search_engine --storage --storage_dir="~/StorageDirectory/" --storage_token="admintoken" --storage_fees_byte="10000" --addr=0.0.0.0 --http --http_addr=0.0.0.0 --data_downloads_path="~/FFG_Downloads" --bootstrap_nodes="/ip4/18.159.124.250/tcp/10209/p2p/16Uiu2HAmVXbhxA1tiA9PRZJWwSk5jdMfWXbfeGWaubVeT7MZu8ie"
   ```
   </code-block>

   <code-block title="Windows">
   ```bash
   filefilego.exe --node_identity_passphrase=yournodeidentitypassword --rpc_services="*" --search_engine --storage --storage_dir="~/StorageDirectory/" --storage_token="admintoken" --storage_fees_byte="10000" --addr=0.0.0.0 --http --http_addr=0.0.0.0 --data_downloads_path="~/FFG_Downloads" --bootstrap_nodes="/ip4/18.159.124.250/tcp/10209/p2p/16Uiu2HAmVXbhxA1tiA9PRZJWwSk5jdMfWXbfeGWaubVeT7MZu8ie"
   ```
   </code-block>
   </code-group>

   The above command runs a full node and starts the http rpc server. In this case, we listen on all interfaces `0.0.0.0` and port `8090` so we can build an application that can interact with this full node.