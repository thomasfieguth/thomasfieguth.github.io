import STLViewer from '../viewers/STLViewer.jsx'
import GLTFViewer from '../viewers/GLTFViewer.jsx'
import PhotoProgression from '../viewers/PhotoProgression.jsx'
import PhotoTile from '../viewers/PhotoTile.jsx'
import styles from './GridItem.module.css'

/**
 * GridItem
 *
 * Dispatches one media-item descriptor (the shapes documented in
 * src/data/projects/*.js: photo | photoProgression | stlBasic | stlProgression |
 * stlInternal | gltfBasic | gltfProgression | gltfInternal) to the
 * component that renders it. RowFillGrid, ColumnFillGrid, and
 * JustifiedGrid all use this instead of each reimplementing the mapping.
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
 */
export default function GridItem({ item, style, photoFit = 'box', ratioOverride, compact = false }) {
  const config = ratioOverride != null
    ? { ...item.config, aspectRatio: ratioOverride }
    : item.config

  return (
    <div className={styles.itemBox} style={style}>
      {renderItem(item, config, compact, photoFit)}
    </div>
  )
}

function renderItem(item, config, compact, photoFit) {
  switch (item.type) {
    case 'photo':
      return <PhotoTile src={item.src} alt={item.alt} fit={photoFit} />

    case 'photoProgression':
      return <PhotoProgression steps={item.steps} config={config} compact={compact} />

    case 'stlBasic':
      return <STLViewer mode="basic" model={item.model} config={config} compact={compact} />
    case 'stlProgression':
      return <STLViewer mode="progression" steps={item.steps} config={config} compact={compact} />
    case 'stlInternal':
      return (
        <STLViewer
          mode="internal"
          models={item.models}
          annotations={item.annotations}
          config={config}
          compact={compact}
        />
      )

    case 'gltfBasic':
      return <GLTFViewer mode="basic" model={item.model} config={config} compact={compact} />
    case 'gltfProgression':
      return <GLTFViewer mode="progression" steps={item.steps} config={config} compact={compact} />
    case 'gltfInternal':
      return (
        <GLTFViewer
          mode="internal"
          models={item.models}
          annotations={item.annotations}
          config={config}
          compact={compact}
        />
      )

    default:
      if (import.meta.env.DEV) {
        console.warn(`GridItem: unknown item type "${item.type}"`)
      }
      return null
  }
}
