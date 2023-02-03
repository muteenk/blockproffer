require("@nomiclabs/hardhat-waffle");
require('dotenv').config()

module.exports = 
{
  defaultNetwork: "hardhat",
  networks:
  {
    hardhat: {},
    
    localhost: 
    {url: 'http://127.0.0.1:5500'},

    goerli: 
    {
      url: process.env.ENDPOINT_URL,
      accounts: [process.env.DEPLOYER_KEY]
    }
  },

  solidity: 
  {
    version: "0.8.17",
    settings: 
    {
      optimizer: 
      {
        enabled: true,
        runs: 200
      }
    }
  },

  paths:
  {
    sources: './solidity/contracts',
    artifacts: './solidity/abis',
  },
  
  mocha:
  {
    timeout: 400000
  }
};
