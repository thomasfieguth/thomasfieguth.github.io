import { useState } from 'react'
import Overlay from './Overlay.jsx'
import styles from './PhotoGrid.module.css'

/**
 * PhotoGrid
 *
 * A static grid of photos. Hovering a photo zooms it slightly to signal
 * it's clickable; clicking opens a lightbox with the full-size image.
 *
 * Props:
 *   images  string[]  — photo paths
 */
export default function PhotoGrid({ images = [] }) {
  const [lightboxSrc, setLightboxSrc] = useState(null)

  if (images.length === 0) return null

  return (
    <div className={styles.grid}>
      {images.map((src, i) => (
        <button
          key={src}
          type="button"
          className={styles.thumbButton}
          onClick={() => setLightboxSrc(src)}
        >
          <img
            src={src}
            alt={`Photo ${i + 1}`}
            className={styles.thumb}
            draggable={false}
          />
        </button>
      ))}

      {lightboxSrc && (
        <Overlay onClose={() => setLightboxSrc(null)}>
          <img
            src={lightboxSrc}
            alt=""
            className={styles.lightboxImage}
            draggable={false}
          />
        </Overlay>
      )}
    </div>
  )
}
