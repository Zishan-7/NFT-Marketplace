require("@nomiclabs/hardhat-waffle");
const fs = require("fs");
// const infuraId = fs.readFileSync(".infuraid").toString().trim() || "";

module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      chainId: 1337,
    },
    goreli: {
      url: "https://goerli.infura.io/v3/1293bf2efa764cceb0a3b8532d57f132",
      accounts: [
        "50b615d1616d32a8d127c2d9502ec7224a3da93ea36dd866ff341e5d2ced6e3d",
      ],
    },
    /*
    mumbai: {
      // Infura
      // url: `https://polygon-mumbai.infura.io/v3/${infuraId}`
      url: "https://rpc-mumbai.matic.today",
      accounts: [process.env.privateKey]
    },
    matic: {
      // Infura
      // url: `https://polygon-mainnet.infura.io/v3/${infuraId}`,
      url: "https://rpc-mainnet.maticvigil.com",
      accounts: [process.env.privateKey]
    }
    */
  },
  solidity: {
    version: "0.8.4",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
};
