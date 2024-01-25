<template>
  <div class="card flex flex-col h-min w-72 cursor-pointer">
    <!-- Card Header -->
    <div
      class="text-lg text-center p-2 px-10 text-white bg-primary flex flex-col"
      :class="{ 'bg-secondary !text-primary': !pet.isFound }"
    >
      <span class="capitalize">
        {{ pet.name }} <span class="text-xs">({{ pet.age }})</span>
      </span>
      <span
        title="View on Etherscan"
        @click="goToTransaction(pet.owner)"
        class="text-xs underline cursor-pointer font-thin text-secondary"
        :class="{ 'bg-secondary !text-primary': !pet.isFound }"
      >
        {{ addressShortener(pet.owner) }}
      </span>
    </div>
    <!-- Card Body -->
    <div class="flex flex-col p-2">
      <div class="flex flex-col px-1">
        <label class="font-thin text-xs"> Microchip ID </label>
        <span>{{ pet.microchipId }}</span>
      </div>
      <div class="flex flex-col px-1">
        <label class="font-thin text-xs"> Last Seen </label>
        <span class="capitalize">{{ pet.location }}</span>
      </div>

      <div class="flex flex-col px-1">
        <label class="font-thin text-xs"> Color </label>
        <span class="capitalize">{{ pet.color }}</span>
      </div>
      <div class="flex flex-col px-1">
        <label class="font-thin text-xs"> Breed </label>
        <span class="capitalize">{{ pet.breed }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  pet: {
    type: Object,
    required: true,
  },
});

const goToTransaction = (address) => {
  window.open(`https://sepolia.etherscan.io/address/${address}`, "_blank");
};
</script>

<style scoped>
.card {
  @apply font-bold;
  @apply transition-colors duration-300;
  @apply border border-black;
  /* shadow */
  box-shadow: 3px 3px 0px rgba(0, 0, 0, 0.8);
}
</style>
