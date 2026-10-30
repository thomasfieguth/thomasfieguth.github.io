/**
 * home.js
 *
 * Text content of the Home page. Kept as data (rather than inline JSX) so
 * scripts/prerender.mjs can also write it into the static HTML that
 * search engines and link previews read.
 */

export const highlights = [
  'Robotics & Mechatronics Engineer at Werkr Tractors, building guidance for an autonomous electric tractor',
  'Winner of the N.S. Robertson Foundation Capstone Design Award',
  'BASc Systems Design Engineering, University of Waterloo, 2026 · Graduated with Dean\'s Honours',
]

export const skills = [
  'C++', 'Python', 'ROS2', 'Qt', 'Sensor Fusion',
  'CAD', 'Onshape / FeatureScript', 'CNC Machining', 'Welding', 'Fabrication',
]

// The section under the intro, rendered as side-by-side columns (stacked on
// narrow screens): who I am, how I work, and what I want next. The projects
// and jobs themselves are already shown above it, so they aren't repeated here.
export const aboutSections = [
  {
    heading: 'About Me',
    paragraphs: [
      'I\'m a Systems Design Engineering graduate from the University of Waterloo, now building guidance for an autonomous \
electric tractor at Werkr Tractors. My six co-op terms took me through a machine shop, an engineering consultancy and a \
robotics startup, so I\'m at home moving between CAD, the shop floor and code.',
    ],
  },
  {
    heading: 'How I Work',
    paragraphs: [
      'I work by building something quickly, testing it on real hardware, and iterating. The tractor\'s position estimate went through \
five rounds of tuning, each driven by logged field data, and my capstone rig went through three prototypes and five camera-holder \
designs, each fixing what testing exposed in the one before.',
    ],
  },
  {
    heading: 'What I\'m Looking For',
    paragraphs: [
      'I want to keep owning systems end to end, from CAD to field test, in R&D and prototyping work that mixes hardware and \
software and gets me into the lab, shop or field.',
      'I\'m based in Waterloo, ON and open to relocating, including to German-speaking countries.',
    ],
  },
]
