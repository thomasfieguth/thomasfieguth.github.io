import Overlay from './Overlay.jsx'
import useIsMobile from '../../hooks/useIsMobile.js'
import useSwipeNav from '../../hooks/useSwipeNav.js'
import styles from './PhotoTile.module.css'

/**
 * Lightbox
 *
 * A single full-size image (or video) inside an Overlay. `onPrev`/`onNext`
 * are optional — pass them when the item belongs to a sequence (a grid of
 * photos/videos) so Overlay's Left/Right arrow-key handling can step
 * through it (desktop), or a swipe (mobile, below the breakpoint); omit
 * them for a standalone item with no siblings to navigate to.
 *
 * Props:
 *   src      string
 *   alt      string?
 *   type     'photo' | 'video'  (default 'photo')
 *   onClose  () => void
 *   onPrev   (() => void)?
 *   onNext   (() => void)?
 */
export default function Lightbox({ src, alt = '', type = 'photo', onClose, onPrev, onNext }) {
  const isMobile = useIsMobile()
  const swipeHandlers = useSwipeNav({
    enabled: isMobile,
    onSwipeLeft: onNext,
    onSwipeRight: onPrev,
  })

  return (
    <Overlay onClose={onClose} onPrev={onPrev} onNext={onNext} swipeHandlers={swipeHandlers}>
      {type === 'video' ? (
        <video
          src={src}
          className={styles.lightboxImage}
          controls
          autoPlay
          loop
          muted
          playsInline
        />
      ) : (
        <img
          src={src}
          alt={alt}
          className={styles.lightboxImage}
          draggable={false}
        />
      )}
    </Overlay>
  )
}
