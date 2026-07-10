import Overlay from './Overlay.jsx'
import styles from './PhotoTile.module.css'

/**
 * Lightbox
 *
 * A single full-size image inside an Overlay. `onPrev`/`onNext` are
 * optional — pass them when the image belongs to a sequence (a grid of
 * photos) so Overlay's Left/Right arrow-key handling can step through it;
 * omit them for a standalone image with no siblings to navigate to.
 *
 * Props:
 *   src      string
 *   alt      string?
 *   onClose  () => void
 *   onPrev   (() => void)?
 *   onNext   (() => void)?
 */
export default function Lightbox({ src, alt = '', onClose, onPrev, onNext }) {
  return (
    <Overlay onClose={onClose} onPrev={onPrev} onNext={onNext}>
      <img
        src={src}
        alt={alt}
        className={styles.lightboxImage}
        draggable={false}
      />
    </Overlay>
  )
}
