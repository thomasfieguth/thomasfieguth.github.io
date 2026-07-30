import { Link } from 'react-router-dom'
import featuredProjects from '../../data/featuredProjects.js'
import styles from './FeaturedProjects.module.css'

export default function FeaturedProjects() {
  return (
    <section className={styles.section}>
      <h2 className={styles.heading}>Featured Projects</h2>
      <div className={styles.grid}>
        {featuredProjects.map((project) => (
          <Link key={project.id} to={project.to} className={styles.card}>
            {project.image ? (
              <img
                src={project.image}
                alt={project.title}
                className={styles.image}
                loading="lazy"
              />
            ) : (
              <div className={styles.placeholder}>
                <span className={styles.placeholderLabel}>Placeholder Image</span>
              </div>
            )}
            <h3 className={styles.title}>{project.title}</h3>
            <p className={styles.blurb}>{project.blurb}</p>
            {/* <span className={styles.cta}>View project →</span> */}
          </Link>
        ))}
      </div>
    </section>
  )
}
