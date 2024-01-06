<template>
  <main class="flex flex-col">
    <!-- Hero Section -->
    <section class="flex gap-8 p-20 border-b items-center">
      <!-- Text side -->
      <div class="flex-1 flex flex-col gap-8">
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
      <div class="flex-1">
        <img src="~/assets/images/hero.png" alt="Hero" />
      </div>
    </section>
    <section class="bg-white h-screen text-center p-8">
      <h2 class="uppercase text-primary text-sm font-bold">SUPPORT US</h2>
      <h3 class="text-3xl my-4">
        Reliable healthy food and toys for
        <UiHighlightedText>your pets</UiHighlightedText>
      </h3>
    </section>
  </main>
</template>

<script setup></script>

<style lang="scss" scoped></style>
