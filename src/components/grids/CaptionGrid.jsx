import { useEffect } from 'react'
import Lightbox from '../viewers/Lightbox.jsx'
import MediaFrame from '../viewers/MediaFrame.jsx'
import Placeholder from '../viewers/Placeholder.jsx'
import useLightboxSequence from '../../hooks/useLightboxSequence.js'
import { selfEmbedSrc } from '../quirks/recursiveSite.js'
import styles from './CaptionGrid.module.css'

/**
 * CaptionGrid
 *
 * A grid of small thumbnails that fills left-to-right, top-to-bottom
 * (CSS grid auto-fill), each with a caption underneath. Unlike ManualGrid
 * (where every item declares its own size), every cell here is the same
 * fixed aspect ratio — the right fit for a wall of logo/thumbnail images.
 *
 * Props:
 *   items          CaptionGridItem[]
 *   onImageClick   ((src: string) => void)?  — forwarded to the Lightbox's
 *                  `onImageClick` (see Lightbox.jsx); no built-in behavior
 *   onImageChange  ((src: string | null) => void)?  — called whenever the
 *                  src shown in the lightbox changes: on open, on Prev/Next
 *                  navigation to a different item, and on close (with null)
 *
 * CaptionGridItem shape:
 *   {
 *     type: 'photo' | 'video' | 'iframe' | 'text',
 *     caption: string,
 *     src?: string,        // required unless placeholder or 'text'. For 'iframe',
 *                           // this is the live URL — only ever loaded once
 *                           // the Lightbox opens, never in the grid tile.
 *     thumb?: string,       // static image shown in the grid tile instead
 *                           // of `src`. Required for 'iframe' (which has
 *                           // no image of its own to show at rest);
 *                           // optional for photo/video.
 *     alt?: string,
 *     link?: { label: string, href: string },  // extra link after the caption, e.g. source code
 *     placeholder?: boolean,     // true if the source file doesn't exist yet
 *     note?: string,             // shown on placeholder tiles, e.g. what file is needed
 *     maximumCutoffRatio?: number,  // 0-1, default 1. Caps how much of the
 *                                   // media's width/height (whichever side
 *                                   // would be cropped) may be cut off to
 *                                   // fill the box; beyond that, the media
 *                                   // is shrunk to fit and letterboxed on a
 *                                   // black background instead of cropping
 *                                   // further. 1 = always crop to fill.
 *     xMove?: number,       // default 0. Shifts the media right (negative =
 *     yMove?: number,       // left) / down (negative = up) by this fraction
 *                           // of the tile's width / height, e.g. 0.1 = 10%.
 *                           // The media zooms in just enough that the shift
 *                           // never exposes an edge on a side it fills.
 *   }
 *
 * (maximumCutoffRatio/xMove/yMove are applied by MediaFrame — see there.)
 *
 * A 'text' item has no media of its own — e.g. a coding project with no
 * screenshot or demo worth showing. It renders as a plain captioned card,
 * same size as every other tile, but isn't clickable and is excluded from
 * the lightbox sequence.
 */
export default function CaptionGrid({ items = [], onImageClick, onImageChange }) {
  // Left-to-right, top-to-bottom order — the sequence Left/Right arrow
  // keys step through in the lightbox. Placeholders and text-only items
  // have no real source.
  const viewableItems = items.filter(item => !item.placeholder && item.type !== 'text')
  const lightbox = useLightboxSequence(viewableItems)
  const openItem = lightbox.openItem
  const currentSrc = openItem?.src ?? null

  useEffect(() => {
    onImageChange?.(currentSrc)
  }, [currentSrc, onImageChange])

  if (items.length === 0) return null

  return (
    <div className={styles.grid}>
      {items.map((item, i) => (
        <figure key={i} className={styles.item}>
          <div className={styles.media}>
            {item.type === 'text' ? (
              <div className={styles.textTile}>
                <span className={styles.textTileLabel}>{item.caption}</span>
              </div>
            ) : item.placeholder ? (
              <Placeholder
                label={item.type === 'video' ? 'Video needed' : 'Image needed'}
                note={item.note}
              />
            ) : (
              <button
                type="button"
                className={styles.mediaButton}
                onClick={() => lightbox.open(item)}
              >
                {/* A `thumb` is always a still image, whatever the item's
                    own type — and an iframe's tile is always its thumb. */}
                <MediaFrame
                  type={item.type === 'video' && !item.thumb ? 'video' : 'photo'}
                  src={item.thumb ?? item.src}
                  alt={item.alt ?? item.caption}
                  maximumCutoffRatio={item.maximumCutoffRatio}
                  xMove={item.xMove}
                  yMove={item.yMove}
                  zoomOnHover
                />
              </button>
            )}
          </div>
          {item.type !== 'text' && (
            <figcaption className={styles.caption}>
              {item.caption}
              {item.link && (
                <>
                  {' · '}
                  <a href={item.link.href} target="_blank" rel="noopener noreferrer" className={styles.captionLink}>
                    {item.link.label}
                  </a>
                </>
              )}
            </figcaption>
          )}
        </figure>
      ))}

      {openItem && (
        <Lightbox
          src={openItem.type === 'iframe' ? selfEmbedSrc(openItem.src) : openItem.src}
          alt={openItem.alt ?? openItem.caption}
          type={openItem.type}
          onClose={lightbox.close}
          onPrev={lightbox.prev}
          onNext={lightbox.next}
          onImageClick={onImageClick}
        />
      )}
    </div>
  )
}
