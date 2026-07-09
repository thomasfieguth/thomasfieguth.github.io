import ManualGrid from '../grids/ManualGrid.jsx'
import styles from './ProjectSection.module.css'

const DEFAULT_GRID_WIDTH = 0.55

/**
 * ProjectSection
 *
 * Every project renders in the same fixed order: title, date, skills,
 * then a row pairing the media grid (left) with the description (right).
 * `project.gridWidth` (0..1, fraction of the row's width) sets the split;
 * defaults to DEFAULT_GRID_WIDTH. Projects with no media (project.media
 * is empty) skip the grid column entirely rather than leaving a blank box.
 */
export default function ProjectSection({ project }) {
  const hasMedia = project.media?.length > 0
  const gridWidth = project.gridWidth ?? DEFAULT_GRID_WIDTH

  return (
    <section id={project.id} className={styles.section}>
      <h3 className={styles.title}>{project.title}</h3>
      {project.date && <p className={styles.date}>{project.date}</p>}

      {project.skills?.length > 0 && (
        <ul className={styles.skills}>
          {project.skills.map((skill) => (
            <li key={skill} className={styles.skillTag}>{skill}</li>
          ))}
        </ul>
      )}

      {hasMedia ? (
        <div className={styles.body}>
          <div className={styles.media} style={{ '--grid-width': `${gridWidth * 100}%` }}>
            <ManualGrid items={project.media} />
          </div>
          <p className={styles.description}>{project.description}</p>
        </div>
      ) : (
        <p className={styles.description}>{project.description}</p>
      )}
    </section>
  )
}
