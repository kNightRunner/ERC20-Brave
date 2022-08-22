const { ethers } = require("hardhat");

async function main() {
  const emision = ethers.utils.parseEther("1000");

  const BraveCoin = await ethers.getContractFactory("Brave");

  const braveCoin = await BraveCoin.deploy(emision);

  await braveCoin.deployed();

  console.log("BraveCoin deployed address:", braveCoin.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

