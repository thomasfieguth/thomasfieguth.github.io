/**
 * woodworking.js
 *
 * Data for the Woodworking & CNC page: detailed write-ups (writeups, each
 * rendered as a ProjectSection) followed by a grid of small captioned
 * thumbnails (gridItems, rendered by CaptionGrid).
 */

export const writeups = [
  {
    id: 'globe',
    title: 'CNC Wood Globe',
    date: 'Date TBD',
    // TODO: write the globe description — what wood species, how was the
    // toolpath generated, and what were the main challenges?
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
    id: 'topography',
    title: 'CNC Topography Map',
    date: 'Date TBD',
    // TODO: write the topography description — what location, how was the
    // elevation data sourced, and what wood types were used for the
    // different layers?
    description:
      'Placeholder — describe the topography map. What location? How was the elevation data sourced? What wood types were used for the different layers?',
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
    ],
  },
]

export const gridItems = [
  {
    type: 'photo',
    caption: 'F1 Logo',
    src: '/assets/images/projects/woodworking/f1.jpg',
  },
  {
    type: 'photo',
    caption: 'Toronto Maple Leafs Logo',
    src: '/assets/images/projects/woodworking/leafs.jpg',
  },
  {
    type: 'photo',
    caption: 'Buffalo Bills Logo',
    src: '/assets/images/projects/woodworking/bills.png',
  },
  {
    type: 'photo',
    caption: 'Project Ploughshares Logo',
    src: '/assets/images/projects/woodworking/ploughshares.png',
  },
  {
    type: 'photo',
    caption: 'CNC Cow',
    src: '/assets/images/projects/woodworking/cow.jpeg',
  },
  {
    type: 'photo',
    caption: 'Chess Set',
    placeholder: true,
    // TODO: add chess set photo — file does not exist in the repo yet
    note: 'chess set photo needed',
  },
  {
    type: 'photo',
    caption: 'Sphere Light',
    src: '/assets/images/projects/woodworking/sphere_light.png',
  },
]
