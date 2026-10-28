import contactLinks from '../../data/contactLinks.js'
import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <span className={styles.name}>Thomas Fieguth</span>
        <div className={styles.links}>
          {contactLinks.map(({ label, href, external }) => (
            <a
              key={label}
              href={href}
              {...(external && { target: '_blank', rel: 'noopener noreferrer' })}
              className={styles.link}
            >
              {label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
