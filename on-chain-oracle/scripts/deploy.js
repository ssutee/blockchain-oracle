const { web3 } = require("hardhat");
const { default: BigNumber } = require("bignumber.js");
const Oracle = artifacts.require("Oracle");

async function main() {
    const accounts = await web3.eth.getAccounts();
    const deployer = accounts[0];
    const offChainOracle = accounts[8];
    console.log("Deploying contracts with the account:", deployer);
    let balance = new BigNumber(await web3.eth.getBalance(deployer));
    console.log(
        "Account balance:",
        balance.div(1E18).toString()
    );    
    const oracle = await Oracle.new();
    console.log("Oracle address: ", oracle.address);
    await oracle.addOracle(offChainOracle);
    console.log("Add off-chain oracle address:", offChainOracle);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });