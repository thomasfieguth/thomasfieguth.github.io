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
 *     waitMs   number   — ms to hold at each step before advancing  (default 2500)
 *     fadeMs   number   — ms for the crossfade transition            (default 600)
 *     aspectRatio  string — CSS aspect-ratio of the photo frame      (default '16/9')
 *   }
 */
export default function PhotoProgression({ steps = [], config = {} }) {
  const {
    waitMs      = 2500,
    fadeMs      = 600,
    aspectRatio = '16 / 9',
  } = config

  // Fractional position 0..N-1, driven by AlphaSlider
  const [position, setPosition] = useState(0)

  const count = steps.length
  if (count === 0) return null

  // Derive which two images to crossfade between and the blend factor
  const clampedPos = Math.max(0, Math.min(count - 1, position))
  const indexA     = Math.floor(clampedPos)
  const indexB     = Math.min(indexA + 1, count - 1)
  const alpha      = clampedPos - indexA   // 0 = fully A, 1 = fully B

  const imageA = steps[indexA]?.image
  const imageB = steps[indexB]?.image

  return (
    <div className={styles.wrapper}>
      {/* Photo frame */}
      <div className={styles.frame} style={{ aspectRatio }}>

        {/* Base image — always rendered */}
        <img
          key={imageA}
          src={imageA}
          alt={steps[indexA]?.label ?? ''}
          className={styles.photo}
          style={{ opacity: 1 }}
          draggable={false}
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
