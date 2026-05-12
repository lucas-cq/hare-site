// composables/usePixel.ts
// Helper to fire Meta Pixel events safely from any page component.

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void
  }
}

export function usePixel() {
  function track(event: string, params?: Record<string, unknown>) {
    if (typeof window !== 'undefined' && typeof window.fbq === 'function') {
      window.fbq('track', event, params)
    }
  }

  // Fire on page load — builds a "music viewer" audience for retargeting
  function trackViewContent(song: { slug: string; title: string; artist: string }) {
    track('ViewContent', {
      content_name: song.title,
      content_category: 'Music',
      content_ids: [song.slug],
      content_type: 'product',
      value: 0,
      currency: 'USD',
    })
  }

  // Fire on Spotify button click — THIS is the conversion event to optimize for in Meta Ads.
  // Set your campaign objective to Conversions -> Lead and Meta will find people
  // most likely to click through to Spotify, driving real streams -> Spotify algo growth.
  function trackSpotifyClick(song: { slug: string; title: string }) {
    track('Lead', {
      content_name: song.title,
      content_category: 'Spotify Click',
      content_ids: [song.slug],
      value: 0,
      currency: 'USD',
    })
  }

  function trackAppleMusicClick(song: { slug: string; title: string }) {
    track('Lead', {
      content_name: song.title,
      content_category: 'Apple Music Click',
      content_ids: [song.slug],
    })
  }

  return { track, trackViewContent, trackSpotifyClick, trackAppleMusicClick }
}
