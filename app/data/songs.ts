// app/data/songs.ts
// Add one entry per song. The slug becomes the URL: /listen/[slug]
// albumArt paths are relative to /public/

export interface Song {
  slug: string
  title: string
  artist: string
  albumArt: string
  spotifyUrl: string
  youtubeVideoUrl?: string
  appleMusicUrl?: string
}

export const songs: Song[] = [
  {
    slug: 'adonis',
    title: 'Adonis',
    artist: 'Bloody Hare Studio',
    albumArt: '/images/daniel-spot.png',
    spotifyUrl: 'https://open.spotify.com/artist/bloodyharestudio',
    youtubeVideoUrl: 'https://www.youtube.com/@BloodyHareStudio',
  },
  {
    slug: 'soaring',
    title: 'Soaring',
    artist: 'Bloody Hare Studio',
    albumArt: '/images/daniel-spot.png',
    spotifyUrl: 'https://open.spotify.com/artist/bloodyharestudio',
    youtubeVideoUrl: 'https://www.youtube.com/@BloodyHareStudio',
  },
  {
    slug: 'say-to-my-god',
    title: 'Say To My God',
    artist: 'Bloody Hare Studio',
    albumArt: '/images/say-to-my-god-cover.jpg',
    spotifyUrl: 'https://open.spotify.com/track/5Fyqx9kNR7E1Fe7i1YhkK3',
    youtubeVideoUrl: 'https://www.youtube.com/watch?v=CvEjAI0ugOw',
  },
  {
    slug: 'summertime-affair',
    title: 'Summer Time Affair (Reggae Funkified)',
    artist: 'Bloody Hare Studio',
    albumArt: '/images/summertime-affair-cover.jpg',
    spotifyUrl: 'https://open.spotify.com/artist/3Hm9AH9sEnIjQmgkcSS1Or',
    youtubeVideoUrl: 'https://www.youtube.com/watch?v=b-BrURs_bzc',
  },
]

export function getSongBySlug(slug: string): Song | undefined {
  return songs.find(s => s.slug === slug)
}
