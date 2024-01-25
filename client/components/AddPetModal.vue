<template>
  <UiModal :isOpen="isOpen" @close="$emit('close')">
    <form @submit.prevent="addPet" class="flex flex-col gap-2 p-2">
      <div class="flex gap-2">
        <div class="flex flex-col gap-2">
          <div class="form-control-group">
            <UiLabel for="petId">Microchip ID</UiLabel>
            <UiInput
              type="number"
              id="petId"
              class="border border-gray p-2"
              v-model="microchipId"
            />
          </div>
          <div class="form-control-group">
            <UiLabel for="petId">Name</UiLabel>
            <UiInput
              type="text"
              class="border border-gray p-2"
              v-model="name"
            />
          </div>
          <div class="form-control-group">
            <UiLabel for="petId">Color</UiLabel>
            <UiInput
              type="text"
              class="border border-gray p-2"
              v-model="color"
            />
          </div>
        </div>
        <div class="flex flex-col gap-2">
          <div class="form-control-group">
            <UiLabel for="petId">Location</UiLabel>
            <UiInput
              type="text"
              class="border border-gray p-2"
              v-model="location"
            />
          </div>
          <div class="form-control-group">
            <UiLabel for="petId">Breed</UiLabel>
            <UiInput
              type="text"
              class="border border-gray p-2"
              v-model="breed"
            />
          </div>
          <div class="form-control-group">
            <UiLabel for="petId">Age</UiLabel>
            <UiInput
              type="number"
              class="border border-gray p-2"
              v-model="age"
            />
          </div>
        </div>
      </div>
      <div class="flex justify-end">
        <UiButton
          variant="primary"
          class="relative !p-2 !shadow-none"
          type="submit"
          :disabled="loading"
          :class="{
            'animate-pulse': loading,
            '!bg-primary': !loading,
          }"
        >
          <span> Add Pet </span>
        </UiButton>
      </div>
    </form>
    <UiSpinner v-if="loading" />
  </UiModal>
</template>

<script setup>
const web3Store = useWeb3Store();

const loading = ref(false);

const microchipId = ref(0);
const name = ref("");
const color = ref("");
const location = ref("");
const breed = ref("");
const age = ref(0);

defineProps({
  isOpen: {
    type: Boolean,
    default: false,
  },
});

defineEmits(["close"]);

const addPet = async () => {
  console.log("Adding pet...");
  loading.value = true;
  const pet = {
    microchipId: microchipId.value,
    name: name.value,
    color: color.value,
    location: location.value,
    breed: breed.value,
    age: age.value,
  };
  await web3Store.addPetToChain(pet);
  loading.value = false;
};
</script>

<style scoped>
.form-control-group {
  @apply flex flex-col;
}
</style>
