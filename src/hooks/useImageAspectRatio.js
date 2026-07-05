import { useEffect, useState } from 'react'
import { loadImageAspectRatio, getCachedAspectRatio } from '../utils/imageAspectRatio.js'

/**
 * useImageAspectRatio
 *
 * Single-image hook wrapper around utils/imageAspectRatio.js's loader.
 * Not used by JustifiedGrid (which preloads many images at once via the
 * plain loader directly — hooks can't be called in a loop over a dynamic
 * list); this is for any standalone component that needs one image's
 * natural ratio.
 *
 * Returns { ratio, status } where status is 'loading' | 'loaded' | 'error'.
 * `ratio` is always a usable number (falls back while loading/on error).
 */
export default function useImageAspectRatio(src, fallbackRatio = 4 / 3) {
  const cached = src ? getCachedAspectRatio(src) : undefined
  const [ratio, setRatio] = useState(cached ?? fallbackRatio)
  const [status, setStatus] = useState(cached !== undefined ? 'loaded' : 'loading')

  useEffect(() => {
    let cancelled = false
    setStatus(getCachedAspectRatio(src) !== undefined ? 'loaded' : 'loading')

    loadImageAspectRatio(src, fallbackRatio).then(({ ratio: r, status: s }) => {
      if (cancelled) return
      setRatio(r)
      setStatus(s)
    })

    return () => { cancelled = true }
  }, [src, fallbackRatio])

  return { ratio, status }
}
