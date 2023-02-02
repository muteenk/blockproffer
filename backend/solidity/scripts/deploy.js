const { ethers } = require('hardhat')
const fs = require('fs')

async function main() 
{
  const base_uri = ''
  const Contract = await ethers.getContractFactory('pollSystem')
  const contract = await Contract.deploy(base_uri)

  await contract.deployed()

  const address = JSON.stringify({ address: contract.address }, null, 5)
  fs.writeFileSync('.solidity/abis/contractAddress.json', address, 'utf-8', (err) => 
    {
     if (err) 
     {
       console.log(err)
       return
     }
     console.log('Deployed contract address', contract.address)
    }
  ) 
}

main().catch((error) => 
{
  console.error(error)
  process.exitCode = 1
})