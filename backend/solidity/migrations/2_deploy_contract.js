var pollSystem = artifacts.require("pollSystem");
var listOptions = ['0x287A61aeF44dca6e774A9730F7BcE386a509AB85']

module.exports = function(deployer)
{
    deployer.deploy(pollSystem, listOptions); //Feeds contract identifier and addresses of the option/delegates
};