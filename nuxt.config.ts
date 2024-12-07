// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@nuxt/ui",
    "@nuxtjs/i18n",
  ],

  components: [
    {
      path: "~/components",
      pathPrefix: false,
    },
  ],

  i18n: {
    locales: [
      {
        code: "ar",
        name: "عربي",
        file: "ar.json",
        dir: "rtl",
      },
      {
        code: "en",
        name: "English",
        file: "en.json",
        dir: "ltr",
      },
    ],

    defaultLocale: "ar", // Set your default language
    strategy: "prefix_except_default", // URL strategy
    lazy: true,
    langDir: "./locales", // Directory for translation files
  },

  colorMode: {
    classSuffix: "", // The class suffix to apply (default is `-mode`)
    preference: "dark", // Default theme preference (light/dark/system)
    fallback: "dark", // Fallback theme if system theme cannot be detected
  },

  css: ["~/assets/css/app.css"],
});
