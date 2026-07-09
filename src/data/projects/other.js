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
    date: 'Date TBD',
    // TODO: write the Stormbreaker description, covering both the CAD
    // design iteration and the physical fabrication — what materials, how
    // was the head shaped, and what was the handle construction?
    description:
      'Placeholder — describe the Stormbreaker build, covering both CAD design iteration and physical fabrication. What materials? How was the head shaped and designed in CAD? What was the handle construction?',
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
          { path: '/assets/models/stormbreaker/cosmetics.gltf', label: 'Cosmetics', opacity: 0.1 },
          { path: '/assets/models/stormbreaker/shell.gltf', label: 'Shell', opacity: 0.1 },
          { path: '/assets/models/stormbreaker/internals.gltf', label: 'Internals', opacity: 0.1 },
          { path: '/assets/models/stormbreaker/skeleton.gltf', label: 'Skeleton', opacity: 1.0 },
        ],
        config: {
          rotationSpeed: 0.4,
          initialEuler: [0.3, 0, 0],
          waitMs: 2500,
          fadeMs: 600,
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
    caption: 'Welded Birds',
    placeholder: true,
    // TODO: add welded birds photo — file does not exist in the repo yet
    note: 'image file needed',
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
]
