import GoLHero from '../../components/GoLHero.jsx'
import { writeups, gridItems } from '../../data/projects/code.js'
import ProjectSection from '../../components/project/ProjectSection.jsx'
import CaptionGrid from '../../components/grids/CaptionGrid.jsx'
import styles from './Code.module.css'

export default function Code() {
  return (
    <div className={styles.page}>
      <GoLHero title="Code" />

      {/* <header className={styles.header}>
        <h1 className={styles.title}>Code</h1>
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
