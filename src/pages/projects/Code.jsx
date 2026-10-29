import GoLHero from '../../components/GoLHero.jsx'
import { writeups, gridItems } from '../../data/projects/code.js'
import ProjectSection from '../../components/project/ProjectSection.jsx'
import CaptionGrid from '../../components/grids/CaptionGrid.jsx'
import styles from './Code.module.css'

// Projects with no screenshot or demo read as empty placeholders in the
// thumbnail grid, so they're listed separately as plain text instead.
const mediaItems = gridItems.filter((item) => item.type !== 'text')
const textItems = gridItems.filter((item) => item.type === 'text')

export default function Code() {
  return (
    <div className={styles.page}>
      <GoLHero title="Code" />

      {/* <header className={styles.header}>
        <h1 className={styles.title}>Code</h1>
      </header> */}
      {writeups.map((project) => (
        <ProjectSection key={project.id} project={project} />
      ))}
      <section className={styles.gridSection}>
        <h2 className={styles.gridHeading}>More Projects</h2>
        <CaptionGrid items={mediaItems} />

        {textItems.length > 0 && (
          <>
            <h3 className={styles.listHeading}>Other things I've built</h3>
            <ul className={styles.textList}>
              {textItems.map(({ caption }) => (
                <li key={caption} className={styles.textListItem}>{caption}</li>
              ))}
            </ul>
          </>
        )}
      </section>
    </div>
  )
}
