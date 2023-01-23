//SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

contract pollSystem
{
    struct Voter //struct containing voter parameters
    {
        bool hasVoted; //true if the voter has voted
        address chosenOption; //address of the option/delegate chosen by the voter
        uint vote; //index of the voted option/delegate
    }

    struct Options //struct containing the options for the poll
    {
        bytes32 optionName; //name of the option/delegates
        uint voteCount; //number of votes for the option/delegate
    }

    address public administrator; //owner of the poll

    mapping(address => Voter) public voters; //mapping of voters

    Options[] public options; //list of options
    
    constructor(bytes32[] memory optionNames)
    {
        administrator = msg.sender;

        for (uint i = 0; i < optionNames.length; i++) 
        {
            options.push(Options({optionName: optionNames[i], voteCount: 0}));
        }  
    }

    function giveRightToVote(address voter) public 
    {
        require(msg.sender == administrator,"Only chairperson can give right to vote.");
        require(!voters[voter].hasVoted,"The voter already voted.");    
    }
}