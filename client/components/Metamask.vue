<template>
  <button
    @click="$emit('connect')"
    class="flex flex-row justify-center items-center p-3 border-2 text-primary border-primary font-bold hover:text-white hover:bg-primary text-sm duration-300 cursor-pointer group"
    :disabled="disabled"
    :class="{
      'text-white bg-primary': disabled,
    }"
  >
    <div class="relative w-5 h-5 mr-2">
      <img
        src="~/assets/icons/metamask-fox.svg"
        alt="Metamask"
        class="absolute top-0 left-0 w-full h-full"
        :class="{
          'group-hover:opacity-0 duration-1000': !disabled,
        }"
      />
      <img
        src="~/assets/icons/metamask-fox-light.svg"
        alt="Metamask"
        class="absolute top-0 left-0 w-full h-full opacity-0"
        :class="{
          'group-hover:opacity-100': !disabled,
        }"
      />
    </div>

    {{ web3Store.account ? addressShortener(web3Store.account) : "Connect" }}
  </button>
</template>

<script setup>
const web3Store = useWeb3Store();

defineProps({
  disabled: {
    type: Boolean,
    default: false,
  },
});
</script>
