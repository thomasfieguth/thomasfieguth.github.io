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
    title: 'Project Description',
    // date: '',
    description:
      'Woodcarving Dexterity is a capstone project I built with a team of four to lower the barrier to entry for beginner woodcarvers. \
      Learning woodcarving demands strong spatial reasoning and depth judgment that most beginners lack, \
      and the fear of making an unfixable mistake discourages many from starting at all. \n\
      Our system turns woodcarving into a "trace the light" experience: it scans the wood stock with a 3D depth camera, \
      compares the resulting point cloud against a user-uploaded CAD model, and calculates the difference in depth between the two. \
      This difference is projected directly onto the stock as a colour map, showing exactly where and how deep to carve next. \n\
      Other features of the project include an itterative closest point algorithm (ICP) used to initialize the coordinate system, \
      adjustable height and origin position, and hand detection to automatically trigger a new scan once the user\'s hand moves out of the way. \
      An itterative closest point algorithm (ICP) was used to initialize the coordinate system. \n\
      Through itterative design and repeated user testing the project reached its final stage where it won the "N.S. Rovertson Foundation Capstone Design Award" in the program of Systems Design Engineering',
    // skills: [],
    media: [
      {
        type: 'photo',
        src: '/assets/images/projects/capstone/capstone_diagram.svg',
        alt: 'System diagram of the depth sensing woodcarving aid',
        row: 0, width: 1.0, height: 0.55,
      },
      {
        type: 'photo',
        src: '/assets/images/projects/capstone/user_flow.png',
        alt: 'Stress analysis of a CAD iteration of the top holder',
        row: 1, width: 1.0, height: 0.4,
      },
    ],
  },
  {
    id: 'capstone-mech',
    title: 'Mechanical Itterations',
    description:
      'Multiple iterations were designed, built, and tested to continuously improve the design,\
      with each iteration solving issues identified during testing of the one before it.\n\
      The main prototype went through three iterations. The first was built quickly as a proof of concept. \
      The second improved stability and added support for the projector\'s weight. \
      The third introduced indication markings for the user, along with adjustability to accommodate different user preferences.\n\
      The top camera-projector holder went through five iterations, not all of which were built. \
      These iterations tested and optimized the tradeoff between keeping the projector close enough to the workspace \
      and far enough to project into cuts the user had already made. The final iteration also minimized the distance \
      between the camera\'s and projector\'s optical origins to reduce projection error, and was designed with maintainability in mind, \
      keeping all bolts accessible for easy replacement and repair.',
    skills: ['CNC', 'Fabrication'],
    media: [
      {
        type: 'photo',
        src: '/assets/images/projects/capstone/full_v1.png',
        alt: 'First iteration of the prototype',
        row: 0, width: 0.333, height: 0.6,
      },
      {
        type: 'photo',
        src: '/assets/images/projects/capstone/full_v2.png',
        alt: 'Second iteration of the prototype',
        row: 0, width: 0.333, height: 0.6,
      },
      {
        type: 'photo',
        src: '/assets/images/projects/capstone/full_v3.png',
        alt: 'Third iteration of the prototype',
        row: 0, width: 0.333, height: 0.6,
      },
      {
        type: 'photo',
        src: '/assets/images/projects/capstone/top_v1.png',
        alt: 'First iteration of top sub-assembly',
        row: 1, width: 0.2, height: 0.3,
      },
      {
        type: 'photo',
        src: '/assets/images/projects/capstone/top_v2.png',
        alt: 'Second iteration of top sub-assembly',
        row: 1, width: 0.2, height: 0.3,
      },
      {
        type: 'photo',
        src: '/assets/images/projects/capstone/top_v3.png',
        alt: 'Third iteration of top sub-assembly',
        row: 1, width: 0.2, height: 0.3,
      },
      {
        type: 'photo',
        src: '/assets/images/projects/capstone/top_v4.png',
        alt: 'Fourth iteration of top sub-assembly',
        row: 1, width: 0.2, height: 0.3,
      },
      {
        type: 'photo',
        src: '/assets/images/projects/capstone/top_v5.png',
        alt: 'Fifth iteration of top sub-assembly',
        row: 1, width: 0.2, height: 0.3,
      },
    ],
  },
  {
    id: 'capstone-icp',
    title: 'ICP Zeroing',
    date: 'Date TBD',
    description:
      'We used an iterative closest point (ICP) algorithm to detect the "L" corner piece and establish the system\'s origin. \
      A simpler approach using pre-defined retro-reflectors was considered, \
      but it would not have provided the depth information we needed for initialization. \
      Using ICP instead allowed users to make adjustments and recalibrate the system automatically at the push of a button.\n\
      Getting ICP to run consistently and accurately proved more difficult than expected. \
      We had to segment out background points even when the base was not coplanar with the camera, and segment out the bolts, \
      which were not included in the CAD file ICP used for comparison. \
      Significant effort also went into optimizing the algorithm itself to reliably find the correct origin every time.',
    skills: ['Depth Sensing', 'Point Cloud Processing', 'ICP', 'C++'],
    media: [
      {
        type: 'photo',
        src: '/assets/images/projects/capstone/icp.png',
        alt: 'ICP result',
        row: 0, width: 0.5, height: 0.5,
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

export const gridItems = [
  {
    type: 'photo',
    caption: 'Captured Point Cloud',
    src: '/assets/images/projects/capstone/point_cloud.png',
  },
  {
    type: 'photo',
    caption: 'Onto Stock Projection',
    src: '/assets/images/projects/capstone/projection.png',
  },
  {
    type: 'photo',
    caption: 'Top Holder Stress Analysis',
    src: '/assets/images/projects/capstone/top_holder_stress.png',
  },
]

export default capstoneData
