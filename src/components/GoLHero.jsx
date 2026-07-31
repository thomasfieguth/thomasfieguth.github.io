import { useEffect, useRef, useState } from 'react'
import { CELL_SIZE, createState, resize, addCell, step, pixelToCell } from '../utils/gol.js'
import HeroTitle from './HeroTitle.jsx'
import styles from './GoLHero.module.css'

const SIM_FPS = 2
const MOUSE_FPS = 10
const CELL_COLOR = 'rgba(180, 165, 140, 0.7)'

/**
 * GoLHero
 *
 * A live Game of Life simulation used as the Code tab's hero banner
 * instead of a static image. Collapsed, it's cropped to the same 16:3
 * strip as every other hero (the vertical-center band of a 16:9 sim sized
 * to the hero strip's width); clicking it expands into a bounded 16:8
 * window (Lightbox-matching chrome: dimmed backdrop, click-outside/Escape
 * to close) re-cropped to the same center point, just taller.
 *
 * The canvas buffer itself is only ever resized while collapsed — the
 * sim's pixel extent freezes at that size on expand, and expand/collapse
 * just repositions the same canvas via CSS transform to show a different
 * center-aligned crop of it. Nothing is ever resized down or dropped, so
 * cells outside whichever crop is currently visible keep simulating.
 *
 * Single component instance persists across the collapsed/expanded
 * toggle (no unmount, no portal) so the sim state, timers, and render
 * loop never reset.
 *
 * Props:
 *   title  string  required — rendered via the shared HeroTitle overlay
 */
export default function GoLHero({ title }) {
  const stageRef = useRef(null)
  const canvasRef = useRef(null)
  const stateRef = useRef(createState())
  const mousePosRef = useRef(null)
  // The sim's actual pixel extent (16:9 at whatever width the collapsed
  // hero strip last measured). Only ever grows while collapsed — expanding
  // never shrinks it, so cells off to the sides/top/bottom of whichever
  // view is showing keep simulating instead of being dropped.
  const worldSizeRef = useRef({ width: 0, height: 0 })
  const [isExpanded, setIsExpanded] = useState(false)

  // Collapsed: canvas buffer tracks the hero strip's width (16:9), cropped
  // to the visible 16:3 band via translateY. Expanded: the buffer is left
  // untouched (frozen at the last collapsed size) — we only reposition the
  // same canvas so its center lines up with the bounded 16:8 window, via
  // translate. Nothing is ever resized/dropped on expand, only re-cropped.
  useEffect(() => {
    const stage = stageRef.current
    const canvas = canvasRef.current
    if (!stage || !canvas) return

    const recompute = () => {
      const stageWidth = stage.getBoundingClientRect().width
      if (stageWidth <= 0) return

      if (!isExpanded) {
        const canvasWidth = stageWidth
        const canvasHeight = (stageWidth * 9) / 16
        worldSizeRef.current = { width: canvasWidth, height: canvasHeight }

        canvas.width = canvasWidth
        canvas.height = canvasHeight
        canvas.style.width = `${canvasWidth}px`
        canvas.style.height = `${canvasHeight}px`

        const offsetY = (canvasWidth * 3) / 16
        canvas.style.transform = `translate(0px, -${offsetY}px)`

        resize(stateRef.current, canvasWidth, canvasHeight)
      } else {
        const { width: worldWidth, height: worldHeight } = worldSizeRef.current
        const stageHeight = (stageWidth * 8) / 16

        const offsetX = (worldWidth - stageWidth) / 2
        const offsetY = (worldHeight - stageHeight) / 2
        canvas.style.transform = `translate(-${offsetX}px, -${offsetY}px)`
      }
    }

    recompute()

    const resizeObserver = new ResizeObserver(recompute)
    resizeObserver.observe(stage)
    window.addEventListener('resize', recompute)

    return () => {
      resizeObserver.disconnect()
      window.removeEventListener('resize', recompute)
    }
  }, [isExpanded])

  // Mouse-follow cell placement — keeps running identically whether
  // collapsed or expanded.
  useEffect(() => {
    const id = setInterval(() => {
      const pos = mousePosRef.current
      if (!pos) return
      const { col, row } = pixelToCell(pos.x, pos.y)
      addCell(stateRef.current, col, row)
    }, 1000 / MOUSE_FPS)
    return () => clearInterval(id)
  }, [])

  // Simulation tick.
  useEffect(() => {
    const id = setInterval(() => {
      step(stateRef.current)
    }, 1000 / SIM_FPS)
    return () => clearInterval(id)
  }, [])

  // Render loop, independent of the sim tick rate.
  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let frameId

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      ctx.fillStyle = CELL_COLOR
      for (const k of stateRef.current.cells.keys()) {
        const [col, row] = k.split(',').map(Number)
        const cx = col * CELL_SIZE + CELL_SIZE / 2
        const cy = row * CELL_SIZE + CELL_SIZE / 2
        ctx.beginPath()
        ctx.arc(cx, cy, CELL_SIZE * 0.3, 0, Math.PI * 2)
        ctx.fill()
      }
      frameId = requestAnimationFrame(draw)
    }
    frameId = requestAnimationFrame(draw)

    return () => cancelAnimationFrame(frameId)
  }, [])

  // Close on Escape while expanded, matching Overlay's convention.
  useEffect(() => {
    if (!isExpanded) return
    const onKeyDown = (e) => {
      if (e.key === 'Escape') setIsExpanded(false)
    }
    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [isExpanded])

  const handleMouseMove = (e) => {
    const rect = canvasRef.current.getBoundingClientRect()
    mousePosRef.current = { x: e.clientX - rect.left, y: e.clientY - rect.top }
  }

  const handleReset = () => {
    stateRef.current.cells.clear()
  }

  return (
    <>
      {isExpanded && (
        <div className={styles.backdrop} onClick={() => setIsExpanded(false)} />
      )}

      <div
        ref={stageRef}
        className={isExpanded ? `${styles.stage} ${styles.stageExpanded}` : styles.stage}
      >
        <canvas
          ref={canvasRef}
          className={styles.canvas}
          onMouseMove={handleMouseMove}
          onClick={!isExpanded ? () => setIsExpanded(true) : undefined}
        />

        {!isExpanded && <HeroTitle>{title}</HeroTitle>}
        {!isExpanded && (
          <span className={styles.hint}>Hover mouse to start game of life</span>
        )}
      </div>

      {isExpanded && (
        <div className={styles.controls}>
          <button
            type="button"
            className={styles.controlButton}
            onClick={handleReset}
            aria-label="Reset board"
          >
            ↺
          </button>
          <button
            type="button"
            className={styles.controlButton}
            onClick={() => setIsExpanded(false)}
            aria-label="Close"
          >
            ×
          </button>
        </div>
      )}
    </>
  )
}
