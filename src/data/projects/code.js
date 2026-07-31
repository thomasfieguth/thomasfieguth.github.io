/**
 * code.js
 *
 * Data for the Code page: detailed write-ups (writeups, each rendered as a
 * ProjectSection) followed by a grid of small captioned thumbnails
 * (gridItems, rendered by CaptionGrid).
 */

export const writeups = [
  {
    id: 'catan-tiles',
    title: 'Catan River Tile Optimizer',
    date: 'April 2026',
    description:
      'I designed a custom Catan tile set where rivers run continuously across tile edges, \
      either terminating at the board\'s outer boundary or connecting to a matching river on an adjacent tile. \
      Given several river types (sources, straight segments, and splits) and a minimum of nine river tiles, \
      I needed to find the tile set maximizing the number of valid configurations, \
      while also ensuring no pair of tiles was disproportionately likely to end up adjacent.\n\
      I solved this using a Monte Carlo simulation that placed tiles at random positions and rotations, \
      paired with a depth-first search to resolve rotation conflicts and validate river connections. \
      To keep runtime manageable, I added early stopping once a configuration\'s success rate fell below a viable threshold, \
      avoiding wasted computation on unpromising tile sets.\n\
      The next planned step, not yet implemented, is a terrain generator producing tile terrain that stays consistent with the river network and flush at tile edges.',
    skills: ['Python', 'Combinatorics', 'Optimization', 'Visualization'],
    gridWidth: 0.35, 
    media: [
      {
        type: 'photo',
        src: '/assets/images/projects/code/catan_solution.png',
        alt: 'Optimized river layout across the hex board',
        row: 0, width: 1.0,
      },
    ],
  },
  {
    id: 'onshape-engrave',
    title: 'OnShape Engrave Feature',
    date: 'May 2025',
    description:
      'Onshape is an in-browser CAD system which has a language called Featurescript. \
      Featurescript allows you to make custom tools to optimize your workflow or make parts that \
      would be very difficult or impossible with the default CAD tools. \
      I have used this tool extensively in many of my projects. \n\
      This tool creates the profile that a V-bit would produce using an engrave toolpath on a CNC. \
      This is useful for cutting out pockets that a larger bit would have missed. \
      The window on the left shows the stages of the feature. Initially, it rounds the corners, \
      then it adds a chamfer to straight lines and circles, and then it adds a chamfer to spline segments. \n \
      The last step is the most difficult because the spline has a variable corner radius, \
      and if the corner goes from having a larger radius to a smaller radius than the chamfer radius, \
      then this results in a self-intersecting spline, resulting in a failure. I had to create several \
      workarounds to ensure that the spline never self-intersects. ',
    skills: ['OnShape FeatureScript', 'Computational Geometry'],
    gridWidth: 0.35, 
    media: [
      {
        type: 'gltfProgression',
        steps: [
          { label: '1', models: ['/assets/models/code/Engrave0.gltf'] },
          { label: '2', models: ['/assets/models/code/Engrave1.gltf'] },
          { label: '3', models: ['/assets/models/code/Engrave3.gltf'] },
          { label: '4', models: ['/assets/models/code/Engrave4.gltf'] },
        ],
        config: {
          rotationSpeed: 0.3,
          initialEuler: [-1, 0, 0],
          waitMs: 1000,
          fadeMs: 600,
          colorMode: 'texture',
        },
        row: 1, width: 1, height: 0.8,
      },
    ],
  },
]

export const gridItems = [
  {
    type: 'iframe',
    caption: 'Prompt Engineering: Website',
    src: 'https://thomasfieguth.github.io/',
    thumb: '/assets/images/projects/code/website.png',
  },
  {
    type: 'video',
    caption: 'Inverse Kinematics Simulation From Scratch',
    src: '/assets/videos/code/inv_kin_2.mp4',
  },
  // {
  //   type: 'photo',
  //   caption: 'Random Height Generator',
  //   placeholder: true,
  //   // TODO: add random height generator image — OnShape FeatureScript
  //   // feature that generates a pattern of shapes at randomised heights
  //   // with configurable parameters, used for decorative CNC work.
  //   note: 'image file needed',
  // },
  { type: 'text', caption: 'Disk Golf Speed Calculator From Video' },
  { type: 'text', caption: '3D Connect Four' },
  { type: 'text', caption: 'Square Tiling Optimizer' },
  { type: 'text', caption: 'Sudoku Solver' },
  { type: 'text', caption: 'Minesweeper Solver (via Screenshot)' },
  { type: 'text', caption: '2048 Solver' },
  { type: 'text', caption: 'Tragically Hip Heardle' },
]