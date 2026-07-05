import useContainerWidth from '../../hooks/useContainerWidth.js'
import { fluidPx } from '../../utils/fluidSize.js'
import GridItem from './GridItem.jsx'
import styles from './ColumnFillGrid.module.css'

/**
 * ColumnFillGrid
 *
 * Fills items top-to-bottom, wrapping to the next column once a column
 * has taken its balanced share of the total content height. Built on
 * native CSS multi-column layout (`column-fill: balance`, the default),
 * which handles that height accounting on its own — no per-item height
 * math needed here.
 *
 * This also means item sizing needs almost no custom logic: every item
 * is set to 100% of the column width, and each item type already knows
 * how to derive its own height from a given width (an <img> intrinsically;
 * STLViewer/GLTFViewer/PhotoProgression via their own ResizeObserver +
 * configured aspectRatio). Column-fill is the one layout of the three
 * that's essentially free to compose from existing components.
 *
 * Column width scales fluidly with the grid's own measured width between
 * sizeConfig.min and .max (see src/utils/fluidSize.js).
 *
 * Props:
 *   items       object[]
 *   sizeConfig  { min, preferred, max, assumedContainerWidth? } — column width bounds, px
 *                 (default { min: 220, preferred: 320, max: 440 })
 *   gap         number  — px; used as both column-gap and the vertical
 *                         spacing between stacked items in a column (default 16)
 *   compactThreshold  number  — px; below this column width, viewer/progression
 *                               items render with compact (label-less) sliders (default 220)
 */
export default function ColumnFillGrid({
  items = [],
  sizeConfig = { min: 220, preferred: 320, max: 440 },
  gap = 16,
  compactThreshold = 220,
}) {
  const [containerRef, containerWidth] = useContainerWidth()
  const columnWidth = fluidPx(containerWidth, sizeConfig)

  if (items.length === 0) return null

  return (
    <div
      ref={containerRef}
      className={styles.grid}
      style={{ columnWidth: `${columnWidth}px`, columnGap: `${gap}px` }}
    >
      {items.map((item, i) => (
        <div key={i} className={styles.cell} style={{ marginBottom: `${gap}px` }}>
          <GridItem
            item={item}
            photoFit="intrinsicWidth"
            style={{ width: '100%' }}
            compact={columnWidth < compactThreshold}
          />
        </div>
      ))}
    </div>
  )
}
