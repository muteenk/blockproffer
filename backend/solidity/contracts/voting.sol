//SPDX-License-Identifier: UNLICENSED
pragma solidity 0.8.17;

contract pollSystem 
{
    struct PollStruct //This describes the content of each poll created in our platform.
    {
        uint id;
        uint votes;
        uint contestants;
        bool deleted;
        address director;
        uint timestamp;
    }

    struct VoterStruct //This models the information of a voter, user, or contestant on the platform.
    {
        uint id;
        string fullname;
        address voter;
        uint votes;
        address[] voters;
    }

    uint totalPolls; //This keeps track of the number of polls created on the smart contract.
    uint totalUsers; //This carries the total number of users registered on the platform.
    PollStruct[] polls;

    mapping(address => VoterStruct) public users; //This maps users' addresses to their respective data using the VoterStruct.
    mapping(uint =>  mapping(address => bool)) voted; //This keeps track of the voting status of each user on different polls.
    mapping(uint =>  mapping(address => bool)) contested; //This tells if a contestant has or has not contested for a particular poll.
    mapping(uint =>  VoterStruct[]) contestantsIn; //This holds the data for every contestant in a given poll.
    mapping(uint =>  bool) pollExist; //This checks if a specific poll Id exists or not on the platform.

    //This emits information about the current user who voted
    event Voted 
    (
        string fullname,
        address indexed voter,
        uint timestamp
    );

    //This modifier prevents unregistered users from accessing unauthorized functions.
    modifier userOnly() 
    {
        require(users[msg.sender].voter == msg.sender, "You've gotta register first");
        _;
    }

    //This takes data about a poll from a registered user and creates a poll after validating that the information meets standards.
    function createPoll() public userOnly {
        PollStruct memory poll;
        poll.id = totalPolls++;
        poll.director = msg.sender;
        poll.timestamp = block.timestamp;

        polls.push(poll);
        pollExist[poll.id] = true;
    }

    //This function enables the poll creator to toggle the deleted key to true, thereby making the poll unavailable for circulation.
    function deletePoll(uint id) public userOnly {
        require(pollExist[id], "Poll not found");
        require(polls[id].director == msg.sender, "Unauthorized entity");
        polls[id].deleted = true;
    }

    //This returns all the polls created by every user on the platform.
    function getPoll(uint id) public view returns (PollStruct memory) {
        return polls[id];
    }

    //This returns information about a specific poll from our platform.
    function getPolls() public view returns (PollStruct[] memory) {
        return polls;
    }

    //This function enables a user to sign up with his full name and image avatar.
    function register(
        string memory fullname
    ) public {
        VoterStruct memory user;
        user.id = totalUsers++;
        user.fullname = fullname;
        user.voter = msg.sender;
        users[msg.sender] = user;
    }

    //This function gives a registered user the chance to become a contestant on a given poll provided that the poll has not started.
    function contest(uint id) public userOnly {
        require(pollExist[id], "Poll not found");
        require(!contested[id][msg.sender], "Already contested");

        VoterStruct memory user = users[msg.sender];
        contestantsIn[id].push(user);
        contested[id][msg.sender] = true;
        polls[id].contestants++;
    }

    //This function lists out all the contestants who contested for a particular poll.
    function listContestants(uint id) public view returns (VoterStruct[] memory) {
        require(pollExist[id], "Poll not found");
        return contestantsIn[id];
    }

    //This function enables a user to vote for one contestant per poll within the period stipulated for voting.
    function vote(uint id, uint cid) public userOnly {
        require(pollExist[id], "Poll not found");
        require(!voted[id][msg.sender], "Already voted");
        require(!polls[id].deleted, "Polling already started");

        polls[id].votes++;
        contestantsIn[id][cid].votes++;
        contestantsIn[id][cid].voters.push(msg.sender);
        voted[id][msg.sender] = true;

        emit Voted (
            users[msg.sender].fullname,
            msg.sender,
            block.timestamp
        );
    }
}