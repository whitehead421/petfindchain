<template>
  <div
    class="flex flex-col items-center justify-center gap-2 min-h-[calc(100vh-11rem-2px)]"
  >
    <div class="card">
      {{ web3Store.account }}
    </div>
    <button
      @click="addPet"
      class="card !w-min-content !truncate active:scale-95"
    >
      CLICK TO ADD RANDOM PET
    </button>
    <button
      @click="buyPetFood"
      class="card !w-min-content !truncate active:scale-95"
    >
      CLICK TO Buy PET FOOD
    </button>
    <div v-for="pet in allPets" :key="pet.microchipId" class="card">
      {{ pet.owner }}
      <br />
      {{ pet.microchipId }}
      <br />
      {{ pet.name }}
      <br />
      {{ pet.breed }}
      <br />
      {{ pet.color }}
      <br />
      {{ pet.age }}
    </div>
  </div>
</template>

<script setup>
import {ethers} from "ethers";
const web3Store = useWeb3Store();
const allPets = ref([]);

//  function addPet(
//         uint256 microchipId,
//         string memory name,
//         string memory breed,
//         string memory color,
//         uint256 age
//     ) external {
const addPet = async () => {
  if (web3Store.web3.contract) {
    const transaction = await web3Store.web3.contract.addPet(
      "233234",
      "Catty",
      "Cat",
      "Black",
      1
    );
    await transaction.wait();
    console.log("contract", await web3Store.web3.contract.getAllPets());
  } else {
    console.log("no contract");
  }
};

const buyPetFood = async () => {
  if (web3Store.web3.contract) {
    console.log(ethers);
    const amountInETH = ethers.parseEther("0.000000004");
    const amount = {value: amountInETH};
    console.log(amount);
    const transaction = await web3Store.web3.contract.buyPetFood(4000000000n, amount);
    await transaction.wait();
    console.log("transaction successfully completed",);
  } else {
    console.log("no contract");
  }
};

watchEffect(async () => {
  if (web3Store.web3.contract) {
    const response = await web3Store.web3.contract.getAllPets();
    const pets = await response;
    allPets.value = pets;
  }
});
</script>

<style scoped>
.card {
  @apply w-min;
  @apply px-2 py-1;
  @apply font-thin;
  @apply border;
  @apply border-[#dfe0e1] bg-[#f8f9fa];
  @apply rounded-md;
}
</style>
