import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import featuredProjects from '../../data/featuredProjects.js'
import MediaFrame from '../viewers/MediaFrame.jsx'
import Placeholder from '../viewers/Placeholder.jsx'
import useSwipeNav from '../../hooks/useSwipeNav.js'
import styles from './FeaturedProjects.module.css'

// How long each project stays up before the carousel advances.
const SLIDE_MS = 6000
const REDUCED_MOTION_QUERY = '(prefers-reduced-motion: reduce)'

/**
 * FeaturedProjects
 *
 * Auto-advancing carousel of the Home page's featured projects (see
 * featuredProjects.js). One project shows at a time — image, title and
 * blurb, the whole slide linking to its page — and crossfades to the next
 * every SLIDE_MS, looping back to the first.
 *
 * The countdown is the active dot's progress-bar CSS animation: the slide
 * advances on its animationend, so pausing it (hover / keyboard focus
 * inside the carousel) pauses the countdown in step with the bar, and
 * clicking a dot or arrow restarts both. Visitors with reduced motion
 * turned on get no auto-advance, just the manual controls.
 *
 * All slides are stacked in the same grid cell, so the carousel is as tall
 * as its tallest slide and the layout doesn't jump between projects.
 */
export default function FeaturedProjects() {
  const count = featuredProjects.length
  const [index, setIndex] = useState(0)
  const [hovered, setHovered] = useState(false)
  const [focused, setFocused] = useState(false)
  const [reducedMotion, setReducedMotion] = useState(
    () => window.matchMedia(REDUCED_MOTION_QUERY).matches
  )

  // Tracked live: index.css forces every animation to ~0ms under reduced
  // motion, so a stale `false` here would make the progress bar end (and
  // the slide advance) every frame.
  useEffect(() => {
    const mql = window.matchMedia(REDUCED_MOTION_QUERY)
    const onChange = (e) => setReducedMotion(e.matches)
    mql.addEventListener('change', onChange)
    return () => mql.removeEventListener('change', onChange)
  }, [])

  const autoPlay = !reducedMotion && count > 1
  const paused = hovered || focused

  const next = () => setIndex((i) => (i + 1) % count)
  const prev = () => setIndex((i) => (i - 1 + count) % count)
  const swipe = useSwipeNav({ onSwipeLeft: next, onSwipeRight: prev })

  const handleBlur = (e) => {
    if (!e.currentTarget.contains(e.relatedTarget)) setFocused(false)
  }

  return (
    <section
      className={styles.carousel}
      aria-roledescription="carousel"
      aria-label="Featured projects"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocus={() => setFocused(true)}
      onBlur={handleBlur}
    >
      <h2 className={styles.heading}>Featured Projects</h2>

      <div
        className={styles.slides}
        aria-live={autoPlay && !paused ? 'off' : 'polite'}
        {...swipe}
      >
        {featuredProjects.map((project, i) => {
          const active = i === index
          return (
            <Link
              key={project.id}
              to={project.to}
              className={active ? `${styles.slide} ${styles.active}` : styles.slide}
              aria-hidden={!active}
              tabIndex={active ? undefined : -1}
              aria-roledescription="slide"
              aria-label={`${i + 1} of ${count}: ${project.title}`}
            >
              <div className={styles.media}>
                {project.image ? (
                  <MediaFrame
                    src={project.image}
                    alt={project.title}
                    maximumCutoffRatio={project.maximumCutoffRatio}
                    xMove={project.xMove}
                    yMove={project.yMove}
                    zoomOnHover
                    loading={i === 0 ? 'eager' : 'lazy'}
                  />
                ) : (
                  <Placeholder label="Placeholder Image" />
                )}
              </div>
              <h3 className={styles.title}>{project.title}</h3>
              <p className={styles.blurb}>{project.blurb}</p>
            </Link>
          )
        })}
      </div>

      <div className={styles.controls}>
        <button type="button" className={styles.arrow} onClick={prev} aria-label="Previous project">
          ‹
        </button>

        <div className={styles.dots}>
          {featuredProjects.map((project, i) => {
            const active = i === index
            return (
              <button
                key={project.id}
                type="button"
                className={active ? `${styles.dot} ${styles.dotActive}` : styles.dot}
                onClick={() => setIndex(i)}
                aria-label={`Show ${project.title}`}
                aria-current={active || undefined}
              >
                {active && autoPlay && (
                  // Keyed on index so the bar (and countdown) restarts on
                  // every slide change, including manual ones.
                  <span
                    key={index}
                    className={styles.progress}
                    style={{
                      animationDuration: `${SLIDE_MS}ms`,
                      animationPlayState: paused ? 'paused' : 'running',
                    }}
                    onAnimationEnd={next}
                  />
                )}
              </button>
            )
          })}
        </div>

        <button type="button" className={styles.arrow} onClick={next} aria-label="Next project">
          ›
        </button>
      </div>
    </section>
  )
}
