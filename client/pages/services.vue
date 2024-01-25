<template>
  <div class="flex flex-col min-h-[calc(100vh-11rem-2px)]">
    <div class="p-2 flex flex-col min-w-[320px]">
      <div class="flex justify-center items-center gap-4">
        <UiButton variant="secondary" class="h-min" @click="openAddModal"
          >Add Pet</UiButton
        >
      </div>
    </div>
    <div class="w-full flex flex-wrap gap-4 p-2">
      <PetCard v-for="pet in allPets" :key="pet.microchipId" :pet="pet" />
    </div>

    <AddPetModal :isOpen="isOpen" @close="close" />
    <UiSpinner v-if="loading" />
  </div>
</template>

<script setup>
import { ethers } from "ethers";
const web3Store = useWeb3Store();

const loading = ref(false);
const allPets = ref([]);
const isOpen = ref(false);

const cols = [
  {
    key: "owner",
    label: "Owner Address",
  },
  {
    key: "microchipId",
    label: "Microchip ID",
  },
  {
    key: "name",
    label: "Name",
  },
  {
    key: "color",
    label: "Color",
  },
  {
    key: "location",
    label: "Location",
  },
  {
    key: "breed",
    label: "Breed",
  },
  {
    key: "age",
    label: "Age",
  },
  {
    key: "isFound",
    label: "Is Found",
  },
];

const openAddModal = () => {
  isOpen.value = true;
};
const close = () => {
  isOpen.value = false;
};

const handleGetAllPets = async () => {
  loading.value = true;
  allPets.value = await web3Store.getAllPets();
  loading.value = false;
};

const isAuthenticated = computed(() => {
  return web3Store.account !== null;
});

const ONE_USD_IN_ETH = 0.000448;
// const ONE_WEI_IN_ETH = 0.000000000000000001;

// Lets say food is 20.99 USD
const buyPetFood = async () => {
  if (web3Store.web3.contract) {
    const amount = ethers.parseEther((ONE_USD_IN_ETH * 20.99).toString());
    const transaction = await web3Store.web3.contract.buyPetFood(amount, {
      value: amount,
    });
    await transaction.wait();
    console.log("transaction successfully completed");
  } else {
    console.log("no contract");
  }
};

onMounted(async () => {
  await handleGetAllPets();
});
</script>
