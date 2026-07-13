import Hero from '../../components/Hero.jsx'
import capstoneData, { gridItems } from '../../data/projects/capstone.js'
import ProjectSection from '../../components/project/ProjectSection.jsx'
import CaptionGrid from '../../components/grids/CaptionGrid.jsx'
import styles from './Capstone.module.css'

export default function Capstone() {
  return (
    <div className={styles.page}>
      <Hero title="Capstone" image="assets/images/hero/capstone.png" />

      {/* <header className={styles.header}>
        <h1 className={styles.title}>Depth Sensing Woodcarving Aid — Capstone</h1>
      </header> */}
      {capstoneData.map((section) => (
        <ProjectSection key={section.id} project={section} />
      ))}
      <section className={styles.gridSection}>
        <h2 className={styles.gridHeading}>More Photos</h2>
        <CaptionGrid items={gridItems} />
      </section>
    </div>
  )
}
