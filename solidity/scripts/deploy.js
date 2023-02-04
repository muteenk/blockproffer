// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const { ethers } = require("hardhat");
const fs = require('fs');

async function main() 
{
  const base_uri = "https://ipfs.io/ipfs/QmWau3WyAjabp7D2SdTRjygynijEwPe2B6zatjWDbCgWLa"
  const Contract = await ethers.getContractFactory("pollSystem");
  const contract = await Contract.deploy();

  await contract.deployed();

  const address = JSON.stringify({address : contract.address }, null, 4)
  fs.writeFileSync('abis/address.json', address, 'utf8', (err) => 
  {
    if (err) 
    {
      console.log(err)
    }
    console.log('Deployed', contract.address)
  })
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
