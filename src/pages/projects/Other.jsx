import Hero from '../../components/Hero.jsx'
import { writeups, gridItems } from '../../data/projects/other.js'
import ProjectSection from '../../components/project/ProjectSection.jsx'
import CaptionGrid from '../../components/grids/CaptionGrid.jsx'
import styles from './Other.module.css'

export default function Other() {
  return (
    <div className={styles.page}>
      <Hero title="Other Projects" image="assets/images/hero/other.png" />

      {/* <header className={styles.header}>
        <h1 className={styles.title}>Other Projects</h1>
      </header> */}
      {writeups.map((project) => (
        <ProjectSection key={project.id} project={project} />
      ))}
      <section className={styles.gridSection}>
        <h2 className={styles.gridHeading}>More Projects</h2>
        <CaptionGrid items={gridItems} />
      </section>
    </div>
  )
}
