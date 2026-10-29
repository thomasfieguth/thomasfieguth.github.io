/**
 * pageMeta.js
 *
 * Browser-tab title and link-preview description for every route. Read by
 * PageMeta (which updates document.title as you navigate) and by
 * scripts/prerender.mjs (which writes them into each route's static HTML
 * for search engines and link previews in LinkedIn, Slack, etc.).
 */
import experienceData from './experienceData.js'

export const SITE_URL = 'https://thomasfieguth.github.io'
export const SITE_NAME = 'Thomas Fieguth'
export const OG_IMAGE = '/assets/images/og.jpg'

const DEFAULT_DESCRIPTION =
  'Robotics & mechatronics engineer. Portfolio of autonomous tractor guidance software, an award-winning ' +
  'depth-sensing capstone, CNC woodworking and fabrication projects.'

export const pages = [
  {
    path: '/',
    title: `${SITE_NAME} · Robotics & Mechatronics Engineer`,
    description: DEFAULT_DESCRIPTION,
  },
  ...experienceData.map((job) => ({
    path: `/experience/${job.id}`,
    title: `${job.company} · ${SITE_NAME}`,
    description: `${job.role} at ${job.company}, ${job.period}. ${job.projects.map((p) => p.title).join(', ')}.`,
  })),
  {
    path: '/projects/capstone',
    title: `Capstone: Depth-Sensing Woodcarving Aid · ${SITE_NAME}`,
    description:
      'Award-winning capstone: a depth camera and projector that guide beginner woodcarvers by projecting ' +
      'where and how deep to cut directly onto the wood.',
  },
  {
    path: '/projects/woodworking',
    title: `Woodworking & CNC · ${SITE_NAME}`,
    description: 'CNC-routed wooden globe, a farm topography map in nine wood species, and other CNC and woodworking projects.',
  },
  {
    path: '/projects/code',
    title: `Code Projects · ${SITE_NAME}`,
    description: 'Catan river tile optimizer and terrain generator, an Onshape FeatureScript engrave feature, and other software projects.',
  },
  {
    path: '/projects/other',
    title: `Other Projects · ${SITE_NAME}`,
    description: 'A structural Stormbreaker axe replica, welding, custom Lego sets and gingerbread builds.',
  },
]

export const notFoundMeta = {
  title: `Page Not Found · ${SITE_NAME}`,
  description: DEFAULT_DESCRIPTION,
}

/** Meta for a pathname; `/experience` (no id) lands on the first job. */
export function getPageMeta(pathname) {
  const path = pathname.replace(/\/+$/, '') || '/'
  const target = path === '/experience' ? `/experience/${experienceData[0].id}` : path
  return pages.find((page) => page.path === target) ?? notFoundMeta
}
