<template>
  <div
    @click="$emit('connect')"
    class="flex flex-row justify-center items-center p-3 border-2 text-primary border-primary font-bold hover:text-white hover:bg-primary text-sm duration-300 cursor-pointer"
  >
    <img
      src="https://upload.wikimedia.org/wikipedia/commons/3/36/MetaMask_Fox.svg"
      alt="Metamask"
      class="h-5 mr-2"
    />
    Connect
  </div>
</template>
