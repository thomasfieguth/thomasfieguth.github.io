import { useCallback, useRef, useState } from 'react'
import Hero from '../../components/Hero.jsx'
import { writeups, gridItems } from '../../data/projects/woodworking.js'
import ProjectSection from '../../components/project/ProjectSection.jsx'
import CaptionGrid from '../../components/grids/CaptionGrid.jsx'
import styles from './Woodworking.module.css'

// Hidden quirk: 5 clicks on the enlarged CNC Cow photo plays a moo.
const COW_IMAGE_SRC = '/assets/images/projects/woodworking/cow.jpeg'
const MOO_AUDIO_SRC = '/assets/audio/moo.mp3'

export default function Woodworking() {
  const [cowClickCount, setCowClickCount] = useState(0)
  const mooAudioRef = useRef(null)

  // CaptionGrid calls this on open, on Prev/Next navigation, and on close
  // (src -> null) — every one of those should restart the count, including
  // landing back on the cow after viewing something else. Stabilized via
  // useCallback: CaptionGrid depends on this in a useEffect, so a fresh
  // function identity on every render (e.g. from cowClickCount changing)
  // would re-fire that effect right after every click and immediately
  // reset the very count that click just incremented.
  const handleLightboxImageChange = useCallback(() => {
    setCowClickCount(0)
  }, [])

  const handleLightboxImageClick = useCallback((src) => {
    if (src !== COW_IMAGE_SRC) return

    setCowClickCount((prev) => {
      const next = prev + 1
      if (next % 5 === 0) {
        if (!mooAudioRef.current) {
          mooAudioRef.current = new Audio(MOO_AUDIO_SRC)
        }
        mooAudioRef.current.currentTime = 0
        mooAudioRef.current.play()
      }
      return next
    })
  }, [])

  return (
    <div className={styles.page}>
      <Hero title="Woodworking & CNC" shortTitle="Woodworking" image='/assets/images/hero/woodworking.jpg' />

      {/* <header className={styles.header}>
        <h1 className={styles.title}>Woodworking & CNC</h1>
      </header> */}
      {writeups.map((project) => (
        <ProjectSection key={project.id} project={project} />
      ))}
      <section className={styles.gridSection}>
        <h2 className={styles.gridHeading}>More Projects</h2>
        <CaptionGrid
          items={gridItems}
          onImageClick={handleLightboxImageClick}
          onImageChange={handleLightboxImageChange}
        />
      </section>
    </div>
  )
}
