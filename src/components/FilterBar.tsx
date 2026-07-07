import { dogs, type DogId } from '../data/dogs'

export type Filter = DogId | 'all' | 'videos'

interface FilterBarProps {
  active: Filter
  onChange: (filter: Filter) => void
}

export function FilterBar({ active, onChange }: FilterBarProps) {
  return (
    <nav className="filter-bar" aria-label="Filter photos by dog">
      <button
        type="button"
        className={`filter-pill${active === 'all' ? ' is-active' : ''}`}
        style={{ '--pill-color': 'var(--text-h)' } as React.CSSProperties}
        onClick={() => onChange('all')}
      >
        All photos
      </button>
      {Object.values(dogs).map((dog) => (
        <button
          key={dog.id}
          type="button"
          className={`filter-pill${active === dog.id ? ' is-active' : ''}`}
          style={{ '--pill-color': dog.color } as React.CSSProperties}
          onClick={() => onChange(dog.id)}
        >
          {dog.emoji} {dog.name}
        </button>
      ))}
      <button
        type="button"
        className={`filter-pill${active === 'videos' ? ' is-active' : ''}`}
        style={{ '--pill-color': 'var(--yellow)' } as React.CSSProperties}
        onClick={() => onChange('videos')}
      >
        🎬 Videos
      </button>
    </nav>
  )
}
