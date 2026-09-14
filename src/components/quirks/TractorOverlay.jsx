import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { useLocation } from 'react-router-dom'
import { useTractorQuirk } from '../../context/TractorQuirkContext.jsx'
import styles from './TractorOverlay.module.css'

const SPEED_FRACTION = 0.05 // × window.innerWidth = px/sec, recomputed every frame

// The tractor drives like a car, not a cursor: constant forward speed,
// heading can only turn at a bounded rate (ω = speed / turningRadius), so
// it sweeps an arc into the pointer position rather than snapping to face
// it. turningRadius doubles as the on-screen width (and the flower scatter
// radius below) so "minimum turning radius = one tractor width" can't drift
// out of sync with the art asset's actual size.
const TRACTOR_WIDTH_PX = 72
const TURNING_RADIUS_PX = TRACTOR_WIDTH_PX
const ARRIVAL_RADIUS_PX = 6 // close enough to the target to stop and hold

// tractor_model.png is drawn nose-up (front axle at the top of the frame),
// so heading 0 (pointing screen-right, atan2 convention) needs +90deg on
// top of the raw heading to align the artwork's "forward" with travel
// direction.
const ART_FORWARD_OFFSET_DEG = 90

// tractor_model.png is 2547×3296 — used to size the rendered <img> and to
// place the anchor point below without distorting the artwork.
const TRACTOR_ASPECT_RATIO = 3296 / 2547
const TRACTOR_HEIGHT_PX = TRACTOR_WIDTH_PX * TRACTOR_ASPECT_RATIO

// The tracked position (posRef) isn't the image's visual center — it's
// anchored 1/4 of the way up from the bottom of the artwork (roughly the
// rear axle), so the tractor pivots and drops flowers from its back end
// rather than its middle. translate() lands this point at (pos.x, pos.y);
// transform-origin (set inline below, from these same fractions) makes
// rotate() pivot around it too.
const ANCHOR_X_FRAC = 0.5
const ANCHOR_Y_FRAC = 0.75 // 1/4 up from the bottom = 3/4 down from the top

// Player-adjustable speed multiplier — + (or the unshifted = key) speeds
// up, - slows down. Turning radius stays fixed at TURNING_RADIUS_PX
// regardless: maxAngularSpeed below is speed/TURNING_RADIUS_PX, so scaling
// speed scales the turn rate right along with it, same as a real vehicle.
const MIN_SPEED_MULTIPLIER = 0.25
const MAX_SPEED_MULTIPLIER = 3
const SPEED_MULTIPLIER_STEP = 0.25

const FLOWER_SPACING_PX = 3 // px of actual path length between flower drops
const FLOWER_SCATTER_RADIUS_PX = TRACTOR_WIDTH_PX / 4 // "within a 1-tractor-width radius"
const MAX_FLOWERS = 300
const FLOWER_LIFETIME_MS = 16000
const FLOWER_COLORS = ['#ec96ff', '#ffd166', '#ff6b6b', '#63d6b0', '#5eb3ff']

let flowerIdCounter = 0

function normalizeAngle(angle) {
  return Math.atan2(Math.sin(angle), Math.cos(angle))
}

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max)
}

function tractorTransform(x, y, headingRad) {
  const deg = (headingRad * 180) / Math.PI + ART_FORWARD_OFFSET_DEG
  return `translate(${x}px, ${y}px) rotate(${deg}deg)`
}

/**
 * TractorOverlay
 *
 * Mounted once, always, as a sibling of the route tree inside HashRouter so
 * it can call useLocation() — but it only renders (and only wires up
 * listeners / the rAF loop) while the quirk is active, via
 * TractorOverlayContent. Route changes after activation deactivate it.
 */
export default function TractorOverlay() {
  const { active, deactivate, seed } = useTractorQuirk()
  const location = useLocation()
  const activatedPathRef = useRef(null)

  useEffect(() => {
    if (active) {
      activatedPathRef.current = location.pathname
    } else {
      activatedPathRef.current = null
    }
    // Only re-run when `active` flips — this records the path at the
    // moment of activation, not on every subsequent navigation.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active])

  useEffect(() => {
    if (active && activatedPathRef.current !== null && location.pathname !== activatedPathRef.current) {
      deactivate()
    }
  }, [location.pathname, active, deactivate])

  if (!active) return null

  return <TractorOverlayContent seed={seed.current} deactivate={deactivate} />
}

function TractorOverlayContent({ seed, deactivate }) {
  const tractorRef = useRef(null)
  const posRef = useRef({ x: seed.x, y: seed.y })
  const headingRef = useRef(0) // radians, 0 = facing screen-right
  const targetRef = useRef({ x: seed.x, y: seed.y })
  const hasPointerRef = useRef(false)
  const speedMultiplierRef = useRef(1)
  const traveledSinceFlowerRef = useRef(0)
  const rafRef = useRef(null)
  const lastTimeRef = useRef(null)
  const flowerTimeoutsRef = useRef(new Set())
  const [flowers, setFlowers] = useState([])

  // Seed the tractor's on-screen position exactly once, imperatively.
  // Deliberately NOT done via the <img>'s `style` prop: this component
  // re-renders whenever `flowers` changes (every ~90ms while driving), and
  // a JSX-computed `transform` would be recalculated from the constant
  // `seed` on every one of those re-renders, stomping the rAF loop's
  // direct `tractorRef.current.style.transform` writes and snapping the
  // tractor back to its click position mid-drive.
  useLayoutEffect(() => {
    if (tractorRef.current) {
      tractorRef.current.style.transform = tractorTransform(seed.x, seed.y, headingRef.current)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // Escape dismisses it; +/= speeds the tractor up, - slows it down.
  // ("=" is the unshifted key that produces "+" on a standard layout — bound
  // alongside "+" so the shift key isn't required.)
  useEffect(() => {
    function handleKeyDown(event) {
      if (event.key === 'Escape') {
        deactivate()
      } else if (event.key === '+' || event.key === '=') {
        speedMultiplierRef.current = clamp(
          speedMultiplierRef.current + SPEED_MULTIPLIER_STEP,
          MIN_SPEED_MULTIPLIER,
          MAX_SPEED_MULTIPLIER
        )
      } else if (event.key === '-') {
        speedMultiplierRef.current = clamp(
          speedMultiplierRef.current - SPEED_MULTIPLIER_STEP,
          MIN_SPEED_MULTIPLIER,
          MAX_SPEED_MULTIPLIER
        )
      }
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [deactivate])

  // Pointer tracking — document/window-level so it keeps working even
  // though the overlay root has pointer-events: none.
  useEffect(() => {
    function setTarget(event) {
      targetRef.current = { x: event.clientX, y: event.clientY }
      hasPointerRef.current = true
    }
    function clearPointer() {
      hasPointerRef.current = false
    }

    window.addEventListener('pointermove', setTarget)
    window.addEventListener('pointerdown', setTarget)
    window.addEventListener('pointerup', clearPointer)
    window.addEventListener('pointercancel', clearPointer)
    window.addEventListener('pointerleave', clearPointer)

    return () => {
      window.removeEventListener('pointermove', setTarget)
      window.removeEventListener('pointerdown', setTarget)
      window.removeEventListener('pointerup', clearPointer)
      window.removeEventListener('pointercancel', clearPointer)
      window.removeEventListener('pointerleave', clearPointer)
    }
  }, [])

  // Movement loop — position/heading live in refs and are pushed straight
  // onto the <img> via the DOM ref, so the tractor doesn't trigger a React
  // render on every frame. Steering is a bounded-curvature (Dubins-car-
  // style) pursuit controller: constant forward speed, heading chases the
  // bearing to the pointer but can't turn faster than speed/turningRadius
  // allows, so reaching a point behind the tractor means arcing around to
  // it rather than snapping to face it.
  useEffect(() => {
    function frame(time) {
      if (lastTimeRef.current == null) lastTimeRef.current = time
      const dt = (time - lastTimeRef.current) / 1000
      lastTimeRef.current = time

      if (hasPointerRef.current) {
        const pos = posRef.current
        const target = targetRef.current
        const dx = target.x - pos.x
        const dy = target.y - pos.y
        const dist = Math.hypot(dx, dy)

        if (dist > ARRIVAL_RADIUS_PX) {
          const speed = SPEED_FRACTION * window.innerWidth * speedMultiplierRef.current
          const maxAngularSpeed = speed / TURNING_RADIUS_PX // rad/s
          const desiredHeading = Math.atan2(dy, dx)
          const headingDiff = normalizeAngle(desiredHeading - headingRef.current)
          const turn = clamp(headingDiff, -maxAngularSpeed * dt, maxAngularSpeed * dt)
          headingRef.current += turn

          const moveDist = speed * dt
          pos.x += Math.cos(headingRef.current) * moveDist
          pos.y += Math.sin(headingRef.current) * moveDist

          if (tractorRef.current) {
            tractorRef.current.style.transform = tractorTransform(pos.x, pos.y, headingRef.current)
          }

          traveledSinceFlowerRef.current += moveDist
          while (traveledSinceFlowerRef.current >= FLOWER_SPACING_PX) {
            traveledSinceFlowerRef.current -= FLOWER_SPACING_PX
            dropFlower(pos.x, pos.y)
          }
        }
      }

      rafRef.current = requestAnimationFrame(frame)
    }

    rafRef.current = requestAnimationFrame(frame)
    return () => {
      if (rafRef.current != null) cancelAnimationFrame(rafRef.current)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // Clear any still-pending flower removal timeouts on unmount/deactivation.
  useEffect(() => {
    const timeouts = flowerTimeoutsRef.current
    return () => {
      timeouts.forEach((id) => clearTimeout(id))
      timeouts.clear()
    }
  }, [])

  function dropFlower(centerX, centerY) {
    // Scattered uniformly across the disk (sqrt(random) so points don't
    // bunch up near the center), not pinned to the exact path line.
    const angle = Math.random() * Math.PI * 2
    const radius = Math.sqrt(Math.random()) * FLOWER_SCATTER_RADIUS_PX
    const x = centerX + Math.cos(angle) * radius
    const y = centerY + Math.sin(angle) * radius

    const id = flowerIdCounter++
    setFlowers((prev) => {
      const next = [...prev, { id, x, y }]
      return next.length > MAX_FLOWERS ? next.slice(next.length - MAX_FLOWERS) : next
    })

    const timeoutId = setTimeout(() => {
      flowerTimeoutsRef.current.delete(timeoutId)
      setFlowers((prev) => prev.filter((flower) => flower.id !== id))
    }, FLOWER_LIFETIME_MS)
    flowerTimeoutsRef.current.add(timeoutId)
  }

  return createPortal(
    <div className={styles.root}>
      {flowers.map((flower) => (
        <Flower key={flower.id} x={flower.x} y={flower.y} id={flower.id} />
      ))}
      <img
        ref={tractorRef}
        src="/assets/images/experience/werkr/tractor_model.png"
        alt=""
        className={styles.tractor}
        style={{
          width: TRACTOR_WIDTH_PX,
          height: TRACTOR_HEIGHT_PX,
          marginLeft: -TRACTOR_WIDTH_PX * ANCHOR_X_FRAC,
          marginTop: -TRACTOR_HEIGHT_PX * ANCHOR_Y_FRAC,
          transformOrigin: `${ANCHOR_X_FRAC * 100}% ${ANCHOR_Y_FRAC * 100}%`,
        }}
      />
      <p className={styles.hint}>
        Tip: press <kbd className={styles.key}>+</kbd> / <kbd className={styles.key}>-</kbd> to change the
        tractor's speed
      </p>
    </div>,
    document.body
  )
}

function Flower({ x, y, id }) {
  const color = FLOWER_COLORS[id % FLOWER_COLORS.length]
  return (
    <div className={styles.flower} style={{ transform: `translate(${x}px, ${y}px)` }}>
      <svg
        className={styles.flowerFade}
        style={{ animationDuration: `${FLOWER_LIFETIME_MS}ms` }}
        width="14"
        height="14"
        viewBox="-7 -7 14 14"
      >
        <circle cx="0" cy="-3.5" r="2.4" fill={color} />
        <circle cx="3.5" cy="1.75" r="2.4" fill={color} />
        <circle cx="-3.5" cy="1.75" r="2.4" fill={color} />
        <circle cx="0" cy="0" r="1.6" fill="#fff8e1" />
      </svg>
    </div>
  )
}
