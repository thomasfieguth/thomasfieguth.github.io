import { useState } from 'react'
import AlphaSlider from './AlphaSlider.jsx'
import Overlay from './Overlay.jsx'
import styles from './PhotoProgression.module.css'

/**
 * PhotoProgression
 *
 * Displays a sequence of photos with crossfade transitions.
 * Auto-advances using a bounce pattern (via AlphaSlider): 0→1→…→N-1→…→0.
 * Clicking the frame opens a lightbox with whichever photo was dominant
 * at that moment; auto-advance pauses while the lightbox is open.
 *
 * Props:
 *   steps   { label: string, image: string }[]   — ordered photo steps
 *   config  {
 *     waitMs       number  — ms to hold at each step before advancing  (default 2500)
 *     fadeMs       number  — ms for the crossfade transition            (default 600)
 *     aspectRatio  string  — CSS aspect-ratio of the photo frame, e.g. '16 / 9',
 *                            or 'auto' to match the first loaded image's own
 *                            aspect ratio                                (default 'auto')
 *     maxWidth     string|number  — CSS max-width of the whole component
 *     maxHeight    string|number  — CSS max-height of the photo frame
 *   }
 *   compact  boolean  — hide step-name labels in the docked slider, keep the
 *                       track/thumb (default false)
 */
export default function PhotoProgression({ steps = [], config = {}, compact = false }) {
  const {
    waitMs      = 2500,
    fadeMs      = 600,
    aspectRatio = 'auto',
    maxWidth,
    maxHeight,
  } = config

  // Fractional position 0..N-1, driven by AlphaSlider
  const [position, setPosition] = useState(0)
  // Measured natural aspect ratio, used when aspectRatio === 'auto'
  const [autoAspect, setAutoAspect] = useState(null)
  // Snapshot of whichever image was dominant when the frame was clicked
  const [lightboxStep, setLightboxStep] = useState(null)

  const count = steps.length
  if (count === 0) return null

  // Derive which two images to crossfade between and the blend factor
  const clampedPos = Math.max(0, Math.min(count - 1, position))
  const indexA     = Math.floor(clampedPos)
  const indexB     = Math.min(indexA + 1, count - 1)
  const alpha      = clampedPos - indexA   // 0 = fully A, 1 = fully B

  const imageA = steps[indexA]?.image
  const imageB = steps[indexB]?.image

  // Whichever image is more visible right now is "the" current photo
  const dominantIndex = alpha < 0.5 ? indexA : indexB

  // Once the first image loads, lock the frame to its natural ratio so
  // nothing gets cropped. Falls back to 16:9 until that measurement lands.
  const handleImageLoad = (e) => {
    if (aspectRatio !== 'auto' || autoAspect) return
    const { naturalWidth, naturalHeight } = e.target
    if (naturalWidth && naturalHeight) {
      setAutoAspect(`${naturalWidth} / ${naturalHeight}`)
    }
  }

  const frameAspectRatio = aspectRatio === 'auto' ? (autoAspect ?? '16 / 9') : aspectRatio

  return (
    <div className={styles.wrapper} style={{ maxWidth }}>
      {/* Photo frame */}
      <div
        className={styles.frame}
        style={{ aspectRatio: frameAspectRatio, maxHeight }}
        onClick={() => setLightboxStep(steps[dominantIndex])}
        role="button"
        tabIndex={0}
        aria-label="View larger photo"
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') setLightboxStep(steps[dominantIndex])
        }}
      >

        {/* Base image — always rendered */}
        <img
          key={imageA}
          src={imageA}
          alt={steps[indexA]?.label ?? ''}
          className={styles.photo}
          style={{ opacity: 1 }}
          draggable={false}
          onLoad={handleImageLoad}
        />

        {/* Overlay image — fades in as alpha increases */}
        {indexB !== indexA && (
          <img
            key={imageB}
            src={imageB}
            alt={steps[indexB]?.label ?? ''}
            className={`${styles.photo} ${styles.overlay}`}
            style={{ opacity: alpha }}
            draggable={false}
          />
        )}
      </div>

      {/* Slider */}
      <div className={styles.sliderDock}>
        <AlphaSlider
          value={position}
          onChange={setPosition}
          labels={steps.map(s => s.label)}
          paused={lightboxStep !== null}
          waitMs={waitMs}
          fadeMs={fadeMs}
          showLabels={!compact}
        />
      </div>

      {/* Lightbox — frozen on whichever photo was showing at click time */}
      {lightboxStep && (
        <Overlay onClose={() => setLightboxStep(null)}>
          <img
            src={lightboxStep.image}
            alt={lightboxStep.label ?? ''}
            className={styles.lightboxImage}
            draggable={false}
          />
        </Overlay>
      )}
    </div>
  )
}
