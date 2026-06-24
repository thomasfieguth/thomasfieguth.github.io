import STLViewer from '../components/viewers/STLViewer.jsx'
import styles from './Projects.module.css'

// ── Temporary test page ───────────────────────────────────────────────────────
// Replace with real ProjectEntry components once content is ready.
// To test: drop any .stl file into public/assets/models/ and update the paths.

export default function Projects() {
  return (
    <div className={styles.page}>
      <div className={styles.testContainer}>
        <h2 className={styles.testHeading}>STL Viewer — Basic</h2>
        <STLViewer
          mode="basic"
          model="/assets/models/stormbreaker/Final.stl"
          config={{
            rotationSpeed: 0.4,
            initialEuler: [0.3, 0, 0],
          }}
        />

        <h2 className={styles.testHeading} style={{ marginTop: '3rem' }}>
          STL Viewer — Progression
        </h2>
        <STLViewer
          mode="progression"
          steps={[
            { label: 'V1', models: ['/assets/models/stormbreaker/v1.stl'] },
            { label: 'V2', models: ['/assets/models/stormbreaker/v2.stl'] },
            { label: 'V3', models: ['/assets/models/stormbreaker/v3.stl'] },
            { label: 'V4', models: ['/assets/models/stormbreaker/v4.stl'] },
            { label: 'V5', models: ['/assets/models/stormbreaker/Final.stl'] },
          ]}
          config={{
            rotationSpeed: 0.4,
            initialEuler: [0.3, 0, 0],
            waitMs: 2500,
            fadeMs: 600,
          }}
        />

        <h2 className={styles.testHeading} style={{ marginTop: '3rem' }}>
          STL Viewer — Internal
        </h2>
        <STLViewer
          mode="internal"
          models={[
            { path: '/assets/models/stormbreaker/housing.stl',   label: 'Housing',   opacity: 0.25 },
            { path: '/assets/models/stormbreaker/internals.stl', label: 'Internals', opacity: 1.0  },
          ]}
          annotations={[
            {
              label: 'Sensor mount',
              headPosition: { x: 10, y: 5, z: 20 },
              textOffset:   { x: 80, y: -30 },
            },
          ]}
          config={{
            rotationSpeed: 0.3,
            initialEuler: [0.2, 0.4, 0],
          }}
        />
      </div>
    </div>
  )
}
