import PhotoTile from './PhotoTile.jsx'
import styles from './PhotoGrid.module.css'

/**
 * PhotoGrid
 *
 * A static, uniform-cell grid of photos, each cropped to a fixed 4:3 box.
 * For layouts that preserve each photo's own aspect ratio instead, see
 * RowFillGrid / ColumnFillGrid / JustifiedGrid in src/components/grids —
 * this component is now a thin, fixed-ratio special case built on the
 * same PhotoTile used there.
 *
 * Props:
 *   images  string[]  — photo paths
 */
export default function PhotoGrid({ images = [] }) {
  if (images.length === 0) return null

  return (
    <div className={styles.grid}>
      {images.map((src, i) => (
        <div key={src} className={styles.cell}>
          <PhotoTile src={src} alt={`Photo ${i + 1}`} />
        </div>
      ))}
    </div>
  )
}
