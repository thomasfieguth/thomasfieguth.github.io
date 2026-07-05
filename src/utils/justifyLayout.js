/**
 * justifyLayout.js
 *
 * Packs a list of items into justified rows: every row's items exactly
 * fill the container width, with no ragged edge, in the style of a
 * Flickr/Google-Photos justified gallery.
 *
 * Each item supplies a `preferredRatio` (width/height) — for photos this
 * is their measured natural ratio, for viewers/progressions it's their
 * configured aspectRatio. Normally the algorithm only has to solve for a
 * row height (given fixed ratios, one height makes the row's summed
 * width equal the container width — no distortion needed). But when a
 * row's natural fit would land far outside [minRowHeight, maxRowHeight],
 * that's not possible without either violating those bounds or leaving a
 * gap — so once the height is clamped to the nearest bound, each item's
 * *effective* ratio is nudged slightly (within its own [minRatio,
 * maxRatio]) to absorb the resulting width error and still fill the row
 * exactly.
 *
 * This is a pure function — no DOM, no React — so it's testable in
 * isolation from JustifiedGrid.
 *
 * @param {Array<{preferredRatio:number, minRatio?:number, maxRatio?:number}>} items
 * @param {object} opts
 * @param {number} opts.containerWidth
 * @param {number} opts.targetRowHeight
 * @param {number} opts.minRowHeight
 * @param {number} opts.maxRowHeight
 * @param {number} [opts.gap=0]
 * @param {number} [opts.defaultMinRatio=0.6]  fallback per-item lower bound (tall)
 * @param {number} [opts.defaultMaxRatio=2.2]  fallback per-item upper bound (wide)
 * @returns {Array<{height:number, items:Array<object & {width:number}>}>}
 */
export function layoutJustifiedRows(items, opts) {
  const {
    containerWidth,
    targetRowHeight,
    minRowHeight,
    maxRowHeight,
    gap = 0,
    defaultMinRatio = 0.6,
    defaultMaxRatio = 2.2,
  } = opts

  if (!items.length || containerWidth <= 0) return []

  const normalized = items.map((item) => ({
    ...item,
    preferredRatio: item.preferredRatio > 0 ? item.preferredRatio : 1,
    minRatio: item.minRatio ?? defaultMinRatio,
    maxRatio: item.maxRatio ?? defaultMaxRatio,
  }))

  const rows = []
  let currentRow = []

  const widthAtHeight = (row, height) =>
    row.reduce((sum, it) => sum + height * it.preferredRatio, 0) + gap * Math.max(0, row.length - 1)

  const heightToFit = (row) => {
    const ratioSum = row.reduce((sum, it) => sum + it.preferredRatio, 0)
    const gapsTotal = gap * Math.max(0, row.length - 1)
    return (containerWidth - gapsTotal) / ratioSum
  }

  for (const item of normalized) {
    currentRow.push(item)

    if (widthAtHeight(currentRow, targetRowHeight) < containerWidth) {
      continue // row not full yet at the target height, keep adding
    }

    // Row has reached (or passed) container width at the target height.
    // Decide whether the just-added item belongs in this row or should
    // start the next one, based on which grouping's natural-fit height
    // lands closer to the target.
    let committed = currentRow
    if (currentRow.length > 1) {
      const withoutLast = currentRow.slice(0, -1)
      const heightWith = heightToFit(currentRow)
      const heightWithout = heightToFit(withoutLast)
      const closerWithoutLast =
        Math.abs(heightWithout - targetRowHeight) < Math.abs(heightWith - targetRowHeight)
      if (closerWithoutLast) committed = withoutLast
    }

    rows.push(commitRow(committed, false))
    // Anything not committed (just the trailing item, if excluded) seeds the next row.
    currentRow = committed.length === currentRow.length ? [] : [currentRow[currentRow.length - 1]]
  }

  if (currentRow.length) {
    rows.push(commitRow(currentRow, true))
  }

  return rows

  function commitRow(row, isLastRow) {
    const gapsTotal = gap * Math.max(0, row.length - 1)
    let height = heightToFit(row)

    if (isLastRow) {
      // Don't force-stretch a sparse trailing row to fill the width —
      // that reads as an obvious layout artifact. Use the target height
      // (ragged right edge) unless that's outside the allowed bounds.
      height = Math.min(height, targetRowHeight)
    }

    height = Math.max(minRowHeight, Math.min(maxRowHeight, height))

    let widths = row.map((it) => height * it.preferredRatio)

    if (!isLastRow) {
      const widthSum = widths.reduce((a, b) => a + b, 0) + gapsTotal
      const error = containerWidth - widthSum // px; nonzero once height was clamped to a bound

      if (Math.abs(error) > 0.5) {
        const deltaRatioPerItem = error / height / row.length
        widths = row.map((it) =>
          height * clamp(it.preferredRatio + deltaRatioPerItem, it.minRatio, it.maxRatio)
        )
      }
    }

    return {
      height,
      items: row.map((it, i) => ({ ...it, width: widths[i] })),
    }
  }
}

function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value))
}
