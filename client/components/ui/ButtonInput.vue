<template>
  <div class="input-container flex">
    <input
      :placeholder="placeholder"
      class="flex-1 p-2 border-none outline-none placeholder:text-sm placeholder:uppercase placeholder:tracking-wider placeholder:text-neutral-400"
    />
    <UiButton variant="primary" class="tracking-widest uppercase">
      Subscribe
    </UiButton>
  </div>
</template>

<script setup>
defineProps({
  placeholder: {
    type: String,
    default: "Enter your email address",
  },
});
</script>

<style scoped>
.input-container {
  @apply font-bold;
  @apply transition-colors duration-300;
  @apply border border-black;
  /* shadow */
  box-shadow: 3px 3px 0px rgba(0, 0, 0, 0.8);
}
</style>
