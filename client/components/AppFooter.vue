<template>
  <footer class="flex justify-between items-center px-10 bg-[#323136] h-24">
    <h1 class="text-3xl flex font-bold text-white">
      PET
      <span class="text-primary">FIND</span>
      CHAIN
    </h1>
    <p class="flex flex-col text-center">
      <span class="text-neutral-300">© 2023-2024 PetFindChain</span>
      <span class="text-neutral-300">All rights reserved.</span>
    </p>
  </footer>
</template>

<script setup>
defineProps({
  navList: {
    type: Array,
    required: true,
  },
});
</script>
