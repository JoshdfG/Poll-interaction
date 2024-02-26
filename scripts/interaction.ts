import { ethers } from "hardhat";

async function main() {
  const pollQuestions = "Presidential candidate";
  const options = ["OBI", "TINUBU", "ATIKU"];

  const VotingPollFactory = "0xd46dF141bcB314C96360597Fbe26a6892ba9feaf";
  const VotingFactory = await ethers.getContractAt(
    "IVotingFactoryPoll",
    VotingPollFactory
  );

  const createWalletTx = await VotingFactory.createVotingPoll(
    pollQuestions,
    options
  );
  await createWalletTx.wait();

  const clones = await VotingFactory.getDeployedPolls();

  console.log(clones);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
