import { defineStore } from "pinia";
import { ethers } from "ethers";

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
      console.log("Account saved to store: ", payload);
      this.account = payload;
    },
    async addPetToChain(payload) {
      const { $nt } = useNuxtApp();

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
        $nt.show({
          content: "No contract found!",
          duration: 2000,
          transition: {
            name: "fadeIn",
          },
        });
      }
    },
    async getAllPets() {
      const { $nt } = useNuxtApp();

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
        $nt.show({
          content: "Pets fetched succesfully!",
          duration: 2000,
          transition: {
            name: "fadeIn",
          },
        });
        return petsArray;
      } else {
        $nt.show({
          content: "No contract found!",
          duration: 2000,
          transition: {
            name: "fadeIn",
          },
        });
      }
    },
    async buyPetFood() {
      const { $nt } = useNuxtApp();

      const ONE_USD_IN_ETH = 0.000448;
      // const ONE_WEI_IN_ETH = 0.000000000000000001;

      if (this.web3.contract) {
        const amount = ethers.parseEther((ONE_USD_IN_ETH * 11.2).toString());
        const transaction = await this.web3.contract.buyPetFood(amount, {
          value: amount,
        });
        await transaction.wait();
        $nt.show({
          content: "Transaction successful!",
          duration: 2000,
          transition: {
            name: "fadeIn",
          },
        });
      } else {
        $nt.show({
          content: "No contract found!",
          duration: 2000,
          transition: {
            name: "fadeIn",
          },
        });
      }
    },
    async markAsFound(payload) {
      const { $nt } = useNuxtApp();
      if (this.web3.contract) {
        const transaction = await this.web3.contract.markAsFound(payload);
        await transaction.wait();
        this.pets = await this.web3.contract.getAllPets();
      } else {
        $nt.show({
          content: "No contract found!",
          duration: 2000,
          transition: {
            name: "fadeIn",
          },
        });
      }
    },
    async getPurchaseStatistics() {
      const { $nt } = useNuxtApp();
      ("");
      if (this.web3.contract) {
        const response = await this.web3.contract.getPurchaseStatistics();
        const foodStatistics = await response;
        return foodStatistics;
      } else {
        $nt.show({
          content: "No contract found!",
          duration: 2000,
          transition: {
            name: "fadeIn",
          },
        });
      }
    },
  },
});
