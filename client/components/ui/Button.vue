<template>
  <button :class="`btn btn-${variant}`" :disabled="disabled">
    <slot></slot>
  </button>
</template>

<script setup>
defineProps({
  disabled: {
    type: Boolean,
    default: false,
  },
  variant: {
    type: String,
    default: "primary",
  },
});
</script>

<style scoped>
.btn {
  @apply px-8 py-4;
  @apply font-bold;
  @apply transition-colors duration-300;
  @apply border border-black;
  /* shadow */
  box-shadow: 3px 3px 0px rgba(0, 0, 0, 0.8);
}

.btn-primary {
  @apply bg-primary text-white;
}

.btn-secondary {
  @apply bg-secondary text-primary;
}

.btn:active {
  @apply scale-95;
}
</style>
