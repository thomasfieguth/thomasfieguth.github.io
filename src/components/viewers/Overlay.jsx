import { useEffect } from 'react'
import { createPortal } from 'react-dom'
import styles from './Overlay.module.css'

// Reference-counts open overlays so nested/overlapping instances (e.g. two
// viewers opened in quick succession) don't clobber each other's "restore
// scroll" value and leave the page permanently locked.
let openOverlayCount = 0

/**
 * Overlay
 *
 * Full-viewport modal backdrop, portaled to document.body. Closes on
 * Escape or a click outside its content. Used for image lightboxes and
 * the 3D viewer fullscreen mode.
 *
 * Props:
 *   onClose           () => void
 *   onPrev            () => void  — optional; wired to the Left arrow key
 *   onNext            () => void  — optional; wired to the Right arrow key
 *   children          content rendered inside the modal
 *   contentClassName  optional extra class for the content wrapper
 *   swipeHandlers      { onTouchStart, onTouchEnd }?  — from useSwipeNav;
 *                      spread onto the content wrapper so mobile callers
 *                      can swipe-navigate instead of using arrow keys
 */
export default function Overlay({ onClose, onPrev, onNext, children, contentClassName, swipeHandlers }) {
  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === 'Escape') onClose()
      else if (e.key === 'ArrowLeft' && onPrev) onPrev()
      else if (e.key === 'ArrowRight' && onNext) onNext()
    }
    document.addEventListener('keydown', onKeyDown)

    // Lock page scroll while any overlay is open
    openOverlayCount += 1
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', onKeyDown)
      openOverlayCount = Math.max(0, openOverlayCount - 1)
      if (openOverlayCount === 0) {
        document.body.style.overflow = ''
      }
    }
  }, [onClose, onPrev, onNext])

  return createPortal(
    <div className={styles.backdrop} onClick={onClose}>
      <button
        type="button"
        className={styles.closeButton}
        onClick={onClose}
        aria-label="Close"
      >
        ×
      </button>
      <div
        className={`${styles.content} ${contentClassName ?? ''}`}
        onClick={(e) => e.stopPropagation()}
        {...swipeHandlers}
      >
        {children}
      </div>
    </div>,
    document.body
  )
}
