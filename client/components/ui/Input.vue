<template>
  <input
    class="focus:ring focus:ring-primary/60 focus:ring-offset-2 rounded-md outline-none placeholder:text-sm"
    v-model="model"
  />
</template>

<script setup>
const model = defineModel();
</script>
