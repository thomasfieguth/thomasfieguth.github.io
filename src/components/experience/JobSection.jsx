import ProjectSection from '../project/ProjectSection.jsx'
import CaptionGrid from '../grids/CaptionGrid.jsx'
import { useTractorQuirk } from '../../context/TractorQuirkContext.jsx'
import styles from './JobSection.module.css'

/**
 * JobSection
 *
 * One job's tab on the Experience page (the company name itself is the
 * hero title above it), in order:
 *   1. Header: role, period, location, optional website link, skills,
 *      then the summary of what I did in the job (job.description)
 *   2. The job's individual projects, each rendered with ProjectSection's
 *      media-grid-left / description-right layout
 *   3. Gallery: captioned thumbnails (job.gallery), same CaptionGrid as
 *      the project pages
 */
export default function JobSection({ job }) {
  const { activate } = useTractorQuirk()

  return (
    <section id={job.id} className={styles.section}>
      <header className={styles.header}>
        <h2 className={styles.role}>{job.role}</h2>

        <div className={styles.meta}>
          {job.period && <span>{job.period}</span>}
          {job.location && <span>{job.location}</span>}
          {job.website && (
            <a href={job.website} target="_blank" rel="noopener noreferrer" className={styles.websiteLink}>
              {job.website.replace(/^https?:\/\/(www\.)?/, '')} ↗
            </a>
          )}
        </div>

        {job.skills?.length > 0 && (
          <ul className={styles.skills}>
            {job.skills.map((skill) => {
              const isQuirk = typeof skill === 'object' && skill.quirk
              const text = typeof skill === 'object' ? skill.text : skill

              return (
                <li key={text} className={styles.skillTag}>
                  {isQuirk ? (
                    <button
                      type="button"
                      className={styles.skillButton}
                      onClick={(e) => activate(e.clientX, e.clientY)}
                    >
                      {text}
                    </button>
                  ) : (
                    text
                  )}
                </li>
              )
            })}
          </ul>
        )}

        {job.description && (
          <div className={styles.summary}>
            {job.description.split('\n').map((p) => p.trim()).filter(Boolean).map((p, i) => (
              <p key={i} className={styles.description}>{p}</p>
            ))}
          </div>
        )}
      </header>

      {job.projects?.length > 0 && (
        <div className={styles.projects}>
          {job.projects.map((project) => (
            <ProjectSection key={project.id} project={project} />
          ))}
        </div>
      )}

      {job.gallery?.length > 0 && (
        <section className={styles.block}>
          <h2 className={styles.blockHeading}>Gallery</h2>
          <CaptionGrid items={job.gallery} />
        </section>
      )}
    </section>
  )
}
