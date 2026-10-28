/**
 * other.js
 *
 * Data for the Other Projects page: detailed write-ups (writeups, each
 * rendered as a ProjectSection) followed by a grid of small captioned
 * thumbnails (gridItems, rendered by CaptionGrid).
 */

export const writeups = [
  {
    id: 'stormbreaker',
    title: 'Stormbreaker Axe',
    date: 'Oct 2025 - present',
    description:
      'My brother and I are working on building a replica of Thor\'s Stormbreaker axe from Marvel. \n\
      The main challenge of this project was to balance movie accuracy and usability: \
      It needs to be large enough to look like the movie prop, light enough to hold, \
      and strong enough to absorb the impact of regular axe use. \n\
      My solution to that problem was to design an internal structure to bear the impact. \
      This structure was a cross shape made from 1/4" steel with holes cut out in non load-bearing places \
      to save weight. The outer shell is made from thin sheet metal to save weight. \
      Since the axe tip was made from the same mild steel as the rest of the internal structure, \
      it would be soft and loose its sharpness quickly. \
      Therefore we heat treated the tip to increase its hardness. \n\
      Overall the axe is 13 inches long and roughly 10 lbs',
    skills: ['CAD', 'Metalworking', 'Welding'],
    media: [
      {
        type: 'photo',
        src: '/assets/images/projects/other/stormbreaker_heat_treating.jpg',
        alt: 'Heat treating the axe head in a forge',
        x: 0, y: 0, width: 0.7, height: 0.25,
      },
      {
        type: 'gltfInternal',
        models: [
          { path: '/assets/models/stormbreaker/Stormbreaker_outside.gltf', label: 'Cosmetics', opacity: 0.1 },
          { path: '/assets/models/stormbreaker/Stormbreaker_internal.gltf', label: 'Skeleton', opacity: 1.0 },
        ],
        config: {
          rotationSpeed: 0.4,
          initialEuler: [1.57, 0, 0],
          waitMs: 2500,
          fadeMs: 600,
          colorMode: 'texture',
          zoom: 2.0
        },
        x: 0, y: 0.25, width: 0.7, height: 0.45,
      },
      {
        type: 'photo',
        src: '/assets/images/projects/other/stormbreaker_internals.jpg',
        alt: 'Riveted steel skeleton inside the handle',
        x: 0.7, y: 0, width: 0.3, height: 0.35,
      },
      {
        type: 'photo', 
        src: '/assets/images/projects/other/stormbreaker_outer.jpg', 
        alt: 'outer sheet metal added onto the skeleton', 
        x: 0.7, y: 0.35, width: 0.3, height: 0.35
      }
    ],
  },
]

export const gridItems = [
  {
    type: 'photo',
    caption: 'Welded Cutlery Birds',
    src: '/assets/images/projects/other/welded_birds.jpg',
    maximumCutoffRatio: 0.1
  },
  {
    type: 'photo',
    caption: 'Custom Lego Sets',
    src: '/assets/images/projects/other/lego.jpg',
    maximumCutoffRatio: 0.0
  },
  {
    type: 'photo',
    caption: 'Tool Organization CNCing',
    src: '/assets/images/projects/other/tool_storage.jpg'
  },
  {
    type: 'video', 
    caption: 'Gingerbread (Rotating Christmas Pyramid) - 2025', 
    src: '/assets/videos/other/gingerbread.MOV', 
    maximumCutoffRatio: 0.2
  },
  {
    type: 'photo', 
    caption: 'Gingerbread (Eiffel Tower) - 2024', 
    src: '/assets/images/projects/other/gingerbread_eiffel.jpg', 
    maximumCutoffRatio: 0.2
  },
  {
    type: 'photo', 
    caption: 'Gingerbread (Airport) - 2023', 
    src: '/assets/images/projects/other/gingerbread_airport.jpg'
  }, 
  {
    type: 'photo', 
    caption: 'Gingerbread (Dr Suess style Tree House) - 2022', 
    src: '/assets/images/projects/other/gingerbread_suess.jpg', 
    yMove: 0.2
  }
]
