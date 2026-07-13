import Hero from '../components/Hero.jsx'
import experienceData from '../data/experienceData.js'
import JobSection from '../components/experience/JobSection.jsx'
import styles from './Experience.module.css'

export default function Experience() {
  return (
    <div className={styles.page}>
      <Hero title="Experience" image="placeholder" />

      {/* <header className={styles.header}>
        <h1 className={styles.title}>Experience</h1>
      </header> */}
      {experienceData.map((job) => (
        <JobSection key={job.id} job={job} />
      ))}
    </div>
  )
}
