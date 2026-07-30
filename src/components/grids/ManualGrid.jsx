import { useState, lazy, Suspense } from 'react'
import useContainerWidth from '../../hooks/useContainerWidth.js'
import useIsMobile from '../../hooks/useIsMobile.js'
import useSwipeNav from '../../hooks/useSwipeNav.js'
import GridItem from './GridItem.jsx'
import Overlay from '../viewers/Overlay.jsx'
import viewerStyles from '../viewers/Viewer3D.module.css'
import photoStyles from '../viewers/PhotoTile.module.css'
import styles from './ManualGrid.module.css'

// Code-split, same as GridItem's own GLTFViewer import — keeps three.js out
// of pages (Capstone, Code) that never open a gltf* item's fullscreen view.
const GLTFViewer = lazy(() => import('../viewers/GLTFViewer.jsx'))

const COMPACT_THRESHOLD = 220

// Progression/internal viewers dock a slider *below* their canvas/frame —
// real extra height, not part of the aspect-ratio'd media area. If we
// forced the whole component into `height`, that dock would render past
// the box and overlap the row below it. Reserve roughly its real height
// (labels shown vs. compact-hidden) and only fit the media area to the
// remainder, so the component's true total height still lands on `height`.
const DOCK_TYPES = new Set([
  'photoProgression', 'gltfProgression', 'gltfInternal',
])
const DOCK_RESERVE_COMPACT = 40
const DOCK_RESERVE_FULL = 76

// Mirrors --lightbox-pad-top/--lightbox-pad-bottom in src/index.css — the
// vertical space Overlay always reserves for its close button (top) and,
// on mobile, its fixed nav-arrow row (bottom). GLTFViewer's fullscreen
// maxHeight is computed in JS (it sizes a <canvas>, not something CSS
// `calc()` can reach), so these need to stay numerically in sync by hand.
const FULLSCREEN_PAD_TOP = 80            // close button: 24 + 40 + 16 gap
const FULLSCREEN_PAD_BOTTOM_DESKTOP = 32
const FULLSCREEN_PAD_BOTTOM_MOBILE = 84  // nav button: 24 + 44 + 16 gap

// 3D-viewer item types, mapped to the component + mode that renders them
// full-size in the fullscreen overlay.
const VIEWER_BY_TYPE = {
  gltfBasic:       { Viewer: GLTFViewer, mode: 'basic' },
  gltfProgression: { Viewer: GLTFViewer, mode: 'progression' },
  gltfInternal:    { Viewer: GLTFViewer, mode: 'internal' },
}

// The single full-size view shown in the fullscreen overlay, for whichever
// item type is currently open. `snapshot` seeds it at the same step/position
// the small grid view was at when clicked; it's discarded (so the item
// reopens at its default position) after navigating away with prev/next.
function FullscreenContent({ item, snapshot }) {
  const isMobile = useIsMobile()

  if (item.type === 'photo') {
    return <img src={item.src} alt={item.alt ?? ''} className={photoStyles.lightboxImage} draggable={false} />
  }

  if (item.type === 'photoProgression') {
    const step = item.steps[snapshot?.dominantIndex ?? 0]
    return <img src={step.image} alt={step.label ?? ''} className={photoStyles.lightboxImage} draggable={false} />
  }

  const entry = VIEWER_BY_TYPE[item.type]
  if (!entry) return null
  const { Viewer, mode } = entry
  const cfg = item.config ?? {}

  return (
    <Suspense fallback={<div className={viewerStyles.loadingOverlay}><div className={viewerStyles.spinner} /></div>}>
      <Viewer
        mode={mode}
        model={item.model}
        steps={item.steps}
        models={item.models}
        annotations={item.annotations}
        config={{
          // maxWidth is deliberately omitted — the fullscreen view fills
          // available space (maxHeight) rather than inheriting the
          // thumbnail's own width constraint.
          initialEuler: cfg.initialEuler,
          waitMs: cfg.waitMs,
          fadeMs: cfg.fadeMs,
          aspectRatio: cfg.aspectRatio,
          colorMode: cfg.colorMode,
          color: cfg.color,
          rotationSpeed: 0,
          maxHeight: Math.round(
            window.innerHeight - FULLSCREEN_PAD_TOP
            - (isMobile ? FULLSCREEN_PAD_BOTTOM_MOBILE : FULLSCREEN_PAD_BOTTOM_DESKTOP)
          ),
        }}
        hideControls
        compact={false}
        initialStepIndex={snapshot?.stepIndex}
        initialInternalPos={snapshot?.internalPos}
        enableZoom
        allowFullscreen={false}
      />
    </Suspense>
  )
}

// ─── Layout helpers ─────────────────────────────────────────────────────────
//
// Groups are built from the flat `items` array in two passes. A row-spanning
// item can appear anywhere among the rows it ties together (rule 3) — before
// some of their items, after others — so a single linear scan can't group
// correctly on its own: if two plain, differently-numbered rows' items
// happen to sit next to each other *before* the spanner that ties them
// together is reached, a one-pass scan would already have split them into
// separate groups with no way to undo that once the spanner shows up.
//
// Instead: first union every row number a spanning item's `rows` ties
// together into the same set (a row number on its own just represents
// itself). Then walk the items again and merge consecutive items whenever
// they resolve to the same set — structurally identical to the original
// single-pass groupby, just keyed by that resolved set instead of the raw
// `row` number. Without any spanning items, every row resolves to itself,
// so this reproduces today's behavior exactly.
function find(parent, r) {
  if (!parent.has(r)) parent.set(r, r)
  let root = r
  while (parent.get(root) !== root) root = parent.get(root)
  let cur = r
  while (parent.get(cur) !== root) {
    const next = parent.get(cur)
    parent.set(cur, root)
    cur = next
  }
  return root
}

function buildGroups(items) {
  const parent = new Map()
  for (const item of items) {
    if (Array.isArray(item.rows)) {
      if (import.meta.env.DEV) {
        const isConsecutive = item.rows.every((r, i) => i === 0 || r === item.rows[i - 1] + 1)
        if (!isConsecutive) {
          console.warn(`ManualGrid: item.rows must be consecutive row numbers, got [${item.rows}].`)
        }
      }
      for (let i = 1; i < item.rows.length; i++) {
        const ra = find(parent, item.rows[0])
        const rb = find(parent, item.rows[i])
        if (ra !== rb) parent.set(ra, rb)
      }
    } else {
      find(parent, item.row)
    }
  }

  const rootOf = (item) => find(parent, Array.isArray(item.rows) ? item.rows[0] : item.row)

  const groups = []
  let current = null
  for (const item of items) {
    const root = rootOf(item)
    if (current && current.root === root) {
      current.items.push(item)
    } else {
      if (current) groups.push(current)
      current = { root, items: [item] }
    }
  }
  if (current) groups.push(current)

  return groups.map(({ items: groupItems }) => {
    const rowSet = new Set()
    groupItems.forEach(item => {
      if (Array.isArray(item.rows)) item.rows.forEach(r => rowSet.add(r))
      else rowSet.add(item.row)
    })
    return { rowSet, items: groupItems }
  })
}

// Same per-item derived values regardless of which layout path placed it —
// DOCK_TYPES/ratioOverride/compact only care about the item's own final
// pixel width/height, not how that width/height was computed.
function computeItemDerived(item, width, height) {
  const compact = width < COMPACT_THRESHOLD
  let mediaHeight = height
  if (DOCK_TYPES.has(item.type)) {
    mediaHeight = Math.max(1, height - (compact ? DOCK_RESERVE_COMPACT : DOCK_RESERVE_FULL))
  }
  const ratioOverride = item.type === 'photo' ? undefined : width / mediaHeight
  return { compact, ratioOverride }
}

// Explicit pixel layout for a row-spanning group — the thing plain flexbox
// rows can't express, since the spanning item's left edge must line up
// across every row it spans (rule 4), each row's own before/after items
// have to size independently around that shared offset (rules 4/5), and
// the spanning item's own height is independent of the rows it spans
// (rule 2). Returns { height, boxes } where boxes is a flat list of
// { item, x, y, width, height } — one per item in the group, including the
// spanning item itself — all positioned relative to the group's own
// top-left corner.
function layoutRowGroup(group, containerWidth, gap) {
  const rowsSorted = [...group.rowSet].sort((a, b) => a - b)
  const spanners = group.items.filter(i => Array.isArray(i.rows))
  const spanner = spanners[0]

  if (import.meta.env.DEV && spanners.length > 1) {
    console.warn('ManualGrid: multiple row-spanning items in one row-group are not supported; only the first is treated as spanning.')
  }

  const spannerIdx = group.items.indexOf(spanner)
  const beforeItems = group.items.slice(0, spannerIdx)
  const afterItems  = group.items.slice(spannerIdx + 1)
  // Any *other* would-be spanner (see warning above) falls back to acting
  // like a plain item of its first declared row.
  const rowOf = (item) => item.row ?? Math.min(...item.rows)

  // Before-spanner items: each row's own items are sized exactly like a
  // normal today's-style row (shrink against that row's own gap budget),
  // computed independently per spanned row.
  const beforeByRow = new Map()
  for (const r of rowsSorted) {
    const rowItems = beforeItems.filter(i => rowOf(i) === r)
    const gapTotal = gap * Math.max(0, rowItems.length - 1)
    const availableWidth = Math.max(0, containerWidth - gapTotal)
    const widths = rowItems.map(i => i.width * availableWidth)
    const offset = rowItems.length ? widths.reduce((a, b) => a + b, 0) + gapTotal : 0
    beforeByRow.set(r, { items: rowItems, widths, offset })
  }

  // The spanning item's left edge is the max natural offset across every
  // spanned row, plus one gap — rows with less "before" content just get a
  // bigger trailing gap in front of the spanner (their items keep their own
  // normal spacing from each other).
  const maxOffset = Math.max(0, ...[...beforeByRow.values()].map(v => v.offset))
  const spannerLeft = maxOffset > 0 ? maxOffset + gap : 0
  const spannerWidth = spanner.width * containerWidth
  const spannerRight = spannerLeft + spannerWidth

  // After-spanner items are sized exactly like before-spanner items —
  // fractions of the *full* containerWidth (shrunk only against their own
  // row's internal gaps), not of whatever space happens to be left after
  // the spanner. So if the spanner is 0.4 wide, an after-item meant to fill
  // the rest of that row is given width: 0.6, not width: 1.0 — same
  // whole-grid fraction convention as every other item in the grid. They're
  // still positioned starting right after the spanner (spannerRight + gap);
  // only how their own width is computed changed.
  const afterByRow = new Map()
  for (const r of rowsSorted) {
    const rowItems = afterItems.filter(i => rowOf(i) === r)
    const gapTotal = gap * Math.max(0, rowItems.length - 1)
    const availableWidth = Math.max(0, containerWidth - gapTotal)
    const widths = rowItems.map(i => i.width * availableWidth)
    afterByRow.set(r, { items: rowItems, widths })
  }

  // Vertical stacking of the spanned rows themselves — each row's height is
  // the tallest of its own before/after items (own item.height fraction,
  // never gap-shrunk, matching how height already works everywhere else in
  // this grid), top-aligned exactly like today's flex rows.
  const topByRow = new Map()
  const heightByRow = new Map()
  let cursorTop = 0
  rowsSorted.forEach((r, i) => {
    if (i > 0) cursorTop += heightByRow.get(rowsSorted[i - 1]) + gap
    topByRow.set(r, cursorTop)
    const rowItems = [...beforeByRow.get(r).items, ...afterByRow.get(r).items]
    const h = rowItems.length ? Math.max(...rowItems.map(it => it.height * containerWidth)) : 0
    heightByRow.set(r, h)
  })

  const lastRow = rowsSorted[rowsSorted.length - 1]
  const subRowsHeight = topByRow.get(lastRow) + heightByRow.get(lastRow)
  const spannerHeight = spanner.height * containerWidth
  // The spanning item may be taller than the rows it spans (rule 2) — the
  // group still has to grow to fit it so it doesn't overlap whatever
  // follows, even though the sub-rows themselves aren't reconciled to match.
  const groupHeight = Math.max(subRowsHeight, spannerHeight)

  const boxes = []
  rowsSorted.forEach(r => {
    const top = topByRow.get(r)

    let x = 0
    beforeByRow.get(r).items.forEach((item, i) => {
      const width = beforeByRow.get(r).widths[i]
      boxes.push({ item, x, y: top, width, height: item.height * containerWidth })
      x += width + gap
    })

    let ax = spannerRight + (afterByRow.get(r).items.length ? gap : 0)
    afterByRow.get(r).items.forEach((item, i) => {
      const width = afterByRow.get(r).widths[i]
      boxes.push({ item, x: ax, y: top, width, height: item.height * containerWidth })
      ax += width + gap
    })
  })
  boxes.push({ item: spanner, x: spannerLeft, y: 0, width: spannerWidth, height: spannerHeight })

  return { height: groupHeight, boxes }
}

/**
 * ManualGrid
 *
 * A hand-placed grid: every item declares its own `row`, `width`, and
 * `height` in its data file (see src/data/projects/*.js) rather than
 * having a layout algorithm infer them. Consecutive items sharing the
 * same `row` value are placed left-to-right in that row; a new `row` value
 * starts a new row below.
 *
 * An item can instead declare `rows: [r1, r2, ...]` (an array of consecutive
 * row numbers) to visually span and sit beside all of those rows — its own
 * `height` still governs its size (not derived from the spanned rows), it
 * can appear anywhere among the spanned rows' items, and its left edge
 * lines up with whichever spanned row has the most content before it (see
 * layoutRowGroup above for the exact math). Rows with no spanning item are
 * unaffected and still use plain flexbox, exactly as before.
 *
 * `width`/`height` are fractions of this grid's own measured width (e.g.
 * 0.5 = half the grid's width) — both axes share that one unit, so a
 * photo can be made any shape and will be cropped (object-fit: cover) to
 * fit it if that shape doesn't match its native aspect ratio. 3D viewers
 * and photo progressions get the same treatment via GridItem's
 * `ratioOverride`, which forces their internal aspect ratio to match the
 * box exactly.
 *
 * Clicking any item (photo, photo progression, or 3D viewer) opens one
 * shared fullscreen overlay; Left/Right arrow keys step to the previous/next
 * item in the grid — of any type — rather than being scoped to just photos.
 *
 * Props:
 *   items  { type, row, width, height, ...itemFields }[]  — see
 *          src/data/projects/*.js for the full per-type field list; row/rows/
 *          width/height are read here, everything else is forwarded to
 *          GridItem. Use `row` (number) normally, or `rows` (array of
 *          consecutive numbers) for a row-spanning item — never both.
 *   gap    number  — px gap between items, both axes (default 16)
 */
export default function ManualGrid({ items = [], gap = 16 }) {
  const [containerRef, containerWidth] = useContainerWidth()
  const [open, setOpen] = useState(null)   // { index, snapshot } | null
  const isMobile = useIsMobile()

  const groups = buildGroups(items)

  const openItem = open ? items[open.index] : null
  const openItemIsViewer = openItem ? Boolean(VIEWER_BY_TYPE[openItem.type]) : false

  const openMedia = (item, snapshot) => {
    const idx = items.indexOf(item)
    if (idx !== -1) setOpen({ index: idx, snapshot })
  }
  const showPrev = () => setOpen(o => ({ index: (o.index - 1 + items.length) % items.length, snapshot: null }))
  const showNext = () => setOpen(o => ({ index: (o.index + 1) % items.length, snapshot: null }))

  // Overlay always shows visible mobile prev/next buttons, but swipe is
  // only enabled for photos/progressions — for 3D viewers, the whole
  // enlarged area is already claimed by rotate/pinch touch gestures, so a
  // swipe would be misread as one of those instead of "go to next item".
  const swipeHandlers = useSwipeNav({
    enabled: isMobile && !openItemIsViewer && items.length > 1,
    onSwipeLeft: showNext,
    onSwipeRight: showPrev,
  })

  return (
    <div ref={containerRef} className={styles.grid} style={{ gap: `${gap}px` }}>
      {containerWidth > 0 && groups.map((group, gi) => {
        // Plain row — every item shares one `row` value, laid out exactly
        // as before: flexbox, each row's own width budget computed
        // independently of every other row.
        if (group.rowSet.size === 1) {
          // Flexbox `gap` adds space *between* items on top of their own
          // widths — a row of 0.5 + 0.5 would otherwise render at
          // containerWidth + gap, overflowing past the grid into whatever
          // sits to its right. Scale widths against the width that's left
          // over after the row's internal gaps instead, so items + gaps
          // add back up to exactly containerWidth.
          const rowGapTotal = gap * Math.max(0, group.items.length - 1)
          const availableWidth = Math.max(0, containerWidth - rowGapTotal)

          return (
            <div key={gi} className={styles.row} style={{ gap: `${gap}px` }}>
              {group.items.map((item, ii) => {
                const width  = item.width  * availableWidth
                const height = item.height * containerWidth
                const { compact, ratioOverride } = computeItemDerived(item, width, height)

                return (
                  <GridItem
                    key={ii}
                    item={item}
                    photoFit="box"
                    style={{ width, height, flex: `0 0 ${width}px` }}
                    ratioOverride={ratioOverride}
                    compact={compact}
                    onOpen={openMedia}
                    isOpenItem={item === openItem}
                  />
                )
              })}
            </div>
          )
        }

        // Row-spanning group — a plain flex row can't express a single item
        // whose left edge has to line up across multiple independently-laid
        // rows (see layoutRowGroup), so every item here is placed with an
        // explicit pixel x/y instead.
        const { height, boxes } = layoutRowGroup(group, containerWidth, gap)

        return (
          <div key={gi} className={styles.rowGroup} style={{ height }}>
            {boxes.map(({ item, x, y, width, height: boxHeight }, ii) => {
              const { compact, ratioOverride } = computeItemDerived(item, width, boxHeight)

              return (
                <GridItem
                  key={ii}
                  item={item}
                  photoFit="box"
                  style={{ position: 'absolute', left: x, top: y, width, height: boxHeight }}
                  ratioOverride={ratioOverride}
                  compact={compact}
                  onOpen={openMedia}
                  isOpenItem={item === openItem}
                />
              )
            })}
          </div>
        )
      })}

      {openItem && (
        <Overlay
          onClose={() => setOpen(null)}
          onPrev={items.length > 1 ? showPrev : undefined}
          onNext={items.length > 1 ? showNext : undefined}
          contentClassName={openItemIsViewer ? viewerStyles.fullscreenContent : undefined}
          swipeHandlers={swipeHandlers}
        >
          <FullscreenContent item={openItem} snapshot={open.snapshot} />
        </Overlay>
      )}
    </div>
  )
}
