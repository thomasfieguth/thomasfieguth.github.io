import projectsData from '../data/projectsData.js'
import ProjectSection from '../components/project/ProjectSection.jsx'
import styles from './Projects.module.css'

export default function Projects() {
  return (
    <div className={styles.page}>
      {projectsData.map((project) => (
        <ProjectSection key={project.id} project={project} />
      ))}
    </div>
  )
}
