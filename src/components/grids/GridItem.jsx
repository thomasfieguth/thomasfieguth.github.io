import { lazy, Suspense } from 'react'
import PhotoProgression from '../viewers/PhotoProgression.jsx'
import PhotoTile from '../viewers/PhotoTile.jsx'
import viewerStyles from '../viewers/Viewer3D.module.css'
import styles from './GridItem.module.css'

// Code-split from whatever page imports GridItem — three.js (and the rest
// of GLTFViewer) then only ever downloads for pages that actually render a
// gltf* item (Woodworking, Other), not for every page that merely shares
// ProjectSection/ManualGrid with them (Capstone, Code).
const GLTFViewer = lazy(() => import('../viewers/GLTFViewer.jsx'))

function ViewerFallback() {
  return (
    <div className={viewerStyles.loadingOverlay}>
      <div className={viewerStyles.spinner} />
      <span className={viewerStyles.loadingText}>Loading viewer…</span>
    </div>
  )
}

/**
 * GridItem
 *
 * Dispatches one media-item descriptor (the shapes documented in
 * src/data/projects/*.js: photo | photoProgression | gltfBasic |
 * gltfProgression | gltfInternal) to the component that renders it.
 * RowFillGrid, ColumnFillGrid, and JustifiedGrid all use this instead of
 * each reimplementing the mapping.
 *
 * GridItem has no sizing logic of its own — the calling grid computes
 * how big this item should be (that differs per layout) and hands down
 * a plain `style` object for the wrapper div. E.g. RowFillGrid passes
 * {height} for photos (width follows naturally) or {width,height} for
 * viewers; ColumnFillGrid passes {width:'100%'}; JustifiedGrid passes
 * both, exactly computed by its packing algorithm.
 *
 * Props:
 *   item           object   — the media-item descriptor
 *   style          object   — inline style for the wrapper div (sizing)
 *   photoFit       'box' | 'intrinsicHeight' | 'intrinsicWidth'
 *                  — passed straight through to PhotoTile; ignored for non-photo items
 *   ratioOverride  number?  — overrides item.config.aspectRatio (JustifiedGrid uses
 *                             this to apply its packed, possibly-nudged ratio)
 *   compact        boolean  — forwarded as the `compact` prop to viewers/progressions
 *                             (hides slider step-name labels at small rendered sizes)
 *   onOpen         ((item, snapshot?) => void)?  — when provided, called on click
 *                  instead of the item opening its own local fullscreen/lightbox.
 *                  `snapshot` carries whatever the clicked component needs to seed a
 *                  fresh fullscreen instance at the same spot (a progression/internal
 *                  viewer's `{ stepIndex, internalPos }`, a photoProgression's
 *                  `{ dominantIndex }`, or nothing for a plain photo). Lets the calling
 *                  grid (ManualGrid) open one shared fullscreen view that can step to
 *                  sibling items — of any type — with the arrow keys.
 *   isOpenItem     boolean  — true while this exact item is the one currently shown in
 *                  the calling grid's fullscreen view. Only consumed by PhotoProgression,
 *                  to pause its auto-advance while its enlarged copy is on screen.
 */
export default function GridItem({ item, style, photoFit = 'box', ratioOverride, compact = false, onOpen, isOpenItem = false }) {
  const config = ratioOverride != null
    ? { ...item.config, aspectRatio: ratioOverride }
    : item.config

  return (
    <div className={styles.itemBox} style={style}>
      {renderItem(item, config, compact, photoFit, onOpen, isOpenItem)}
    </div>
  )
}

function renderItem(item, config, compact, photoFit, onOpen, isOpenItem) {
  const openHandler = onOpen ? (snapshot) => onOpen(item, snapshot) : undefined

  switch (item.type) {
    case 'photo':
      return (
        <PhotoTile
          src={item.src}
          alt={item.alt}
          fit={photoFit}
          onOpen={openHandler}
        />
      )

    case 'photoProgression':
      return (
        <PhotoProgression
          steps={item.steps}
          config={config}
          compact={compact}
          onOpen={openHandler}
          paused={isOpenItem}
        />
      )

    case 'gltfBasic':
      return (
        <Suspense fallback={<ViewerFallback />}>
          <GLTFViewer mode="basic" model={item.model} config={config} compact={compact} onOpen={openHandler} />
        </Suspense>
      )
    case 'gltfProgression':
      return (
        <Suspense fallback={<ViewerFallback />}>
          <GLTFViewer mode="progression" steps={item.steps} config={config} compact={compact} onOpen={openHandler} />
        </Suspense>
      )
    case 'gltfInternal':
      return (
        <Suspense fallback={<ViewerFallback />}>
          <GLTFViewer
            mode="internal"
            models={item.models}
            annotations={item.annotations}
            config={config}
            compact={compact}
            onOpen={openHandler}
          />
        </Suspense>
      )

    default:
      if (import.meta.env.DEV) {
        console.warn(`GridItem: unknown item type "${item.type}"`)
      }
      return null
  }
}
