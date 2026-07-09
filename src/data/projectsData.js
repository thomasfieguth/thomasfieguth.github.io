/**
 * projectsData.js
 *
 * Each entry renders as a full project section on the Projects page, in a
 * fixed order: title, date, skills, then a row pairing the media grid
 * (left) with the description (right).
 *
 * Top-level fields:
 *   id            string        — URL anchor, e.g. 'stormbreaker' → /#/projects#stormbreaker
 *   title         string        — Project name
 *   previewImage  string        — Image shown on the home page tile
 *   date          string        — Shown under the title
 *   description   string        — Written description shown to the right of the grid
 *   skills        string[]      — Tags shown under the date
 *   gridWidth     number        — Fraction (0..1) of the row's width the media grid
 *                                 takes; the description takes the rest. Optional,
 *                                 defaults to 0.55 (see ProjectSection.jsx). Ignored
 *                                 when media is empty (description then runs full width).
 *
 *   media         GridItem[]    — Hand-placed grid items (see ManualGrid.jsx). Every
 *                                 item sets `row`, `width`, and `height` itself —
 *                                 width/height are fractions of the grid's own
 *                                 rendered width (0.5 = half the grid's width; both
 *                                 axes share that one unit). Items with the same
 *                                 `row` are placed left-to-right in that row;
 *                                 consecutive items must share a `row` value to end
 *                                 up in the same row (rows are read off in array
 *                                 order, not sorted). If width/height don't match an
 *                                 item's native aspect ratio, it's cropped
 *                                 (object-fit: cover) to fit exactly.
 *
 * GridItem shapes (type-specific fields; row/width/height apply to all):
 *   { type: 'photo', src: string, alt?: string, row, width, height }
 *   { type: 'photoProgression',
 *     steps: { label: string, image: string }[],
 *     config?: { waitMs?, fadeMs? },
 *     row, width, height }
 *   { type: 'stlBasic', model: string, config?: { rotationSpeed?, initialEuler? }, row, width, height }
 *   { type: 'stlProgression', steps: { label, models: string[] }[], config?, row, width, height }
 *   { type: 'stlInternal', models: { path, label, opacity }[], config?, annotations?, row, width, height }
 *   { type: 'gltfBasic', model: string, config?: { rotationSpeed?, initialEuler?, colorMode?, color? }, row, width, height }
 *   { type: 'gltfProgression', steps: { label, models: string[] }[], config?, row, width, height }
 *   { type: 'gltfInternal', models: { path, label, opacity }[], config?, annotations?, row, width, height }
 *
 *   For all gltf* types, config.colorMode is 'uniform' (default — recolors every
 *   mesh flat with config.color, default '#C8A96E') or 'texture' (keeps the
 *   GLTF file's own materials/textures as-is).
 */

const projectsData = [

  // ── Capstone ─────────────────────────────────────────────────────────────────
  {
    id: 'capstone',
    title: 'Depth Sensing Woodcarving Aid',
    previewImage: '/assets/images/projects/capstone/point_cloud.png',
    date: 'Date TBD',
    description:
      'Placeholder — describe the capstone project here. What problem does it solve? Who is the user? What does the depth sensing system do?',
    skills: [
      'Depth Sensing', 'Point Cloud Processing', 'ICP',
      'CAD', 'CNC', 'C++', 'UI Design', 'Systems Design',
    ],
    media: [
      {
        type: 'photo',
        src: '/assets/images/projects/capstone/capstone_diagram.svg',
        alt: 'System diagram of the depth sensing woodcarving aid',
        row: 0, width: 1.0, height: 0.55,
      },
      {
        type: 'photo',
        src: '/assets/images/projects/capstone/point_cloud.png',
        alt: 'Captured point cloud registered against the target carving',
        row: 1, width: 0.5, height: 0.45,
      },
      {
        type: 'photo',
        src: '/assets/images/projects/capstone/projection.png',
        alt: 'Depth-corrected image projected onto the workpiece',
        row: 1, width: 0.5, height: 0.45,
      },
    ],
  },

  // ── Woodworking ───────────────────────────────────────────────────────────────
  {
    id: 'globe',
    title: 'CNC Wood Globe',
    previewImage: '/assets/images/projects/woodworking/globe.jpg',
    date: 'Date TBD',
    description:
      'Placeholder — describe the globe. What wood species? How was the toolpath generated? What were the main challenges?',
    skills: ['CNC Milling', 'CAD', 'Toolpath Generation', 'Woodworking'],
    media: [
      {
        type: 'photo',
        src: '/assets/images/projects/woodworking/globe_unravelled.jpg',
        alt: 'Continents unravelled into flat CNC-cut marquetry segments',
        row: 0, width: 1.0, height: 0.22,
      },
      {
        type: 'photo', 
        src: '/assets/images/projects/woodworking/globe_rough.jpg', 
        alt: 'Rough glued hemispheres',
        row: 1, width: 0.5, height: 0.45,
      },
      {
        type: 'photo', 
        src: '/assets/images/projects/woodworking/globe.jpg', 
        alt: 'Final Globe', 
        row: 1, width: 0.5, height: 0.45,
      },
    ],
  },
  {
    id: 'sphere-light',
    title: 'Sphere Light',
    previewImage: '/assets/images/projects/woodworking/sphere_light.png',
    date: 'Date TBD',
    description:
      'Placeholder — describe the sphere light. How was the sphere form achieved without CNC? What joinery or construction method was used?',
    skills: ['Woodworking', 'Hand Tools', 'Joinery'],
    media: [
      {
        type: 'photo', 
        src: '/assets/images/projects/woodworking/sphere_light2.jpg', 
        alt: 'Glued and turned hollow sphere on lathe', 
        row: 0, width: 0.5, height: 0.5,
      },
      {
        type: 'photo', 
        src: '/assets/images/projects/woodworking/sphere_light.png', 
        alt: 'Final Sphere light', 
        row: 0, width: 0.5, height: 0.5,
      },
    ],
  },
  {
    id: 'topography',
    title: 'CNC Topography Map',
    previewImage: '/assets/images/projects/woodworking/cnc_elevation.png',
    date: 'Date TBD',
    description:
      'Placeholder — describe the topography map. What location? How was the elevation data sourced and converted to a tractor-style coverage toolpath? What wood types were used for the different layers?',
    skills: ['CNC Milling', 'CAD', 'Woodworking', 'Data Processing', 'Python'],
    media: [
      {
        type: 'gltfBasic',
        model: '/assets/models/elevation/farm_elevation.gltf',
        config: { rotationSpeed: 0.3 },
        row: 0, width: 0.5, height: 0.4,
      },
      {
        type: 'photo',
        src: '/assets/images/projects/woodworking/cnc_elevation.png',
        alt: 'CNC router cutting the elevation contours',
        row: 0, width: 0.5, height: 0.4,
      },
      {
        type: 'photoProgression',
        steps: [
          { label: 'Iteration 1', image: '/assets/images/projects/tractor/full_1.svg' },
          { label: 'Iteration 5', image: '/assets/images/projects/tractor/full_5.svg' },
        ],
        row: 1, width: 0.6, height: 0.35,
      },
      {
        type: 'photo',
        src: '/assets/images/projects/tractor/zoom_5.svg',
        alt: 'Detail view of the generated coverage toolpath',
        row: 1, width: 0.4, height: 0.35,
      },
    ],
  },
  {
    id: 'cnc-logos',
    title: 'CNC Logo Plaques',
    previewImage: '/assets/images/projects/woodworking/ploughshares.png',
    date: 'Date TBD',
    description:
      'Placeholder — describe the logo plaques. F1, Maple Leafs, Bills, and Project Ploughshares. What design process was used to convert vector logos to CNC toolpaths? What finish was applied?',
    skills: ['CNC Milling', 'Vector Design', 'Woodworking'],
    media: [
      {
        type: 'photo',
        src: '/assets/images/projects/woodworking/f1.jpg',
        alt: 'F1 car logo cut from wood on the table saw',
        row: 0, width: 1.0, height: 0.2,
      },
      {
        type: 'photo',
        src: '/assets/images/projects/woodworking/leafs.jpg',
        alt: 'Toronto Maple Leafs logo',
        row: 1, width: 0.5, height: 0.4,
      },
      {
        type: 'photo',
        src: '/assets/images/projects/woodworking/bills.png',
        alt: 'Buffalo Bills logo',
        row: 1, width: 0.5, height: 0.4,
      },
      {
        type: 'photo',
        src: '/assets/images/projects/woodworking/ploughshares.png',
        alt: 'Project Ploughshares logo',
        row: 2, width: 0.5, height: 0.4,
      },
      {
        type: 'photo',
        src: '/assets/images/projects/woodworking/cow.jpeg',
        alt: 'Multi-layered highland cow',
        row: 2, width: 0.5, height: 0.4,
      },
    ],
  },
  {
    id: 'stormbreaker',
    title: 'Stormbreaker Axe',
    previewImage: '/assets/images/projects/stormbreaker/heat_treating.jpg',
    date: 'Date TBD',
    description:
      'Placeholder — describe the Stormbreaker build. What materials? How was the head shaped? What was the handle construction?',
    skills: ['Woodworking', 'Fabrication', 'Hand Tools', 'Finishing'],
    media: [
      {
        type: 'photo',
        src: '/assets/images/projects/stormbreaker/heat_treating.jpg',
        alt: 'Heat treating the axe head in a forge',
        row: 0, width: 1.0, height: 0.3,
      },
      {
        type: 'gltfInternal', 
        models: [
          { path: '/assets/models/stormbreaker/cosmetics.gltf',  label: 'Cosmetics',  opacity: 0.1 },
          { path: '/assets/models/stormbreaker/shell.gltf',      label: 'Shell',      opacity: 0.1 },
          { path: '/assets/models/stormbreaker/internals.gltf',  label: 'Internals',  opacity: 0.1 },
          { path: '/assets/models/stormbreaker/skeleton.gltf',   label: 'Skeleton',   opacity: 1.0 },
        ], 
        config: {
          rotationSpeed: 0.4,
          initialEuler: [0.3, 0, 0],
          waitMs: 2500,
          fadeMs: 600,
        },
        row: 1, width: 0.6, height: 0.45,
      },
      {
        type: 'photo',
        src: '/assets/images/projects/stormbreaker/internals.jpg',
        alt: 'Riveted steel skeleton inside the handle',
        row: 1, width: 0.4, height: 0.45,
      },
    ],
  },

  // ── CAD ───────────────────────────────────────────────────────────────────────
  {
    id: 'lego',
    title: 'Custom Lego Sets',
    previewImage: '/assets/images/projects/other/lego.jpg',
    date: 'Date TBD',
    description:
      'Placeholder — describe the custom Lego design process. What software? What sets were designed? Were they physically produced?',
    skills: ['CAD', 'SolidWorks', 'Part Design', 'Assembly Modelling'],
    media: [
      {
        type: 'photo',
        src: '/assets/images/projects/other/lego.jpg',
        alt: 'Custom-designed BrickHeadz-style Lego figures',
        row: 0, width: 1.0, height: 0.65,
      },
    ],
  },

  // ── Code ──────────────────────────────────────────────────────────────────────
  {
    id: 'catan-tiles',
    title: 'Catan River Tile Optimizer',
    previewImage: '/assets/images/projects/code/catan_solution.png',
    date: 'Date TBD',
    description:
      'Placeholder — describe the Catan river tile optimizer. What constraint was being optimized — maximizing the number of valid board configurations where rivers connect correctly across hex tile boundaries?',
    skills: ['Python', 'Combinatorics', 'Optimization', 'Visualization'],
    media: [
      {
        type: 'photo',
        src: '/assets/images/projects/code/catan_solution.png',
        alt: 'Optimized river layout across the hex board',
        row: 0, width: 1.0, height: 0.85,
      },
    ],
  },
  {
    id: 'onshape-engrave',
    title: 'OnShape Engrave Feature',
    previewImage: '',
    date: 'Date TBD',
    description:
      'Placeholder — describe the engrave feature. Takes a shape with two planar faces and produces the geometry as if an engraving tool cut it out. Solves the self-intersecting spline problem that prevents this from being done with standard OnShape features.',
    skills: ['OnShape FeatureScript', 'CAD', 'Computational Geometry'],
    media: [],
  },
  {
    id: 'onshape-lumber',
    title: 'OnShape Lumber Requirements',
    previewImage: '',
    date: 'Date TBD',
    description:
      'Placeholder — describe the lumber requirements tool. Given a CNC part design, calculates the minimum board dimensions needed so the part fits within the stock material, speeding up material sourcing before a CNC run.',
    skills: ['OnShape FeatureScript', 'CAD', 'CNC Workflow'],
    media: [],
  },
  {
    id: 'onshape-random-height',
    title: 'OnShape Random Height Feature',
    previewImage: '',
    date: 'Date TBD',
    description:
      'Placeholder — describe the random height feature. Generates a pattern of shapes at randomised heights with configurable parameters. Used for decorative CNC work.',
    skills: ['OnShape FeatureScript', 'CAD', 'Procedural Generation'],
    media: [],
  },
]

export default projectsData
