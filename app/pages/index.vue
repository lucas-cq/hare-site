<script setup>
useHead({
  title: 'HARE | The Series (2026)',
  meta: [
    { name: 'description', content: 'Something dangerous lies in the deep. Official site for the Hare animated series.' },
    { name: 'theme-color', content: '#000000' }
  ]
})
</script>

<template>
  <main class="bg-black min-h-screen text-white selection:bg-[#d02020] selection:text-white">
    <HeroSection />
    
    <div class="bg-[#d02020] overflow-hidden py-2 whitespace-nowrap">
      <div class="animate-marquee font-mono text-black font-bold uppercase text-sm tracking-wider">
        WARNING: BIOLOGICAL HAZARD DETECTED /// SECTOR 4 COMPROMISED /// THE SICKNESS IS SPREADING /// 
        WARNING: BIOLOGICAL HAZARD DETECTED /// SECTOR 4 COMPROMISED /// THE SICKNESS IS SPREADING /// 
        WARNING: BIOLOGICAL HAZARD DETECTED /// SECTOR 4 COMPROMISED /// THE SICKNESS IS SPREADING /// 
        WARNING: BIOLOGICAL HAZARD DETECTED /// SECTOR 4 COMPROMISED /// THE SICKNESS IS SPREADING /// 
      </div>
    </div>

    <Synopsis />
    <CharacterGrid />
    <CommunityLinks />
    
    <footer class="py-12 text-center text-gray-600 font-mono text-xs border-t border-gray-900">
      <p>PRODUCED BY BLOODY HARE STUDIO</p>
      <p class="mt-2">EST. 2026</p>
    </footer>
  </main>
</template>

<style>
/* Simple CSS animation for the ticker tape */
.animate-marquee {
  display: inline-block;
  animation: marquee 20s linear infinite;
}

@keyframes marquee {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}
</style>