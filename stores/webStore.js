import { defineStore } from "pinia";

export const useWeb3Store = defineStore("web3", {
  state: () => ({
    web3: {
      networkId: null,
      coinbase: null,
      balance: null,
    },
  }),
  getters: {
    // doubleCount: (state) => state.count * 2,
    getInstance: (state) => state.web3,
  },
  actions: {
    // increment() {
    //   this.count++;
    // },
    registerWeb3Instance(payload) {
      console.log("registerWeb3Instance Action being executed", payload);
      let result = payload;
      let web3Copy = this.web3;
      web3Copy.coinbase = result.coinbase;
      web3Copy.networkId = result.networkId;
      web3Copy.balance = parseInt(result.balance, 10);
      this.web3 = web3Copy;
    },
  },
});
