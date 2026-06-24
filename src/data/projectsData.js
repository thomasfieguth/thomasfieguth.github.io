/**
 * Projects data
 *
 * Each entry maps to one project section on the Projects page
 * and one card in the relevant category on the home page.
 *
 * Fields:
 *   id          — unique string, used as the URL anchor (#stormbreaker)
 *   title       — project name
 *   category    — 'woodworking' | 'cad' | 'code'
 *   previewImage — path to the image shown on the home page category grid
 *   description — paragraph shown on the Projects page
 *   skills      — array of strings shown as tags on the project entry
 *
 *   media       — ordered array of content blocks rendered beneath the
 *                 description. Each block is one of:
 *
 *     { type: 'photos', images: [...paths] }
 *       — a static photo grid
 *
 *     { type: 'photoProgression',
 *       steps: [{ label, image }],
 *       config: { waitMs, fadeMs } }
 *       — auto-advancing photo slider
 *
 *     { type: 'stlBasic',
 *       model: path,
 *       config: { rotationSpeed, initialEuler: [rx, ry, rz] } }
 *       — plain spinning STL viewer
 *
 *     { type: 'stlProgression',
 *       steps: [{ label, models: [...paths] }],
 *       config: { rotationSpeed, initialEuler, waitMs, fadeMs } }
 *       — STL viewer with iteration slider; old models disappear on advance
 *
 *     { type: 'stlInternal',
 *       models: [{ path, label, opacity }],
 *       config: { rotationSpeed, initialEuler },
 *       annotations: [{ label, headPosition: {x,y,z}, textOffset: {x,y} }] }
 *       — STL viewer with translucent layers and annotations
 */
const projectsData = [
  // ── Woodworking ────────────────────────────────────────────────────────
  {
    id: 'globe',
    title: 'CNC Wood Globe',
    category: 'woodworking',
    previewImage: '/assets/images/projects/woodworking/globe-preview.jpg',
    description: 'Placeholder — describe the globe project here.',
    skills: ['CNC Milling', 'CAD', 'Woodworking'],
    media: [
      {
        type: 'photos',
        images: [
          '/assets/images/projects/woodworking/globe1.jpg',
          '/assets/images/projects/woodworking/globe2.jpg',
        ],
      },
    ],
  },
  {
    id: 'topography',
    title: 'CNC Topography Map',
    category: 'woodworking',
    previewImage: '/assets/images/projects/woodworking/topo-preview.jpg',
    description: 'Placeholder — describe the topography map here.',
    skills: ['CNC Milling', 'CAD', 'Woodworking'],
    media: [
      {
        type: 'photos',
        images: [
          '/assets/images/projects/woodworking/topo1.jpg',
        ],
      },
    ],
  },

  // ── CAD ───────────────────────────────────────────────────────────────
  {
    id: 'stormbreaker',
    title: 'Stormbreaker Axe',
    category: 'cad',
    previewImage: '/assets/images/projects/stormbreaker/preview.jpg',
    description: 'Placeholder — describe the Stormbreaker design process here.',
    skills: ['SolidWorks', 'Iterative Design', 'Fabrication'],
    media: [
      {
        type: 'stlProgression',
        steps: [
          { label: 'V1', models: ['/assets/models/stormbreaker/v1.stl'] },
          { label: 'V2', models: ['/assets/models/stormbreaker/v2.stl'] },
        ],
        config: {
          rotationSpeed: 0.4,       // radians per second
          initialEuler: [0.3, 0, 0], // [rx, ry, rz] in radians
          waitMs: 2500,
          fadeMs: 600,
        },
      },
      {
        type: 'photoProgression',
        steps: [
          { label: 'V1', image: '/assets/images/projects/stormbreaker/v1.jpg' },
          { label: 'V2', image: '/assets/images/projects/stormbreaker/v2.jpg' },
        ],
        config: {
          waitMs: 2500,
          fadeMs: 600,
        },
      },
    ],
  },
  {
    id: 'capstone',
    title: 'Capstone — Depth Sensing Woodcarving Aid',
    category: 'cad',
    previewImage: '/assets/images/projects/capstone/preview.jpg',
    description: 'Placeholder — describe the capstone project here.',
    skills: ['CAD', 'CNC', 'Depth Sensing', 'UI Design'],
    media: [
      {
        type: 'stlInternal',
        models: [
          { path: '/assets/models/capstone/housing.stl',  label: 'Housing',  opacity: 0.25 },
          { path: '/assets/models/capstone/internals.stl', label: 'Internals', opacity: 1.0 },
        ],
        config: {
          rotationSpeed: 0.3,
          initialEuler: [0.2, 0.4, 0],
        },
        annotations: [
          {
            label: 'Sensor mount',
            headPosition: { x: 10, y: 5, z: 20 },
            textOffset:   { x: 80, y: -30 },
          },
        ],
      },
      {
        type: 'photos',
        images: [
          '/assets/images/projects/capstone/photo1.jpg',
          '/assets/images/projects/capstone/photo2.jpg',
        ],
      },
    ],
  },

  // ── Code ──────────────────────────────────────────────────────────────
  {
    id: 'ik-sim',
    title: 'Inverse Kinematics Simulation',
    category: 'code',
    previewImage: '/assets/images/projects/code/ik-preview.jpg',
    description: 'Placeholder — describe the IK simulation here.',
    skills: ['Python', 'Kinematics', 'Simulation'],
    media: [
      {
        type: 'photos',
        images: [
          '/assets/images/projects/code/ik1.jpg',
        ],
      },
    ],
  },
  {
    id: 'disk-sim',
    title: 'Disc Flight Simulation',
    category: 'code',
    previewImage: '/assets/images/projects/code/disk-preview.jpg',
    description: 'Placeholder — describe the disc flight simulation here.',
    skills: ['Python', 'Physics Simulation'],
    media: [
      {
        type: 'photos',
        images: [
          '/assets/images/projects/code/disk1.jpg',
        ],
      },
    ],
  },
]

export default projectsData
