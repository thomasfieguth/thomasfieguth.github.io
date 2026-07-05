import useContainerWidth from '../../hooks/useContainerWidth.js'
import { fluidPx } from '../../utils/fluidSize.js'
import { parseAspectRatio } from '../../utils/aspectRatio.js'
import GridItem from './GridItem.jsx'
import styles from './RowFillGrid.module.css'

/**
 * RowFillGrid
 *
 * Fills items left-to-right, wrapping to the next row once a row would
 * exceed the container's width — plain flex-wrap. Every item keeps its
 * own aspect ratio; rows are ragged (the last item in a row just wraps
 * if it doesn't fit, rather than stretching to fill). For the variant
 * that force-fits every row to the container width exactly, see
 * JustifiedGrid.
 *
 * All items in a row share one height, which itself scales fluidly with
 * the grid's own measured width between sizeConfig.min and .max (see
 * src/utils/fluidSize.js). Photo items need no width computed here — the
 * browser sizes them intrinsically (PhotoTile fit="intrinsicHeight").
 * Viewer/progression items don't have an intrinsic size, so their width
 * is computed from their configured aspect ratio (default 16/9) and
 * passed down explicitly.
 *
 * Props:
 *   items       object[]  — media-item descriptors (see GridItem)
 *   sizeConfig  { min, preferred, max, assumedContainerWidth? } — row height bounds, px
 *                 (default { min: 140, preferred: 260, max: 360 })
 *   gap         number  — px gap between items (default 16)
 *   compactThreshold  number  — px; viewer/progression items narrower than
 *                               this render with compact (label-less) sliders (default 220)
 */
export default function RowFillGrid({
  items = [],
  sizeConfig = { min: 140, preferred: 260, max: 360 },
  gap = 16,
  compactThreshold = 220,
}) {
  const [containerRef, containerWidth] = useContainerWidth()
  const rowHeight = fluidPx(containerWidth, sizeConfig)

  if (items.length === 0) return null

  return (
    <div ref={containerRef} className={styles.grid} style={{ gap: `${gap}px` }}>
      {items.map((item, i) => {
        if (item.type === 'photo') {
          return (
            <GridItem
              key={i}
              item={item}
              photoFit="intrinsicHeight"
              style={{ height: rowHeight }}
            />
          )
        }

        const ratio = parseAspectRatio(item.config?.aspectRatio ?? '16 / 9')
        const width = rowHeight * ratio
        return (
          <GridItem
            key={i}
            item={item}
            style={{ width, height: rowHeight }}
            compact={width < compactThreshold}
          />
        )
      })}
    </div>
  )
}
