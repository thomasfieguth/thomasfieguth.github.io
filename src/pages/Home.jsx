import Hero from '../components/Hero.jsx'
import FeaturedProjects from '../components/home/FeaturedProjects.jsx'
import styles from './Home.module.css'

export default function Home() {
  return (
    <div className={styles.page}>
      <Hero title="Thomas Fieguth" image="placeholder" />

      <section className={styles.about}>
        <h2 className={styles.aboutHeading}>About Me</h2>
        <p className={styles.aboutBody}>Todo fill with write up</p>
      </section>

      <FeaturedProjects />
    </div>
  )
}
