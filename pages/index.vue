<template>
  <main class="flex flex-col">
    <!-- Hero Section -->
    <section class="flex gap-8 p-20 border-b items-center">
      <!-- Text side -->
      <div class="flex flex-col gap-8 w-1/2 justify-center">
        <h1 class="text-6xl">We'll help you to find your pet.</h1>
        <p>
          We are an organization that helps people to find their lost pets and
          help others to find their pets by blockchain technology and AI.
        </p>
        <!-- Button container -->
        <div class="flex gap-4">
          <UiButton variant="primary"> Find your pet </UiButton>
          <UiButton variant="secondary"> Help others </UiButton>
        </div>
      </div>
      <div class="w-1/2 flex items-center justify-center">
        <img src="~/assets/images/hero.png" alt="Hero" />
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
          name="Whiskas"
          price="74.99"
          image="/_nuxt/assets/images/cat-food.png"
        />
        <ProductCard
          name="Perfet FIT"
          price="107.99"
          image="/_nuxt/assets/images/dog-food-dark.png"
        />
        <ProductCard
          name="North Paw"
          price="44.99"
          image="/_nuxt/assets/images/cat-food-dark.png"
        />
        <ProductCard
          name="Dog Food"
          price="123.99"
          image="/_nuxt/assets/images/dog-food.png"
        />
      </div>
      <div class="flex justify-center gap-24 mt-10">
        <ProductCard
          name="Kong Classic"
          price="74.99"
          image="/_nuxt/assets/images/dog-toy.png"
        />
        <ProductCard
          name="Perfet FIT"
          price="107.99"
          image="/_nuxt/assets/images/dog-food-dark.png"
        />
        <ProductCard
          name="Plush Toy"
          price="44.99"
          image="/_nuxt/assets/images/dog-toy-2.png"
        />
        <ProductCard
          name="Dog Food"
          price="123.99"
          image="/_nuxt/assets/images/dog-food.png"
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
  </main>
</template>

<script setup></script>

<style lang="scss" scoped></style>
