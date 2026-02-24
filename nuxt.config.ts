// nuxt.config.ts
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2026-01-01", // Or your current date
  
  // 1. Add your CSS file path here (we will create this next)
  css: ['~/assets/css/main.css'],

  vite: {
    plugins: [
      // 2. Add the Tailwind Vite plugin
      tailwindcss(),
    ],
  },
});