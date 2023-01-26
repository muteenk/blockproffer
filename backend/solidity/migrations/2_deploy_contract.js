var pollSystem = artifacts.require("pollSystem");

module.exports = function(deployer)
{
    deployer.deploy(pollSystem);
};