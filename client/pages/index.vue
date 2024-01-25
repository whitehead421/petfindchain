<template>
  <main class="flex flex-col">
    <!-- Hero Section -->
    <section class="flex gap-8 p-20 border-b items-center bg-secondary">
      <!-- Text side -->
      <div class="flex flex-col gap-8 w-1/2 justify-center">
        <h1 id="hero-text" class="text-6xl w-[90%]">
          <span
            v-for="(char, index) in textArray"
            :key="`${char}-${index}`"
            :style="{ animationDelay: `${index * 0.05}s` }"
          >
            {{ char === " " ? "\u00A0" : char }}
          </span>
        </h1>
        <p>
          We are an organization that helps people to find their lost pets and
          help others to find their pets by blockchain technology and AI.
        </p>
        <!-- Button container -->
        <div class="flex gap-4">
          <UiButton variant="primary" @click="$router.push('/services')">
            Find your pet
          </UiButton>
          <UiButton variant="secondary" @click="$router.push('/services')">
            Help others
          </UiButton>
        </div>
      </div>
      <div class="w-1/2 flex items-center justify-center">
        <img src="~/assets/images/hero.png" alt="Hero" />
      </div>
    </section>
    <!-- Workflow section -->
    <section class="bg-white text-center p-8 border-b">
      <h2 class="uppercase text-primary text-sm font-bold">HOW IT WORKS</h2>
      <h3 class="text-4xl my-4">We are <b>simple</b> and <b>easy</b> to use</h3>
      <div class="flex justify-center mt-10 p-8 gap-4">
        <div class="grid grid-cols-2 justify-center">
          <WorkflowCard
            icon="/_nuxt/assets/icons/lost.svg"
            title="Lost your pet?"
            description="Have you lost your beloved pet? Our blockchain-powered platform makes the process of finding and reuniting with your furry friend easier than ever. Register your pet's details securely, activate smart contracts for lost pet reports, and leverage the power of our decentralized network to bring your pet home."
          />
          <WorkflowCard
            icon="/_nuxt/assets/icons/pet.svg"
            title="Found a pet?"
            description="Found a lost pet? Become a hero in their story! Report your discovery on our blockchain platform, creating a smart contract with essential details. Join the decentralized search network, collaborate with the community, and contribute to the pet's journey back to its owner."
          />
          <WorkflowCard
            icon="/_nuxt/assets/icons/adopt.svg"
            title="Adopt a pet"
            description="Browse through verified profiles, connect with pets in need, and initiate the adoption process seamlessly on our blockchain-powered platform. Embrace the joy of giving a loving home, where transparency and simplicity redefine the adoption experience."
          />
          <WorkflowCard
            icon="/_nuxt/assets/icons/reward.svg"
            title="Earn rewards"
            description="Join our decentralized network, report found pets through our blockchain platform, and contribute to the community-driven effort of bringing pets home. As a Pet Hero, enjoy transparent and secure reward transactions through our blockchain system."
          />
        </div>
      </div>
    </section>
    <!-- Support section -->
    <section class="bg-white h-screen text-center p-8 border-b">
      <h2 class="uppercase text-primary text-sm font-bold">SUPPORT US</h2>
      <h3 class="text-4xl my-4">
        Reliable healthy <b>food</b> and <b>toys</b> for
        <UiHighlightedText>
          <span>your pets</span>
        </UiHighlightedText>
      </h3>
      <div class="flex justify-center gap-24 mt-10">
        <ProductCard
          @click="handleBuy(food.price)"
          v-for="food in foods"
          :key="food.name"
          :name="food.name"
          :price="food.price"
          :image="food.image"
        />
      </div>
      <div class="flex justify-center gap-24 mt-10">
        <ProductCard
          @click="handleBuy(toy.price)"
          v-for="toy in toys"
          :key="toy.name"
          :name="toy.name"
          :price="toy.price"
          :image="toy.image"
        />
      </div>
    </section>
    <!-- Stats section -->
    <section class="bg-white text-center p-8 border-b">
      <h2 class="uppercase text-primary text-sm font-bold">OUR STATS</h2>
      <h3 class="text-4xl my-4">
        We are
        <UiHighlightedText>enough</UiHighlightedText>
        for <b>you</b>
      </h3>
      <div class="flex gap-24 justify-center mt-10">
        <StatisticCard
          icon="/_nuxt/assets/icons/people.svg"
          title="Community"
          value="85K"
        />
        <StatisticCard
          icon="/_nuxt/assets/icons/pet.svg"
          title="Found pets"
          value="75K"
        />
        <StatisticCard
          icon="/_nuxt/assets/icons/world.svg"
          title="Countries"
          value="24"
        />
        <StatisticCard
          icon="/_nuxt/assets/icons/hearts.svg"
          title="Satisfaction"
          value="89%"
        />
      </div>
    </section>
    <Newsletter />
    <UiSpinner v-if="loading" />
  </main>
</template>

<script setup>
const web3Store = useWeb3Store();

const text = "We'll help you to find your pet.";
const textArray = text.split(/(?!$)/u);
const loading = ref(false);
const statistics = ref(null);

const foods = [
  {
    name: "Whiskas",
    price: "74.99",
    image: "/_nuxt/assets/images/cat-food.png",
  },
  {
    name: "Perfet FIT",
    price: "107.99",
    image: "/_nuxt/assets/images/dog-food-dark.png",
  },
  {
    name: "North Paw",
    price: "44.99",
    image: "/_nuxt/assets/images/cat-food-dark.png",
  },
  {
    name: "Dog Food",
    price: "123.99",
    image: "/_nuxt/assets/images/dog-food.png",
  },
];
const toys = [
  {
    name: "Kong Classic",
    price: "74.99",
    image: "/_nuxt/assets/images/dog-toy.png",
  },
  {
    name: "Perfet FIT",
    price: "107.99",
    image: "/_nuxt/assets/images/dog-food-dark.png",
  },
  {
    name: "Plush Toy",
    price: "44.99",
    image: "/_nuxt/assets/images/dog-toy-2.png",
  },
  {
    name: "Dog Food",
    price: "123.99",
    image: "/_nuxt/assets/images/dog-food.png",
  },
];

const handleBuy = async (price) => {
  if (web3Store.web3.contract && web3Store.account) {
    loading.value = true;
    await web3Store.buyPetFood(price);
    // Scroll to top
    window.scrollTo(0, 0);
    loading.value = false;
  }
};

onMounted(async () => {
  if (web3Store.web3.contract) {
    statistics.value = await web3Store.getPurchaseStatistics();
    console.log(statistics.value);
  }
});
</script>

<style scoped>
#hero-text {
  overflow: hidden;
}

span {
  display: inline-block;
  animation: reveal 1.5s cubic-bezier(0.77, 0, 0.175, 1) 0.5s;
  animation-fill-mode: backwards;
}

p {
  animation: fromBottomReveal 1.5s cubic-bezier(0.77, 0, 0.175, 1) 0.5s;
  animation-fill-mode: backwards;
}

@keyframes reveal {
  0% {
    opacity: 0;
    transform: translate(0, 100%);
  }
  100% {
    opacity: 1;
    transform: translate(0, 0);
  }
}

@keyframes fromBottomReveal {
  0% {
    opacity: 0;
    transform: translateY(100%);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
