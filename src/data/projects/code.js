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
    // TODO: write the engrave feature description — it takes a shape with
    // two planar faces and produces the geometry as if an engraving tool
    // cut it out, solving the self-intersecting spline problem that
    // prevents this from being done with standard OnShape features.
    description:
      'Placeholder — describe the engrave feature. Takes a shape with two planar faces and produces the geometry as if an engraving tool cut it out. Solves the self-intersecting spline problem that prevents this from being done with standard OnShape features.',
    skills: ['OnShape FeatureScript', 'CAD', 'Computational Geometry'],
    media: [], // TODO: add engrave feature screenshots/recordings once available
  },
]

export const gridItems = [
  {
    type: 'iframe',
    caption: 'Prompt Engineering',
    src: 'https://thomasfieguth.github.io/',
    thumb: '/assets/images/projects/code/website.png',
  },
  {
    type: 'video',
    caption: 'Inverse Kinematics Simulation',
    placeholder: true,
    // TODO: add inverse kinematics simulation video — file does not exist in the repo yet
    note: 'video file needed',
  },
  {
    type: 'photo',
    caption: 'Random Height Generator',
    placeholder: true,
    // TODO: add random height generator image — OnShape FeatureScript
    // feature that generates a pattern of shapes at randomised heights
    // with configurable parameters, used for decorative CNC work.
    note: 'image file needed',
  },
]
