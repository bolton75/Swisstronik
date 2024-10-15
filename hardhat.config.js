require("@nomicfoundation/hardhat-toolbox");

module.exports = {
  solidity: "0.8.20",
  networks: {
    swisstronik: {
      url: "https://json-rpc.testnet.swisstronik.com/",
      accounts: ["0x6bb0200d153c33fab0c4bbd69211985d2d14f69e2b12356811cab13ccb1a2cef"],
    },
  },
};
