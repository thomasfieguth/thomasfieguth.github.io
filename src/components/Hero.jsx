import { useState } from 'react'
import Lightbox from './viewers/Lightbox.jsx'
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
 */
export default function Hero({ title, image, alt = '', shortTitle }) {
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const hasImage = Boolean(image) && image !== 'placeholder'

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      setLightboxOpen(true)
    }
  }

  return (
    <>
      <div
        className={hasImage ? `${styles.hero} ${styles.clickable}` : styles.hero}
        onClick={hasImage ? () => setLightboxOpen(true) : undefined}
        onKeyDown={hasImage ? handleKeyDown : undefined}
        role={hasImage ? 'button' : undefined}
        tabIndex={hasImage ? 0 : undefined}
      >
        {hasImage ? (
          <img src={image} alt={alt} className={styles.image} draggable={false} />
        ) : (
          <div className={styles.placeholder}>
            <span className={styles.placeholderLabel}>place hero image here</span>
          </div>
        )}
        <div className={styles.overlayGradient} />
        <HeroTitle shortText={shortTitle}>{title}</HeroTitle>
      </div>

      {hasImage && lightboxOpen && (
        <Lightbox src={image} alt={alt} onClose={() => setLightboxOpen(false)} />
      )}
    </>
  )
}
