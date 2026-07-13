import Hero from '../../components/Hero.jsx'
import { writeups, gridItems } from '../../data/projects/woodworking.js'
import ProjectSection from '../../components/project/ProjectSection.jsx'
import CaptionGrid from '../../components/grids/CaptionGrid.jsx'
import styles from './Woodworking.module.css'

export default function Woodworking() {
  return (
    <div className={styles.page}>
      <Hero title="Woodworking & CNC" image='/assets/images/hero/woodworking.jpg' />

      {/* <header className={styles.header}>
        <h1 className={styles.title}>Woodworking & CNC</h1>
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
