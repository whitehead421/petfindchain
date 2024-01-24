<template>
  <div class="flex flex-col">
    <section class="flex gap-8 p-20 items-center border-b bg-secondary">
      <div class="w-1/2 flex items-center">
        <img src="~/assets/images/cat-cage.png" alt="CatCage" />
      </div>
      <div class="w-1/2 flex items-center justify-center">
        <h1 class="text-5xl">
          What is
          <span class="font-bold text-primary"
            >PET<span class="text-black">FIND</span>CHAIN?</span
          >
        </h1>
      </div>
    </section>
    <section class="flex flex-col gap-8 p-8">
      <div class="flex flex-col justify-center items-center text-center">
        <h2 class="uppercase text-primary text-sm font-bold">About Us</h2>
        <h3 class="text-4xl my-4">
          <!-- Its like something about us -->
          Our <UiHighlightedText>mission</UiHighlightedText> and <b>vision</b>
        </h3>
      </div>
      <div class="w-1/2 flex items-center justify-center">
        <p>
          At PetFindChain, we are passionate about reuniting lost pets with
          their loving families. Our decentralized platform is designed to make
          the process of finding lost pets transparent, reliable, and
          community-oriented. We believe in the power of technology to bring
          people together for a common cause. With our innovative approach,
          we've created a platform that harnesses the strength of community
          collaboration to locate and bring home missing pets.
        </p>
      </div>
    </section>
    <section class="flex gap-8 p-10 flex-col items-end">
      <div class="flex">
        <h3 class="text-3xl text-primary">Our Mission</h3>
      </div>
      <div class="text-right flex justify-center">
        <div class="w-1/2 flex items-center justify-center">
          <img
            src="~/assets/images/pet-care.png"
            alt="pet care"
            class="w-1/4"
          />
        </div>
        <p class="w-1/2">
          Our mission is to provide a decentralized and efficient solution for
          pet owners facing the heart-wrenching experience of a lost pet. By
          leveraging blockchain technology, we ensure transparency and trust in
          every step of the process. PetFindChain is not just a platform; it's a
          community-driven initiative that unites pet lovers, technologists, and
          animal welfare advocates. Together, we strive to make a positive
          impact in the lives of both pets and their human companions.
        </p>
      </div>
    </section>
    <section class="flex gap-8 p-10 flex-col">
      <div class="flex">
        <h3 class="text-3xl text-primary">Core Values</h3>
      </div>
      <div class="w-1/2 flex items-center justify-center">
        <ul>
          <li>
            <span class="font-semibold text-gray">Transparency:</span> We
            believe in open and honest communication to build trust within our
            community.
          </li>
          <li>
            <span class="font-semibold text-gray">Reliability:</span> Our
            platform is designed with robust technology to ensure a dependable
            and effective search for lost pets.
          </li>
          <li>
            <span class="font-semibold text-gray">Community-Oriented:</span>
            PetFindChain thrives on the strength of our community. We encourage
            collaboration and mutual support.
          </li>
          <li>
            <span class="font-semibold text-gray">Compassion:</span> We
            understand the emotional toll of losing a pet and approach every
            case with empathy and care.
          </li>
        </ul>
      </div>
    </section>
  </div>
</template>
