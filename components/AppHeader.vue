<template>
  <header
    class="flex justify-between items-center border border-gray px-10 border-collapse bg-secondary"
  >
    <AnimatedLogo />
    <nav>
      <ul class="flex w-full h-20">
        <NuxtLink
          v-for="navItem in navList"
          :key="navItem.name"
          :to="navItem.path"
        >
          <li
            class="text-gray h-full flex items-center justify-center px-8"
            :class="{
              '!text-primary bg-primary/10 border-primary border-b-4':
                navItem.active,
            }"
          >
            {{ navItem.name }}
          </li>
        </NuxtLink>
      </ul>
    </nav>
    <Metamask @click="initWeb3" :disabled="isAuthenticated" />
  </header>
</template>

<script setup>
const web3Store = useWeb3Store();

const isAuthenticated = computed(() => {
  return web3Store.account !== null;
});

defineProps({
  navList: {
    type: Array,
    required: true,
  },
});
</script>
