/**
 * featuredProjects.js
 *
 * The slides in the Home page's Featured Projects carousel, shown in array
 * order. Each links to either a Projects sub-page or (for the tractor) the
 * Experience page.
 *
 * Fields:
 *   id     string  — React key
 *   title  string  — Slide heading
 *   blurb  string  — Short description under the title
 *   to     string  — react-router path the whole slide links to
 *   image  string  — optional public-relative path to the slide's image
 *                     (e.g. '/assets/images/home/tractor.jpg'). When
 *                     omitted, the slide falls back to a placeholder box.
 *   maximumCutoffRatio, xMove, yMove
 *          number  — optional crop adjustments for the image within its
 *                     4:3 box, e.g. yMove: 0.1 shifts it down by 10% of the
 *                     box's height (see MediaFrame.jsx)
 */
const featuredProjects = [
  {
    id: 'tractor',
    title: 'Self-Driving Tractor',
    blurb: 'Autonomous cost-efficient tractor designed specifically for small market garden farmers',
    to: '/experience/werkr',
    image: '/assets/images/experience/werkr/werkr_tractor.jpg',
  },
  {
    id: 'capstone',
    title: 'Capstone',
    blurb: 'Interactive training system to teach woodcarving using depth-sensing and live projection directly onto the stock material',
    to: '/projects/capstone',
    image: '/assets/images/projects/capstone/explode_render.svg',
  },
  {
    id: 'woodworking',
    title: 'Wooden Globe',
    blurb: 'Spinning globe made from 2 different types of wood, 60 triangles, and 1 CNC.',
    to: '/projects/woodworking',
    image: '/assets/images/projects/woodworking/globe.jpg',
  },
  {
    id: 'code',
    title: 'Catan Optimizer',
    blurb: 'Maximizing unique board configurations with tiles with rivers. Additionally doing terrain generation',
    to: '/projects/code',
    image: '/assets/images/projects/code/mountains_riverless_v17.png',
  },
  {
    id: 'other',
    title: 'Stormbreaker',
    blurb: 'Replica of Thor\'s Stormbreaker axe from Marvel',
    to: '/projects/other',
    image: '/assets/images/projects/other/stormbreaker_heat_treating.jpg',
  },
]

export default featuredProjects
