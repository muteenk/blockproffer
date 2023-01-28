var pollSystem = artifacts.require("pollSystem");
var listOptions = []


function addOptions(options){
    options.map((option) => {
    listOptions = [...listOptions, option.optionNumber];
    })
}

function dep(deployer)
{
    deployer.deploy(pollSystem, listOptions); //Feeds contract identifier and addresses of the option/delegates
};

module.exports = {
    dep,
    addOptions
}