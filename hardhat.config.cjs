require("@nomiclabs/hardhat-ganache");
require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

const { SEPOLIA_URL, ACCOUNT_PRIVATE_KEY } = process.env;

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.23",
  networks: {
    sepolia: {
      url: SEPOLIA_URL,
      accounts: [ACCOUNT_PRIVATE_KEY],
    },
  },
};
