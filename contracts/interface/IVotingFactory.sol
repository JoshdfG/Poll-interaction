// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

interface IVotingFactoryPoll {
    function createVotingPoll(
        string memory _pollQuestion,
        string[] memory _options
    ) external;

    function getDeployedPolls() external view returns (address[] memory);
}
