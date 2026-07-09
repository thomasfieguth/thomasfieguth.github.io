/**
 * tractor.js
 *
 * Case-study data for the Self-Driving Tractor page. Each entry renders as
 * one ProjectSection (see src/components/project/ProjectSection.jsx) —
 * title, then a row pairing the media grid (left) with the description
 * (right). Sections are ordered overview-first, progressively more
 * technical. See src/data/projectsData.js (deleted) for the GridItem shape
 * reference this media array follows.
 */

const tractorData = [
  {
    id: 'tractor-overview',
    title: 'System Overview',
    date: 'Date TBD',
    // TODO: write the system overview — what problem does the tractor
    // platform solve, and how do sensors, path planner, and onboard app
    // fit together at a high level?
    description:
      'Placeholder — describe the self-driving tractor system. What problem does it solve, and how do sensors, path planner, and onboard app fit together?',
    skills: ['Robotics', 'Autonomous Navigation', 'Systems Design'],
    media: [
      {
        type: 'photoProgression',
        steps: [
          { label: 'Iteration 1', image: '/assets/images/projects/tractor/full_1.svg' },
          { label: 'Iteration 5', image: '/assets/images/projects/tractor/full_5.svg' },
        ],
        row: 0, width: 0.6, height: 0.4,
      },
      {
        type: 'photo',
        src: '/assets/images/projects/tractor/zoom_5.svg',
        alt: 'Detail view of the generated tractor coverage path',
        row: 0, width: 0.4, height: 0.4,
      },
    ],
  },
  {
    id: 'tractor-onboard-app',
    title: 'Onboard App',
    date: 'Date TBD',
    // TODO: write the onboard app section — what does the operator see and
    // control while the tractor is running? Add screenshots/recordings.
    description:
      'Placeholder — describe the onboard app. What does the operator interact with, and what does it display or control while the tractor runs?',
    skills: ['Application Development', 'UI Design'],
    media: [], // TODO: add onboard app screenshots or screen recordings once available
  },
  {
    id: 'tractor-ekf',
    title: 'EKF Troubleshooting',
    date: 'Date TBD',
    // TODO: write the EKF troubleshooting section — what state-estimation
    // problem came up, how was it diagnosed, and how do the path plots
    // below demonstrate the fix?
    description:
      'Placeholder — describe the EKF (Extended Kalman Filter) troubleshooting. What state estimation problem came up, how was it diagnosed, and what do these path-tracking plots show?',
    skills: ['State Estimation', 'Kalman Filtering', 'Sensor Fusion', 'Python'],
    media: [
      {
        type: 'photo',
        src: '/assets/images/projects/tractor/path_full1.png',
        alt: 'Full tractor path tracking result',
        row: 0, width: 0.5, height: 0.4,
      },
      {
        type: 'photo',
        src: '/assets/images/projects/tractor/path_zoom1.png',
        alt: 'Zoomed-in tractor path tracking detail',
        row: 0, width: 0.5, height: 0.4,
      },
    ],
  },
]

export default tractorData
