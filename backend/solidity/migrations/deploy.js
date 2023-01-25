var pollSystem = artifacts.require("./voting.sol");

module.exports = function(deployer)
{
    deployer.deploy(pollSystem);
}