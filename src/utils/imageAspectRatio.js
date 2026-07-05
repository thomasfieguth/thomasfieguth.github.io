/**
 * imageAspectRatio.js
 *
 * Plain async image-dimension loader with a module-level cache, shared by
 * useImageAspectRatio (single-image hook usage) and JustifiedGrid (which
 * needs to batch-preload many images' ratios before it can pack rows —
 * something a per-item hook can't do, since hooks can't be called in a
 * loop over a dynamic item list).
 */
const ratioCache = new Map()

/**
 * Resolves an image's natural width/height ratio. Never rejects — a
 * failed load (404, etc.) resolves to `fallbackRatio` with status
 * 'error', so a caller doing a batch preload for layout purposes can
 * always proceed once every promise settles.
 *
 * @returns {Promise<{ratio: number, status: 'loaded'|'error'}>}
 */
export function loadImageAspectRatio(src, fallbackRatio = 4 / 3) {
  if (!src) return Promise.resolve({ ratio: fallbackRatio, status: 'error' })

  const cached = ratioCache.get(src)
  if (cached !== undefined) return Promise.resolve({ ratio: cached, status: 'loaded' })

  return new Promise((resolve) => {
    const img = new Image()

    img.onload = () => {
      const ratio = img.naturalWidth > 0 && img.naturalHeight > 0
        ? img.naturalWidth / img.naturalHeight
        : fallbackRatio
      ratioCache.set(src, ratio)
      resolve({ ratio, status: 'loaded' })
    }

    img.onerror = () => {
      // Cache the fallback too, so a broken image isn't re-requested (and
      // re-fails) on every subsequent layout pass.
      ratioCache.set(src, fallbackRatio)
      resolve({ ratio: fallbackRatio, status: 'error' })
    }

    img.src = src
  })
}

/** Synchronous cache read — undefined if `src` hasn't resolved yet. */
export function getCachedAspectRatio(src) {
  return ratioCache.get(src)
}
