<template>
  <div class="flex flex-col min-h-[calc(100vh-11rem-2px)]">
    <div class="p-2 flex flex-col min-w-[320px]">
      <div class="flex justify-center items-center gap-4">
        <UiButton variant="secondary" class="h-min" @click="openAddModal"
          >Add Pet</UiButton
        >
        <UiButton variant="secondary" class="h-min" @click="handleMarkAsFound"
          >Mark as found</UiButton
        >
      </div>
    </div>
    <div class="w-full flex flex-wrap gap-4 p-2">
      <PetCard
        @click="selectPetCard(pet)"
        v-for="pet in allPets"
        :key="pet.microchipId"
        :pet="pet"
        :selected="selectedPet?.microchipId === pet.microchipId"
      />
    </div>

    <AddPetModal :isOpen="isOpen" @close="close" />
    <UiSpinner v-if="loading" />
  </div>
</template>

<script setup>
const web3Store = useWeb3Store();
const { $nt } = useNuxtApp();

const loading = ref(false);
const allPets = ref([]);
const isOpen = ref(false);

const selectedPet = ref(null);

const selectPetCard = (pet) => {
  selectedPet.value = pet;
};

const openAddModal = () => {
  isOpen.value = true;
};
const close = () => {
  isOpen.value = false;
};

const handleGetAllPets = async () => {
  loading.value = true;
  allPets.value = await web3Store.getAllPets();
  console.log(allPets.value);
  loading.value = false;
};

const handleMarkAsFound = async () => {
  try {
    if (!selectedPet.value) {
      $nt.show("Please select a pet first!");
      return;
    }
    if (!selectedPet.value.microchipId) {
      $nt.show("The pet does not have a microchip ID!");
      return;
    }
    if (selectedPet.value.isFound) {
      $nt.show("The pet is already marked as found!");
      return;
    }
    if (!compareAddress(selectedPet.value.owner, web3Store.account)) {
      $nt.show("You are not the owner of this pet!");
      return;
    }
    loading.value = true;
    await web3Store.markAsFound(selectedPet.value.microchipId);
    await handleGetAllPets();
    loading.value = false;
  } catch (error) {
    console.error(error);
    $nt.show("Something went wrong!");
  }
};

watchEffect(() => {
  if (web3Store.web3.contract) {
    handleGetAllPets();
  }
});

onMounted(async () => {
  await handleGetAllPets();
});
</script>
