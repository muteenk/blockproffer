var pollSystem = artifacts.require("pollSystem");
var listOptions = [1,2,3,4,5,6,7];

module.exports = function(deployer)
{
    deployer.deploy(pollSystem, listOptions);
}