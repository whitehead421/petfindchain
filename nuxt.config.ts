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
  // components: [
  //   // ~/calendar-module/components/event/Update.vue => <EventUpdate />
  //   { path: '~/calendar-module/components' },

  //   // ~/user-module/components/account/UserDeleteDialog.vue => <UserDeleteDialog />
  //   { path: '~/user-module/components', pathPrefix: false },

  //   // ~/components/special-components/Btn.vue => <SpecialBtn />
  //   { path: '~/components/special-components', prefix: 'Special' },

  //   // It's important that this comes last if you have overrides you wish to apply
  //   // to sub-directories of `~/components`.
  //   //
  //   // ~/components/Btn.vue => <Btn />
  //   // ~/components/base/Btn.vue => <BaseBtn />
  //   '~/components'
  // ],

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
  ],

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
