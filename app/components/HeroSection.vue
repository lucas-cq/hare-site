<template>
  <section class="relative h-screen w-full overflow-hidden flex items-center justify-center">
    <div class="absolute inset-0 z-0">
      <iframe 
        class="w-full h-full scale-150 object-cover opacity-60 grayscale hover:grayscale-0 transition-all duration-700"
        src="https://www.youtube.com/embed/DToYYy4uyyY?autoplay=1&mute=1&controls=0&loop=1&playlist=DToYYy4uyyY&start=10" 
        frameborder="0" 
        allow="autoplay; encrypted-media" 
        allowfullscreen
      ></iframe>
    </div>

    <div class="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-[#0a0a0a] z-10 pointer-events-none"></div>

    <div class="relative z-20 text-center px-4 max-w-4xl mx-auto mt-20">
      <h1 class="text-6xl md:text-9xl font-black text-white tracking-tighter uppercase mb-2 drop-shadow-lg glitch-text">
        HARE
      </h1>
      <p class="text-xl md:text-2xl text-gray-300 font-mono mb-8 tracking-widest uppercase">
        PRODUCED BY BLOODY HARE STUDIO
      </p>

      <div class="flex flex-col md:flex-row gap-6 justify-center">
        <a 
          href="https://www.youtube.com/watch?v=DToYYy4uyyY" 
          target="_blank"
          class="group relative px-8 py-4 bg-[#d02020] hover:bg-[#ff0000] text-white font-bold text-lg uppercase tracking-widest transition-all clip-path-slant"
        >
          <span class="relative z-10">Watch Trailer</span>
          <div class="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 animate-pulse"></div>
        </a>
        
        <button class="px-8 py-4 border border-gray-500 text-gray-300 hover:text-white hover:border-white uppercase tracking-widest transition-colors font-mono">
          Read Classified Files
        </button>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Custom clip-path for that "cyber/military" angled button look */
.clip-path-slant {
  clip-path: polygon(10% 0, 100% 0, 100% 70%, 90% 100%, 0 100%, 0 30%);
}

.glitch-text {
  text-shadow: 2px 2px 0px #ff0000, -2px -2px 0px #0000ff;
}
</style>