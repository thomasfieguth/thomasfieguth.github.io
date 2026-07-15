import { useState } from 'react'
import useContainerWidth from '../../hooks/useContainerWidth.js'
import useIsMobile from '../../hooks/useIsMobile.js'
import useSwipeNav from '../../hooks/useSwipeNav.js'
import GridItem from './GridItem.jsx'
import Overlay from '../viewers/Overlay.jsx'
import STLViewer from '../viewers/STLViewer.jsx'
import GLTFViewer from '../viewers/GLTFViewer.jsx'
import viewerStyles from '../viewers/STLViewer.module.css'
import photoStyles from '../viewers/PhotoTile.module.css'
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

// 3D-viewer item types, mapped to the component + mode that renders them
// full-size in the fullscreen overlay.
const VIEWER_BY_TYPE = {
  stlBasic:        { Viewer: STLViewer,  mode: 'basic' },
  stlProgression:  { Viewer: STLViewer,  mode: 'progression' },
  stlInternal:     { Viewer: STLViewer,  mode: 'internal' },
  gltfBasic:       { Viewer: GLTFViewer, mode: 'basic' },
  gltfProgression: { Viewer: GLTFViewer, mode: 'progression' },
  gltfInternal:    { Viewer: GLTFViewer, mode: 'internal' },
}

// The single full-size view shown in the fullscreen overlay, for whichever
// item type is currently open. `snapshot` seeds it at the same step/position
// the small grid view was at when clicked; it's discarded (so the item
// reopens at its default position) after navigating away with prev/next.
function FullscreenContent({ item, snapshot }) {
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
        maxHeight: Math.round(window.innerHeight * 0.85),
      }}
      hideControls
      compact={false}
      initialStepIndex={snapshot?.stepIndex}
      initialInternalPos={snapshot?.internalPos}
      enableZoom
      allowFullscreen={false}
    />
  )
}

/**
 * ManualGrid
 *
 * A hand-placed grid: every item declares its own `row`, `width`, and
 * `height` in its data file (see src/data/projects/*.js) rather than
 * having a layout algorithm infer them. Consecutive items sharing the
 * same `row` value are placed
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
 * Clicking any item (photo, photo progression, or 3D viewer) opens one
 * shared fullscreen overlay; Left/Right arrow keys step to the previous/next
 * item in the grid — of any type — rather than being scoped to just photos.
 *
 * Props:
 *   items  { type, row, width, height, ...itemFields }[]  — see
 *          src/data/projects/*.js for the full per-type field list; row/width/
 *          height are read here, everything else is forwarded to GridItem.
 *   gap    number  — px gap between items, both axes (default 16)
 */
export default function ManualGrid({ items = [], gap = 16 }) {
  const [containerRef, containerWidth] = useContainerWidth()
  const [open, setOpen] = useState(null)   // { index, snapshot } | null
  const isMobile = useIsMobile()

  const rows = []
  for (const item of items) {
    const lastRow = rows[rows.length - 1]
    if (lastRow && lastRow.row === item.row) lastRow.items.push(item)
    else rows.push({ row: item.row, items: [item] })
  }

  const openItem = open ? items[open.index] : null
  const openItemIsViewer = openItem ? Boolean(VIEWER_BY_TYPE[openItem.type]) : false

  const openMedia = (item, snapshot) => {
    const idx = items.indexOf(item)
    if (idx !== -1) setOpen({ index: idx, snapshot })
  }
  const showPrev = () => setOpen(o => ({ index: (o.index - 1 + items.length) % items.length, snapshot: null }))
  const showNext = () => setOpen(o => ({ index: (o.index + 1) % items.length, snapshot: null }))

  // Mobile fullscreen navigation is either swipe (photos/progressions) or
  // visible prev/next buttons (3D viewers — the whole enlarged area is
  // already claimed by rotate/pinch touch gestures, so a swipe would be
  // misread as one of those instead of "go to next item").
  const swipeHandlers = useSwipeNav({
    enabled: isMobile && !openItemIsViewer && items.length > 1,
    onSwipeLeft: showNext,
    onSwipeRight: showPrev,
  })

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
          {isMobile && openItemIsViewer && items.length > 1 && (
            <div className={styles.viewerNav}>
              <button type="button" className={styles.viewerNavButton} onClick={showPrev} aria-label="Previous">‹</button>
              <button type="button" className={styles.viewerNavButton} onClick={showNext} aria-label="Next">›</button>
            </div>
          )}
        </Overlay>
      )}
    </div>
  )
}
