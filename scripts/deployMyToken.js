const { ethers } = require("hardhat");

async function main() {
  const [deployer] = await ethers.getSigners();

  console.log("Deploying MyToken with address:", deployer.address);

  const MyToken = await ethers.getContractFactory("MyToken");
  const myToken = await MyToken.deploy();

  console.log("MyToken deployed to:", myToken.address);

  // Minting 100 tokens to the deployer
  await myToken.connect(deployer).mint(deployer.address, 100);

  console.log("Minted 100 tokens to deployer");

}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
