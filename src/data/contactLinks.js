/**
 * contactLinks.js
 *
 * Contact / profile links shown in the Footer.
 *
 * Fields:
 *   label     string    — Link text
 *   href      string    — Destination URL
 *   external  boolean?  — Open in a new tab
 */
const contactLinks = [
  { label: 'Email', href: 'mailto:thomas.fieguth@gmail.com' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/thomas-fieguth-59b19427b/', external: true },
  { label: 'Resume', href: '/assets/resume.pdf', external: true },
  // { label: 'GitHub', href: 'https://github.com/thomasfieguth', external: true },
]

export default contactLinks
