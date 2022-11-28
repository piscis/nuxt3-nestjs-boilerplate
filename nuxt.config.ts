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
    authEnabled: process.env.NUXT_AUTH_ENABLED === "true" ? true : false,
    authUser: process.env.NUXT_AUTH_USER || "project",
    authPass: process.env.NUXT_AUTH_PASS || "project",
    environment: process.env.NODE_ENV || "development",
    buildAt: "",
    public: {
      apiBase: process.env.NUXT_PUBLIC_API_BASE || "http://localhost:3000",
    },
  },
  telemetry: false,
});
