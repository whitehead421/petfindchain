<template>
  <header
    class="flex justify-between items-center border border-gray px-10 border-collapse"
  >
    <!-- <h1 class="text-3xl flex font-bold">
      PET
      <span class="text-primary">FIND</span>
      CHAIN
    </h1> -->
    <AnimatedLogo />
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
    <Metamask @connect="initWeb3" />
    <teleport to="body">
      <UiSpinner v-if="loading" />
    </teleport>
  </header>
</template>

<script setup>
const web3Store = useWeb3Store();
import Web3 from "web3";

defineProps({
  navList: {
    type: Array,
    required: true,
  },
});

const loading = ref(false);

const initWeb3 = async () => {
  loading.value = true;
  // Check for web3 provider
  if (typeof window.ethereum !== "undefined") {
    try {
      // Ask to connect
      await window.ethereum.send("eth_requestAccounts");
      const instance = new Web3(window.ethereum);
      // Get necessary info on your node
      const networkId = await instance.eth.net.getId();
      const coinbase = await instance.eth.getCoinbase();
      const balance = await instance.eth.getBalance(coinbase);
      // Save it to store
      web3Store.registerWeb3Instance({
        networkId,
        coinbase,
        balance,
      });
      loading.value = false;
    } catch (error) {
      // User denied account access
      console.error("User denied web3 access", error);
      loading.value = false;
      return;
    }
  }
  // No web3 provider
  else {
    console.error("No web3 provider detected");
    loading.value = false;
    return;
  }
};
</script>
