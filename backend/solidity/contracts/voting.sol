//SPDX-License-Identifier: UNLICENSED
pragma solidity 0.8.17;

//["0x666f6f0000000000000000000000000000000000000000000000000000000000","0x6261720000000000000000000000000000000000000000000000000000000000"]

contract pollSystem
{
    struct Voter //struct containing voter parameters
    {
        uint weight; //???
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
    
    constructor(bytes32[] memory optionNames) //executes automatically on start
    {
        administrator = msg.sender; //sets the administrator to the creator of the contract

        for (uint i = 0; i < optionNames.length; i++) //feeds all the options into the options list while setting the vote count to 0
        {
            options.push(Options({optionName: optionNames[i], voteCount: 0}));
        }  
    }

    function canVote(address voter) public 
    {
        require(msg.sender == administrator,"Only chairperson can give right to vote."); //A person will only be able to vote if the consructor is initialised
        require(!voters[voter].hasVoted,"The voter already voted."); 
        require(voters[voter].weight == 0);
        voters[voter].weight = 1;   
    }

    function chosenOption(address to) public {
        Voter storage sender = voters[msg.sender];
        require(!sender.hasVoted, "You already voted.");
        require(to != msg.sender, "Self-delegation is disallowed.");

        while (voters[to].chosenOption != address(0)) {
            to = voters[to].chosenOption;

            // We found a loop in the delegation, not allowed.
            require(to != msg.sender, "Found loop in delegation.");
        }
        sender.hasVoted = true;
        sender.chosenOption = to;
        Voter storage chosenOption_ = voters[to];
        if (chosenOption_.hasVoted) 
        {
            options[chosenOption_.vote].voteCount += sender.weight; //??? If the delegate already voted, directly add to the number of votes 
        } 
        
        else 
        {
            //??? If the delegate did not vote yet, add to her weight.
            chosenOption_.weight += sender.weight;
        }
    }

    function vote(uint option) public {
        Voter storage sender = voters[msg.sender];
        require(sender.weight != 0, "Has no right to vote");
        require(!sender.hasVoted, "Already voted.");
        sender.hasVoted = true;
        sender.vote = option;

        // If 'proposal' is out of the range of the array, this will throw automatically and revert all changes.
        options[option].voteCount += sender.weight;
    }

    /*
     * @dev Computes the winning proposal taking all previous votes into account.
     * @return winningProposal_ index of winning proposal in the proposals array
     */

    function winningOption() public view
            returns (uint winningOption_)
    {
        uint winningVoteCount = 0;
        for (uint p = 0; p < options.length; p++) {
            if (options[p].voteCount > winningVoteCount) {
                winningVoteCount = options[p].voteCount;
                winningOption_ = p;
            }
        }
    }

    /*
     * @dev Calls winningProposal() function to get the index of the winner contained in the proposals array and then
     * @return winnerName_ the name of the winner
     */

    function winnerName() public view
            returns (bytes32 winnerName_)
    {
        winnerName_ = options[winningOption()].optionName;
    }
}