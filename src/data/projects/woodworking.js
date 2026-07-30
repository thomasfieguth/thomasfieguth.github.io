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
    date: 'Dec 2022 - Apr 2023',
    description:
      'An 8-inch wooden globe made from walnut and maple. \n\
      I started with a map projection of the Earth onto a dodecahedron, ensuring that there was enough space for a 1/8" bit to cut around the shapes. \
      Cutting the pentagons directly on the lathe would have meant removing too much material, so I subdivided each one into 5 triangles (60 total). Each triangle was cut as a separate land piece and water piece, then glued together. \n\
      Using a table saw jig, I cut precise bevel angles needed to join the 5 triangles into a pentagon, then glued the pentagons into 2 hemispheres. The hemispheres meet at the equator with a gap, held only by dowel pins, \
      leaving the inside hollow enough to mount a motor that spins the globe with no external mechanism visible.',
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
    date: 'Mar 2026 - present',
    description:
      'A 5 by 2.75 foot wall-mounted relief map of my family\'s farm, currently in progress.\n\
      Each wood species corresponds to a land-use type: \
      black walnut (forest), cherry (trees), birdseye maple (fields), padauk (garden), sapele (wildflowers), purpleheart (rivers and creeks), ebony (buildings), yellow poplar (grass), and white oak (floodplain). \n\
      I used high-resolution elevation data with a custom Onshape feature I wrote that takes an STL file and a board thickness, then generates contour-shaped pieces sized to minimize wasted wood while staying self-supporting. \
      The piece is hollow underneath to save weight and material. Layers are just under an inch thick with a maximum height of 5 inches, giving at most 6 layers, though not directly stacked, and species of differing thickness don\'t align to the same heights. I am currently cutting the layers; they are not glued together yet.',
    skills: ['CNC Milling', 'CAD', 'Woodworking', 'Data Processing', 'Python'],
    media: [
      {
        type: 'gltfProgression',
        steps: [
          { label: 'Rough Contours', models: ['/assets/models/woodworking/farm_elevation_rough.gltf'] }, 
          { label: 'Final Topography', models: ['assets/models/woodworking/farm_elevation_final.gltf'] },
        ],
        config: {
          zoom: 1.7, 
          rotationSpeed: 0.0,
          initialEuler: [-0.5, 0, 1.57],
          waitMs: 2500,
          fadeMs: 600,
          colorMode: 'texture',
        },
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
    src: '/assets/images/projects/woodworking/chess.jpg',
  },
  {
    type: 'photo',
    caption: 'Sphere Light',
    src: '/assets/images/projects/woodworking/sphere_light.png',
  },
  {
    type: 'photo', 
    caption: 'CNC Hike Topography', 
    src: '/assets/images/projects/woodworking/cnc_topography.jpg', 
  }
]
