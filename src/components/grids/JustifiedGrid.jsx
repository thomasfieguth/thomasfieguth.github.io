import { useEffect, useMemo, useState } from 'react'
import useContainerWidth from '../../hooks/useContainerWidth.js'
import { fluidPx } from '../../utils/fluidSize.js'
import { parseAspectRatio } from '../../utils/aspectRatio.js'
import { loadImageAspectRatio, getCachedAspectRatio } from '../../utils/imageAspectRatio.js'
import { layoutJustifiedRows } from '../../utils/justifyLayout.js'
import GridItem from './GridItem.jsx'
import styles from './JustifiedGrid.module.css'

const DEFAULT_MIN_RATIO = 0.6   // tall extreme
const DEFAULT_MAX_RATIO = 2.2   // wide extreme
const PHOTO_FALLBACK_RATIO = 4 / 3

/**
 * JustifiedGrid
 *
 * Packs items into rows that exactly fill the container's width — no
 * ragged edge — in the style of a Flickr/Google-Photos justified
 * gallery. Row height is otherwise fluid within [sizeConfig.min, .max];
 * when a row's natural fit falls outside that range, individual items'
 * aspect ratios are nudged slightly (within their own min/max bounds) so
 * the row still lands on an exact width instead of over/undershooting.
 * The packing itself is a pure function — see src/utils/justifyLayout.js.
 *
 * Photos need their real aspect ratio to lay out correctly, and that
 * isn't known until the image loads — this preloads every photo item
 * and re-lays-out as each one resolves, rather than blocking on the
 * slowest image. A failed load (404) falls back to a fixed ratio instead
 * of blocking the layout.
 *
 * Non-photo items (viewers/progressions) use their configured
 * `config.aspectRatio` (default 16/9) as their preferred ratio. Override
 * `minRatio`/`maxRatio` on a specific item descriptor if a given model
 * looks wrong stretched away from its default.
 *
 * Props:
 *   items       object[]
 *   sizeConfig  { min, preferred, max, assumedContainerWidth? } — row height bounds, px
 *                 (default { min: 160, preferred: 280, max: 400 })
 *   gap         number  — px gap between items, both axes (default 16)
 *   defaultMinRatio  number  — fallback lower aspect-ratio bound (default 0.6)
 *   defaultMaxRatio  number  — fallback upper aspect-ratio bound (default 2.2)
 *   compactThreshold  number  — px; items narrower than this render with
 *                               compact (label-less) sliders (default 220)
 */
export default function JustifiedGrid({
  items = [],
  sizeConfig = { min: 160, preferred: 280, max: 400 },
  gap = 16,
  defaultMinRatio = DEFAULT_MIN_RATIO,
  defaultMaxRatio = DEFAULT_MAX_RATIO,
  compactThreshold = 220,
}) {
  const [containerRef, containerWidth] = useContainerWidth()

  // Photo ratios resolve asynchronously; every other item type's ratio is
  // known synchronously from its own config, so only photos go through
  // the preload/cache dance below.
  const photoSrcs = useMemo(
    () => items.filter((it) => it.type === 'photo').map((it) => it.src),
    [items]
  )

  const [photoRatios, setPhotoRatios] = useState(() => {
    const initial = new Map()
    for (const src of photoSrcs) {
      const cached = getCachedAspectRatio(src)
      if (cached !== undefined) initial.set(src, cached)
    }
    return initial
  })

  useEffect(() => {
    let cancelled = false
    photoSrcs.forEach((src) => {
      if (photoRatios.has(src)) return
      loadImageAspectRatio(src, PHOTO_FALLBACK_RATIO).then(({ ratio }) => {
        if (cancelled) return
        setPhotoRatios((prev) => {
          if (prev.has(src)) return prev // already resolved by a previous pass
          const next = new Map(prev)
          next.set(src, ratio)
          return next
        })
      })
    })
    return () => { cancelled = true }
    // photoRatios intentionally excluded: it's only read to skip re-fetching
    // already-resolved srcs, and including it would re-run this effect on
    // every resolution instead of just when the item list changes.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [photoSrcs])

  const itemsWithRatio = items.map((item) => {
    if (item.type === 'photo') {
      return {
        item,
        preferredRatio: photoRatios.get(item.src) ?? PHOTO_FALLBACK_RATIO,
        minRatio: item.minRatio ?? defaultMinRatio,
        maxRatio: item.maxRatio ?? defaultMaxRatio,
      }
    }
    return {
      item,
      preferredRatio: parseAspectRatio(item.config?.aspectRatio ?? '16 / 9'),
      minRatio: item.minRatio ?? defaultMinRatio,
      maxRatio: item.maxRatio ?? defaultMaxRatio,
    }
  })

  const targetRowHeight = fluidPx(containerWidth, sizeConfig)

  const rows = layoutJustifiedRows(itemsWithRatio, {
    containerWidth,
    targetRowHeight,
    minRowHeight: sizeConfig.min,
    maxRowHeight: sizeConfig.max,
    gap,
    defaultMinRatio,
    defaultMaxRatio,
  })

  if (items.length === 0) return null

  return (
    <div ref={containerRef} className={styles.grid} style={{ gap: `${gap}px` }}>
      {containerWidth > 0 && rows.map((row, ri) => (
        <div key={ri} className={styles.row} style={{ height: row.height, gap: `${gap}px` }}>
          {row.items.map((packed, ii) => {
            const { item, width } = packed
            const effectiveRatio = width / row.height
            return (
              <GridItem
                key={ii}
                item={item}
                photoFit="box"
                style={{ width, height: row.height }}
                ratioOverride={item.type === 'photo' ? undefined : effectiveRatio}
                compact={width < compactThreshold}
              />
            )
          })}
        </div>
      ))}
    </div>
  )
}
