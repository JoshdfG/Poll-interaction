// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

interface IvotingPoll {
    function vote(string memory _option) external;

    function getVotesCount(
        string memory _option
    ) external view returns (uint256);
}
