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
    albumArt: '/images/adonis-cover.jpg',
    spotifyUrl: 'https://open.spotify.com/track/111MVPJbJlluBZaK4YMQiN',
    youtubeVideoUrl: 'https://www.youtube.com/watch?v=0g8x7vZ7CSQ',
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
  {
    slug: 'holy-holy-holy',
    title: 'Holy Holy Holy',
    artist: 'Bloody Hare Studio',
    albumArt: '/images/holy-holy-holy-cover.jpg',
    spotifyUrl: 'https://open.spotify.com/track/0YwrpLAUuF5T4T3n3miz5q',
    youtubeVideoUrl: 'https://www.youtube.com/watch?v=7eoXTciqg8k',
  },
  {
    slug: 'this-disease',
    title: 'This Disease',
    artist: 'Bloody Hare Studio',
    albumArt: '/images/this-disease-cover.jpg',
    spotifyUrl: 'https://open.spotify.com/track/5F5yvK6GMgCbnrbpNdxVlb',
    youtubeVideoUrl: 'https://www.youtube.com/watch?v=RayaouS-9U4',
  },
]

export function getSongBySlug(slug: string): Song | undefined {
  return songs.find(s => s.slug === slug)
}
