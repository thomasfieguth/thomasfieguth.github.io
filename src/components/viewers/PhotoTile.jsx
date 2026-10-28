import { useState } from 'react'
import Lightbox from './Lightbox.jsx'
import MediaFrame from './MediaFrame.jsx'
import styles from './PhotoTile.module.css'

/**
 * PhotoTile
 *
 * A single photo filling 100% width AND height of its parent (which
 * already knows the exact box size/ratio), cropped via MediaFrame: hover
 * zooms it slightly to signal it's clickable, clicking opens a lightbox
 * with the full-size image. Used by GridItem for ManualGrid's photos.
 *
 * Props:
 *   src     string
 *   alt     string
 *   type    'photo' | 'video'  (default 'photo') — a video autoplays muted
 *           and looped in the tile, same as MediaFrame
 *   maximumCutoffRatio, xMove, yMove  number?  — crop adjustments, passed
 *           straight through to MediaFrame (see there)
 *   onOpen  (() => void)?  — when provided, called on click instead of
 *           opening PhotoTile's own lightbox. Lets a parent grid (e.g.
 *           ManualGrid) open a shared lightbox that knows about sibling
 *           photos, so Left/Right arrow keys can step between them.
 */
export default function PhotoTile({ src, alt = 'Photo', type = 'photo', maximumCutoffRatio, xMove, yMove, onOpen }) {
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const handleClick = onOpen ?? (() => setLightboxOpen(true))

  return (
    <>
      <button
        type="button"
        className={styles.thumbButton}
        onClick={handleClick}
      >
        <MediaFrame
          type={type}
          src={src}
          alt={alt}
          maximumCutoffRatio={maximumCutoffRatio}
          xMove={xMove}
          yMove={yMove}
          zoomOnHover
        />
      </button>

      {!onOpen && lightboxOpen && (
        <Lightbox src={src} alt={alt} type={type} onClose={() => setLightboxOpen(false)} />
      )}
    </>
  )
}
