import { useEffect, useRef, useState, useCallback } from 'react'
import * as THREE from 'three'
import { STLLoader } from 'three/examples/jsm/loaders/STLLoader.js'
import useQuaternion from '../../hooks/useQuaternion.js'
import ProgressionSlider from './ProgressionSlider.jsx'
import styles from './STLViewer.module.css'

// ─── Constants ────────────────────────────────────────────────────────────────

const MODEL_COLOR    = '#C8A96E'  // accent — gives warmth on dark bg
const MODEL_COLOR_TRANSLUCENT_ALPHA = 0.18
const AMBIENT_INTENSITY  = 1.2
const DIR_LIGHT_INTENSITY = 1.8
const DIR_LIGHT_POSITION  = [5, 8, 5]

// ─── Helpers ──────────────────────────────────────────────────────────────────

/**
 * Centre and normalise a BufferGeometry to fit within a unit sphere.
 * Applied once per loaded geometry so all models occupy the same space
 * regardless of their original coordinate system.
 */
function normaliseGeometry(geometry) {
  geometry.computeBoundingBox()
  const box = geometry.boundingBox
  const centre = new THREE.Vector3()
  box.getCenter(centre)
  geometry.translate(-centre.x, -centre.y, -centre.z)

  geometry.computeBoundingSphere()
  const radius = geometry.boundingSphere.radius
  if (radius > 0) {
    const scale = 1 / radius
    geometry.scale(scale, scale, scale)
  }
  return geometry
}

/**
 * Project a 3D point (in model-local coords) to 2D canvas pixel coords.
 * Returns null if the point is behind the camera.
 */
function projectToScreen(point3d, mesh, camera, canvasWidth, canvasHeight) {
  const worldPos = point3d.clone().applyMatrix4(mesh.matrixWorld)
  const projected = worldPos.clone().project(camera)

  // Behind camera
  if (projected.z > 1) return null

  return {
    x: ( projected.x * 0.5 + 0.5) * canvasWidth,
    y: (-projected.y * 0.5 + 0.5) * canvasHeight,
    z:  projected.z,   // used for occlusion estimate
  }
}

// ─── Component ────────────────────────────────────────────────────────────────

/**
 * STLViewer
 *
 * Props:
 *   mode          'basic' | 'progression' | 'internal'
 *
 *   // mode: basic
 *   model         string   path to a single STL file
 *
 *   // mode: progression
 *   steps         { label: string, models: string[] }[]
 *
 *   // mode: internal
 *   models        { path: string, label: string, opacity: number }[]
 *   annotations   { label: string, headPosition: {x,y,z}, textOffset: {x,y} }[]
 *
 *   config        {
 *                   rotationSpeed:  number   // radians/s  (default 0.4)
 *                   initialEuler:   [rx,ry,rz] (default [0,0,0])
 *                   waitMs:         number   // progression only (default 2500)
 *                   fadeMs:         number   // progression only (default 600)
 *                 }
 */
export default function STLViewer({
  mode = 'basic',
  model,
  steps,
  models,
  annotations = [],
  config = {},
}) {
  const {
    rotationSpeed  = 0.4,
    initialEuler   = [0, 0, 0],
    waitMs         = 2500,
    fadeMs         = 600,
  } = config

  // ── Refs ──────────────────────────────────────────────────────────────
  const containerRef  = useRef(null)
  const canvasRef     = useRef(null)
  const overlayRef    = useRef(null)   // 2D canvas for annotations
  const rendererRef   = useRef(null)
  const sceneRef      = useRef(null)
  const cameraRef     = useRef(null)
  const meshGroupRef  = useRef(null)   // group holding all model meshes
  const meshesRef     = useRef([])     // array of THREE.Mesh, one per model path
  const rafRef        = useRef(null)
  const clockRef      = useRef(new THREE.Clock())
  const isDraggingRef = useRef(false)
  const lastPointerRef = useRef({ x: 0, y: 0 })

  // ── State ─────────────────────────────────────────────────────────────
  const [loading, setLoading]         = useState(true)
  const [error, setError]             = useState(null)
  const [stepIndex, setStepIndex]     = useState(0)   // progression mode
  const [dimensions, setDimensions]   = useState({ w: 0, h: 0 })

  // ── Quaternion ────────────────────────────────────────────────────────
  const { quaternionRef, applyAutoRotation, applyPointerDelta } =
    useQuaternion(initialEuler)

  // ── Derived model list ────────────────────────────────────────────────
  // Normalise the three modes into a single flat list of
  // { path, opacity, visibleInStep[] } objects so the loader and
  // step-visibility logic share one code path.
  const modelList = (() => {
    if (mode === 'basic') {
      return [{ path: model, opacity: 1.0 }]
    }
    if (mode === 'progression') {
      // Each step has its own set of models; collect unique paths
      const seen = new Set()
      const list = []
      steps.forEach((step, si) => {
        step.models.forEach(path => {
          if (!seen.has(path)) {
            seen.add(path)
            list.push({ path, opacity: 1.0 })
          }
        })
      })
      return list
    }
    if (mode === 'internal') {
      return models.map(m => ({ path: m.path, opacity: m.opacity }))
    }
    return []
  })()

  // ── Three.js setup ────────────────────────────────────────────────────
  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    // Scene
    const scene = new THREE.Scene()
    scene.background = new THREE.Color('#1A1A1A')
    sceneRef.current = scene

    // Camera
    const camera = new THREE.PerspectiveCamera(45, 1, 0.01, 100)
    camera.position.set(0, 0, 3.5)
    cameraRef.current = camera

    // Renderer
    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      antialias: true,
    })
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    rendererRef.current = renderer

    // Lights
    const ambient = new THREE.AmbientLight(0xffffff, AMBIENT_INTENSITY)
    scene.add(ambient)

    const dir = new THREE.DirectionalLight(0xffffff, DIR_LIGHT_INTENSITY)
    dir.position.set(...DIR_LIGHT_POSITION)
    scene.add(dir)

    // A softer fill light from below
    const fill = new THREE.DirectionalLight(0xffffff, 0.4)
    fill.position.set(-3, -4, -3)
    scene.add(fill)

    // Model group — rotation applied to this
    const group = new THREE.Group()
    scene.add(group)
    meshGroupRef.current = group

    // Load STLs
    const loader = new STLLoader()
    const loadPromises = modelList.map(({ path, opacity }) =>
      new Promise((resolve, reject) => {
        loader.load(
          path,
          (geometry) => {
            normaliseGeometry(geometry)
            const isTranslucent = opacity < 1.0
            const material = new THREE.MeshPhongMaterial({
              color: new THREE.Color(MODEL_COLOR),
              specular: new THREE.Color(0x222222),
              shininess: 30,
              transparent: isTranslucent,
              opacity: isTranslucent ? MODEL_COLOR_TRANSLUCENT_ALPHA : 1.0,
              side: THREE.DoubleSide,
              depthWrite: !isTranslucent,
            })
            const mesh = new THREE.Mesh(geometry, material)
            mesh.userData.basePath   = path
            mesh.userData.baseOpacity = opacity
            group.add(mesh)
            resolve(mesh)
          },
          undefined,
          reject
        )
      })
    )

    Promise.all(loadPromises)
      .then((meshes) => {
        meshesRef.current = meshes
        applyStepVisibility(meshes, stepIndex)
        setLoading(false)
      })
      .catch((err) => {
        console.error('STLViewer load error:', err)
        setError('Failed to load model.')
        setLoading(false)
      })

    // Resize observer — keeps renderer and camera in sync with container
    const ro = new ResizeObserver(entries => {
      for (const entry of entries) {
        const { width } = entry.contentRect
        const height = width * (9 / 16)  // fixed 16:9
        renderer.setSize(width, height, false)
        camera.aspect = width / height
        camera.updateProjectionMatrix()

        if (overlayRef.current) {
          overlayRef.current.width  = width
          overlayRef.current.height = height
        }

        setDimensions({ w: width, h: height })
      }
    })
    ro.observe(container)

    return () => {
      ro.disconnect()
      cancelAnimationFrame(rafRef.current)
      renderer.dispose()
      meshesRef.current.forEach(m => {
        m.geometry.dispose()
        m.material.dispose()
      })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])   // run once on mount

  // ── Step visibility ───────────────────────────────────────────────────
  function applyStepVisibility(meshes, idx) {
    if (mode === 'basic' || mode === 'internal') {
      // All meshes always visible
      meshes.forEach(m => { m.visible = true })
      return
    }
    if (mode === 'progression' && steps) {
      const visiblePaths = new Set(steps[idx]?.models ?? [])
      meshes.forEach(m => {
        m.visible = visiblePaths.has(m.userData.basePath)
      })
    }
  }

  // Keep visibility in sync when stepIndex changes
  useEffect(() => {
    if (meshesRef.current.length > 0) {
      applyStepVisibility(meshesRef.current, stepIndex)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [stepIndex])

  // ── Annotation drawing ────────────────────────────────────────────────
  const drawAnnotations = useCallback(() => {
    if (!overlayRef.current || !annotations.length) return
    const canvas = overlayRef.current
    const ctx    = canvas.getContext('2d')
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    const camera = cameraRef.current
    const group  = meshGroupRef.current
    if (!camera || !group) return

    // Use first mesh as the reference for matrix (all share the same group transform)
    const refMesh = meshesRef.current[0]
    if (!refMesh) return

    annotations.forEach(({ label, headPosition, textOffset }) => {
      const head3d = new THREE.Vector3(
        headPosition.x, headPosition.y, headPosition.z
      )

      // Project head to screen
      const screen = projectToScreen(
        head3d, group, camera, canvas.width, canvas.height
      )
      if (!screen) return

      // Text anchor is offset from the projected head point
      const textX = screen.x + textOffset.x
      const textY = screen.y + textOffset.y

      // Estimate occlusion using depth: if depth > 0.85 it's likely behind
      const occluded = screen.z > 0.85
      const alpha = occluded ? 0.25 : 1.0

      ctx.globalAlpha = alpha

      // Arrow line from text anchor to head
      ctx.beginPath()
      ctx.moveTo(textX, textY)
      ctx.lineTo(screen.x, screen.y)
      ctx.strokeStyle = '#C8A96E'
      ctx.lineWidth   = 1.5
      ctx.stroke()

      // Arrowhead
      const angle = Math.atan2(screen.y - textY, screen.x - textX)
      const headLen = 8
      ctx.beginPath()
      ctx.moveTo(screen.x, screen.y)
      ctx.lineTo(
        screen.x - headLen * Math.cos(angle - Math.PI / 7),
        screen.y - headLen * Math.sin(angle - Math.PI / 7)
      )
      ctx.moveTo(screen.x, screen.y)
      ctx.lineTo(
        screen.x - headLen * Math.cos(angle + Math.PI / 7),
        screen.y - headLen * Math.sin(angle + Math.PI / 7)
      )
      ctx.strokeStyle = '#C8A96E'
      ctx.lineWidth   = 1.5
      ctx.stroke()

      // Label text — fixed at text anchor, not rotating with model
      ctx.font         = '12px Inter, sans-serif'
      ctx.fillStyle    = '#F0F0F0'
      ctx.textAlign    = textOffset.x >= 0 ? 'left' : 'right'
      ctx.textBaseline = 'middle'

      // Small background pill for readability
      const textMetrics = ctx.measureText(label)
      const padX = 6, padY = 3
      const pillX = textOffset.x >= 0
        ? textX - padX
        : textX - textMetrics.width - padX
      ctx.fillStyle    = 'rgba(15,15,15,0.75)'
      ctx.beginPath()
      ctx.roundRect(
        pillX, textY - 9,
        textMetrics.width + padX * 2, 18,
        4
      )
      ctx.fill()

      ctx.fillStyle = '#F0F0F0'
      ctx.fillText(label, textX, textY)

      ctx.globalAlpha = 1.0
    })
  }, [annotations])

  // ── Render loop ───────────────────────────────────────────────────────
  useEffect(() => {
    if (loading) return

    const loop = () => {
      rafRef.current = requestAnimationFrame(loop)
      const delta = clockRef.current.getDelta()

      // Auto-rotate when not dragging
      if (!isDraggingRef.current) {
        applyAutoRotation(delta, rotationSpeed)
      }

      // Apply quaternion to group
      if (meshGroupRef.current) {
        meshGroupRef.current.quaternion.copy(quaternionRef.current)
      }

      rendererRef.current.render(sceneRef.current, cameraRef.current)
      drawAnnotations()
    }

    clockRef.current.start()
    loop()

    return () => cancelAnimationFrame(rafRef.current)
  }, [loading, rotationSpeed, applyAutoRotation, quaternionRef, drawAnnotations])

  // ── Pointer handlers ──────────────────────────────────────────────────
  const onPointerDown = useCallback((e) => {
    isDraggingRef.current = true
    lastPointerRef.current = { x: e.clientX, y: e.clientY }
    e.currentTarget.setPointerCapture(e.pointerId)
  }, [])

  const onPointerMove = useCallback((e) => {
    if (!isDraggingRef.current) return
    const dx = e.clientX - lastPointerRef.current.x
    const dy = e.clientY - lastPointerRef.current.y
    lastPointerRef.current = { x: e.clientX, y: e.clientY }
    applyPointerDelta(dx, dy)
  }, [applyPointerDelta])

  const onPointerUp = useCallback(() => {
    isDraggingRef.current = false
  }, [])

  // ── Progression step handler ──────────────────────────────────────────
  const handleStepChange = useCallback((idx) => {
    setStepIndex(idx)
  }, [])

  // ── Render ────────────────────────────────────────────────────────────
  const progressionStepsForSlider = mode === 'progression'
    ? steps.map(s => ({ label: s.label }))
    : null

  return (
    <div className={styles.wrapper} ref={containerRef}>
      {/* WebGL canvas */}
      <canvas
        ref={canvasRef}
        className={styles.canvas}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerLeave={onPointerUp}
        style={{ cursor: isDraggingRef.current ? 'grabbing' : 'grab' }}
      />

      {/* 2D annotation overlay — same dimensions as canvas */}
      {annotations.length > 0 && (
        <canvas
          ref={overlayRef}
          className={styles.overlay}
          width={dimensions.w}
          height={dimensions.h}
        />
      )}

      {/* Loading spinner */}
      {loading && (
        <div className={styles.loadingOverlay}>
          <div className={styles.spinner} />
          <span className={styles.loadingText}>Loading model…</span>
        </div>
      )}

      {/* Error state */}
      {error && (
        <div className={styles.loadingOverlay}>
          <span className={styles.errorText}>{error}</span>
        </div>
      )}

      {/* Progression slider — docked inside the viewer box */}
      {mode === 'progression' && progressionStepsForSlider && !loading && (
        <div className={styles.sliderDock}>
          <ProgressionSlider
            steps={progressionStepsForSlider}
            currentIndex={stepIndex}
            onChange={handleStepChange}
            waitMs={waitMs}
            fadeMs={fadeMs}
          />
        </div>
      )}
    </div>
  )
}
