/**
 * projectsData.js
 *
 * Each entry renders as:
 *   - A tile on the Home page under its category section
 *   - A full project section on the Projects page
 *
 * Top-level fields:
 *   id            string        — URL anchor, e.g. 'stormbreaker' → /#/projects#stormbreaker
 *   title         string        — Project name
 *   category      string        — 'woodworking' | 'cad' | 'code' | 'capstone'
 *   previewImage  string        — Image shown on the home page tile
 *   description   string        — Written description shown on the project entry
 *   skills        string[]      — Tags shown on the project entry
 *
 *   media         MediaBlock[]  — Ordered content blocks rendered below the description.
 *
 * MediaBlock types:
 *
 *   { type: 'photos', images: string[] }
 *     Static photo grid.
 *
 *   { type: 'photoProgression',
 *     steps: { label: string, image: string }[],
 *     config: { waitMs?: number, fadeMs?: number, aspectRatio?: string } }
 *     Auto-advancing crossfade photo slider.
 *
 *   { type: 'stlBasic', model: string,
 *     config: { rotationSpeed?: number, initialEuler?: [rx,ry,rz] } }
 *     Single spinning STL.
 *
 *   { type: 'stlProgression',
 *     steps: { label: string, models: string[] }[],
 *     config: { rotationSpeed?, initialEuler?, waitMs?, fadeMs? } }
 *     STL iteration slider — old model disappears, new fades in.
 *
 *   { type: 'stlInternal',
 *     models: { path: string, label: string, opacity: number }[],
 *     config: { rotationSpeed?, initialEuler? },
 *     annotations?: { label: string, headPosition: {x,y,z}, textOffset: {x,y} }[] }
 *     Translucent layer viewer with optional annotations.
 *
 *   { type: 'gltfBasic', model: string,
 *     config: { rotationSpeed?, initialEuler? } }
 *
 *   { type: 'gltfProgression',
 *     steps: { label: string, models: string[] }[],
 *     config: { rotationSpeed?, initialEuler?, waitMs?, fadeMs? } }
 *
 *   { type: 'gltfInternal',
 *     models: { path: string, label: string, opacity: number }[],
 *     config: { rotationSpeed?, initialEuler? },
 *     annotations?: { label: string, headPosition: {x,y,z}, textOffset: {x,y} }[] }
 *
 *   { type: 'grid',
 *     layout: 'rowFill' | 'columnFill' | 'justified',
 *     config?: object,   // passed straight through to the grid component's
 *                         // props (sizeConfig, gap, compactThreshold, and for
 *                         // 'justified' also defaultMinRatio/defaultMaxRatio) —
 *                         // see src/components/grids/*.jsx for exact shapes
 *     items: GridItem[] }
 *     A mixed grid of photos, viewers, and progressions laid out by one of
 *     the three grid components in src/components/grids. See
 *     src/components/grids/GridItem.jsx for the full item-type mapping.
 *
 *   GridItem types (used only inside a 'grid' block's items[]):
 *     { type: 'photo', src: string, alt?: string, minRatio?: number, maxRatio?: number }
 *     { type: 'photoProgression', steps, config }
 *     { type: 'stlBasic' | 'stlProgression' | 'stlInternal', ...same fields as above, minRatio?, maxRatio? }
 *     { type: 'gltfBasic' | 'gltfProgression' | 'gltfInternal', ...same fields as above, minRatio?, maxRatio? }
 *     minRatio/maxRatio only matter for layout: 'justified' — they bound how far
 *     that item's rendered aspect ratio may be nudged from its preferred ratio
 *     to make a row fit exactly.
 */

const projectsData = [

  // ── Capstone ─────────────────────────────────────────────────────────────────
  {
    id: 'capstone',
    title: 'Depth Sensing Woodcarving Aid',
    category: 'capstone',
    previewImage: '/assets/images/projects/capstone/preview.jpg',
    description:
      'Placeholder — describe the capstone project here. What problem does it solve? Who is the user? What does the depth sensing system do?',
    skills: [
      'Depth Sensing', 'Point Cloud Processing', 'ICP',
      'CAD', 'CNC', 'C++', 'UI Design', 'Systems Design',
    ],
    media: [
      {
        type: 'stlProgression',
        steps: [
          { label: 'V1', models: ['/assets/models/capstone/v1.stl'] },
          { label: 'V2', models: ['/assets/models/capstone/v2.stl'] },
          { label: 'V3', models: ['/assets/models/capstone/v3.stl'] },
        ],
        config: {
          rotationSpeed: 0.35,
          initialEuler: [0.3, 0.2, 0],
          waitMs: 2500,
          fadeMs: 600,
        },
      },
      {
        type: 'photos',
        images: [
          '/assets/images/projects/capstone/photo1.jpg',
          '/assets/images/projects/capstone/photo2.jpg',
          '/assets/images/projects/capstone/photo3.jpg',
        ],
      },
      // Demo of the 'justified' grid layout, mixing photos with a real
      // model — items keep their own aspect ratio except where a row
      // needs a slight nudge (within minRatio/maxRatio) to fill exactly.
      {
        type: 'grid',
        layout: 'justified',
        items: [
          { type: 'photo', src: '/assets/images/projects/capstone/photo1.jpg' },
          { type: 'stlBasic', model: '/assets/models/capstone/v3.stl', config: { rotationSpeed: 0.3 } },
          { type: 'photo', src: '/assets/images/projects/capstone/photo2.jpg' },
          { type: 'photo', src: '/assets/images/projects/capstone/photo3.jpg' },
        ],
      },
    ],
  },

  // ── Woodworking ───────────────────────────────────────────────────────────────
  {
    id: 'globe',
    title: 'CNC Wood Globe',
    category: 'woodworking',
    previewImage: '/assets/images/projects/woodworking/globe-preview.jpg',
    description:
      'Placeholder — describe the globe. What wood species? How was the toolpath generated? What were the main challenges?',
    skills: ['CNC Milling', 'CAD', 'Toolpath Generation', 'Woodworking'],
    media: [
      {
        type: 'photos',
        images: [
          '/assets/images/projects/woodworking/globe1.jpg',
          '/assets/images/projects/woodworking/globe2.jpg',
          '/assets/images/projects/woodworking/globe3.jpg',
        ],
      },
    ],
  },
  {
    id: 'sphere-light',
    title: 'Sphere Light',
    category: 'woodworking',
    previewImage: '/assets/images/projects/woodworking/sphere-light-preview.jpg',
    description:
      'Placeholder — describe the sphere light. How was the sphere form achieved without CNC? What joinery or construction method was used?',
    skills: ['Woodworking', 'Hand Tools', 'Joinery'],
    media: [
      {
        type: 'photos',
        images: [
          '/assets/images/projects/woodworking/sphere-light1.jpg',
          '/assets/images/projects/woodworking/sphere-light2.jpg',
        ],
      },
    ],
  },
  {
    id: 'topography',
    title: 'CNC Topography Map',
    category: 'woodworking',
    previewImage: '/assets/images/projects/woodworking/topo-preview.jpg',
    description:
      'Placeholder — describe the topography map. What location? How was the elevation data sourced and converted to toolpaths? What wood types were used for the different layers?',
    skills: ['CNC Milling', 'CAD', 'Woodworking', 'Data Processing'],
    media: [
      {
        type: 'photos',
        images: [
          '/assets/images/projects/woodworking/topo1.jpg',
          '/assets/images/projects/woodworking/topo2.jpg',
        ],
      },
    ],
  },
  {
    id: 'cnc-logos',
    title: 'CNC Logo Plaques',
    category: 'woodworking',
    previewImage: '/assets/images/projects/woodworking/logos-preview.jpg',
    description:
      'Placeholder — describe the logo plaques. F1, Maple Leafs, Bills, and Project Ploughshares. What design process was used to convert vector logos to CNC toolpaths? What finish was applied?',
    skills: ['CNC Milling', 'Vector Design', 'Woodworking'],
    media: [
      {
        type: 'photos',
        images: [
          '/assets/images/projects/woodworking/logos-f1.jpg',
          '/assets/images/projects/woodworking/logos-leafs.jpg',
          '/assets/images/projects/woodworking/logos-bills.jpg',
          '/assets/images/projects/woodworking/logos-ploughshares.jpg',
        ],
      },
    ],
  },
  {
    id: 'cnc-cow',
    title: 'CNC Cow',
    category: 'woodworking',
    previewImage: '/assets/images/projects/woodworking/cow-preview.jpg',
    description:
      'Placeholder — describe the CNC cow. Was this a relief carving or full 3D? How was the model sourced or designed?',
    skills: ['CNC Milling', 'CAD', 'Woodworking'],
    media: [
      {
        type: 'photos',
        images: [
          '/assets/images/projects/woodworking/cow1.jpg',
          '/assets/images/projects/woodworking/cow2.jpg',
        ],
      },
    ],
  },
  {
    id: 'stormbreaker',
    title: 'Stormbreaker Axe',
    category: 'woodworking',
    previewImage: '/assets/images/projects/stormbreaker/preview.jpg',
    description:
      'Placeholder — describe the Stormbreaker build. What materials? How was the head shaped? What was the handle construction?',
    skills: ['Woodworking', 'Fabrication', 'Hand Tools', 'Finishing'],
    media: [
      {
        type: 'gltfProgression',
        steps: [
          { label: 'V1', models: ['/assets/models/stormbreaker/v1.gltf'] },
          { label: 'V2', models: ['/assets/models/stormbreaker/v2.gltf'] },
          { label: 'V3', models: ['/assets/models/stormbreaker/v3.gltf'] },
          { label: 'V4', models: ['/assets/models/stormbreaker/v4.gltf'] },
          { label: 'Final', models: ['/assets/models/stormbreaker/v5.gltf'] },
        ],
        config: {
          rotationSpeed: 0.4,
          initialEuler: [0.3, 0, 0],
          waitMs: 2500,
          fadeMs: 600,
        },
      },
      {
        type: 'photoProgression',
        steps: [
          { label: 'V1',    image: '/assets/images/projects/stormbreaker/v1.jpg' },
          { label: 'V2',    image: '/assets/images/projects/stormbreaker/v2.jpg' },
          { label: 'V3',    image: '/assets/images/projects/stormbreaker/v3.jpg' },
          { label: 'V4',    image: '/assets/images/projects/stormbreaker/v4.jpg' },
          { label: 'Final', image: '/assets/images/projects/stormbreaker/final.jpg' },
        ],
        config: { waitMs: 2500, fadeMs: 600 },
      },
      // Demo of the 'columnFill' grid layout — build-progress photos
      // stacked top-to-bottom, wrapping to the next column. Native CSS
      // multi-column, so each item's own height is intrinsic (see
      // src/components/grids/ColumnFillGrid.jsx).
      {
        type: 'grid',
        layout: 'columnFill',
        items: [
          { type: 'photo', src: '/assets/images/projects/stormbreaker/build1.jpg' },
          { type: 'photo', src: '/assets/images/projects/stormbreaker/build2.jpg' },
          { type: 'photo', src: '/assets/images/projects/stormbreaker/build3.jpg' },
          { type: 'photo', src: '/assets/images/projects/stormbreaker/build4.jpg' },
          { type: 'photo', src: '/assets/images/projects/stormbreaker/build5.jpg' },
        ],
      },
    ],
  },

  // ── CAD ───────────────────────────────────────────────────────────────────────
  {
    id: 'lego',
    title: 'Custom Lego Sets',
    category: 'cad',
    previewImage: '/assets/images/projects/lego/preview.jpg',
    description:
      'Placeholder — describe the custom Lego design process. What software? What sets were designed? Were they physically produced?',
    skills: ['CAD', 'SolidWorks', 'Part Design', 'Assembly Modelling'],
    media: [
      {
        type: 'photos',
        images: [
          '/assets/images/projects/lego/photo1.jpg',
          '/assets/images/projects/lego/photo2.jpg',
        ],
      },
    ],
  },

  // ── Code ──────────────────────────────────────────────────────────────────────
  {
    id: 'catan-tiles',
    title: 'Catan River Tile Optimizer',
    category: 'code',
    previewImage: '/assets/images/projects/code/catan-preview.jpg',
    description:
      'Placeholder — describe the Catan river tile optimizer. What constraint was being optimized — maximizing the number of valid board configurations where rivers connect correctly across hex tile boundaries?',
    skills: ['Python', 'Combinatorics', 'Optimization', 'Visualization'],
    media: [
      {
        type: 'photos',
        images: [
          '/assets/images/projects/code/catan1.jpg',
          '/assets/images/projects/code/catan2.jpg',
        ],
      },
    ],
  },
  {
    id: 'onshape-engrave',
    title: 'OnShape Engrave Feature',
    category: 'code',
    previewImage: '/assets/images/projects/code/engrave-preview.jpg',
    description:
      'Placeholder — describe the engrave feature. Takes a shape with two planar faces and produces the geometry as if an engraving tool cut it out. Solves the self-intersecting spline problem that prevents this from being done with standard OnShape features.',
    skills: ['OnShape FeatureScript', 'CAD', 'Computational Geometry'],
    media: [
      {
        type: 'photos',
        images: [
          '/assets/images/projects/code/engrave1.jpg',
          '/assets/images/projects/code/engrave2.jpg',
        ],
      },
    ],
  },
  {
    id: 'onshape-lumber',
    title: 'OnShape Lumber Requirements',
    category: 'code',
    previewImage: '/assets/images/projects/code/lumber-preview.jpg',
    description:
      'Placeholder — describe the lumber requirements tool. Given a CNC part design, calculates the minimum board dimensions needed so the part fits within the stock material, speeding up material sourcing before a CNC run.',
    skills: ['OnShape FeatureScript', 'CAD', 'CNC Workflow'],
    media: [
      {
        type: 'photos',
        images: [
          '/assets/images/projects/code/lumber1.jpg',
        ],
      },
    ],
  },
  {
    id: 'onshape-random-height',
    title: 'OnShape Random Height Feature',
    category: 'code',
    previewImage: '/assets/images/projects/code/random-height-preview.jpg',
    description:
      'Placeholder — describe the random height feature. Generates a pattern of shapes at randomised heights with configurable parameters. Used for decorative CNC work.',
    skills: ['OnShape FeatureScript', 'CAD', 'Procedural Generation'],
    media: [
      {
        type: 'photos',
        images: [
          '/assets/images/projects/code/random-height1.jpg',
          '/assets/images/projects/code/random-height2.jpg',
        ],
      },
    ],
  },
]

export default projectsData
