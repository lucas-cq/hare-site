// nuxt.config.ts
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2026-01-01",

  css: ['~/assets/css/main.css'],

  vite: {
    plugins: [
      tailwindcss(),
    ],
  },

  // META_PIXEL_ID: add this to your .env file locally, and to Vercel environment variables in production.
  // Get your Pixel ID from: https://business.facebook.com/events_manager2
  runtimeConfig: {
    public: {
      metaPixelId: process.env.META_PIXEL_ID || '',
    }
  },
});
