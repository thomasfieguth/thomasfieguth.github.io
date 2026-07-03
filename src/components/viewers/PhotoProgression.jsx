import { useState, useRef, useCallback, useEffect } from 'react'
import AlphaSlider from './AlphaSlider.jsx'
import styles from './PhotoProgression.module.css'

/**
 * PhotoProgression
 *
 * Displays a sequence of photos with crossfade transitions.
 * Auto-advances using a bounce pattern (via AlphaSlider): 0→1→…→N-1→…→0.
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
 */
export default function PhotoProgression({ steps = [], config = {} }) {
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

  const count = steps.length
  if (count === 0) return null

  // Derive which two images to crossfade between and the blend factor
  const clampedPos = Math.max(0, Math.min(count - 1, position))
  const indexA     = Math.floor(clampedPos)
  const indexB     = Math.min(indexA + 1, count - 1)
  const alpha      = clampedPos - indexA   // 0 = fully A, 1 = fully B

  const imageA = steps[indexA]?.image
  const imageB = steps[indexB]?.image

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
      <div className={styles.frame} style={{ aspectRatio: frameAspectRatio, maxHeight }}>

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
          waitMs={waitMs}
          fadeMs={fadeMs}
        />
      </div>
    </div>
  )
}
