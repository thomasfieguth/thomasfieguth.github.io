import capstoneData from '../../data/projects/capstone.js'
import ProjectSection from '../../components/project/ProjectSection.jsx'
import styles from './Capstone.module.css'

export default function Capstone() {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <h1 className={styles.title}>Depth Sensing Woodcarving Aid — Capstone</h1>
      </header>
      {capstoneData.map((section) => (
        <ProjectSection key={section.id} project={section} />
      ))}
    </div>
  )
}
