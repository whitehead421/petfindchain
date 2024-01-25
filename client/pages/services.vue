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
const web3Store = useWeb3Store();

const loading = ref(false);
const allPets = ref([]);
const isOpen = ref(false);

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

watchEffect(() => {
  if (web3Store.web3.contract) {
    handleGetAllPets();
  }
});

onMounted(async () => {
  await handleGetAllPets();
});
</script>
