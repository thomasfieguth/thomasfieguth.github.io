import { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { useLocation } from 'react-router-dom'
import { useTractorEasterEgg } from '../../context/TractorEasterEggContext.jsx'
import styles from './TractorOverlay.module.css'

const SPEED_FRACTION = 0.05 // × window.innerWidth = px/sec, recomputed every frame
const FLOWER_SPACING = 18 // px of tractor travel between flower drops
const MAX_FLOWERS = 50
const FLOWER_LIFETIME_MS = 1750
const FLOWER_COLORS = ['#ec96ff', '#ffd166', '#ff6b6b', '#63d6b0', '#5eb3ff']

let flowerIdCounter = 0

/**
 * TractorOverlay
 *
 * Mounted once, always, as a sibling of the route tree inside HashRouter so
 * it can call useLocation() — but it only renders (and only wires up
 * listeners / the rAF loop) while the easter egg is active, via
 * TractorOverlayContent. Route changes after activation deactivate it.
 */
export default function TractorOverlay() {
  const { active, deactivate, seed } = useTractorEasterEgg()
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
  const targetRef = useRef({ x: seed.x, y: seed.y })
  const hasPointerRef = useRef(false)
  const lastFlowerPosRef = useRef({ x: seed.x, y: seed.y })
  const rafRef = useRef(null)
  const lastTimeRef = useRef(null)
  const flowerTimeoutsRef = useRef(new Set())
  const [flowers, setFlowers] = useState([])

  // Escape dismisses the egg.
  useEffect(() => {
    function handleKeyDown(event) {
      if (event.key === 'Escape') deactivate()
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

  // Movement loop — position lives in a ref and is pushed straight onto
  // the <img> via the DOM ref, so the tractor doesn't trigger a React
  // render on every frame.
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

        if (dist > 0) {
          const speed = SPEED_FRACTION * window.innerWidth
          const step = speed * dt

          if (step >= dist) {
            pos.x = target.x
            pos.y = target.y
          } else {
            pos.x += (dx / dist) * step
            pos.y += (dy / dist) * step
          }

          if (tractorRef.current) {
            tractorRef.current.style.transform = `translate(${pos.x}px, ${pos.y}px)`
          }

          const lastFlowerPos = lastFlowerPosRef.current
          const traveled = Math.hypot(pos.x - lastFlowerPos.x, pos.y - lastFlowerPos.y)
          if (traveled >= FLOWER_SPACING) {
            lastFlowerPosRef.current = { x: pos.x, y: pos.y }
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

  function dropFlower(x, y) {
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
        style={{ transform: `translate(${seed.x}px, ${seed.y}px)` }}
      />
    </div>,
    document.body
  )
}

function Flower({ x, y, id }) {
  const color = FLOWER_COLORS[id % FLOWER_COLORS.length]
  return (
    <div className={styles.flower} style={{ transform: `translate(${x}px, ${y}px)` }}>
      <svg className={styles.flowerFade} width="14" height="14" viewBox="-7 -7 14 14">
        <circle cx="0" cy="-3.5" r="2.4" fill={color} />
        <circle cx="3.5" cy="1.75" r="2.4" fill={color} />
        <circle cx="-3.5" cy="1.75" r="2.4" fill={color} />
        <circle cx="0" cy="0" r="1.6" fill="#fff8e1" />
      </svg>
    </div>
  )
}
