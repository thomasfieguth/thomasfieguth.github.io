import ManualGrid from '../grids/ManualGrid.jsx'
import styles from './ProjectSection.module.css'

const DEFAULT_GRID_WIDTH = 0.55

// Below the stacked-layout breakpoint (see .media in ProjectSection.module.css),
// the grid normally goes to 100% of the column width. For a lone image that
// reads as oversized, so cap it to a fraction of the *viewport* width instead —
// expressed in vw (not px) so the cap scales continuously with window size
// rather than sitting at one fixed size. Only single-image grids get this;
// multi-image grids already split their row across items and don't blow up.
const SINGLE_IMAGE_STACKED_MAX_WIDTH_VW = 0.6

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
  const isSingleImage = project.media?.length === 1
  const paragraphs = project.description?.split('\n').map((p) => p.trim()).filter(Boolean) ?? []

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
          <div
            className={styles.media}
            style={{
              '--grid-width': `${gridWidth * 100}%`,
              ...(isSingleImage && { '--stacked-max-width': `${SINGLE_IMAGE_STACKED_MAX_WIDTH_VW * 100}vw` }),
            }}
          >
            <ManualGrid items={project.media} />
          </div>
          <div className={styles.description}>
            {paragraphs.map((p, i) => <p key={i}>{p}</p>)}
          </div>
        </div>
      ) : (
        <div className={styles.description}>
          {paragraphs.map((p, i) => <p key={i}>{p}</p>)}
        </div>
      )}
    </section>
  )
}
