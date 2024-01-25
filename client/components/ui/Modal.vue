<!-- Modal -->
<template>
  <teleport to="body" v-if="isOpen">
    <div
      class="absolute top-0 left-0 w-full h-full bg-secondary/40 flex justify-center items-center"
    >
      <div class="relative modal bg-secondary p-8 border z-10">
        <div class="absolute top-0 left-0 w-full h-full bg-image -z-10"></div>
        <!-- Close button -->
        <button
          class="absolute top-1 right-1 p-2 z-40 bg-primary/60 rounded-full hover:bg-primary/80 focus:outline-none focus:ring ring-primary/60"
          @click="$emit('close')"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-4 w-4 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        <slot></slot>
      </div>
    </div>
  </teleport>
</template>

<script setup>
defineProps({
  isOpen: {
    type: Boolean,
    default: false,
  },
});

defineEmits(["close"]);
</script>

<style scoped>
.modal {
  /* shadow */
  box-shadow: 3px 3px 0px rgba(0, 0, 0, 0.8);
}

.bg-image {
  background-image: url("~/assets/images/bg-pattern.png");
  background-size: contain;
  background-position: center;
  background-repeat: repeat;
  filter: invert(51%) sepia(18%) saturate(4913%) hue-rotate(326deg)
    brightness(100%) contrast(96%);
  opacity: 0.2;
}
</style>
