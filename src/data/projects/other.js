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
      'A working replica of Thor\'s Stormbreaker axe from Marvel, currently in progress. \n\
      The internal structure is built and heat treated, with sheet metal still to attach.\
      The main challenge is balancing size against usability: large enough to look accurate to the film model, light enough to actually swing. \
      The core is a laser-cut, welded X-shaped mild steel frame that absorbs the force of swings and cuts, with the sides made from thin mild steel sheet, TIG-welded to the frame, purely for cosmetic bulk. \
      Weight is cut further with gaps laser-cut into the main frame. The axe head\'s tip was heat treated to harden it for edge retention, while the rest of the frame was left as mild steel for toughness. \n\
      End to end, it is 13 inches long, estimated at 10 lbs.',
    skills: ['CAD', 'Woodworking', 'Fabrication', 'Hand Tools', 'Finishing'],
    media: [
      {
        type: 'photo',
        src: '/assets/images/projects/other/stormbreaker_heat_treating.jpg',
        alt: 'Heat treating the axe head in a forge',
        row: 0, width: 1.0, height: 0.3,
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
        },
        row: 1, width: 0.6, height: 0.45,
      },
      {
        type: 'photo',
        src: '/assets/images/projects/other/stormbreaker_internals.jpg',
        alt: 'Riveted steel skeleton inside the handle',
        row: 1, width: 0.4, height: 0.45,
      },
    ],
  },
]

export const gridItems = [
  {
    type: 'photo',
    caption: 'Welded Cutlery Birds',
    src: '/assets/images/projects/other/welded_birds.jpg',
  },
  {
    type: 'photo',
    caption: 'Custom Lego Sets',
    src: '/assets/images/projects/other/lego.jpg',
  },
  {
    type: 'photo',
    caption: 'Motor Endplate CNCing',
    src: '/assets/images/projects/other/CNC_example1.jpg'
  },
  {
    type: 'photo',
    caption: 'Motor Endplate CNCing',
    src: '/assets/images/projects/other/CNC_example2.jpg'
  },
  {
    type: 'photo',
    caption: 'Tool Organization CNCing',
    src: '/assets/images/projects/other/tool_storage.jpg'
  },
  {
    type: 'video', 
    caption: 'Rotating Gingerbread', 
    src: '/assets/videos/other/gingerbread.MOV', 
    maximumCutoffRatio: 0.2
  }
]
