import { dogs } from '../data/dogs'
import { photos } from '../data/photos'

export function Hero() {
  return (
    <header className="hero">
      <div className="hero__blob hero__blob--kimchi" aria-hidden="true" />
      <div className="hero__blob hero__blob--macha" aria-hidden="true" />

      <p className="hero__eyebrow">The (mostly) official album of</p>
      <h1 className="hero__title">
        <span className="hero__title-kimchi">Kimchi</span>
        <span className="hero__amp">&amp;</span>
        <span className="hero__title-macha">Macha</span>
      </h1>
      <p className="hero__subtitle">
        One spicy, one bitter, both very good dogs. 🐾
      </p>
      <p className="hero__count">{photos.length} moments and counting</p>

      <div className="hero__cards">
        {Object.values(dogs).map((dog) => (
          <div
            key={dog.id}
            className="hero__card"
            style={{ background: dog.colorSoft, borderColor: dog.color }}
          >
            <span className="hero__card-emoji">{dog.emoji}</span>
            <span className="hero__card-name" style={{ color: dog.color }}>
              {dog.name}
            </span>
            <span className="hero__card-tagline">{dog.tagline}</span>
          </div>
        ))}
      </div>
    </header>
  )
}
