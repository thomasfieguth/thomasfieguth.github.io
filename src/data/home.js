/**
 * home.js
 *
 * Text content of the Home page. Kept as data (rather than inline JSX) so
 * scripts/prerender.mjs can also write it into the static HTML that
 * search engines and link previews read.
 */

export const highlights = [
  'Software Engineer at Werkr Tractors, building guidance for an autonomous electric tractor',
  'Winner of the N.S. Robertson Foundation Capstone Design Award',
  'BASc Systems Design Engineering, University of Waterloo, 2026 · Graduated with Dean\'s Honours',
]

export const skills = [
  'C++', 'Python', 'ROS2', 'Qt', 'Sensor Fusion',
  'CAD', 'Onshape / FeatureScript', 'CNC Machining', 'Welding', 'Fabrication',
]

// About Me covers how I work and what I want next; the projects and jobs
// themselves are already shown above it, so they aren't repeated here.
export const about = [
  'I\'m a Systems Design Engineering graduate from the University of Waterloo. My five co-op terms took me through a machine shop, \
an engineering consultancy and a robotics startup, so I\'m at home moving between CAD, the shop floor and code.',
  'I work by building something quickly, testing it on real hardware, and iterating. The tractor\'s position estimate went through \
five rounds of tuning, each driven by logged field data, and my capstone rig went through three prototypes and five camera-holder \
designs, each fixing what testing exposed in the one before.',
  'Next, I want to keep owning systems end to end, from CAD to field test, in R&D and prototyping work that mixes hardware and \
software and gets me into the lab, shop or field.',
]
