import MediaBlock from './MediaBlock.jsx'
import styles from './ProjectSection.module.css'

/**
 * ProjectSection
 *
 * Renders one full entry from projectsData.js: title, skill tags,
 * description, then every media block in order. Projects.jsx maps over
 * projectsData grouped by category and renders one of these per project.
 */
export default function ProjectSection({ project }) {
  return (
    <section id={project.id} className={styles.section}>
      <h3 className={styles.title}>{project.title}</h3>

      {project.skills?.length > 0 && (
        <ul className={styles.skills}>
          {project.skills.map((skill) => (
            <li key={skill} className={styles.skillTag}>{skill}</li>
          ))}
        </ul>
      )}

      <p className={styles.description}>{project.description}</p>

      <div className={styles.mediaStack}>
        {project.media.map((block, i) => (
          <MediaBlock key={i} block={block} />
        ))}
      </div>
    </section>
  )
}
