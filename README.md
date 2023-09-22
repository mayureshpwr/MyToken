Overview
This project implements an ERC20 token on the Ethereum blockchain using Solidity and deploys it using Hardhat. The token is named "MyToken" (MTK) and has an initial supply of 100 tokens.

Getting Started........
Prerequisites
Node.js and npm installed
Hardhat and required dependencies

Installation-
Install dependencies:
npm install

Compile the contracts:
npx hardhat compile

Deploy the ERC20 token:
npx hardhat run scripts/deployMyToken.js --network ganache
This will deploy the MyToken contract and mint 100 tokens to the deployer's address.

Project Structure
contracts/: Contains the Solidity smart contract for the ERC20 token.
scripts/: Contains the deployment script.
hardhat.config.js: Hardhat configuration file.
README.md: Project documentation.
License
This project is licensed under the MIT License.

Acknowledgments
OpenZeppelin: For providing standard contracts and security best practices.
Credits
Author: Mayuresh Pawar
Email: mannpawar20@gmail.com