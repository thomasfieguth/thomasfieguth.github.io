import { useRef, useState } from 'react'
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
 *     type: 'photo' | 'video' | 'iframe',
 *     caption: string,
 *     src?: string,        // required unless placeholder. For 'iframe',
 *                           // this is the live URL — only ever loaded once
 *                           // the Lightbox opens, never in the grid tile.
 *     thumb?: string,       // static image shown in the grid tile instead
 *                           // of `src`. Required for 'iframe' (which has
 *                           // no image of its own to show at rest);
 *                           // optional for photo/video.
 *     alt?: string,
 *     placeholder?: boolean,     // true if the source file doesn't exist yet
 *     note?: string,             // shown on placeholder tiles, e.g. what file is needed
 *     maximumCutoffRatio?: number,  // 0-1, default 1. Caps how much of the
 *                                   // media's width/height (whichever side
 *                                   // would be cropped) may be cut off to
 *                                   // fill the box; beyond that, the media
 *                                   // is shrunk to fit and letterboxed on a
 *                                   // black background instead of cropping
 *                                   // further. 1 = always crop to fill.
 *   }
 */
// A self-embedding iframe (e.g. this site's own "Prompt Engineering" grid
// item) would otherwise load the exact same URL already present in its own
// ancestor chain at every recursion depth — browsers silently refuse to
// load a frame whose URL matches an ancestor's, as a guard against runaway
// self-embedding. Tagging each level with an incrementing `d` query param
// keeps every ancestor's URL distinct so that guard never triggers; it's
// inert otherwise since this app's router only reads the URL's hash.
function withRecursionDepth(src) {
  const url = new URL(src, window.location.href)
  const depth = Number(new URLSearchParams(window.location.search).get('d')) || 0
  url.searchParams.set('d', depth + 1)
  return url.toString()
}

export default function CaptionGrid({ items = [] }) {
  const [lightboxIndex, setLightboxIndex] = useState(null)

  // Left-to-right, top-to-bottom order — the sequence Left/Right arrow
  // keys step through in the lightbox. Placeholders have no real source.
  const viewableItems = items.filter(item => !item.placeholder)

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
            ) : (
              <MediaTile
                type={item.type}
                src={item.thumb ?? item.src}
                alt={item.alt ?? item.caption}
                maximumCutoffRatio={item.maximumCutoffRatio ?? 1}
                onClick={() => setLightboxIndex(viewableItems.indexOf(item))}
              />
            )}
          </div>
          <figcaption className={styles.caption}>{item.caption}</figcaption>
        </figure>
      ))}

      {lightboxIndex !== null && (
        <Lightbox
          src={viewableItems[lightboxIndex].type === 'iframe'
            ? withRecursionDepth(viewableItems[lightboxIndex].src)
            : viewableItems[lightboxIndex].src}
          alt={viewableItems[lightboxIndex].alt ?? viewableItems[lightboxIndex].caption}
          type={viewableItems[lightboxIndex].type}
          onClose={() => setLightboxIndex(null)}
          onPrev={viewableItems.length > 1
            ? () => setLightboxIndex(i => (i - 1 + viewableItems.length) % viewableItems.length)
            : undefined}
          onNext={viewableItems.length > 1
            ? () => setLightboxIndex(i => (i + 1) % viewableItems.length)
            : undefined}
        />
      )}
    </div>
  )
}

/**
 * MediaTile
 *
 * A single grid cell's image or video, filling its box via object-fit:
 * cover by default. If `maximumCutoffRatio` is set below 1, the natural
 * media ratio is compared against the box's own ratio once the media
 * loads; when a plain cover crop would cut off more than that fraction of
 * the constrained dimension, the media is instead scaled down to cut off
 * exactly that much and letterboxed/pillarboxed (black background) for
 * the remainder — applied via inline width/height so it works the same
 * for <img> and <video> (poster frame and active playback alike).
 */
function MediaTile({ type, src, alt, maximumCutoffRatio, onClick }) {
  const boxRef = useRef(null)
  const [clampedSize, setClampedSize] = useState(null)

  const handleLoad = (e) => {
    if (maximumCutoffRatio >= 1) return

    const mediaEl = e.target
    const naturalRatio = type === 'video'
      ? mediaEl.videoWidth / mediaEl.videoHeight
      : mediaEl.naturalWidth / mediaEl.naturalHeight
    const box = boxRef.current?.getBoundingClientRect()
    if (!box?.width || !box?.height || !naturalRatio) return

    const boxRatio = box.width / box.height
    // Fraction of the constrained dimension a plain cover-crop would cut off.
    const fraction = 1 - Math.min(boxRatio, naturalRatio) / Math.max(boxRatio, naturalRatio)
    if (fraction <= maximumCutoffRatio) return

    // Scale down from "cover" toward "contain" until exactly
    // maximumCutoffRatio of the constrained dimension is cut off.
    const cappedScale = 1 / (1 - maximumCutoffRatio)
    const widthPct = boxRatio > naturalRatio
      ? (naturalRatio / boxRatio) * cappedScale
      : cappedScale
    const heightPct = boxRatio > naturalRatio
      ? cappedScale
      : (boxRatio / naturalRatio) * cappedScale

    setClampedSize({ width: `${widthPct * 100}%`, height: `${heightPct * 100}%` })
  }

  const mediaStyle = clampedSize ? { ...clampedSize, objectFit: 'contain' } : undefined

  return (
    <button
      type="button"
      ref={boxRef}
      className={`${styles.mediaButton} ${clampedSize ? styles.letterboxed : ''}`}
      onClick={onClick}
    >
      {type === 'video' ? (
        <video
          className={styles.video}
          style={mediaStyle}
          src={src}
          autoPlay
          muted
          loop
          playsInline
          onLoadedMetadata={handleLoad}
        />
      ) : (
        <img
          className={styles.thumb}
          style={mediaStyle}
          src={src}
          alt={alt}
          draggable={false}
          loading="lazy"
          onLoad={handleLoad}
        />
      )}
    </button>
  )
}
