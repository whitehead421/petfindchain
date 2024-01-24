<template>
    <div class="card flex flex-col justify-between bg-white w-96 border-dark border shadow-lg p-8">
        <img :src="icon" class="w-12 h-12 mb-4" alt="Workflow Icon" />
        <h2 class="text-xl text-left font-semibold mb-4">{{ title }}</h2>
        <p class="text-left text-neutral-500 mb-4">{{ description }}</p>
        <div class="w-full flex justify-end">
            <p class="text-primary cursor-pointer text-right font-semibold mt-4 uppercase inline-block">Learn more →</p>
        </div>
    </div>
</template>

<script setup>
defineProps({
  description: String,
  title: String,
  icon: String,
});
</script>

<style scoped>
.card {
  @apply border border-black;
  box-shadow: 3px 3px 0px rgba(0, 0, 0, 0.8);
}
</style>
