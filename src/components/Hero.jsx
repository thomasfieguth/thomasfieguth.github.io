import { useState } from 'react'
import Lightbox from './viewers/Lightbox.jsx'
import MediaFrame from './viewers/MediaFrame.jsx'
import Placeholder from './viewers/Placeholder.jsx'
import HeroTitle from './HeroTitle.jsx'
import styles from './Hero.module.css'

/**
 * Hero
 *
 * Full-bleed banner used at the top of a page: a 16:3 image (or a
 * placeholder box until real art exists) with the page title overlaid
 * on top. Clicking a real image opens it in the shared Lightbox, the
 * same viewer used everywhere else on the site.
 *
 * Props:
 *   title       string   required
 *   image       string?  image src; omitted or 'placeholder' renders a
 *                         placeholder box instead and disables click-to-expand
 *   alt         string?
 *   shortTitle  string?  shorter title shown below the mobile breakpoint
 *                         instead of `title` — see HeroTitle
 *   compact     boolean? half-height (32:3) banner, e.g. the per-job heroes
 *                         on the Experience page
 *   blank     boolean? when there's no image, render a plain black banner
 *                         instead of the labelled placeholder box
 *   maximumCutoffRatio, xMove, yMove
 *               number?  adjust the image's crop within the banner — e.g.
 *                         yMove: 0.2 to bring a subject near the top of a
 *                         tall photo into the thin 16:3 strip. See MediaFrame.
 */
export default function Hero({
  title,
  image,
  alt = '',
  shortTitle,
  compact = false,
  blank = false,
  maximumCutoffRatio,
  xMove,
  yMove,
}) {
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const hasImage = Boolean(image) && image !== 'placeholder'

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      setLightboxOpen(true)
    }
  }

  const className = [
    styles.hero,
    compact && styles.compact,
    hasImage && styles.clickable,
  ].filter(Boolean).join(' ')

  return (
    <>
      <div
        className={className}
        onClick={hasImage ? () => setLightboxOpen(true) : undefined}
        onKeyDown={hasImage ? handleKeyDown : undefined}
        role={hasImage ? 'button' : undefined}
        tabIndex={hasImage ? 0 : undefined}
      >
        <div className={styles.media}>
          {hasImage ? (
            <MediaFrame
              src={image}
              alt={alt}
              maximumCutoffRatio={maximumCutoffRatio}
              xMove={xMove}
              yMove={yMove}
              loading="eager"
            />
          ) : blank ? (
            <div className={styles.blank} />
          ) : (
            <Placeholder label="place hero image here" variant="banner" />
          )}
        </div>
        <div className={styles.overlayGradient} />
        <HeroTitle shortText={shortTitle}>{title}</HeroTitle>
      </div>

      {hasImage && lightboxOpen && (
        <Lightbox src={image} alt={alt} onClose={() => setLightboxOpen(false)} />
      )}
    </>
  )
}
