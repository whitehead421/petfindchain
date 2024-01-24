<template>
  <button
    @click="$emit('connect')"
    class="flex flex-row justify-center items-center p-3 border-2 text-primary border-primary font-bold hover:text-white hover:bg-primary text-sm duration-300 cursor-pointer group"
    :disabled="disabled"
    :class="{
      'text-white bg-primary': disabled,
    }"
  >
    <img
      src="https://upload.wikimedia.org/wikipedia/commons/3/36/MetaMask_Fox.svg"
      alt="Metamask"
      class="h-5 mr-2"
      :class="{
        'group-hover:animate-spin duration-1000': !disabled,
      }"
    />
    {{ web3Store.account ? accountShortener(web3Store.account) : "Connect" }}
  </button>
</template>

<script setup>
const web3Store = useWeb3Store();

const accountShortener = (account) => {
  return `${account.slice(0, 6)}...${account.slice(-4)}`;
};

defineProps({
  disabled: {
    type: Boolean,
    default: false,
  },
});
</script>
