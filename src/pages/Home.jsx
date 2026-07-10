import FeaturedProjects from '../components/home/FeaturedProjects.jsx'
import styles from './Home.module.css'

export default function Home() {
  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <h1 className={styles.name}>Thomas Fieguth</h1>
        <p className={styles.tagline}>Todo fill with write up</p>
      </section>

      <section className={styles.about}>
        <h2 className={styles.aboutHeading}>About Me</h2>
        <p className={styles.aboutBody}>Todo fill with write up</p>
      </section>

      <FeaturedProjects />
    </div>
  )
}
