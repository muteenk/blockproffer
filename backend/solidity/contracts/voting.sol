//SPDX-License-Identifier: UNLICENSED
pragma solidity 0.8.17;

contract pollSystem
{
    struct Voter //struct containing voter parameters
    {
        bool hasVoted; //true if the voter has voted
        uint8 chosenOption; //address of the option/delegate chosen by the voter
        uint votes; //if votes != 0, the user has already voted or has tampered with the blockchain somehow
    }

    struct Options //struct containing the options for the poll
    {
        uint8 optionNumber; //address of the option/delegate
        uint voteCount; //number of votes for the option/delegate
    }

    address public administrator; //owner of the poll

    mapping(address => Voter) public voters; //dictionary of voters with their addresses as keys

    Options[] public options; //list of options

    constructor(uint8[] memory optionNames) //executes automatically on start
    {
        administrator = msg.sender; //sets the administrator to one which sends the constructor its initial arguement

        for (uint i = 0; i < optionNames.length; i++) //feeds all the options into the options list while setting the vote count to 0
        {
            options.push(Options({optionNumber: optionNames[i], voteCount: 0})); //pushes the option into the list
        }  
    }

    function canVote(address voter) public 
    {
        require(msg.sender == administrator,"Only the server can initiate the contract"); //A person will only be able to vote if the constructor is initialised
        require(!voters[voter].hasVoted,"The voter already voted."); 
        require(voters[voter].votes == 0); //should have 0 votes by default
        
        voters[voter].votes = 1;   
    }

    function chosenOption(uint8 _optionNumber) public 
    {
        Voter storage sender = voters[msg.sender]; //sets the sender to the voter who called the function
        require(!sender.hasVoted, "You already voted.");

        sender.chosenOption = _optionNumber;
        options[sender.chosenOption].voteCount += sender.votes;
        sender.hasVoted = true;
    }

    function showResult() public view
    {
        
    }
}