/**
 * featuredProjects.js
 *
 * The Home page's featured projects, shown in array order by FeaturedGrid
 * (and by the older FeaturedProjects carousel, if it's swapped back in).
 * Each links to either a Projects sub-page or (for the tractor) the
 * Experience page.
 *
 * Fields:
 *   id     string  — React key
 *   title  string  — Card / slide heading
 *   tag    string  — Short one-line label under the title on a grid card
 *   blurb  string  — Longer description under the title on a carousel slide
 *   to     string  — react-router path the whole card links to
 *   thumb  string  — Small (~480px) image for a grid card
 *   image  string  — Larger (~1000px) image for a carousel slide. When a
 *                     card/slide has no image, it falls back to a
 *                     placeholder box.
 *   maximumCutoffRatio, xMove, yMove
 *          number  — optional crop adjustments for the image within its
 *                     4:3 box, e.g. yMove: 0.1 shifts it down by 10% of the
 *                     box's height (see MediaFrame.jsx)
 */
const featuredProjects = [
  {
    id: 'tractor',
    title: 'Self-Driving Tractor',
    tag: 'Robotics · C++ / ROS2',
    blurb: 'Autonomous cost-efficient tractor designed specifically for small market garden farmers',
    to: '/experience/werkr',
    thumb: '/assets/images/experience/werkr/werkr_tractor_thumb.jpg',
    image: '/assets/images/experience/werkr/werkr_tractor_card.jpg',
  },
  {
    id: 'capstone',
    title: 'Depth-Sensing Carving Guide',
    tag: 'Award-winning capstone',
    blurb: 'Interactive training system to teach woodcarving using depth-sensing and live projection directly onto the stock material',
    to: '/projects/capstone',
    thumb: '/assets/images/projects/capstone/projection_thumb.jpg',
    image: '/assets/images/projects/capstone/projection_card.jpg',
  },
  {
    id: 'asi',
    title: 'Machinist at ASI',
    tag: 'Machining · CNC · Welding',
    blurb: 'I have experience with almost every tool and machine in an industrial machine shop',
    to: '/experience/asi',
    thumb: '/assets/images/experience/asi/asi_welding.jpg',
    image: '/assets/images/experience/asi/asi_welding.jpg',
  },
  {
    id: 'globe',
    title: 'Wooden Globe',
    tag: 'CNC · Woodworking',
    blurb: 'Spinning globe made from 2 different types of wood, 60 triangles, and 1 CNC.',
    to: '/projects/woodworking',
    thumb: '/assets/images/projects/woodworking/globe_thumb.jpg',
    image: '/assets/images/projects/woodworking/globe_card.jpg',
  },
  {
    id: 'catan',
    title: 'Catan River Optimizer',
    tag: 'Python · Optimization',
    blurb: 'Maximizing unique board configurations with tiles with rivers. Additionally doing terrain generation',
    to: '/projects/code',
    thumb: '/assets/images/projects/code/mountains_riverless_v17_thumb.jpg',
    image: '/assets/images/projects/code/mountains_riverless_v17_card.jpg',
  },
  {
    id: 'stormbreaker',
    title: 'Stormbreaker Axe',
    tag: 'Structural design · Metalwork',
    blurb: 'Replica of Thor\'s Stormbreaker axe from Marvel',
    to: '/projects/other',
    thumb: '/assets/images/projects/other/stormbreaker_heat_treating_thumb.jpg',
    image: '/assets/images/projects/other/stormbreaker_heat_treating_card.jpg',
  },
]

export default featuredProjects
