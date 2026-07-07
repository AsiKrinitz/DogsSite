import type { DogId } from './dogs'

export interface Photo {
  kind: 'photo' | 'video'
  src: string
  dogs: DogId[]
  caption: string
}

// Grid thumbnails are pre-generated (see scripts/generate-thumbs.mjs) — the
// lightbox still opens the full-resolution original.
export function thumbSrc(photo: Photo): string {
  if (photo.kind === 'video') return photo.src
  const name = photo.src.split('/').pop()!.replace(/\.(jpe?g|png)$/i, '.jpg')
  return `/photos/thumbs/${name}`
}

// Add new photos/videos here — drop the file in /public/photos and add an entry.
export const photos: Photo[] = [
  { kind: 'photo', src: '/photos/20251028_213326.jpg', dogs: ['kimchi'], caption: 'Elevator selfie gone wrong' },
  { kind: 'photo', src: '/photos/20251113_194548.jpg', dogs: ['macha'], caption: "Puppy's first car ride home" },
  { kind: 'photo', src: '/photos/20251113_205858.jpg', dogs: ['kimchi', 'macha'], caption: 'First sniff — the meet-cute' },
  { kind: 'photo', src: '/photos/20251113_205929.jpg', dogs: ['kimchi', 'macha'], caption: 'Still getting acquainted' },
  { kind: 'photo', src: '/photos/20251113_212013.jpg', dogs: ['macha'], caption: "Bottle-feeding the world's tiniest troublemaker" },
  { kind: 'photo', src: '/photos/20251129_125603.jpg', dogs: ['kimchi'], caption: 'Belly-up and out cold' },
  { kind: 'photo', src: '/photos/20251212_021522.jpg', dogs: ['macha'], caption: 'Curled up past midnight' },
  { kind: 'photo', src: '/photos/20251212_021541.jpg', dogs: ['kimchi'], caption: 'Throne of pillows' },
  { kind: 'photo', src: '/photos/20251228_233926.jpg', dogs: ['kimchi', 'macha'], caption: 'Stacked like puppy pancakes' },
  { kind: 'video', src: '/photos/20260103_171235.mp4', dogs: ['kimchi', 'macha'], caption: 'Caught in action' },
  { kind: 'photo', src: '/photos/20260119_001404.jpg', dogs: ['kimchi', 'macha'], caption: 'Blanket fort, occupied' },
  { kind: 'video', src: '/photos/20260205_224650.mp4', dogs: ['kimchi', 'macha'], caption: 'A rare quiet moment... rare' },
  { kind: 'photo', src: '/photos/20260212_005841.jpg', dogs: ['kimchi', 'macha'], caption: 'Sharing the monkey (and each other)' },
  { kind: 'photo', src: '/photos/20260220_135155.jpg', dogs: ['kimchi', 'macha'], caption: 'Soaking up the sun on the balcony' },
  { kind: 'video', src: '/photos/20260221_214550.mp4', dogs: ['kimchi', 'macha'], caption: 'Zoomies, unfiltered' },
  { kind: 'photo', src: '/photos/20260304_183703.jpg', dogs: ['kimchi'], caption: 'Upside down and unbothered' },
  { kind: 'photo', src: '/photos/20260304_221238.jpg', dogs: ['kimchi'], caption: 'Pillow princess' },
  { kind: 'photo', src: '/photos/20260412_091605.jpg', dogs: ['kimchi'], caption: "Dressed for a role she didn't audition for" },
  { kind: 'photo', src: '/photos/20260415_225516.jpg', dogs: ['kimchi'], caption: 'Mid-yawn at the groomer' },
  { kind: 'photo', src: '/photos/20260512_202300.jpg', dogs: ['kimchi'], caption: 'Fresh trim, new attitude' },
  { kind: 'photo', src: '/photos/20260512_220436.jpg', dogs: ['kimchi'], caption: 'Strutting the hallway' },
  { kind: 'video', src: '/photos/20260519_200130.mp4', dogs: ['kimchi', 'macha'], caption: 'The daily chaos report' },
  { kind: 'photo', src: '/photos/20260520_082049.jpg', dogs: ['kimchi'], caption: 'Golden hour, golden dog' },
  { kind: 'photo', src: '/photos/20260520_082127.jpg', dogs: ['kimchi'], caption: 'That look means trouble' },
  { kind: 'video', src: '/photos/20260520_085445.mp4', dogs: ['kimchi', 'macha'], caption: 'Morning mayhem' },
  { kind: 'photo', src: '/photos/20260530_174822.jpg', dogs: ['kimchi'], caption: "Tucked into dad's arms" },
  { kind: 'photo', src: '/photos/20260614_105613.jpg', dogs: ['kimchi'], caption: 'Guarding the kitchen tile' },
  { kind: 'photo', src: '/photos/20260617_092138.jpg', dogs: ['kimchi', 'macha'], caption: 'Squad check-in' },
  { kind: 'photo', src: '/photos/20260618_160640.jpg', dogs: ['macha'], caption: 'Officially Macha (see: tag)' },
  { kind: 'photo', src: '/photos/20260706_231658.jpg', dogs: ['kimchi', 'macha'], caption: 'Round two of belly-up naps' },
]
