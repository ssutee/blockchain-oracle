const { web3 } = require("hardhat");
const { default: BigNumber } = require("bignumber.js");
const Oracle = artifacts.require("Oracle");

async function main() {
    const oracle = await Oracle.at("0x9C195C247AaBF22aB431e313a7592F36F5ec93De");
    const value = await oracle.getValue("https://api.coingecko.com/api/v3/simple/price?ids=dopple-finance&vs_currencies=usd", "dopple-finance.usd");
    console.log(value);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });