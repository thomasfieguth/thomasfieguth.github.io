import ProjectSection from '../project/ProjectSection.jsx'
import styles from './JobSection.module.css'

/**
 * JobSection
 *
 * One job on the Experience page: a header (company, role, period,
 * location, optional website link, overview description, skills) followed
 * by that job's individual projects, each rendered with ProjectSection's
 * media-grid-left / description-right layout.
 */
export default function JobSection({ job }) {
  return (
    <section id={job.id} className={styles.section}>
      <header className={styles.header}>
        <div className={styles.heading}>
          <h2 className={styles.company}>
            {job.website ? (
              <a href={job.website} target="_blank" rel="noopener noreferrer" className={styles.companyLink}>
                {job.company}
              </a>
            ) : (
              job.company
            )}
          </h2>
          <p className={styles.role}>{job.role}</p>
        </div>
        {job.skills?.length > 0 && (
          <ul className={styles.skills}>
            {job.skills.map((skill) => (
              <li key={skill} className={styles.skillTag}>{skill}</li>
            ))}
          </ul>
        )}

        <div className={styles.meta}>
          {job.period && <span>{job.period}</span>}
          {job.location && <span>{job.location}</span>}
        </div>

        {job.description && <p className={styles.description}>{job.description}</p>}
      </header>

      {job.projects?.length > 0 && (
        <div className={styles.projects}>
          {job.projects.map((project) => (
            <ProjectSection key={project.id} project={project} />
          ))}
        </div>
      )}
    </section>
  )
}
