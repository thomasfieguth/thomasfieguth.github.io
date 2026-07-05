import { useState } from 'react'
import Overlay from './Overlay.jsx'
import styles from './PhotoTile.module.css'

/**
 * PhotoTile
 *
 * A single photo: hover zooms it slightly to signal it's clickable,
 * clicking opens a lightbox with the full-size image. Shared by
 * PhotoGrid and the row-fill/column-fill/justified grid layouts, which
 * each size it differently — `fit` controls how it fills its parent box:
 *
 *   'box'             — 100% width AND height of the parent (which
 *                        already knows the exact box size/ratio),
 *                        cropped via object-fit: cover.
 *                        Used by: PhotoGrid, JustifiedGrid.
 *   'intrinsicHeight' — 100% height (parent sets an explicit px height),
 *                        width follows the image's own natural ratio.
 *                        Used by: RowFillGrid.
 *   'intrinsicWidth'  — 100% width, height follows the image's own
 *                        natural ratio.
 *                        Used by: ColumnFillGrid.
 *
 * Props:
 *   src   string
 *   alt   string
 *   fit   'box' | 'intrinsicHeight' | 'intrinsicWidth'  (default 'box')
 */
export default function PhotoTile({ src, alt = 'Photo', fit = 'box' }) {
  const [lightboxOpen, setLightboxOpen] = useState(false)

  return (
    <>
      <button
        type="button"
        className={`${styles.thumbButton} ${styles[fit]}`}
        onClick={() => setLightboxOpen(true)}
      >
        <img
          src={src}
          alt={alt}
          className={styles.thumb}
          draggable={false}
        />
      </button>

      {lightboxOpen && (
        <Overlay onClose={() => setLightboxOpen(false)}>
          <img
            src={src}
            alt=""
            className={styles.lightboxImage}
            draggable={false}
          />
        </Overlay>
      )}
    </>
  )
}
