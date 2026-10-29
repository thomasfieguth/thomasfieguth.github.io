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
      'My brother and I are building a working replica of Thor\'s Stormbreaker axe from Marvel. \n\
      **Problem:** The design has to balance movie accuracy against usability: \
      the axe needs to be large enough to look like the movie prop, light enough to hold, \
      and strong enough to absorb the impact of regular axe use. \n\
      **Load path:** Instead of relying on the outer shell for strength, impact loads go through an internal skeleton: \
      a cross shape made from 1/4" steel. The outer shell is thin sheet metal, since it doesn\'t have to carry those loads. \n\
      **Weight budget:** Holes are cut out of the skeleton wherever it isn\'t load-bearing, and the thin shell keeps the rest of the weight down. \
      Overall the axe is 13 inches long and roughly 10 lbs. \n\
      **Edge retention:** The tip is the same mild steel as the rest of the skeleton, which is too soft to hold an edge for long, \
      so we heat treated it to increase its hardness.',
    skills: ['CAD', 'Structural Design', 'Metalworking', 'Welding', 'Heat Treating'],
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
          { path: '/assets/models/stormbreaker/Stormbreaker_outside.glb', label: 'Cosmetics', opacity: 0.1 },
          { path: '/assets/models/stormbreaker/Stormbreaker_internal.glb', label: 'Skeleton', opacity: 1.0 },
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
    src: '/assets/images/projects/other/welded_birds.jpg', thumb: '/assets/images/projects/other/welded_birds_thumb.jpg',
    maximumCutoffRatio: 0.1
  },
  {
    type: 'photo',
    caption: 'Custom Lego Sets',
    src: '/assets/images/projects/other/lego.jpg', thumb: '/assets/images/projects/other/lego_thumb.jpg',
    maximumCutoffRatio: 0.0
  },
  {
    type: 'photo',
    caption: 'Tool Organization CNCing',
    src: '/assets/images/projects/other/tool_storage.jpg', thumb: '/assets/images/projects/other/tool_storage_thumb.jpg'
  },
  {
    type: 'video', 
    caption: 'Gingerbread (Rotating Christmas Pyramid) - 2025', 
    src: '/assets/videos/other/gingerbread.mp4', 
    maximumCutoffRatio: 0.2
  },
  {
    type: 'photo', 
    caption: 'Gingerbread (Eiffel Tower) - 2024', 
    src: '/assets/images/projects/other/gingerbread_eiffel.jpg', thumb: '/assets/images/projects/other/gingerbread_eiffel_thumb.jpg', 
    maximumCutoffRatio: 0.2
  },
  {
    type: 'photo', 
    caption: 'Gingerbread (Airport) - 2023', 
    src: '/assets/images/projects/other/gingerbread_airport.jpg', thumb: '/assets/images/projects/other/gingerbread_airport_thumb.jpg'
  }, 
  {
    type: 'photo', 
    caption: 'Gingerbread (Dr. Seuss Style Tree House) - 2022', 
    src: '/assets/images/projects/other/gingerbread_suess.jpg', thumb: '/assets/images/projects/other/gingerbread_suess_thumb.jpg', 
    yMove: 0.2
  }
]
