<template>
  <header
    class="flex justify-between items-center border border-gray px-10 border-collapse"
  >
    <h1 class="text-3xl flex font-bold">
      PET
      <span class="text-primary">FIND</span>
      CHAIN
    </h1>
    <nav>
      <ul class="flex w-full h-20">
        <li
          v-for="navItem in navList"
          :key="navItem.name"
          class="text-gray h-full flex items-center justify-center px-8"
          :class="{
            '!text-primary bg-primary/10 border-primary border-b-4':
              navItem.active,
          }"
        >
          <NuxtLink :to="navItem.path">{{ navItem.name }}</NuxtLink>
        </li>
      </ul>
    </nav>
    <div class="flex text-primary gap-8">
      <NuxtLink to="/login">LOGIN</NuxtLink>
      <NuxtLink to="/register">REGISTER</NuxtLink>
    </div>
  </header>
</template>

<script setup>
defineProps({
  navList: {
    type: Array,
    required: true,
  },
});
</script>
