import { Link } from 'react-router-dom'
import experienceData from '../../data/experienceData.js'
import styles from './ExperienceTimeline.module.css'

/**
 * ExperienceTimeline
 *
 * Compact newest-first timeline of every job in experienceData.js for the
 * Home page: one dot per company (linking to its Experience page), with
 * the individual co-op / full-time terms listed under it. Jobs without
 * `terms` show their single role and period instead.
 */
export default function ExperienceTimeline() {
  return (
    <ol className={styles.timeline}>
      {experienceData.map((job) => {
        const terms = job.terms ?? [{ role: job.role, period: job.period }]
        return (
          <li key={job.id} className={styles.job}>
            <Link to={`/experience/${job.id}`} className={styles.company}>
              {job.company}
            </Link>
            <ul className={styles.terms}>
              {terms.map(({ role, period }) => (
                <li key={period} className={styles.term}>
                  <span className={styles.role}>{role}</span>
                  <span className={styles.period}>{period}</span>
                </li>
              ))}
            </ul>
          </li>
        )
      })}
    </ol>
  )
}
