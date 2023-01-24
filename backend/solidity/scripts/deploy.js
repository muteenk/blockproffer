const hre = require("hardhat");
const main = async () => 
{
  const voting = await hre.ethers.getContractFactory("Voting");
  const votingContract = await voting.deploy();

  await votingContract.deployed();

  console.log("Voting contract deployed to:", votingContract.address);
}

const runMain = async () => 
{
  try 
  {
    await main();
    process.exit(0);
  }

  catch (error)
  {
    console.error(error);
    process.exit(1);
  }
}

runMain();