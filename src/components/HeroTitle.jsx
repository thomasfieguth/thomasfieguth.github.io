import styles from './HeroTitle.module.css'

/**
 * HeroTitle
 *
 * Centered, high-contrast title overlay shared by every hero banner
 * (image heroes and the Game of Life hero) so every tab's hero title
 * renders identically instead of each hero redefining its own type styles.
 *
 * Props:
 *   children  the title text/node
 */
export default function HeroTitle({ children }) {
  return <h1 className={styles.title}>{children}</h1>
}
