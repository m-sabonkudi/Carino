/** @type import('hardhat/config').HardhatUserConfig */
require("@nomicfoundation/hardhat-toolbox")
require("@nomicfoundation/hardhat-verify");
require("dotenv").config();

module.exports = {
  solidity: "0.8.28",
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {},
    onino: {
      url: `https://rpctestnet.onino.io`,
      accounts: [process.env.METAMASK_PRIVATE_KEY]
    },
  },
  etherscan: {
    apiKey: {
      onino: "dummy"
    },
    customChains: [
      {
        network: "onino",
        chainId: 211223,
        urls: {
          apiURL: "https://testnet.explorer.onino.io/api",
          browserURL: "https://testnet.explorer.onino.io"
        }
      }
    ]
  },
};
