<template>
  <div class="w-full h-screen">
    <AppHeader :navList="navList" />
    <div class="flex-grow">
      <slot></slot>
    </div>
    <AppFooter :navList="navList" />
  </div>
</template>

<script setup>
const navList = ref([
  { name: "Home", path: "/", active: false },
  { name: "Services", path: "/services", active: false },
  { name: "About us", path: "/about", active: false },
  { name: "Contact", path: "/contact", active: false },
]);

onMounted(() => {
  navList.value.forEach((navItem) => {
    navItem.active = navItem.path === useRoute().path;
  });
});

// When route changes update header's navList
watch(
  () => useRoute().path,
  (newPath) => {
    navList.value.forEach((navItem) => {
      navItem.active = navItem.path === newPath;
    });
  }
);
</script>
