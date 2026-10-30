import { Link } from 'react-router-dom'
import featuredProjects from '../../data/featuredProjects.js'
import MediaFrame from '../viewers/MediaFrame.jsx'
import Placeholder from '../viewers/Placeholder.jsx'
import styles from './FeaturedGrid.module.css'

/**
 * FeaturedGrid
 *
 * Static grid of the Home page's featured projects (see
 * featuredProjects.js), sized to sit in the right-hand column next to the
 * intro: three cards across on desktop, two on a phone. Every project is
 * visible at once, unlike the FeaturedProjects carousel it replaces; each
 * card (thumbnail, title, short tag) links to the project's page.
 */
export default function FeaturedGrid() {
  return (
    <section className={styles.featured} aria-label="Featured projects">
      <h2 className={styles.heading}>Featured Projects</h2>

      <ul className={styles.grid}>
        {featuredProjects.map((project) => (
          <li key={project.id}>
            <Link to={project.to} className={styles.card}>
              <div className={styles.media}>
                <div className={styles.mediaInner}>
                  {project.thumb ? (
                    <MediaFrame
                      src={project.thumb}
                      alt={project.title}
                      maximumCutoffRatio={project.maximumCutoffRatio}
                      xMove={project.xMove}
                      yMove={project.yMove}
                      zoomOnHover
                      loading="eager"
                    />
                  ) : (
                    <Placeholder label="Placeholder Image" />
                  )}
                </div>
              </div>
              <h3 className={styles.title}>{project.title}</h3>
              <p className={styles.tag}>{project.tag}</p>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  )
}
