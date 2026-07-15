import styles from './HeroTitle.module.css'

/**
 * HeroTitle
 *
 * Centered, high-contrast title overlay shared by every hero banner
 * (image heroes and the Game of Life hero) so every tab's hero title
 * renders identically instead of each hero redefining its own type styles.
 *
 * Props:
 *   children   the full title text/node
 *   shortText  string?  shorter title shown below the mobile breakpoint
 *              instead of `children` (e.g. so a two-word title doesn't
 *              wrap on a narrow screen). Omit to keep the same title at
 *              every width.
 */
export default function HeroTitle({ children, shortText }) {
  if (!shortText) {
    return <h1 className={styles.title}>{children}</h1>
  }

  return (
    <h1 className={styles.title}>
      <span className={styles.full}>{children}</span>
      <span className={styles.short}>{shortText}</span>
    </h1>
  )
}
