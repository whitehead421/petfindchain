<template>
  <div class="flex flex-col">
    <section class="flex gap-8 p-20 items-center border-b bg-secondary">
      <div class="w-1/2 flex flex-col gap-8 items-center">
        <div>
          <h1 class="text-5xl mb-5">
            Get in
            <UiHighlightedText> touch </UiHighlightedText>
          </h1>
          <p class="text-2xl">
            Feel free to <b>reach out</b> to us with any questions or
            <b>concerns</b> you may have. <b>We</b> will get back to you as soon
            as <b>possible</b>.
          </p>
        </div>
        <img src="~/assets/images/dog.png" alt="smiling cats" />
      </div>
      <div class="w-1/2 flex items-center justify-center">
        <div class="relative card z-10">
          <div class="absolute top-0 left-0 w-full h-full bg-image -z-10"></div>
          <h2 class="text-3xl mb-5">
            Send us a <UiHighlightedText>message</UiHighlightedText>
          </h2>
          <form>
            <div class="mb-4">
              <label for="name" class="block text-lg font-medium">Name</label>
              <input
                type="text"
                id="name"
                class="w-full z-10 p-2 border-b-2 shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50"
              />
            </div>
            <div class="mb-4">
              <label for="email" class="block text-lg font-medium">Email</label>
              <input
                type="email"
                id="email"
                class="w-full p-2 border-b-2 shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50"
              />
            </div>
            <div class="mb-4">
              <label for="message" class="block text-lg font-medium"
                >Message</label
              >
              <textarea
                id="message"
                rows="4"
                class="w-full p-2 border-b-2 shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50"
              ></textarea>
            </div>
            <div class="flex w-full justify-end">
              <UiButton variant="primary">
                <a href="mailto:contact@petfindchain.com">Submit</a>
              </UiButton>
            </div>
          </form>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup></script>

<style scoped>
.card {
  min-width: 70%;
  padding: 2rem;
  background-color: #fff;
  @apply font-bold;
  @apply transition-colors duration-300;
  @apply border border-black;
  /* shadow */
  box-shadow: 3px 3px 0px rgba(0, 0, 0, 0.8);
}
.bg-image {
  background-image: url("~/assets/images/bg-pattern.png");
  background-size: contain;
  background-position: center;
  background-repeat: repeat;
  filter: invert(51%) sepia(18%) saturate(4913%) hue-rotate(326deg)
    brightness(100%) contrast(96%);
  opacity: 0.2;
}
</style>
