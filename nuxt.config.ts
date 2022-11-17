// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    "nuxt-security",
    "@vueuse/nuxt",
    "@nuxtjs/tailwindcss",
    "nuxt-icon",
  ],
  tailwindcss: {
    cssPath: "~/assets/css/main.css",
    config: {
      content: [],
      theme: {
        fontFamily: {
          heading: ["Arial", "sans-serif"],
          body: ["Roboto", "sans-serif"],
        },
        colors: {
          primary: "#005138",
          secondary: "#549973",
          accent: "#ffe4bd",
        },
      },
    },
  },
  runtimeConfig: {
    authUser: "project",
    authPass: "prodject",
    environment: "deveelop",
    buildAt: "",
  },
  telemetry: false,
});
