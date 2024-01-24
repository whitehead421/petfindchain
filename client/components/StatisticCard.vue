<template>
  <div class="flex flex-col gap-4 first:justify-center items-center w-64">
    <img :src="icon" :alt="title" class="w-16 h-16" />
    <div class="flex flex-col gap-2 text-center">
      <span class="text-4xl font-bold">+{{ value }}</span>
      <span class="text-neutral-500 tracking-wider uppercase">{{ title }}</span>
    </div>
  </div>
</template>

<script setup>
defineProps({
  icon: String,
  title: String,
  value: String,
});
</script>
