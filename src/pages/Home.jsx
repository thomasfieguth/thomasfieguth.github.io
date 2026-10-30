// FeaturedGrid replaced the FeaturedProjects carousel; swap the import and
// the <FeaturedGrid /> below back to restore it.
import FeaturedGrid from '../components/home/FeaturedGrid.jsx'
import contactLinks from '../data/contactLinks.js'
import { highlights, skills, aboutSections } from '../data/home.js'
import styles from './Home.module.css'

// Contact buttons, pulled from the footer's contact links so the URLs
// live in one place.
const CTA_LABELS = ['Resume', 'Email', 'LinkedIn']
const ctaLinks = CTA_LABELS.map((label) => contactLinks.find((link) => link.label === label))

export default function Home() {
  return (
    <div className={styles.page}>
      <section className={styles.intro}>
        <div className={styles.summary}>
          <h1 className={styles.name}>Thomas Fieguth</h1>

          <ul className={styles.skills}>
            {skills.map((skill) => (
              <li key={skill} className={styles.skillTag}>{skill}</li>
            ))}
          </ul>

          <ul className={styles.achievements}>
            {highlights.map((highlight) => (
              <li key={highlight} className={styles.achievement}>{highlight}</li>
            ))}
          </ul>

          <div className={styles.ctas}>
            {ctaLinks.map(({ label, href, external }) => (
              <a
                key={label}
                href={href}
                {...(external && { target: '_blank', rel: 'noopener noreferrer' })}
                className={styles.cta}
              >
                {label}
              </a>
            ))}
          </div>
        </div>

        <FeaturedGrid />
      </section>

      <section className={styles.about}>
        {aboutSections.map(({ heading, paragraphs }) => (
          <div key={heading} className={styles.aboutColumn}>
            <h2 className={styles.aboutHeading}>{heading}</h2>
            {paragraphs.map((paragraph) => (
              <p key={paragraph} className={styles.aboutBody}>{paragraph}</p>
            ))}
          </div>
        ))}
      </section>

      <p className={styles.quirkHint}>There are 4 easter eggs hidden in this website, can you find them all?</p>
    </div>
  )
}
