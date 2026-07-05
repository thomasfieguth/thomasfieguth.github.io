import STLViewer from '../viewers/STLViewer.jsx'
import GLTFViewer from '../viewers/GLTFViewer.jsx'
import PhotoProgression from '../viewers/PhotoProgression.jsx'
import RowFillGrid from '../grids/RowFillGrid.jsx'
import ColumnFillGrid from '../grids/ColumnFillGrid.jsx'
import JustifiedGrid from '../grids/JustifiedGrid.jsx'

const GRID_LAYOUTS = {
  rowFill: RowFillGrid,
  columnFill: ColumnFillGrid,
  justified: JustifiedGrid,
}

/**
 * MediaBlock
 *
 * Renders one entry from a projectsData.js media[] array. This is the
 * single place that maps a top-level media-block `type` to a component;
 * ProjectSection just maps over media[] and renders one of these per
 * entry.
 *
 * The plain 'photos' block type (a bare array of image paths) renders as
 * a RowFillGrid of individual 'photo' items — that migration lives here,
 * not in the data itself, so existing 'photos' entries in projectsData.js
 * didn't need to change.
 *
 * The 'grid' block type ({ layout, items, config }) dispatches to
 * whichever of the three grid layouts it names, spreading `config`
 * directly onto that grid component's props (sizeConfig, gap, etc.).
 */
export default function MediaBlock({ block }) {
  switch (block.type) {
    case 'photos':
      return (
        <RowFillGrid
          items={block.images.map((src) => ({ type: 'photo', src }))}
        />
      )

    case 'photoProgression':
      return <PhotoProgression steps={block.steps} config={block.config} />

    case 'stlBasic':
      return <STLViewer mode="basic" model={block.model} config={block.config} />
    case 'stlProgression':
      return <STLViewer mode="progression" steps={block.steps} config={block.config} />
    case 'stlInternal':
      return (
        <STLViewer
          mode="internal"
          models={block.models}
          annotations={block.annotations}
          config={block.config}
        />
      )

    case 'gltfBasic':
      return <GLTFViewer mode="basic" model={block.model} config={block.config} />
    case 'gltfProgression':
      return <GLTFViewer mode="progression" steps={block.steps} config={block.config} />
    case 'gltfInternal':
      return (
        <GLTFViewer
          mode="internal"
          models={block.models}
          annotations={block.annotations}
          config={block.config}
        />
      )

    case 'grid': {
      const GridComponent = GRID_LAYOUTS[block.layout]
      if (!GridComponent) {
        if (import.meta.env.DEV) {
          console.warn(`MediaBlock: unknown grid layout "${block.layout}"`)
        }
        return null
      }
      return <GridComponent items={block.items} {...block.config} />
    }

    default:
      if (import.meta.env.DEV) {
        console.warn(`MediaBlock: unknown media block type "${block.type}"`)
      }
      return null
  }
}
