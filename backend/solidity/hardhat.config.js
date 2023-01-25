require("@nomiclabs/hardhat-ganache");

module.exports = 
{
  solidity: "0.8.17",
  network:
  {
    ganache: 
    {
      url: '',
      accounts: ['c7d2bbc15215910b453bb63dbf0067eb42a943e1751e3608b53daa8ef669be97'],
      
    }
  }

};
