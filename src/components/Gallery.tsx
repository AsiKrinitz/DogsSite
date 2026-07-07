import { dogs } from '../data/dogs'
import { thumbSrc, type Photo } from '../data/photos'

interface GalleryProps {
  photos: Photo[]
  onSelect: (photo: Photo) => void
}

export function Gallery({ photos, onSelect }: GalleryProps) {
  if (photos.length === 0) {
    return (
      <p className="gallery__empty">No photos here yet — check back soon! 🐶</p>
    )
  }

  return (
    <div className="gallery">
      {photos.map((photo, i) => (
        <figure
          key={photo.src}
          className="photo-card"
          style={{ '--tilt': `${(i % 5) - 2}deg` } as React.CSSProperties}
          onClick={() => onSelect(photo)}
        >
          <div className="photo-card__media">
            {photo.kind === 'video' ? (
              <>
                <video src={photo.src} muted playsInline preload="metadata" />
                <span className="photo-card__play" aria-hidden="true">▶</span>
              </>
            ) : (
              <img src={thumbSrc(photo)} alt={photo.caption} loading="lazy" />
            )}
          </div>
          <figcaption>
            <span className="photo-card__caption">{photo.caption}</span>
            <span className="photo-card__tags">
              {photo.dogs.map((id) => (
                <span
                  key={id}
                  className="photo-card__tag"
                  style={{ background: dogs[id].colorSoft, color: dogs[id].color }}
                >
                  {dogs[id].emoji} {dogs[id].name}
                </span>
              ))}
            </span>
          </figcaption>
        </figure>
      ))}
    </div>
  )
}
