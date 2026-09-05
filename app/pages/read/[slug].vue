<script setup lang="ts">
import type { Block, Chapter } from '~/data/chapters'
import { chapters, getChapterBySlug, wordCount, readingMinutes, opening } from '~/data/chapters'

const route = useRoute()
const { lang, toggleLang, bigger, smaller, toggleCrt } = useReader()

const chapter = getChapterBySlug(route.params.slug as string)
if (!chapter) {
  throw createError({ statusCode: 404, statusMessage: 'Chapter not found' })
}

const c = chapter as Chapter
const isEs = computed(() => lang.value === 'es')
const blocks = computed<Block[]>(() => (isEs.value ? c.es : c.en))
const heading = computed(() => (isEs.value ? c.esHead : c.enHead))
const part = computed(() => (isEs.value ? c.esPart : c.enPart))

const index = chapters.findIndex(x => x.slug === c.slug)
const prev = computed(() => chapters[index - 1])
const next = computed(() => chapters[index + 1])

function label(x: Chapter) {
  const head = isEs.value ? x.esHead : x.enHead
  const p = isEs.value ? x.esPart : x.enPart
  return p ? `${head} — ${p}` : head
}

/**
 * A chapter that is mostly italic (Chapter 2 runs 61%) turns the red-rule
 * aside treatment into wallpaper, so fall back to plain italic there.
 */
const loreClass = computed(() => {
  const ital = blocks.value.filter(b => b.t === 'i').length
  return ital / Math.max(1, blocks.value.length) <= 0.35 ? 'lore' : 'lore-soft'
})

const firstProseIndex = computed(() => blocks.value.findIndex(b => b.t === 'p'))

/** The manuscript uses *asterisks* for emphasis mid-paragraph. */
function withEmphasis(text: string) {
  const escaped = text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
  return escaped.replace(/\*([^*]+)\*/g, '<em>$1</em>')
}

function figuresAt(i: number) {
  return c.figures.filter(f => f.at === i)
}

const summary = computed(() => opening(c.en, 2))

useHead(() => ({
  title: `${c.enHead}${c.enPart ? ` — ${c.enPart}` : ''} | HARE`,
  htmlAttrs: { lang: lang.value },
  meta: [
    { name: 'description', content: summary.value },
    { property: 'og:title', content: `${c.enHead}${c.enPart ? ` — ${c.enPart}` : ''} | HARE` },
    { property: 'og:description', content: summary.value },
    { property: 'og:image', content: '/images/og-share-image.jpg' },
    { property: 'og:type', content: 'article' },
    { property: 'og:site_name', content: 'Bloody Hare Studio' },
    { name: 'twitter:card', content: 'summary_large_image' },
  ],
}))
</script>

<template>
  <ReadShell>
    <header class="band">
      <h1>{{ heading }}</h1>
      <p v-if="part" class="partline">{{ part }}</p>
      <div class="bandrule" />
    </header>

    <div class="horizon">
      <img src="/images/read-banner.jpg" alt="" >
    </div>

    <div class="meta">
      <p>
        {{ wordCount(blocks).toLocaleString() }}
        {{ isEs ? 'palabras' : 'words' }}
        &nbsp;/&nbsp; {{ readingMinutes(blocks) }} min
        <template v-if="isEs">&nbsp;/&nbsp; traducción del original en inglés</template>
      </p>
    </div>

    <div class="toolbar">
      <button class="tool lang" :lang="isEs ? 'en' : 'es'" @click="toggleLang">
        {{ isEs ? 'English' : 'Español' }}
      </button>
      <button class="tool" aria-label="Smaller text" @click="smaller">A&minus;</button>
      <button class="tool" aria-label="Larger text" @click="bigger">A+</button>
      <button class="tool" @click="toggleCrt">CRT</button>
    </div>

    <div class="reader">
      <div class="prose" :lang="isEs ? 'es' : 'en'">
        <template v-for="(b, i) in blocks" :key="i">
          <figure v-for="(f, fi) in figuresAt(i)" :key="`f${i}-${fi}`" class="figure" :class="f.side">
            <div class="fbox"><img :src="f.src" alt="" ></div>
          </figure>
          <!-- eslint-disable-next-line vue/no-v-html -- manuscript emphasis only; text is escaped in withEmphasis -->
          <p
            :class="[b.t === 'i' ? loreClass : '', i === firstProseIndex ? 'first' : '']"
            v-html="withEmphasis(b.x)"
          />
        </template>
        <div class="clear" />
      </div>

      <div class="div" />

      <div class="watchblock">
        <div class="watch">
          <span class="watchlang">English</span>
          <div class="watchbtns">
            <a class="bevel yt" :href="`https://www.youtube.com/watch?v=${c.ytEn}`" target="_blank" rel="noopener">
              <svg viewBox="0 0 24 24"><path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2C0 8.1 0 12 0 12s0 3.9.5 5.8a3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1c.5-1.9.5-5.8.5-5.8s0-3.9-.5-5.8zM9.5 15.6V8.4L15.8 12l-6.3 3.6z" /></svg>
              Watch
            </a>
          </div>
        </div>
        <div v-if="c.ytEs" class="watch">
          <span class="watchlang" lang="es">Español</span>
          <div class="watchbtns">
            <a class="bevel yt" :href="`https://www.youtube.com/watch?v=${c.ytEs}`" target="_blank" rel="noopener">
              <svg viewBox="0 0 24 24"><path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2C0 8.1 0 12 0 12s0 3.9.5 5.8a3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1c.5-1.9.5-5.8.5-5.8s0-3.9-.5-5.8zM9.5 15.6V8.4L15.8 12l-6.3 3.6z" /></svg>
              Ver
            </a>
          </div>
        </div>
      </div>

      <div class="btnrow" style="margin-top:16px">
        <NuxtLink v-if="next" class="bevel steel" :to="`/read/${next.slug}`">
          {{ label(next) }} &rsaquo;
        </NuxtLink>
        <span v-else class="bevel steel" style="cursor:default;opacity:.55">
          {{ isEs ? 'Capítulo 4.' : 'Chapter 4.' }}
        </span>
      </div>

      <div class="btnrow two" style="margin-top:12px">
        <NuxtLink v-if="prev" class="bevel ghost" :to="`/read/${prev.slug}`">
          &lsaquo; {{ label(prev) }}
        </NuxtLink>
        <NuxtLink class="bevel ghost" to="/read">
          {{ isEs ? 'Todos los capítulos' : 'All chapters' }}
        </NuxtLink>
      </div>
    </div>
  </ReadShell>
</template>
