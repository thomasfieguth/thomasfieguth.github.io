import { useState, useCallback, useRef } from 'react'
import useAutoPlay from '../../hooks/useAutoPlay.js'
import styles from './ProgressionSlider.module.css'

/**
 * ProgressionSlider
 *
 * A slider that auto-advances through a list of steps.
 * Used inside STLViewer (progression mode) and by PhotoProgression.
 *
 * Props:
 *   steps         { label: string }[]   — step definitions
 *   currentIndex  number                — controlled current step
 *   onChange      (index: number) => void
 *   waitMs        number  — ms to hold at each step
 *   fadeMs        number  — ms for the position animation
 */
export default function ProgressionSlider({
  steps,
  currentIndex,
  onChange,
  waitMs = 2500,
  fadeMs = 600,
}) {
  const [sliderPos, setSliderPos]   = useState(0)   // fractional 0..N-1
  const [isPaused,  setIsPaused]    = useState(false)
  const isDraggingRef               = useRef(false)
  const trackRef                    = useRef(null)

  const count = steps.length

  // Auto-play drives sliderPos and calls onChange at each integer step
  useAutoPlay({
    count,
    waitMs,
    animMs: fadeMs,
    paused: isPaused,
    onStep:     (idx) => onChange(idx),
    onPosition: (pos) => {
      if (!isDraggingRef.current) setSliderPos(pos)
    },
  })

  // ── Manual drag ────────────────────────────────────────────────────────
  const posFromPointer = useCallback((clientX) => {
    const track = trackRef.current
    if (!track) return 0
    const { left, width } = track.getBoundingClientRect()
    const t = Math.max(0, Math.min(1, (clientX - left) / width))
    return t * (count - 1)
  }, [count])

  const onTrackPointerDown = useCallback((e) => {
    isDraggingRef.current = true
    setIsPaused(true)
    e.currentTarget.setPointerCapture(e.pointerId)
    const pos = posFromPointer(e.clientX)
    setSliderPos(pos)
    onChange(Math.round(pos))
  }, [posFromPointer, onChange])

  const onTrackPointerMove = useCallback((e) => {
    if (!isDraggingRef.current) return
    const pos = posFromPointer(e.clientX)
    setSliderPos(pos)
    onChange(Math.round(pos))
  }, [posFromPointer, onChange])

  const onTrackPointerUp = useCallback(() => {
    isDraggingRef.current = false
    // Snap to nearest integer
    setSliderPos(prev => Math.round(prev))
    // Resume auto-play after a short grace period
    setTimeout(() => setIsPaused(false), 800)
  }, [])

  // Thumb position as a percentage of track width
  const thumbPct = count > 1 ? (sliderPos / (count - 1)) * 100 : 0

  return (
    <div className={styles.container}>
      {/* Step number labels */}
      <div className={styles.labels}>
        {steps.map((step, i) => (
          <button
            key={i}
            className={`${styles.label} ${i === currentIndex ? styles.labelActive : ''}`}
            onClick={() => {
              setIsPaused(true)
              setSliderPos(i)
              onChange(i)
              setTimeout(() => setIsPaused(false), waitMs)
            }}
          >
            {step.label ?? i + 1}
          </button>
        ))}
      </div>

      {/* Track */}
      <div
        ref={trackRef}
        className={styles.track}
        onPointerDown={onTrackPointerDown}
        onPointerMove={onTrackPointerMove}
        onPointerUp={onTrackPointerUp}
        onPointerLeave={onTrackPointerUp}
      >
        {/* Filled portion */}
        <div
          className={styles.fill}
          style={{ width: `${thumbPct}%` }}
        />
        {/* Thumb */}
        <div
          className={styles.thumb}
          style={{ left: `${thumbPct}%` }}
        />
        {/* Step tick marks */}
        {steps.map((_, i) => (
          <div
            key={i}
            className={styles.tick}
            style={{ left: `${(i / (count - 1)) * 100}%` }}
          />
        ))}
      </div>
    </div>
  )
}
