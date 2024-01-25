// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: [
    "@nuxt/image",
    [
      "@nuxtjs/google-fonts",
      {
        families: {
          Roboto: true,
          Gabarito: true,
        },
      },
    ],
    "@pinia/nuxt",
    "@cssninja/nuxt-toaster",
  ],
  app: {
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      titleTemplate: "PetFindChain",
    },
    pageTransition: { name: "page", mode: "out-in" },
  },

  // routeRules: {
  //   // Homepage pre-rendered at build time
  //   "/": { prerender: true },
  //   // Product page generated on-demand, revalidates in background
  //   "/services": { swr: 3600 },
  //   // Blog post generated on-demand once until next deploy
  //   "/about": { swr: 3600 },
  //   // Admin dashboard renders only on client-side
  //   "/contact": { ssr: false },
  //   // Add cors headers on API routes
  // },
});
