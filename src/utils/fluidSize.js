/**
 * fluidSize.js
 *
 * Computes a size (px) that scales continuously with a measured container
 * width, clamped to [min, max] — used by RowFillGrid, ColumnFillGrid, and
 * JustifiedGrid so item/row/column sizing responds fluidly to the grid's
 * own rendered width rather than jumping between fixed breakpoints.
 *
 * This is a plain JS clamp rather than CSS clamp()/container-query units
 * because two of the three grids need a concrete pixel number anyway (to
 * size WebGL-canvas-backed viewer items, which derive their own height
 * from an explicitly-set wrapper width — see GridItem) — using the same
 * mechanism for every grid and every item type keeps the sizing model
 * consistent instead of mixing CSS-driven and JS-driven sizing.
 *
 * `preferred` and `assumedContainerWidth` set the slope between the
 * bounds: at containerWidth === assumedContainerWidth, the result is
 * exactly `preferred`; scales down/up from there, clamped at the ends.
 */
export function fluidPx(containerWidth, { min, preferred, max, assumedContainerWidth = 1000 }) {
  if (!containerWidth || containerWidth <= 0) return preferred
  const scaled = preferred * (containerWidth / assumedContainerWidth)
  return Math.max(min, Math.min(max, scaled))
}
