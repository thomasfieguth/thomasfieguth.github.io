import { useEffect, useRef, useState } from 'react'

/**
 * useContainerWidth
 *
 * Tracks the rendered content-box width of an element via ResizeObserver.
 * Used by grid layouts that need a concrete pixel width to run packing
 * math against (JustifiedGrid) or to derive responsive size variables
 * (RowFillGrid, ColumnFillGrid).
 *
 * Returns [ref, width] — attach ref to the element to measure. width is
 * 0 until the first observation fires (post-mount).
 */
export default function useContainerWidth() {
  const ref = useRef(null)
  const [width, setWidth] = useState(0)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const ro = new ResizeObserver((entries) => {
      for (const entry of entries) {
        setWidth(entry.contentRect.width)
      }
    })
    ro.observe(el)

    return () => ro.disconnect()
  }, [])

  return [ref, width]
}
