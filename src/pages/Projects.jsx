import STLViewer from '../components/viewers/STLViewer.jsx'
import GLTFViewer from '../components/viewers/GLTFViewer.jsx'
import PhotoProgression from '../components/viewers/PhotoProgression.jsx'
import PhotoGrid from '../components/viewers/PhotoGrid.jsx'
import styles from './Projects.module.css'

export default function Projects() {
  return (
    <div className={styles.page}>

      {/* ── Basic ── */}
      <div className={styles.compareContainer}>
        <h2 className={styles.testHeading}>Basic</h2>
        <div className={styles.compareRow}>
          <div>
            <p className={styles.compareLabel}>STL</p>
            <STLViewer
              mode="basic"
              model="/assets/models/stormbreaker/Final.stl"
              config={{ rotationSpeed: 0.4, initialEuler: [0.3, 0, 0] }}
            />
          </div>
          <div>
            <p className={styles.compareLabel}>GLTF</p>
            <GLTFViewer
              mode="basic"
              model="/assets/models/stormbreaker/v5.gltf"
              config={{ rotationSpeed: 0.4, initialEuler: [0.3, 0, 0] }}
            />
          </div>
        </div>
      </div>

      {/* ── Progression ── */}
      <div className={styles.compareContainer}>
        <h2 className={styles.testHeading}>Progression</h2>
        <div className={styles.compareRow}>
          <div>
            <p className={styles.compareLabel}>STL</p>
            <STLViewer
              mode="progression"
              steps={[
                { label: 'V1', models: ['/assets/models/stormbreaker/v1.stl'] },
                { label: 'V2', models: ['/assets/models/stormbreaker/v2.stl'] },
                { label: 'V3', models: ['/assets/models/stormbreaker/v3.stl'] },
                { label: 'V4', models: ['/assets/models/stormbreaker/v4.stl'] },
                { label: 'V5', models: ['/assets/models/stormbreaker/Final.stl'] },
              ]}
              config={{ rotationSpeed: 0.4, initialEuler: [0.3, 0, 0], waitMs: 2500, fadeMs: 600 }}
            />
          </div>
          <div>
            <p className={styles.compareLabel}>GLTF</p>
            <GLTFViewer
              mode="progression"
              steps={[
                { label: 'V1', models: ['/assets/models/stormbreaker/v1.gltf'] },
                { label: 'V2', models: ['/assets/models/stormbreaker/v2.gltf'] },
                { label: 'V3', models: ['/assets/models/stormbreaker/v3.gltf'] },
                { label: 'V4', models: ['/assets/models/stormbreaker/v4.gltf'] },
                { label: 'V5', models: ['/assets/models/stormbreaker/v5.gltf'] },
              ]}
              config={{ rotationSpeed: 0.4, initialEuler: [0.3, 0, 0], waitMs: 2500, fadeMs: 600 }}
            />
          </div>
        </div>
      </div>

      {/* ── Internal ── */}
      <div className={styles.compareContainer}>
        <h2 className={styles.testHeading}>Internal</h2>
        <div className={styles.compareRow}>
          <div>
            <p className={styles.compareLabel}>STL</p>
            <STLViewer
              mode="internal"
              models={[
                { path: '/assets/models/stormbreaker/housing.stl',   label: 'Housing',   opacity: 0.1 },
                { path: '/assets/models/stormbreaker/internals.stl', label: 'Internals', opacity: 0.1 },
                { path: '/assets/models/stormbreaker/skeleton.stl',  label: 'Skeleton',  opacity: 1.0 },
              ]}
              config={{ rotationSpeed: 0.3, initialEuler: [0.2, 0.4, 0] }}
            />
          </div>
          <div>
            <p className={styles.compareLabel}>GLTF</p>
            <GLTFViewer
              mode="internal"
              models={[
                { path: '/assets/models/stormbreaker/cosmetics.gltf',  label: 'Cosmetics',  opacity: 0.1 },
                { path: '/assets/models/stormbreaker/shell.gltf',      label: 'Shell',      opacity: 0.1 },
                { path: '/assets/models/stormbreaker/internals.gltf',  label: 'Internals',  opacity: 0.1 },
                { path: '/assets/models/stormbreaker/skeleton.gltf',   label: 'Skeleton',   opacity: 1.0 },
              ]}
              config={{ rotationSpeed: 0.3, initialEuler: [0.2, 0.4, 0] }}
            />
          </div>
        </div>
      </div>

      {/* ── Photo Progression ── */}
      <div className={styles.compareContainer} style={{ paddingBottom: 'var(--space-12)' }}>
        <h2 className={styles.testHeading}>Photo Progression</h2>
        <div className={styles.singleCol}>
          <PhotoProgression
            steps={[
              { label: 'V1', image: '/assets/images/projects/tractor/full_1.svg' },
              { label: 'V2', image: '/assets/images/projects/tractor/full_2.svg' },
              { label: 'V3', image: '/assets/images/projects/tractor/full_3.svg' },
              { label: 'V4', image: '/assets/images/projects/tractor/full_4.svg' },
              { label: 'V5', image: '/assets/images/projects/tractor/full_5.svg' },
            ]}
            config={{ waitMs: 2500, fadeMs: 600, aspectRatio: 'auto' }}
          />
        </div>
      </div>

      {/* ── Photos ── */}
      <div className={styles.compareContainer} style={{ paddingBottom: 'var(--space-12)' }}>
        <h2 className={styles.testHeading}>Photos</h2>
        <div className={styles.singleCol}>
          <PhotoGrid
            images={[
              '/assets/images/projects/tractor/full_1.svg',
              '/assets/images/projects/tractor/full_2.svg',
              '/assets/images/projects/tractor/full_3.svg',
              '/assets/images/projects/tractor/full_4.svg',
              '/assets/images/projects/tractor/full_5.svg',
            ]}
          />
        </div>
      </div>

    </div>
  )
}
