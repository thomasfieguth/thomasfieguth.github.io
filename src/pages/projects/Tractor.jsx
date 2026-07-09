import tractorData from '../../data/projects/tractor.js'
import ProjectSection from '../../components/project/ProjectSection.jsx'
import styles from './Tractor.module.css'

export default function Tractor() {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <h1 className={styles.title}>Self-Driving Tractor</h1>
      </header>
      {tractorData.map((section) => (
        <ProjectSection key={section.id} project={section} />
      ))}
    </div>
  )
}
