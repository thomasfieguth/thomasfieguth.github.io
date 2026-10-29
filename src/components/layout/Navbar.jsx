import { useEffect, useRef, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import useIsMobile from '../../hooks/useIsMobile.js'
import contactLinks from '../../data/contactLinks.js'
import styles from './Navbar.module.css'

// The resume is a PDF, not a route, so it's a plain link that opens in a
// new tab rather than a NavLink.
const RESUME_HREF = contactLinks.find((link) => link.label === 'Resume').href

const EXPERIENCE_LINKS = [
  { to: '/experience/werkr', label: 'Werkr Tractors' },
  { to: '/experience/gei',   label: 'GEI Consultants' },
  { to: '/experience/asi',   label: 'Accelerated Systems' },
]

const PROJECT_LINKS = [
  { to: '/projects/capstone',    label: 'Capstone' },
  { to: '/projects/woodworking', label: 'Woodworking & CNC' },
  { to: '/projects/code',        label: 'Code' },
  { to: '/projects/other',       label: 'Other Projects' },
]

// Desktop: "Home" is a plain button; "Experience" and "Projects" are
// dropdowns, each active whenever the current route is under its prefix.
const DROPDOWNS = [
  { id: 'experience', label: 'Experience', prefix: '/experience', links: EXPERIENCE_LINKS },
  { id: 'projects',   label: 'Projects',   prefix: '/projects',   links: PROJECT_LINKS },
]

// Below the mobile breakpoint, the top-level buttons and both dropdowns
// collapse into one flat hamburger menu — there's no room for nested
// submenus on a phone-width screen, so every destination sits at the
// same level.
const MOBILE_LINKS = [
  { to: '/',                     label: 'Home' },
  { to: '/experience/werkr',     label: 'Werkr' },
  { to: '/experience/gei',       label: 'GEI' },
  { to: '/experience/asi',       label: 'ASI' },
  { to: '/projects/capstone',    label: 'Capstone' },
  { to: '/projects/woodworking', label: 'Woodworking' },
  { to: '/projects/code',        label: 'Code' },
  { to: '/projects/other',       label: 'Other Projects' },
]

export default function Navbar() {
  // Id of the open menu ('mobile' or a DROPDOWNS id), or null when closed.
  const [openMenu, setOpenMenu] = useState(null)
  const navRef = useRef(null)
  const location = useLocation()
  const isMobile = useIsMobile()

  const toggle = (id) => setOpenMenu((prev) => (prev === id ? null : id))

  // Close whenever the route changes (e.g. a submenu link was clicked).
  useEffect(() => {
    setOpenMenu(null)
  }, [location.pathname])

  // Close whenever we cross the mobile breakpoint — the button-nav and
  // hamburger-menu open states aren't interchangeable.
  useEffect(() => {
    setOpenMenu(null)
  }, [isMobile])

  // Close on a click outside any dropdown, or on Escape, while open.
  useEffect(() => {
    if (!openMenu) return

    function handlePointerDown(event) {
      const dropdown = event.target.closest?.(`.${styles.dropdown}`)
      if (!dropdown || !navRef.current?.contains(dropdown)) {
        setOpenMenu(null)
      }
    }
    function handleKeyDown(event) {
      if (event.key === 'Escape') setOpenMenu(null)
    }

    document.addEventListener('mousedown', handlePointerDown)
    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.removeEventListener('mousedown', handlePointerDown)
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [openMenu])

  return (
    <header className={styles.header}>
      <nav className={styles.nav} ref={navRef}>
        <NavLink to="/" className={styles.wordmark}>
          Thomas Fieguth
        </NavLink>

        {isMobile ? (
          <div className={styles.dropdown}>
            <button
              type="button"
              className={styles.hamburger}
              aria-haspopup="true"
              aria-expanded={openMenu === 'mobile'}
              aria-label="Open menu"
              onClick={() => toggle('mobile')}
            >
              <span className={styles.hamburgerLine} />
              <span className={styles.hamburgerLine} />
              <span className={styles.hamburgerLine} />
            </button>

            {openMenu === 'mobile' && (
              <ul className={styles.submenu}>
                {MOBILE_LINKS.map(({ to, label }) => (
                  <li key={to}>
                    <NavLink
                      to={to}
                      end={to === '/'}
                      className={({ isActive }) =>
                        isActive ? `${styles.submenuLink} ${styles.active}` : styles.submenuLink
                      }
                    >
                      {label}
                    </NavLink>
                  </li>
                ))}
                <li>
                  <a href={RESUME_HREF} target="_blank" rel="noopener noreferrer" className={styles.submenuLink}>
                    Resume
                  </a>
                </li>
              </ul>
            )}
          </div>
        ) : (
          <ul className={styles.links}>
            <li>
              <NavLink
                to="/"
                end
                className={({ isActive }) =>
                  isActive ? `${styles.link} ${styles.active}` : styles.link
                }
              >
                Home
              </NavLink>
            </li>

            {DROPDOWNS.map(({ id, label, prefix, links }) => (
              <li key={id} className={styles.dropdown}>
                <button
                  type="button"
                  className={location.pathname.startsWith(prefix) ? `${styles.link} ${styles.active}` : styles.link}
                  aria-haspopup="true"
                  aria-expanded={openMenu === id}
                  onClick={() => toggle(id)}
                >
                  {label}
                </button>

                {openMenu === id && (
                  <ul className={styles.submenu}>
                    {links.map(({ to, label: linkLabel }) => (
                      <li key={to}>
                        <NavLink
                          to={to}
                          className={({ isActive }) =>
                            isActive ? `${styles.submenuLink} ${styles.active}` : styles.submenuLink
                          }
                        >
                          {linkLabel}
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}

            <li>
              <a href={RESUME_HREF} target="_blank" rel="noopener noreferrer" className={styles.link}>
                Resume
              </a>
            </li>
          </ul>
        )}
      </nav>
    </header>
  )
}
