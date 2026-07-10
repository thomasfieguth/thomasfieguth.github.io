import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <span className={styles.name}>Thomas Fieguth</span>
        <div className={styles.links}>
          <a
            href="mailto:thomas.fieguth@gmail.com"
            className={styles.link}
          >
            Email
          </a>
          <a
            href="https://www.linkedin.com/in/thomas-fieguth-59b19427b/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            LinkedIn
          </a>
          {/* TODO: placeholder path — add the real resume PDF to public/assets/
              and confirm this href once the file exists in the repo. */}
          <a
            href="/assets/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            Resume
          </a>
          <a
            href="https://github.com/thomasfieguth"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  )
}
