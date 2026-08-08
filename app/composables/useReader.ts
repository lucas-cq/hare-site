export type ReadLang = 'en' | 'es'

const SIZES = [17, 19, 21, 24]

/**
 * Reader preferences, shared across the /read pages so they survive
 * client-side navigation between chapters.
 */
export function useReader() {
  const lang = useState<ReadLang>('hare-read-lang', () => 'en')
  const sizeIndex = useState<number>('hare-read-size', () => 1)
  const crt = useState<boolean>('hare-read-crt', () => true)

  const fontSize = computed(() => `${SIZES[sizeIndex.value]}px`)

  function toggleLang() {
    // Hold the reader's place in the text when the column length changes.
    const el = document.documentElement
    const max = el.scrollHeight - el.clientHeight
    const frac = max > 40 ? el.scrollTop / max : 0
    lang.value = lang.value === 'en' ? 'es' : 'en'
    nextTick(() => {
      const max2 = el.scrollHeight - el.clientHeight
      window.scrollTo(0, Math.round(frac * max2))
    })
  }

  const bigger = () => { sizeIndex.value = Math.min(SIZES.length - 1, sizeIndex.value + 1) }
  const smaller = () => { sizeIndex.value = Math.max(0, sizeIndex.value - 1) }
  const toggleCrt = () => { crt.value = !crt.value }

  return { lang, fontSize, crt, toggleLang, bigger, smaller, toggleCrt }
}
