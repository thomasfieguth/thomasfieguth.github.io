import { useEffect, useRef, useCallback } from 'react'

/**
 * useAutoPlay
 *
 * Drives an auto-advancing index over a fixed number of steps.
 * The slider position animates from one step to the next over
 * `animMs` milliseconds, then waits at the target step for `waitMs`
 * milliseconds before advancing again.
 *
 * Pauses when `paused` is true (user is interacting).
 * Resumes automatically when `paused` returns to false.
 *
 * @param {object} options
 *   count        number of steps
 *   waitMs       ms to hold at each step before advancing
 *   animMs       ms for the position animation between steps
 *   paused       boolean — pause when true
 *   onStep       (index: number) => void — called when a step is reached
 *   onPosition   (position: number) => void — called every frame with
 *                  the fractional slider position (e.g. 1.73 = between 1 and 2)
 */
export default function useAutoPlay({
  count,
  waitMs = 2500,
  animMs = 400,
  paused = false,
  onStep,
  onPosition,
}) {
  const stateRef = useRef({
    currentStep: 0,
    phase: 'waiting',   // 'waiting' | 'animating'
    phaseStart: null,
    position: 0,
  })
  const rafRef    = useRef(null)
  const pausedRef = useRef(paused)

  // Keep pausedRef in sync without restarting the loop
  useEffect(() => {
    pausedRef.current = paused
    if (!paused) {
      // Resume: reset phase timer so we don't immediately skip
      stateRef.current.phaseStart = performance.now()
    }
  }, [paused])

  const tick = useCallback((now) => {
    rafRef.current = requestAnimationFrame(tick)

    if (pausedRef.current) return
    if (count <= 1) return

    const s = stateRef.current

    if (s.phaseStart === null) {
      s.phaseStart = now
    }

    const elapsed = now - s.phaseStart

    if (s.phase === 'waiting') {
      // Hold at current integer step
      onPosition?.(s.currentStep)
      if (elapsed >= waitMs) {
        s.phase      = 'animating'
        s.phaseStart = now
      }
    } else {
      // Animate position from currentStep toward nextStep
      const nextStep = (s.currentStep + 1) % count
      const t        = Math.min(elapsed / animMs, 1)
      const position = s.currentStep + t   // fractional position

      onPosition?.(position >= count ? 0 : position)

      if (t >= 1) {
        s.currentStep = nextStep
        s.phase       = 'waiting'
        s.phaseStart  = now
        onStep?.(nextStep)
      }
    }
  }, [count, waitMs, animMs, onStep, onPosition])

  useEffect(() => {
    stateRef.current = {
      currentStep: 0,
      phase: 'waiting',
      phaseStart: null,
      position: 0,
    }
    rafRef.current = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(rafRef.current)
  }, [tick])
}
