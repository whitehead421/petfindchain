<template>
  <div class="text-center">
    <h1 class="text-center my-10">SERVICES PAGE</h1>
    <div>
      <p>Network: {{ web3.networkId }}</p>
      <p>Account: {{ web3.coinbase }}</p>
      <p>Balance: {{ web3.balance }}</p>
    </div>
  </div>
</template>

<script setup>
const web3Store = useWeb3Store();

const web3 = web3Store.getInstance;
</script>

<style lang="scss" scoped></style>
