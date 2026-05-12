// songs.ts — Smart Link Config
// Add a new song by adding a new object to this array.
// albumArt: put the image in /public/images/ and reference it here.
// Replace spotifyUrl with the actual Spotify track URL for each song.

export interface SongConfig {
  slug: string
  title: string
  artist: string
  albumArt: string
  spotifyUrl: string
  appleMusicUrl?: string
  youtubeMusicUrl?: string
  youtubeVideoUrl?: string
}

export const songs: SongConfig[] = [
  {
    slug: 'adonis',
    title: 'Adonis',
    artist: 'Bloody Hare Studio',
    albumArt: '/images/adonis-cover.jpg',
    spotifyUrl: 'https://open.spotify.com/artist/3Hm9AH9sEnIjQmgkcSS1Or',
    youtubeVideoUrl: 'https://www.youtube.com/@BloodyHareStudio',
  },
  {
    slug: 'soaring',
    title: 'Soaring',
    artist: 'Bloody Hare Studio',
    albumArt: '/images/soaring-cover.jpg',
    spotifyUrl: 'https://open.spotify.com/artist/3Hm9AH9sEnIjQmgkcSS1Or',
    youtubeVideoUrl: 'https://www.youtube.com/@BloodyHareStudio',
  },
  {
    slug: 'say-to-my-god',
    title: 'Say to My God',
    artist: 'Bloody Hare Studio',
    albumArt: '/images/say-to-my-god-cover.jpg',
    spotifyUrl: 'https://open.spotify.com/artist/3Hm9AH9sEnIjQmgkcSS1Or',
    youtubeVideoUrl: 'https://www.youtube.com/@BloodyHareStudio',
  },
]
