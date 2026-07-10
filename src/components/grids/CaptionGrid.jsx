import { useState } from 'react'
import PhotoTile from '../viewers/PhotoTile.jsx'
import Lightbox from '../viewers/Lightbox.jsx'
import styles from './CaptionGrid.module.css'

/**
 * CaptionGrid
 *
 * A grid of small thumbnails that fills left-to-right, top-to-bottom
 * (CSS grid auto-fill), each with a caption underneath. Unlike
 * RowFillGrid/ColumnFillGrid/JustifiedGrid (which preserve each item's own
 * aspect ratio for "magazine" style layouts), every cell here is the same
 * fixed aspect ratio — the right fit for a wall of logo/thumbnail images.
 *
 * Props:
 *   items  CaptionGridItem[]
 *
 * CaptionGridItem shape:
 *   {
 *     type: 'photo' | 'video',
 *     caption: string,
 *     src?: string,        // required unless placeholder
 *     alt?: string,
 *     placeholder?: boolean,  // true if the source file doesn't exist yet
 *     note?: string,          // shown on placeholder tiles, e.g. what file is needed
 *   }
 */
export default function CaptionGrid({ items = [] }) {
  const [lightboxIndex, setLightboxIndex] = useState(null)

  // Left-to-right, top-to-bottom order — the sequence Left/Right arrow
  // keys step through in the lightbox. Placeholders have no real image.
  const photoItems = items.filter(item => item.type === 'photo' && !item.placeholder)

  if (items.length === 0) return null

  return (
    <div className={styles.grid}>
      {items.map((item, i) => (
        <figure key={i} className={styles.item}>
          <div className={styles.media}>
            {item.placeholder ? (
              <div className={styles.placeholder}>
                <span className={styles.placeholderLabel}>
                  {item.type === 'video' ? 'Video needed' : 'Image needed'}
                </span>
                {item.note && <span className={styles.placeholderNote}>{item.note}</span>}
              </div>
            ) : item.type === 'video' ? (
              <video
                className={styles.video}
                src={item.src}
                controls
                muted
                loop
                playsInline
              />
            ) : (
              <PhotoTile
                src={item.src}
                alt={item.alt ?? item.caption}
                fit="box"
                onOpen={() => setLightboxIndex(photoItems.indexOf(item))}
              />
            )}
          </div>
          <figcaption className={styles.caption}>{item.caption}</figcaption>
        </figure>
      ))}

      {lightboxIndex !== null && (
        <Lightbox
          src={photoItems[lightboxIndex].src}
          alt={photoItems[lightboxIndex].alt ?? photoItems[lightboxIndex].caption}
          onClose={() => setLightboxIndex(null)}
          onPrev={photoItems.length > 1
            ? () => setLightboxIndex(i => (i - 1 + photoItems.length) % photoItems.length)
            : undefined}
          onNext={photoItems.length > 1
            ? () => setLightboxIndex(i => (i + 1) % photoItems.length)
            : undefined}
        />
      )}
    </div>
  )
}
