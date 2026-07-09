import useContainerWidth from '../../hooks/useContainerWidth.js'
import GridItem from './GridItem.jsx'
import styles from './ManualGrid.module.css'

const COMPACT_THRESHOLD = 220

// Progression/internal viewers dock a slider *below* their canvas/frame —
// real extra height, not part of the aspect-ratio'd media area. If we
// forced the whole component into `height`, that dock would render past
// the box and overlap the row below it. Reserve roughly its real height
// (labels shown vs. compact-hidden) and only fit the media area to the
// remainder, so the component's true total height still lands on `height`.
const DOCK_TYPES = new Set([
  'photoProgression', 'stlProgression', 'stlInternal', 'gltfProgression', 'gltfInternal',
])
const DOCK_RESERVE_COMPACT = 40
const DOCK_RESERVE_FULL = 76

/**
 * ManualGrid
 *
 * A hand-placed grid: every item declares its own `row`, `width`, and
 * `height` in projectsData.js rather than having a layout algorithm infer
 * them. Consecutive items sharing the same `row` value are placed
 * left-to-right in that row; a new `row` value starts a new row below.
 *
 * `width`/`height` are fractions of this grid's own measured width (e.g.
 * 0.5 = half the grid's width) — both axes share that one unit, so a
 * photo can be made any shape and will be cropped (object-fit: cover) to
 * fit it if that shape doesn't match its native aspect ratio. 3D viewers
 * and photo progressions get the same treatment via GridItem's
 * `ratioOverride`, which forces their internal aspect ratio to match the
 * box exactly.
 *
 * Props:
 *   items  { type, row, width, height, ...itemFields }[]  — see
 *          projectsData.js for the full per-type field list; row/width/
 *          height are read here, everything else is forwarded to GridItem.
 *   gap    number  — px gap between items, both axes (default 16)
 */
export default function ManualGrid({ items = [], gap = 16 }) {
  const [containerRef, containerWidth] = useContainerWidth()

  const rows = []
  for (const item of items) {
    const lastRow = rows[rows.length - 1]
    if (lastRow && lastRow.row === item.row) lastRow.items.push(item)
    else rows.push({ row: item.row, items: [item] })
  }

  return (
    <div ref={containerRef} className={styles.grid} style={{ gap: `${gap}px` }}>
      {containerWidth > 0 && rows.map((row, ri) => {
        // Flexbox `gap` adds space *between* items on top of their own
        // widths — a row of 0.5 + 0.5 would otherwise render at
        // containerWidth + gap, overflowing past the grid into whatever
        // sits to its right. Scale widths against the width that's left
        // over after the row's internal gaps instead, so items + gaps
        // add back up to exactly containerWidth.
        const rowGapTotal = gap * Math.max(0, row.items.length - 1)
        const availableWidth = Math.max(0, containerWidth - rowGapTotal)

        return (
          <div key={ri} className={styles.row} style={{ gap: `${gap}px` }}>
            {row.items.map((item, ii) => {
              const width   = item.width  * availableWidth
              const height  = item.height * containerWidth
              const compact = width < COMPACT_THRESHOLD

              let mediaHeight = height
              if (DOCK_TYPES.has(item.type)) {
                mediaHeight = Math.max(1, height - (compact ? DOCK_RESERVE_COMPACT : DOCK_RESERVE_FULL))
              }

              return (
                <GridItem
                  key={ii}
                  item={item}
                  photoFit="box"
                  style={{ width, height, flex: `0 0 ${width}px` }}
                  ratioOverride={item.type === 'photo' ? undefined : width / mediaHeight}
                  compact={compact}
                />
              )
            })}
          </div>
        )
      })}
    </div>
  )
}
