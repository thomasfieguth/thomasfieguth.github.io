/**
 * capstone.js
 *
 * Case-study data for the Capstone (Depth Sensing Woodcarving Aid) page.
 * Each entry renders as one ProjectSection — title, then a row pairing the
 * media grid (left) with the description (right). Sections are ordered
 * overview-first, progressively more technical.
 */

const capstoneData = [
  {
    id: 'capstone-cad',
    title: 'CAD Iteration Process',
    date: 'Date TBD',
    // TODO: write the CAD iteration section — what problem does the
    // depth-sensing woodcarving aid solve, who is the user, and how did
    // the design evolve across iterations (see stress analysis image)?
    description:
      'Placeholder — describe the CAD iteration process. What problem does the depth sensing woodcarving aid solve, who is the user, and how did the design evolve across iterations?',
    skills: ['CAD', 'Systems Design'],
    media: [
      {
        type: 'photo',
        src: '/assets/images/projects/capstone/capstone_diagram.svg',
        alt: 'System diagram of the depth sensing woodcarving aid',
        row: 0, width: 1.0, height: 0.55,
      },
      {
        type: 'photo',
        src: '/assets/images/projects/capstone/top_holder_stress.png',
        alt: 'Stress analysis of a CAD iteration of the top holder',
        row: 1, width: 1.0, height: 0.4,
      },
    ],
  },
  {
    id: 'capstone-cnc',
    title: 'CNC Process',
    date: 'Date TBD',
    // TODO: write the CNC process section — how was the physical build
    // machined, and add process photos once available.
    description:
      'Placeholder — describe the CNC process used to build the physical unit.',
    skills: ['CNC', 'Fabrication'],
    media: [], // TODO: add CNC process photos once available
  },
  {
    id: 'capstone-icp',
    title: 'ICP Zeroing',
    date: 'Date TBD',
    // TODO: write the ICP zeroing section — why ICP (Iterative Closest
    // Point) was used instead of defined reference points (depth
    // information was needed), and how the point cloud/projection images
    // below demonstrate the registration.
    description:
      'Placeholder — describe ICP zeroing. ICP was used instead of defined reference points because depth information was needed — explain how the registration works and what the point cloud and projection images show.',
    skills: ['Depth Sensing', 'Point Cloud Processing', 'ICP', 'C++'],
    media: [
      {
        type: 'photo',
        src: '/assets/images/projects/capstone/point_cloud.png',
        alt: 'Captured point cloud registered against the target carving',
        row: 0, width: 0.5, height: 0.45,
      },
      {
        type: 'photo',
        src: '/assets/images/projects/capstone/projection.png',
        alt: 'Depth-corrected image projected onto the workpiece',
        row: 0, width: 0.5, height: 0.45,
      },
    ],
  },
  {
    id: 'capstone-ui',
    title: 'UI Development',
    date: 'Date TBD',
    // TODO: write the UI development section — add screenshots/recordings
    // once available.
    description:
      'Placeholder — describe the UI development. What does the interface let the user do?',
    skills: ['UI Design', 'C++'],
    media: [], // TODO: add UI screenshots or screen recordings once available
  },
]

export default capstoneData
