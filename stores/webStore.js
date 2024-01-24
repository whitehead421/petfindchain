import { defineStore } from "pinia";

export const useWeb3Store = defineStore("web3", {
  state: () => ({
    web3: {
      provider: null,
      signer: null,
      contract: null,
    },
    account: null,
  }),
  getters: {
    getInstance: (state) => state.web3,
    getAccount: (state) => state.account,
  },
  actions: {
    registerWeb3Instance(payload) {
      let result = payload;
      let web3Copy = this.web3;
      web3Copy.signer = result.signer;
      web3Copy.provider = result.provider;
      web3Copy.contract = result.contract;
      this.web3 = web3Copy;
    },
    registerAccount(payload) {
      this.account = payload;
    },
  },
});
