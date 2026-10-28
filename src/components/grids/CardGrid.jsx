import { Link } from 'react-router-dom'
import Lightbox from '../viewers/Lightbox.jsx'
import MediaFrame from '../viewers/MediaFrame.jsx'
import Placeholder from '../viewers/Placeholder.jsx'
import useLightboxSequence from '../../hooks/useLightboxSequence.js'
import styles from './CardGrid.module.css'

/**
 * CardGrid
 *
 * Responsive grid of cards, each an image (or a placeholder box) with a
 * title and a short blurb underneath. Shared by the Home page's Featured
 * Projects and the per-job galleries on the Experience page.
 *
 * A card with a `to` links to that route; a card without one opens its
 * image in the shared Lightbox, with Left/Right (or swipe) stepping through
 * the other image cards in the same grid.
 *
 * Props:
 *   items  { id, title, blurb, image?, to?, maximumCutoffRatio?, xMove?, yMove? }[]
 *          — the last three adjust the image's crop; see MediaFrame
 */
export default function CardGrid({ items }) {
  const lightboxItems = items.filter((item) => !item.to && item.image)
  const lightbox = useLightboxSequence(lightboxItems)
  const openItem = lightbox.openItem

  return (
    <>
      <div className={styles.grid}>
        {items.map((item) => {
          const content = (
            <>
              <div className={styles.media}>
                {item.image ? (
                  <MediaFrame
                    src={item.image}
                    alt={item.title}
                    maximumCutoffRatio={item.maximumCutoffRatio}
                    xMove={item.xMove}
                    yMove={item.yMove}
                  />
                ) : (
                  <Placeholder label="Placeholder Image" />
                )}
              </div>
              <h3 className={styles.title}>{item.title}</h3>
              <p className={styles.blurb}>{item.blurb}</p>
            </>
          )

          if (item.to) {
            return (
              <Link key={item.id} to={item.to} className={styles.card}>
                {content}
              </Link>
            )
          }

          const isViewable = lightboxItems.includes(item)
          return (
            <button
              key={item.id}
              type="button"
              className={`${styles.card} ${styles.button}`}
              onClick={isViewable ? () => lightbox.open(item) : undefined}
              disabled={!isViewable}
            >
              {content}
            </button>
          )
        })}
      </div>

      {openItem && (
        <Lightbox
          src={openItem.image}
          alt={openItem.title}
          onClose={lightbox.close}
          onPrev={lightbox.prev}
          onNext={lightbox.next}
        />
      )}
    </>
  )
}
