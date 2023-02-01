//SPDX-License-Identifier: UNLICENSED

pragma solidity 0.8.17;

contract pollSystem
{
    struct Voter
    {
        string currentPoll;
        bool hasVoted;
        uint chosenOption;
    }

    struct Poll
    {
        string pollID;
        uint option1;
        uint option2;
        uint option3;
        uint option4;
        uint option5;
        uint option6;
        uint option7;
        uint option8;
        uint option9;
        uint option10;
    }

    Poll[] public polls;

    function createPoll(string memory _pollID) public
    {
        polls.push(Poll(_pollID, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0));
    }

    function viewResult(string memory _pollID) public view returns (Poll memory _foundPoll)
    {
        for(uint i = 0; i < polls.length; i++)
        {
            if (keccak256(abi.encodePacked(polls[i].pollID)) == (keccak256(abi.encodePacked(_pollID))))
            {
                _foundPoll = polls[i];
            }

        }
    }

    function vote(string memory _pollID, uint _chosenOption) public
    {
        for(uint i = 0; i < polls.length; i++)
        {
            if (keccak256(abi.encodePacked(polls[i].pollID)) == (keccak256(abi.encodePacked(_pollID))))
            {
                if (_chosenOption == 1)
                {
                    polls[i].option1++;
                }
                else if (_chosenOption == 2)
                {
                    polls[i].option2++;
                }
                else if (_chosenOption == 3)
                {
                    polls[i].option3++;
                }
                else if (_chosenOption == 4)
                {
                    polls[i].option4++;
                }
                else if (_chosenOption == 5)
                {
                    polls[i].option5++;
                }
                else if (_chosenOption == 6)
                {
                    polls[i].option6++;
                }
                else if (_chosenOption == 7)
                {
                    polls[i].option7++;
                }
                else if (_chosenOption == 8)
                {
                    polls[i].option8++;
                }
                else if (_chosenOption == 9)
                {
                    polls[i].option9++;
                }
                else if (_chosenOption == 10)
                {
                    polls[i].option10++;
                }
            }
        }
    }
}

