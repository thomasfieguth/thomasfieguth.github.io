import { Navigate, useParams } from 'react-router-dom'
import Hero from '../components/Hero.jsx'
import experienceData from '../data/experienceData.js'
import JobSection from '../components/experience/JobSection.jsx'
import NotFound from './NotFound.jsx'
import styles from './Experience.module.css'

/**
 * Experience
 *
 * One page per job (/experience/:jobId), picked from the navbar's
 * Experience dropdown. Each renders that job's own hero followed by its
 * JobSection. Bare /experience redirects to the first job.
 */
export default function Experience() {
  const { jobId } = useParams()

  if (!jobId) {
    return <Navigate to={`/experience/${experienceData[0].id}`} replace />
  }

  const job = experienceData.find((j) => j.id === jobId)
  if (!job) return <NotFound />

  return (
    <div className={styles.page}>
      <Hero
        key={job.id}
        title={job.company}
        shortTitle={job.tabLabel}
        image={job.heroImage}
        blank
      />

      <JobSection key={`${job.id}-section`} job={job} />
    </div>
  )
}
