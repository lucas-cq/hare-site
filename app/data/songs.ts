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
    albumArt: '/images/daniel-spot.png',
    spotifyUrl: 'https://open.spotify.com/artist/bloodyharestudio',
    youtubeVideoUrl: 'https://www.youtube.com/@BloodyHareStudio',
  },
]

export function getSongBySlug(slug: string): Song | undefined {
  return songs.find(s => s.slug === slug)
}
