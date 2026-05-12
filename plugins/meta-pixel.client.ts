// plugins/meta-pixel.client.ts
// Initializes the Meta Pixel on every page load.
// Set META_PIXEL_ID in your .env file or in Vercel environment variables.
//
// HOW THIS DRIVES SPOTIFY STREAMS:
// 1. PageView fires when anyone hits the smart link page
// 2. ViewContent fires with song metadata (builds a music-viewer audience)
// 3. Lead fires when a user clicks Spotify
//
// In Meta Ads Manager: set your campaign conversion event to "Lead".
// Meta will find people most likely to click through to Spotify -> real streams -> algo growth.

export default defineNuxtPlugin(() => {
  const config = useRuntimeConfig()
  const pixelId = config.public.metaPixelId as string

  if (!pixelId) {
    if (import.meta.dev) {
      console.warn('[Meta Pixel] No META_PIXEL_ID set. Add it to your .env file.')
    }
    return
  }

  const script = document.createElement('script')
  script.innerHTML = `
    !function(f,b,e,v,n,t,s)
    {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
    n.callMethod.apply(n,arguments):n.queue.push(arguments)};
    if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
    n.queue=[];t=b.createElement(e);t.async=!0;
    t.src=v;s=b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t,s)}(window, document,'script',
    'https://connect.facebook.net/en_US/fbevents.js');
    fbq('init', '${pixelId}');
    fbq('track', 'PageView');
  `
  document.head.appendChild(script)

  const noscript = document.createElement('noscript')
  noscript.innerHTML = `<img height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=${pixelId}&ev=PageView&noscript=1"/>`
  document.head.appendChild(noscript)
})
