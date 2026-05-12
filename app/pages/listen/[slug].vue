<script setup lang="ts">
import { songs } from '~/data/songs'

const route = useRoute()
const { trackViewContent, trackSpotifyClick, trackAppleMusicClick } = usePixel()

const song = songs.find(s => s.slug === route.params.slug as string)

if (!song) {
  throw createError({ statusCode: 404, statusMessage: 'Song not found' })
}

useHead({
  title: `${song.title} — ${song.artist}`,
  meta: [
    { name: 'description', content: `Stream "${song.title}" by ${song.artist} on Spotify.` },
    { property: 'og:title', content: `${song.title} — ${song.artist}` },
    { property: 'og:description', content: `Stream "${song.title}" now on Spotify.` },
    { property: 'og:image', content: song.albumArt },
    { property: 'og:type', content: 'music.song' },
    { property: 'og:site_name', content: 'Bloody Hare Studio' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'robots', content: 'noindex' },
  ],
  link: [{ rel: 'preload', as: 'image', href: song.albumArt }]
})

onMounted(() => {
  trackViewContent({ slug: song!.slug, title: song!.title, artist: song!.artist })
})

function handleSpotifyClick() {
  trackSpotifyClick({ slug: song!.slug, title: song!.title })
  setTimeout(() => { window.location.href = song!.spotifyUrl }, 150)
}

function handleAppleMusicClick() {
  if (!song!.appleMusicUrl) return
  trackAppleMusicClick({ slug: song!.slug, title: song!.title })
  setTimeout(() => { window.location.href = song!.appleMusicUrl! }, 150)
}

function handleYouTubeClick() {
  const url = song!.youtubeVideoUrl || song!.youtubeMusicUrl
  if (url) window.location.href = url
}
</script>

<template>
  <div class="relative min-h-screen flex flex-col items-center justify-center bg-black overflow-hidden">

    <!-- Blurred artwork background -->
    <div
      class="absolute inset-0 bg-cover bg-center scale-110 blur-2xl"
      :style="{ backgroundImage: `url(${song.albumArt})` }"
      aria-hidden="true"
    />
    <!-- Dark overlay -->
    <div class="absolute inset-0 bg-black/75" aria-hidden="true" />

    <!-- Card -->
    <div class="relative z-10 w-full max-w-sm mx-auto px-6 py-12 flex flex-col items-center">

      <!-- Artwork -->
      <div class="w-56 h-56 sm:w-64 sm:h-64 rounded-2xl overflow-hidden shadow-2xl shadow-black/60 mb-7 ring-1 ring-white/10">
        <img :src="song.albumArt" :alt="`${song.title} artwork`" class="w-full h-full object-cover" />
      </div>

      <!-- Song info -->
      <p class="font-mono text-xs tracking-[0.2em] uppercase text-gray-400 mb-2">{{ song.artist }}</p>
      <h1 class="font-display text-3xl sm:text-4xl font-black text-white tracking-tight text-center mb-8">{{ song.title }}</h1>

      <!-- Buttons -->
      <div class="w-full flex flex-col gap-3">

        <!-- Spotify -->
        <button
          @click="handleSpotifyClick"
          class="w-full flex items-center justify-center gap-3 bg-[#1DB954] hover:bg-[#1ed760] active:bg-[#17a348] text-black font-bold text-base py-4 px-6 rounded-full transition-all duration-150 shadow-lg shadow-[#1DB954]/20 focus:outline-none focus:ring-2 focus:ring-[#1DB954] focus:ring-offset-2 focus:ring-offset-black"
        >
          <svg class="w-6 h-6 shrink-0" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
          </svg>
          Listen on Spotify
        </button>

        <!-- Apple Music -->
        <button
          v-if="song.appleMusicUrl"
          @click="handleAppleMusicClick"
          class="w-full flex items-center justify-center gap-3 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold text-base py-4 px-6 rounded-full transition-all duration-150 focus:outline-none"
        >
          <svg class="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="currentColor">
            <path d="M23.994 6.124a9.23 9.23 0 00-.24-2.19c-.317-1.31-1.064-2.31-2.124-3.06a5.053 5.053 0 00-1.536-.66c-.73-.18-1.47-.22-2.22-.19-.07.005-9.773.274-9.773.274C7.768.197 7.03.306 6.33.524c-1.3.4-2.19 1.2-2.75 2.442a7.58 7.58 0 00-.51 2.234c-.03.45-.04.894-.04 1.34 0 .5 0 11.634.01 11.634.01.773.08 1.542.284 2.295.34 1.264 1.125 2.19 2.32 2.78.597.3 1.234.44 1.9.5.68.06 1.366.06 2.05.03 0 0 7.79-.195 9.73-.26.68-.023 1.355-.1 2.01-.3 1.3-.4 2.19-1.2 2.75-2.442.27-.614.43-1.267.51-1.934.06-.473.08-.953.08-1.43V6.124zM10.51 14.796V8.225l6.037 3.285-6.037 3.286z"/>
          </svg>
          Apple Music
        </button>

        <!-- YouTube -->
        <button
          v-if="song.youtubeVideoUrl || song.youtubeMusicUrl"
          @click="handleYouTubeClick"
          class="w-full flex items-center justify-center gap-3 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold text-base py-4 px-6 rounded-full transition-all duration-150 focus:outline-none"
        >
          <svg class="w-6 h-6 shrink-0" viewBox="0 0 24 24" fill="currentColor">
            <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
          </svg>
          {{ song.youtubeVideoUrl ? 'Watch on YouTube' : 'YouTube Music' }}
        </button>

      </div>

      <!-- Footer -->
      <div class="mt-10 text-center">
        <a href="/" class="inline-flex items-center gap-2 text-gray-600 hover:text-gray-400 transition-colors text-xs font-mono tracking-widest uppercase">
          <img src="/images/logo-fade.png" alt="Bloody Hare Studio" class="h-5 opacity-50" />
          Bloody Hare Studio
        </a>
      </div>

    </div>
  </div>
</template>
