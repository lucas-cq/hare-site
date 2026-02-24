<script setup>
const characters = [
  {
    name: "The Survivor",
    role: "Subject Zero",
    imgNormal: '/images/mother.jpg', 
    imgAlt: '/images/motherandson.jpg',
    description: "Innocence lost in the lab."
  },
  {
    name: "The Architect",
    role: "Head Scientist",
    imgNormal: '/images/pig-coat.png',
    imgAlt: '/images/pig-blood.png',
    description: "Science requires sacrifice."
  },
  {
    name: "The Veteran",
    role: "Resistance",
    imgNormal: '/images/daniel.jpg',
    imgAlt: '/images/daniel3.jpg',
    description: "He remembers the old world."
  }
]
</script>

<template>
  <section class="bg-black py-20 px-4 border-t border-gray-900">
    <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
      
      <div 
        v-for="char in characters" 
        :key="char.name" 
        class="group relative h-[500px] overflow-hidden cursor-crosshair border border-gray-800 hover:border-[#d02020] transition-colors duration-500"
      >
        <img 
          :src="char.imgNormal" 
          class="absolute inset-0 w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-0"
        />
        
        <img 
          :src="char.imgAlt" 
          class="absolute inset-0 w-full h-full object-cover opacity-0 scale-110 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300"
        />

        <div class="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black via-black/80 to-transparent translate-y-4 group-hover:translate-y-0 transition-transform">
          <p class="text-[#d02020] font-mono text-xs uppercase mb-1">{{ char.role }}</p>
          <h3 class="text-white text-2xl font-bold uppercase">{{ char.name }}</h3>
          <p class="text-gray-400 text-sm mt-2 opacity-0 group-hover:opacity-100 transition-opacity delay-100">
            {{ char.description }}
          </p>
        </div>
      </div>

    </div>
  </section>
</template>