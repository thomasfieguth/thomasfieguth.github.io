import projectsData from '../data/projectsData.js'
import ProjectSection from '../components/project/ProjectSection.jsx'
import styles from './Projects.module.css'

// Fixed display order/labels for categories; a category with no entries
// in projectsData.js is simply skipped rather than showing an empty heading.
const CATEGORY_ORDER = [
  { key: 'capstone',    label: 'Capstone' },
  { key: 'woodworking', label: 'Woodworking' },
  { key: 'cad',         label: 'CAD' },
  { key: 'code',        label: 'Code' },
]

export default function Projects() {
  return (
    <div className={styles.page}>
      {CATEGORY_ORDER.map(({ key, label }) => {
        const projects = projectsData.filter((p) => p.category === key)
        if (projects.length === 0) return null

        return (
          <div key={key} className={styles.category}>
            <h2 className={styles.categoryHeading}>{label}</h2>
            {projects.map((project) => (
              <ProjectSection key={project.id} project={project} />
            ))}
          </div>
        )
      })}
    </div>
  )
}
