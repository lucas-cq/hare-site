<script setup lang="ts">
// Global Head Configuration
useHead({
  // This sets a dynamic title. If a page has a title, it adds " - HARE" to the end.
  titleTemplate: (titleChunk) => {
    return 'HARE | The Animated Series';
  },
  htmlAttrs: {
    lang: 'en',
    class: 'bg-black' // Ensures the scrollbar and overscroll areas are black
  },
  meta: [
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { name: 'theme-color', content: '#000000' }, // Sets mobile browser header color to black
    { property: 'og:image', content: '/images/og-share-image.jpg' } // Replace with a screenshot from the trailer
    { 
      name: 'description', 
      content: 'Something dangerous lies in the deep. Explore the classified files of HARE, a post-apocalyptic animated series by Bloody Hare Studio.' 
    }
  ],
  link: [
    // Import the fonts we defined in your Tailwind CSS (Inter & JetBrains Mono)
    { rel: 'icon', type: 'image/png', href: '/favicon.png' },
    { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
    { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
    { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;700;900&family=JetBrains+Mono:wght@400;700&display=swap' }
  ]
})
</script>

<template>
  <div class="min-h-screen bg-black text-white font-sans antialiased selection:bg-hare-red selection:text-white">
    
    <NuxtLoadingIndicator color="#d02020" />

    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>

  </div>
</template>