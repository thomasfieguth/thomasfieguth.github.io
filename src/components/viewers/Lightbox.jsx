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
 *   type     'photo' | 'video' | 'iframe'  (default 'photo')
 *   onClose       () => void
 *   onPrev        (() => void)?
 *   onNext        (() => void)?
 *   onImageClick  ((src: string) => void)?  — called with the currently
 *                 displayed src when the enlarged <img> itself is clicked
 *                 (photo type only, not video/iframe). Generic hook with no
 *                 built-in behavior of its own — e.g. CaptionGrid forwards
 *                 this so a caller can react to clicks on one specific image.
 */
export default function Lightbox({ src, alt = '', type = 'photo', onClose, onPrev, onNext, onImageClick }) {
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
      ) : type === 'iframe' ? (
        <iframe
          src={src}
          className={styles.lightboxIframe}
          title={alt}
          allow="autoplay; encrypted-media; fullscreen"
        />
      ) : (
        <img
          src={src}
          alt={alt}
          className={styles.lightboxImage}
          draggable={false}
          loading="lazy"
          onClick={onImageClick ? () => onImageClick(src) : undefined}
        />
      )}
    </Overlay>
  )
}
