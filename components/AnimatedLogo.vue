<template>
  <NuxtLink :to="'/'">
    <div class="text-slide">
      <span>PET</span>
      <div class="text-wrap">
        <div class="text">
          <span>FIND</span>
          <span>LOVE</span>
          <span>CARE</span>
        </div>
      </div>
      <span>CHAIN</span>
    </div>
  </NuxtLink>
</template>

<style scoped>
.text-slide {
  display: flex;
  align-items: center;
  color: #fa615b;
  font-size: 30px;
  font-weight: 700;
  animation: fade-in ease 3s forwards;
}

.text-slide > div {
  height: 40px;
  line-height: 40px;
  overflow: hidden;
  font-size: 30px;
  text-align: center;
}

.text span {
  display: block;
  color: black;
}

.text {
  position: relative;
  animation: text-animation ease 6s infinite;
  animation-delay: 1s;
}

@keyframes fade-in {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@keyframes text-animation {
  0% {
    top: 0;
  }

  30% {
    top: 0;
  }

  40% {
    top: -40px;
  }

  70% {
    top: -40px;
  }

  80% {
    top: -80px;
  }

  90% {
    top: -80px;
  }

  100% {
    top: 0px;
  }
}
</style>
