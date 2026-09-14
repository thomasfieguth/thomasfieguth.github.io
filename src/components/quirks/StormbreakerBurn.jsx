import { useEffect, useRef } from 'react'
import ProjectSection from '../project/ProjectSection.jsx'
import styles from './StormbreakerBurn.module.css'

const TRIGGER_WORD = 'heat'
const BURN_VIDEO_SRC = '/assets/videos/quirks/burn.mp4'

// Random per-tile playback delay, so tiles burning at once don't run in lockstep.
const MAX_START_DELAY_MS = 800
const HOLD_MS = 1000 // pause on the fully-burnt final frame
const FADE_MS = 750  // fade the overlay off to reveal the photo again

/**
 * Plays the burn video over one tile, then fades it away.
 * Returns a cancel function that tears everything down immediately.
 */
function burnTile(tile, onDone) {
  const video = document.createElement('video')
  video.className = styles.burnVideo
  video.style.transitionDuration = `${FADE_MS}ms`
  video.muted = true
  video.playsInline = true
  video.preload = 'auto'
  video.setAttribute('aria-hidden', 'true')
  video.src = BURN_VIDEO_SRC

  const timeouts = []
  let done = false

  function finish() {
    if (done) return
    done = true
    timeouts.forEach((id) => window.clearTimeout(id))
    video.pause()
    video.remove()
    tile.classList.remove(styles.tileBurning)
    onDone()
  }

  // Attach only once a frame is decoded — an unstarted <video> can paint
  // opaque black, which multiply would show as an instant blacked-out tile.
  function handleLoaded() {
    timeouts.push(
      window.setTimeout(() => {
        if (done) return
        tile.classList.add(styles.tileBurning)
        tile.appendChild(video)
        video.play().catch(finish)
      }, Math.random() * MAX_START_DELAY_MS)
    )
  }

  function handleEnded() {
    timeouts.push(
      window.setTimeout(() => {
        if (done) return
        video.classList.add(styles.fadingBack)
        timeouts.push(window.setTimeout(finish, FADE_MS))
      }, HOLD_MS)
    )
  }

  video.addEventListener('loadeddata', handleLoaded, { once: true })
  video.addEventListener('ended', handleEnded, { once: true })
  video.addEventListener('error', finish, { once: true })
  video.load()

  return finish
}

/**
 * StormbreakerBurn
 *
 * Hidden quirk: selecting the word "heat" in the Stormbreaker writeup
 * plays a burning-paper video over that project's thumbnails.
 *
 * The video is opaque (H.264 has no alpha), so mix-blend-mode: multiply in
 * StormbreakerBurn.module.css is what makes it composite: white paper leaves
 * the photo untouched, the burnt-out region multiplies to black, flame edges
 * tint. Nothing else on the site needs to know about this — the component
 * scopes itself to its own subtree, finds the rendered <img> elements, and
 * appends its own <video> into each one's parent button. The lightbox renders
 * in a separate portal, so enlarged images are unaffected.
 */
export default function StormbreakerBurn({ project }) {
  const containerRef = useRef(null)
  const activeBurnsRef = useRef([])

  useEffect(() => {
    return () => {
      activeBurnsRef.current.forEach((cancel) => cancel())
      activeBurnsRef.current = []
    }
  }, [])

  function handleMouseUp() {
    // Guards re-triggering while any tile is still burning.
    if (activeBurnsRef.current.length > 0) return

    const selection = window.getSelection()
    // Collapse whitespace runs in case the word spans inline nodes.
    const selected = selection ? selection.toString().trim().toLowerCase().replace(/\s+/g, ' ') : ''
    if (selected !== TRIGGER_WORD) return

    const images = containerRef.current?.querySelectorAll('img')
    if (!images || images.length === 0) return

    const tiles = [...images].map((img) => img.closest('button')).filter(Boolean)

    tiles.forEach((tile) => {
      const cancel = burnTile(tile, () => {
        activeBurnsRef.current = activeBurnsRef.current.filter((c) => c !== cancel)
      })
      activeBurnsRef.current.push(cancel)
    })
  }

  return (
    <div ref={containerRef} onMouseUp={handleMouseUp}>
      <ProjectSection project={project} />
    </div>
  )
}
