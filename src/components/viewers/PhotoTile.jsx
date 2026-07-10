import { useState } from 'react'
import Lightbox from './Lightbox.jsx'
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
 *   src     string
 *   alt     string
 *   fit     'box' | 'intrinsicHeight' | 'intrinsicWidth'  (default 'box')
 *   onOpen  (() => void)?  — when provided, called on click instead of
 *           opening PhotoTile's own lightbox. Lets a parent grid (e.g.
 *           CaptionGrid, ManualGrid) open a shared lightbox that knows
 *           about sibling photos, so Left/Right arrow keys can step
 *           between them.
 */
export default function PhotoTile({ src, alt = 'Photo', fit = 'box', onOpen }) {
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const handleClick = onOpen ?? (() => setLightboxOpen(true))

  return (
    <>
      <button
        type="button"
        className={`${styles.thumbButton} ${styles[fit]}`}
        onClick={handleClick}
      >
        <img
          src={src}
          alt={alt}
          className={styles.thumb}
          draggable={false}
        />
      </button>

      {!onOpen && lightboxOpen && (
        <Lightbox src={src} onClose={() => setLightboxOpen(false)} />
      )}
    </>
  )
}
