export type DogId = 'kimchi' | 'macha'

export interface DogProfile {
  id: DogId
  numericId: 1 | 2
  name: string
  emoji: string
  color: string
  colorSoft: string
  tagline: string
}

export const dogs: Record<DogId, DogProfile> = {
  kimchi: {
    id: 'kimchi',
    numericId: 1,
    name: 'Kimchi',
    emoji: '🌶️',
    color: 'var(--kimchi)',
    colorSoft: 'var(--kimchi-soft)',
    tagline: 'Spicy little troublemaker',
  },
  macha: {
    id: 'macha',
    numericId: 2,
    name: 'Macha',
    emoji: '🍵',
    color: 'var(--macha)',
    colorSoft: 'var(--macha-soft)',
    tagline: 'Calm, cool & a little bitter',
  },
}
