import { useEffect, useRef, useState, useCallback } from 'react'
import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import useQuaternion from '../../hooks/useQuaternion.js'
import ProgressionSlider from './ProgressionSlider.jsx'
import AlphaSlider from './AlphaSlider.jsx'
import { parseAspectRatio } from '../../utils/aspectRatio.js'
import styles from './STLViewer.module.css'

// ─── Constants ────────────────────────────────────────────────────────────────

const MODEL_COLOR         = '#C8A96E'
const AMBIENT_INTENSITY   = 1.2
const DIR_LIGHT_INTENSITY = 1.8
const DIR_LIGHT_POSITION  = [5, 8, 5]

// ─── Helpers ──────────────────────────────────────────────────────────────────

// GLTF meshes can have multi-material arrays; this handles both cases.
function setMeshMat(mesh, opacity, depthWrite) {
  const mats = Array.isArray(mesh.material) ? mesh.material : [mesh.material]
  mats.forEach(mat => {
    mat.opacity    = opacity
    mat.depthWrite = depthWrite
  })
}

/**
 * Per-frame crossfade for progression mode.
 * Identical semantics to the STL version; uses setMeshMat for multi-material support.
 */
function applyCrossfade(meshes, position, steps) {
  const count = steps.length
  if (!count || !meshes.length) return

  // Allow position up to `count` to support the last→first wrap animation.
  const pos   = Math.max(0, position)
  const floor = Math.min(Math.floor(pos), count - 1)
  const t     = pos - floor   // 0..1 within transition

  const pathsA = new Set(steps[floor]?.models ?? [])
  const pathsB = new Set(steps[(floor + 1) % count]?.models ?? [])

  // B fades in over [t=0..0.5], A fades out over [t=0.5..1]
  const opA = t <= 0.5 ? 1.0 : (1.0 - t) * 2
  const opB = t <= 0.5 ? t * 2        : 1.0

  meshes.forEach(m => {
    const path = m.userData.basePath
    const inA  = pathsA.has(path)
    const inB  = pathsB.has(path)

    if (inA && inB) {
      m.visible     = true
      m.renderOrder = 0
      setMeshMat(m, 1.0, true)
    } else if (inA) {
      m.visible     = opA > 0
      m.renderOrder = 0
      setMeshMat(m, opA, true)
    } else if (inB) {
      m.visible     = opB > 0
      m.renderOrder = 1
      setMeshMat(m, opB, true)
    } else {
      m.visible     = false
      m.renderOrder = 0
      setMeshMat(m, 0, true)
    }
  })
}

/**
 * Project a 3D point (in object-local coords) to 2D canvas pixel coords.
 * Returns null if the point is behind the camera.
 */
function projectToScreen(point3d, object, camera, w, h) {
  const worldPos  = point3d.clone().applyMatrix4(object.matrixWorld)
  const projected = worldPos.clone().project(camera)
  if (projected.z > 1) return null
  return {
    x: ( projected.x * 0.5 + 0.5) * w,
    y: (-projected.y * 0.5 + 0.5) * h,
    z:  projected.z,
  }
}

// ─── Component ────────────────────────────────────────────────────────────────

/**
 * GLTFViewer
 *
 * Props: identical interface to STLViewer — same modes, same config, same
 * annotation API. Accepts .gltf / .glb files and preserves their PBR materials.
 *
 *   mode          'basic' | 'progression' | 'internal'
 *   model         string                                          (basic)
 *   steps         { label: string, models: string[] }[]          (progression)
 *   models        { path: string, label: string, opacity: number }[]  (internal)
 *   annotations   { label: string, headPosition: {x,y,z}, textOffset: {x,y} }[]
 *   config        { rotationSpeed, initialEuler, waitMs, fadeMs, aspectRatio, maxWidth, maxHeight }
 */
export default function GLTFViewer({
  mode = 'basic',
  model,
  steps,
  models,
  annotations = [],
  config = {},
}) {
  const {
    rotationSpeed = 0.4,
    initialEuler  = [0, 0, 0],
    waitMs        = 2500,
    fadeMs        = 600,
    aspectRatio   = '16 / 9',
    maxWidth,
    maxHeight,
  } = config

  // ── Refs ──────────────────────────────────────────────────────────────
  const containerRef   = useRef(null)
  const canvasRef      = useRef(null)
  const overlayRef     = useRef(null)
  const rendererRef    = useRef(null)
  const sceneRef       = useRef(null)
  const cameraRef      = useRef(null)
  const meshGroupRef   = useRef(null)
  const flatMeshesRef  = useRef([])    // every THREE.Mesh from every GLTF file
  const gltfScenesRef  = useRef([])    // gltf.scene roots — kept for disposal
  const rafRef         = useRef(null)
  const clockRef       = useRef(new THREE.Clock())
  const isDraggingRef  = useRef(false)
  const lastPointerRef = useRef({ x: 0, y: 0 })

  // ── State ─────────────────────────────────────────────────────────────
  const [loading, setLoading]               = useState(true)
  const [error, setError]                   = useState(null)
  const [stepIndex, setStepIndex]           = useState(0)
  const [internalPos, setInternalPos]       = useState(0)
  const [canvasDragging, setCanvasDragging] = useState(false)
  const [dimensions, setDimensions]         = useState({ w: 0, h: 0 })

  // ── Quaternion ────────────────────────────────────────────────────────
  const { quaternionRef, applyAutoRotation, applyPointerDelta } =
    useQuaternion(initialEuler)

  // ── Derived model list ────────────────────────────────────────────────
  const modelList = (() => {
    if (mode === 'basic') return [{ path: model, opacity: 1.0 }]
    if (mode === 'progression') {
      const seen = new Set()
      const list = []
      steps.forEach(step => {
        step.models.forEach(path => {
          if (!seen.has(path)) { seen.add(path); list.push({ path, opacity: 1.0 }) }
        })
      })
      return list
    }
    if (mode === 'internal') return models.map(m => ({ path: m.path, opacity: m.opacity }))
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

    // Renderer — sRGB + tone-mapping for correct PBR output
    const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current, antialias: true })
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.outputColorSpace    = THREE.SRGBColorSpace
    renderer.toneMapping         = THREE.ACESFilmicToneMapping
    renderer.toneMappingExposure = 1.0
    rendererRef.current = renderer

    // Lights
    const ambient = new THREE.AmbientLight(0xffffff, AMBIENT_INTENSITY)
    scene.add(ambient)
    const dir = new THREE.DirectionalLight(0xffffff, DIR_LIGHT_INTENSITY)
    dir.position.set(...DIR_LIGHT_POSITION)
    scene.add(dir)
    const fill = new THREE.DirectionalLight(0xffffff, 0.4)
    fill.position.set(-3, -4, -3)
    scene.add(fill)

    // Model group — rotation is applied to this
    const group = new THREE.Group()
    scene.add(group)
    meshGroupRef.current = group

    // Load GLTFs — resolve with raw gltf objects; normalise after all are loaded
    const loader = new GLTFLoader()
    const loadPromises = modelList.map(({ path, opacity }, modelIndex) =>
      new Promise((resolve, reject) => {
        loader.load(
          path,
          gltf => resolve({ gltf, path, opacity, modelIndex }),
          undefined,
          reject
        )
      })
    )

    Promise.all(loadPromises)
      .then((loaded) => {
        // Build a combined bounding box across all GLTF scenes so every file
        // is translated and scaled by the same shared transform — keeping
        // stacked models (internal / progression) correctly aligned.
        const combinedBox = new THREE.Box3()
        loaded.forEach(({ gltf }) => {
          gltf.scene.updateMatrixWorld(true)
          combinedBox.union(new THREE.Box3().setFromObject(gltf.scene))
        })

        const sharedCenter = new THREE.Vector3()
        combinedBox.getCenter(sharedCenter)
        const size = new THREE.Vector3()
        combinedBox.getSize(size)
        const radius = size.length() / 2   // half-diagonal → conservative bounding sphere
        const scale  = radius > 0 ? 1 / radius : 1

        const flatMeshes = []
        const gltfScenes = []

        loaded.forEach(({ gltf, path, opacity, modelIndex }) => {
          // Wrapper group applies the shared normalisation transform so the
          // geometry data itself is never mutated (unlike STLViewer).
          const wrapper = new THREE.Group()
          wrapper.position.set(-sharedCenter.x, -sharedCenter.y, -sharedCenter.z)
          wrapper.scale.setScalar(scale)
          wrapper.add(gltf.scene)
          group.add(wrapper)
          gltfScenes.push(gltf.scene)

          const isHousing     = opacity < 1.0
          const isProgression = mode === 'progression'

          gltf.scene.traverse(child => {
            if (!child.isMesh) return
            child.userData.basePath    = path
            child.userData.baseOpacity = opacity
            // modelIndex lets the internal-mode opacity effect group by file
            // rather than by flat-mesh index (one GLTF file → many meshes).
            child.userData.modelIndex  = modelIndex

            // Replace GLTF materials with a Phong material using MODEL_COLOR
            // so the viewer has a consistent look independent of the file's
            // embedded textures/colors, and gets the same specular highlights
            // as the STL viewer.
            const oldMats = Array.isArray(child.material) ? child.material : [child.material]
            oldMats.forEach(mat => mat.dispose())
            child.material = new THREE.MeshPhongMaterial({
              color:       new THREE.Color(MODEL_COLOR),
              specular:    new THREE.Color(0x666666),
              shininess:   70,
              transparent: isHousing || isProgression,
              depthWrite:  true,
              side:        THREE.DoubleSide,
            })
            flatMeshes.push(child)
          })
        })

        flatMeshesRef.current = flatMeshes
        gltfScenesRef.current = gltfScenes
        applyStepVisibility(flatMeshes, stepIndex)
        setLoading(false)
      })
      .catch(err => {
        console.error('GLTFViewer load error:', err)
        setError('Failed to load model.')
        setLoading(false)
      })

    // Resize observer — keeps renderer and camera in sync with container
    const ratio = parseAspectRatio(aspectRatio)
    const ro = new ResizeObserver(entries => {
      for (const entry of entries) {
        const { width } = entry.contentRect
        let height = width / ratio
        if (maxHeight && height > maxHeight) height = maxHeight
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
      gltfScenesRef.current.forEach(s => {
        s.traverse(child => {
          if (!child.isMesh) return
          child.geometry.dispose()
          const mats = Array.isArray(child.material) ? child.material : [child.material]
          mats.forEach(mat => mat.dispose())
        })
      })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])   // run once on mount

  // ── Step visibility ───────────────────────────────────────────────────
  function applyStepVisibility(meshes, idx) {
    if (mode === 'basic' || mode === 'internal') {
      meshes.forEach(m => { m.visible = true })
      return
    }
    if (mode === 'progression' && steps) {
      const visiblePaths = new Set(steps[idx]?.models ?? [])
      meshes.forEach(m => { m.visible = visiblePaths.has(m.userData.basePath) })
    }
  }

  useEffect(() => {
    if (flatMeshesRef.current.length > 0) {
      applyStepVisibility(flatMeshesRef.current, stepIndex)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [stepIndex])

  // ── Internal mode opacity ─────────────────────────────────────────────
  // Uses userData.modelIndex (per-file) rather than a flat-mesh index so
  // all sub-meshes within a single GLTF file fade together.
  useEffect(() => {
    if (mode !== 'internal') return
    const s      = internalPos
    const count  = modelList.length
    const floorS = Math.floor(Math.min(s, count - 1))
    const fracS  = s - floorS

    flatMeshesRef.current.forEach(m => {
      const i      = m.userData.modelIndex
      const target = m.userData.baseOpacity
      let opacity
      if (i < floorS) {
        opacity = target
      } else if (i === floorS) {
        opacity = 1.0 - fracS * (1.0 - target)
      } else {
        opacity = 1.0
      }
      const mats = Array.isArray(m.material) ? m.material : [m.material]
      mats.forEach(mat => { mat.opacity = opacity })
    })
  }, [internalPos, mode])

  // ── Annotation drawing ────────────────────────────────────────────────
  const drawAnnotations = useCallback(() => {
    if (!overlayRef.current || !annotations.length) return
    const canvas = overlayRef.current
    const ctx    = canvas.getContext('2d')
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    const camera = cameraRef.current
    const group  = meshGroupRef.current
    if (!camera || !group || !flatMeshesRef.current.length) return

    annotations.forEach(({ label, headPosition, textOffset }) => {
      const head3d = new THREE.Vector3(headPosition.x, headPosition.y, headPosition.z)
      const screen = projectToScreen(head3d, group, camera, canvas.width, canvas.height)
      if (!screen) return

      const textX    = screen.x + textOffset.x
      const textY    = screen.y + textOffset.y
      const occluded = screen.z > 0.85
      ctx.globalAlpha = occluded ? 0.25 : 1.0

      ctx.beginPath()
      ctx.moveTo(textX, textY)
      ctx.lineTo(screen.x, screen.y)
      ctx.strokeStyle = '#C8A96E'
      ctx.lineWidth   = 1.5
      ctx.stroke()

      const angle   = Math.atan2(screen.y - textY, screen.x - textX)
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

      ctx.font         = '12px Inter, sans-serif'
      ctx.textAlign    = textOffset.x >= 0 ? 'left' : 'right'
      ctx.textBaseline = 'middle'

      const textMetrics = ctx.measureText(label)
      const padX = 6
      const pillX = textOffset.x >= 0
        ? textX - padX
        : textX - textMetrics.width - padX
      ctx.fillStyle = 'rgba(15,15,15,0.75)'
      ctx.beginPath()
      ctx.roundRect(pillX, textY - 9, textMetrics.width + padX * 2, 18, 4)
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

      if (!isDraggingRef.current) {
        applyAutoRotation(delta, rotationSpeed)
      }

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
    setCanvasDragging(true)
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
    setCanvasDragging(false)
  }, [])

  // ── Progression step handler ──────────────────────────────────────────
  const handleStepChange = useCallback((idx) => { setStepIndex(idx) }, [])

  // ── Render ────────────────────────────────────────────────────────────
  const progressionStepsForSlider = mode === 'progression'
    ? steps.map(s => ({ label: s.label }))
    : null

  return (
    <div className={styles.wrapper} ref={containerRef} style={{ maxWidth }}>
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

      {/* 2D annotation overlay */}
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

      {/* Progression slider */}
      {mode === 'progression' && progressionStepsForSlider && !loading && (
        <div className={styles.sliderDock}>
          <ProgressionSlider
            steps={progressionStepsForSlider}
            currentIndex={stepIndex}
            onChange={handleStepChange}
            paused={canvasDragging}
            waitMs={waitMs}
            fadeMs={fadeMs}
          />
        </div>
      )}

      {/* Housing alpha slider — internal mode only */}
      {mode === 'internal' && !loading && (
        <div className={styles.sliderDock}>
          <AlphaSlider
            value={internalPos}
            onChange={setInternalPos}
            labels={models ? models.map(m => m.label) : []}
            paused={canvasDragging}
            waitMs={waitMs}
            fadeMs={fadeMs}
          />
        </div>
      )}
    </div>
  )
}
