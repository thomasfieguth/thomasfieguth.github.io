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
    date: 'April 2026 - Present',
    description:
      '**Problem:** I am in the process of creating a custom Catan board where rivers run continuously across tile edges, \
      either terminating at the board\'s outer boundary or connecting to a river edge on an adjacent tile. \
      Given several river types (Sources, Sinks, Flows, Splits, and Riverless) and a minimum of nine river tiles, \
      I needed to find the tile set maximizing the number of valid configurations, \
      while also ensuring no pair of tiles was disproportionately likely to end up adjacent. \n\
      **Solution:** I solved this using a Monte Carlo simulation paired with a depth-first search to resolve rotation conflicts. \n\
      **Terrain:** I initially wanted to find real world topography data and place it into the tiles, \
      however that makes the edge connection difficult, therefore I opted for building a terrain generation tool. \
      This tool ensures that the terrain approaches the edge tangentially, gets cut down where rivers are, \
      and attempts to recreate realistic looking terrain. There is still work to be done to improve the erosion \
      calculation on the mountain terrain type to make the mountains look more realistic.',     
    skills: ['Python', 'Combinatorics', 'Optimization', 'Visualization', 'Terrain Generation'],
    gridWidth: 0.45, 
    media: [
      {
        type: 'photoProgression',
        steps: [
          { image: '/assets/images/projects/code/board1.svg' },
          { image: '/assets/images/projects/code/board2.svg' },
          { image: '/assets/images/projects/code/board3.svg' },
          { image: '/assets/images/projects/code/board4.svg' },
          { image: '/assets/images/projects/code/board5.svg' },
        ],
        config: { hideSlider: true },
        x: 0, y: 0, width: 0.3, height: 0.3
      },
      {
        type: 'photo',
        src: '/assets/images/projects/code/tile_with_building.jpg',
        alt: 'Tile with building',
        x: 0, y: 0.3, width: 0.3, height: 0.3
      },
      {
        type: 'gltfProgression',
        steps: [
          { label: 'Riverless', models: ['/assets/models/code/mountains_riverless.glb'] },
          { label: 'Source', models: ['/assets/models/code/mountains_source0_source.glb'] },
          { label: 'Sink', models: ['/assets/models/code/mountains_source0_sink.glb'] },
          { label: 'Flow', models: ['/assets/models/code/mountains_flow01.glb'] },
          { label: 'Fork', models: ['/assets/models/code/mountains_fork013.glb'] },
        ],
        config: {
          rotationSpeed: 0.3,
          rotateAround: [0, 1, 0],
          initialEuler: [0.85, 0, 0],
          waitMs: 2000,
          fadeMs: 600,
          colorMode: 'texture',
          zoom: 2
        },
        x: 0.3, y: 0, width: 0.7, height: 0.6,
      },
      {
        type: 'photo',
        src: '/assets/images/projects/code/catan_heightmaps.jpg',
        alt: 'Height map of every terrain type for every river tile type',
        x: 0, y: 0.6, width: 1.0, height: 0.22, yMove: 0.5
      }
    ],
  },
  {
    id: 'onshape-engrave',
    title: 'OnShape Engrave Feature',
    date: 'May 2025',
    description:
      '**Background:** Onshape is an in-browser CAD system which has a language called FeatureScript. \
      FeatureScript allows you to make custom tools to optimize your workflow or make parts that \
      would be very difficult or impossible with the default CAD tools. \
      I have used this tool extensively in many of my projects. \n\
      **The feature:** This tool creates the profile that a V-bit would produce using an engrave toolpath on a CNC. \
      This is useful for cutting out pockets that a larger bit would have missed. \
      The window on the left shows the stages of the feature. Initially, it rounds the corners, \
      then it adds a chamfer to straight lines and circles, and then it adds a chamfer to spline segments. \n \
      **The hard part:** The last step is the most difficult because the spline has a variable corner radius, \
      and if the corner goes from having a larger radius to a smaller radius than the chamfer radius, \
      then this results in a self-intersecting spline, resulting in a failure. I had to create several \
      workarounds to ensure that the spline never self-intersects. ',
    skills: ['OnShape FeatureScript', 'Computational Geometry'],
    gridWidth: 0.35, 
    media: [
      {
        type: 'gltfProgression',
        steps: [
          { label: '1', models: ['/assets/models/code/Engrave0.glb'] },
          { label: '2', models: ['/assets/models/code/Engrave1.glb'] },
          { label: '3', models: ['/assets/models/code/Engrave3.glb'] },
          { label: '4', models: ['/assets/models/code/Engrave4.glb'] },
        ],
        config: {
          rotationSpeed: 0.3,
          rotateAround: [0, 0, 1],
          initialEuler: [-1.2, 0, 0],
          waitMs: 1000,
          fadeMs: 600,
          colorMode: 'texture',
          zoom: 1.5
        },
        row: 1, width: 1, height: 0.8,
      },
    ],
  },
]

export const gridItems = [
  {
    type: 'iframe',
    caption: 'This Website: React + Three.js, Built With AI-Assisted Development',
    link: { label: 'Source', href: 'https://github.com/thomasfieguth/thomasfieguth.github.io' },
    src: 'https://thomasfieguth.github.io/',
    thumb: '/assets/images/projects/code/website_thumb.jpg',
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
  { type: 'text', caption: 'Disc Golf Speed Calculator From Video' },
  { type: 'text', caption: '3D Connect Four' },
  { type: 'text', caption: 'Square Tiling Optimizer' },
  { type: 'text', caption: 'Sudoku Solver' },
  { type: 'text', caption: 'Minesweeper Solver (via Screenshot)' },
  { type: 'text', caption: '2048 Solver' },
  { type: 'text', caption: 'Tragically Hip Heardle' },
]