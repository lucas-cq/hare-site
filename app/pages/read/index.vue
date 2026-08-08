<script setup lang="ts">
import { chapters, sealedChapters, wordCount, readingMinutes, opening } from '~/data/chapters'

const { lang, toggleLang } = useReader()
const isEs = computed(() => lang.value === 'es')

useHead({
  title: 'HARE | Chapters',
  meta: [
    {
      name: 'description',
      content: 'Read the chapters of HARE, the animated series by Bloody Hare Studio, in their original written form. English and Spanish.',
    },
    { property: 'og:title', content: 'HARE | Chapters' },
    { property: 'og:image', content: '/images/og-share-image.jpg' },
    { property: 'og:type', content: 'website' },
    { property: 'og:site_name', content: 'Bloody Hare Studio' },
    { name: 'twitter:card', content: 'summary_large_image' },
  ],
})

function redactWidth(n: number, extra: number) {
  return `${40 + (n * 9) % 70 + extra}px`
}
</script>

<template>
  <ReadShell>
    <header class="band">
      <h1>HARE</h1>
      <div class="bandrule" />
    </header>

    <div class="horizon">
      <img src="/images/read-banner.jpg" alt="" >
    </div>

    <div class="toolbar">
      <button class="tool lang" :lang="isEs ? 'en' : 'es'" @click="toggleLang">
        {{ isEs ? 'English' : 'Español' }}
      </button>
    </div>

    <div class="rows">
      <NuxtLink v-for="c in chapters" :key="c.slug" class="row" :to="`/read/${c.slug}`">
        <div class="inner">
          <div class="plate"><span class="n">{{ c.n }}</span></div>
          <div class="rowbody">
            <h3>
              {{ isEs ? c.esHead : c.enHead }}
              <span v-if="c.enPart" class="part">{{ isEs ? c.esPart : c.enPart }}</span>
            </h3>
            <p class="blurb">{{ opening(isEs ? c.es : c.en) }}</p>
            <div class="tags">
              {{ wordCount(isEs ? c.es : c.en).toLocaleString() }}
              {{ isEs ? 'palabras' : 'words' }}
              &nbsp;/&nbsp; {{ readingMinutes(isEs ? c.es : c.en) }} min
            </div>
          </div>
          <div class="rowgo">&rsaquo;</div>
        </div>
      </NuxtLink>

      <div v-for="s in sealedChapters" :key="s.n" class="row sealed">
        <div class="inner">
          <div class="plate"><span class="n">{{ String(s.n).padStart(2, '0') }}</span></div>
          <div class="rowbody">
            <h3>{{ isEs ? s.esHead : s.enHead }}</h3>
            <p class="blurb">
              <span class="redact" :style="{ width: redactWidth(s.n, 130) }" />
              <span class="redact" :style="{ width: redactWidth(s.n, 0) }" />
            </p>
            <div class="tags">{{ isEs ? 'Aún no publicado' : 'Not posted yet' }}</div>
          </div>
        </div>
      </div>
    </div>
  </ReadShell>
</template>
