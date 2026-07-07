import { useEffect } from 'react'
import { dogs } from '../data/dogs'
import type { Photo } from '../data/photos'

interface LightboxProps {
  photo: Photo
  onClose: () => void
}

export function Lightbox({ photo, onClose }: LightboxProps) {
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [onClose])

  return (
    <div className="lightbox" onClick={onClose}>
      <button
        type="button"
        className="lightbox__close"
        onClick={onClose}
        aria-label="Close"
      >
        ✕
      </button>
      <figure
        className="lightbox__content"
        onClick={(e) => e.stopPropagation()}
      >
        {photo.kind === 'video' ? (
          <video src={photo.src} controls playsInline autoFocus />
        ) : (
          <img src={photo.src} alt={photo.caption} />
        )}
        <figcaption>
          <span>{photo.caption}</span>
          <span className="lightbox__tags">
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
    </div>
  )
}
