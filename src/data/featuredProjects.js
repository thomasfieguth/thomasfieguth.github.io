/**
 * featuredProjects.js
 *
 * The 5 cards in the Home page's Featured Projects section. Each links to
 * either a Projects sub-page or (for the tractor) the Experience page.
 *
 * Fields:
 *   id     string  — React key
 *   title  string  — Card heading
 *   blurb  string  — Placeholder body text, to be replaced with real copy
 *   to     string  — react-router path the whole card links to
 *   image  string  — optional public-relative path to the card's image
 *                     (e.g. '/assets/images/home/tractor.jpg'). When
 *                     omitted, the card falls back to a placeholder box.
 */
const featuredProjects = [
  {
    id: 'tractor',
    title: 'Self-Driving Tractor',
    blurb: 'Autonomous cost-efficient tractor designed specifically for small market garden farmers',
    to: '/experience',
    image: '/assets/images/experience/werkr/tractor.png',
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
    blurb: 'Optimization problem where the goal is to maximize the number of unique tile configurations for a catan board with rivers',
    to: '/projects/code',
    image: '/assets/images/projects/code/catan_solution.png',
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
