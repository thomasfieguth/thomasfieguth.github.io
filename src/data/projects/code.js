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
    date: 'Date TBD',
    // TODO: write the Catan optimizer description — what constraint was
    // being optimized (maximizing valid board configurations where rivers
    // connect correctly across hex tile boundaries)?
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
    id: 'disk-flight-simulation',
    title: 'Disk Flight Simulation',
    date: 'Date TBD',
    // TODO: write the disk flight simulation description — what physics
    // model was used, and what was it built to predict or explore?
    description:
      'Placeholder — describe the disk flight simulation. What physics model was used, and what was it built to predict or explore?',
    skills: ['Python', 'Physics Simulation'],
    media: [], // TODO: add simulation screenshots/recordings once available
  },
  {
    id: 'onshape-engrave',
    title: 'OnShape Engrave Feature',
    date: 'Date TBD',
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
    type: 'video',
    caption: 'Inverse Kinematics Simulation',
    placeholder: true,
    // TODO: add inverse kinematics simulation video — file does not exist in the repo yet
    note: 'video file needed',
  },
  {
    type: 'photo',
    caption: 'Album Art Calculation',
    placeholder: true,
    // TODO: add album art calculation image — file does not exist in the repo yet
    note: 'image file needed',
  },
  {
    type: 'video',
    caption: 'Disk Speed Calculation',
    placeholder: true,
    // TODO: add disk speed calculation video — file does not exist in the repo yet
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
  {
    type: 'photo',
    caption: 'OnShape Lumber Requirements',
    placeholder: true,
    // TODO: add lumber requirements tool image — given a CNC part design,
    // calculates the minimum board dimensions needed so the part fits
    // within the stock material.
    note: 'image file needed',
  },
]
