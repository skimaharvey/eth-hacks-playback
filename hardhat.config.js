require("@nomiclabs/hardhat-waffle");
require("dotenv").config()

const {ALCHEMY_URL} = process.env

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});


const accounts = {
  // use default accounts
  mnemonic: `test test test test test test test test test test test junk`,
};


// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: {
    compilers: [
      // add missing versions here
      { version: "0.4.11" },
      // { version: "0.6.2" },
      // { version: "0.7.0" },
      // { version: "0.8.0" },
    ],
  },
  networks: {
    hardhat: {
      accounts,
      loggingEnabled: false,
      forking: {
        url: ALCHEMY_URL, // https://eth-mainnet.alchemyapi.io/v2/SECRET`,
        blockNumber: 11800000, // we will set this in each test
      },
    },
  },
};
