<template>
  <div class="card flex flex-col border-dark border">
    <div class="flex justify-center bg-white p-4 w-full h-full">
      <img :src="image" :alt="name" class="w-36 h-36 object-contain" />
    </div>
    <div class="flex justify-between bg-secondary p-2 px-6 text-left">
      <div class="flex flex-col gap-1">
        <span class="text-neutral-500 font-light">{{ name }}</span>
        <span class="text-base text-dark">{{ price }}$</span>
      </div>
      <img
        src="~/assets/icons/cart.svg"
        alt="Add to cart"
        class="w-8 cursor-pointer active:scale-95"
      />
    </div>
  </div>
</template>

<script setup>
defineProps({
  name: String,
  description: String,
  price: String,
  image: String,
});
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
