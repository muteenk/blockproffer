module.exports = {
  networks: 
  {
    development: 
    {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*", // Match any network id
    },
    goerli:
    {
      provider: () => 
      new HDWalletProvider(process.env.SECRET_KEY + process.env.ENDPOINT_URL),
      network_id: 5,
      gas: 5500000,
      confirmations: 2,
      timeoutBlocks: 200,
      skipDryRun: true
    }
  },
  contracts_directory: './solidity/contracts/',
  contracts_build_directory: './solidity/build/',
  compilers:
  {
    solc: 
    {
      version: "0.8.17",
      optimizer: 
      {
        enabled: true,
        runs: 200
      }
    }
  }
};