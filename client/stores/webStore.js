import { defineStore } from "pinia";

export const useWeb3Store = defineStore("web3", {
  state: () => ({
    web3: {
      provider: null,
      signer: null,
      contract: null,
    },
    account: null,
    pets: [],
    loading: false,
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
    async addPetToChain(payload) {
      console.log("addPetToChain", payload);
      if (this.web3.contract) {
        let transaction = await this.web3.contract.addPet(
          payload.microchipId,
          payload.name,
          payload.breed,
          payload.color,
          payload.location,
          payload.age
        );
        await transaction.wait();
        this.pets = await this.web3.contract.getAllPets();
      } else {
        console.log("No contract found");
      }
    },
    async getAllPets() {
      if (this.web3.contract) {
        const response = await this.web3.contract.getAllPets();
        const pets = await response;
        const petsArray = [];
        for (let i = 0; i < pets.length; i++) {
          const pet = await pets[i];
          petsArray.push({
            owner: pet.owner,
            microchipId: pet.microchipId.toString(),
            name: pet.name,
            breed: pet.breed,
            color: pet.color,
            location: pet.lastSeenLocation,
            age: pet.age.toString(),
            isFound: pet.isFound,
          });
        }
        await new Promise((resolve) => setTimeout(resolve, 2000));
        return petsArray;
      } else {
        console.log("No contract found");
      }
    },
  },
});
