import { useMemo, useState } from 'react'
import { Hero } from './components/Hero'
import { FilterBar, type Filter } from './components/FilterBar'
import { Gallery } from './components/Gallery'
import { Lightbox } from './components/Lightbox'
import { Footer } from './components/Footer'
import { photos, type Photo } from './data/photos'
import './App.css'

function App() {
  const [filter, setFilter] = useState<Filter>('all')
  const [selected, setSelected] = useState<Photo | null>(null)

  const visible = useMemo(() => {
    if (filter === 'videos') return photos.filter((p) => p.kind === 'video')
    const stills = photos.filter((p) => p.kind === 'photo')
    return filter === 'all' ? stills : stills.filter((p) => p.dogs.includes(filter))
  }, [filter])

  return (
    <>
      <Hero />

      <main className="page">
        <FilterBar active={filter} onChange={setFilter} />
        <Gallery photos={visible} onSelect={setSelected} />
      </main>

      <Footer />

      {selected && (
        <Lightbox photo={selected} onClose={() => setSelected(null)} />
      )}
    </>
  )
}

export default App
