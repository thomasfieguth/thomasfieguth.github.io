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
 */
const featuredProjects = [
  {
    id: 'tractor',
    title: 'Self-Driving Tractor',
    blurb: 'Todo fill with write up',
    // TODO: this now points at the top of the Experience page rather than
    // the Werkr section specifically. The site uses HashRouter (URLs like
    // /#/experience), so a nested anchor (/#/experience#werkr) doesn't work
    // without extra scroll-to-id logic — confirmed with Thomas to link
    // plainly to /experience for now and revisit if a deep link is wanted.
    to: '/experience',
  },
  {
    id: 'capstone',
    title: 'Capstone',
    blurb: 'Todo fill with write up',
    to: '/projects/capstone',
  },
  {
    id: 'woodworking',
    title: 'Woodworking & CNC',
    blurb: 'Todo fill with write up',
    to: '/projects/woodworking',
  },
  {
    id: 'code',
    title: 'Code',
    blurb: 'Todo fill with write up',
    to: '/projects/code',
  },
  {
    id: 'other',
    title: 'Other Projects',
    blurb: 'Todo fill with write up',
    to: '/projects/other',
  },
]

export default featuredProjects
