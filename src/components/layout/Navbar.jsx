import { useEffect, useRef, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import useIsMobile from '../../hooks/useIsMobile.js'
import styles from './Navbar.module.css'

const NAV_LINKS = [
  { to: '/',           label: 'Home' },
  { to: '/experience', label: 'Experience' },
]

const PROJECT_LINKS = [
  { to: '/projects/capstone',    label: 'Capstone' },
  { to: '/projects/woodworking', label: 'Woodworking & CNC' },
  { to: '/projects/code',        label: 'Code' },
  { to: '/projects/other',       label: 'Other Projects' },
]

// Below the mobile breakpoint, the top-level "Home"/"Experience" buttons
// and the "Projects" dropdown collapse into one flat hamburger menu —
// there's no room for a nested Projects submenu on a phone-width screen,
// so every destination sits at the same level.
const MOBILE_LINKS = [
  { to: '/',                     label: 'Home' },
  { to: '/experience',           label: 'Experience' },
  { to: '/projects/capstone',    label: 'Capstone' },
  { to: '/projects/woodworking', label: 'Woodworking' },
  { to: '/projects/code',        label: 'Code' },
  { to: '/projects/other',       label: 'Other Projects' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const dropdownRef = useRef(null)
  const location = useLocation()
  const isMobile = useIsMobile()
  const isProjectsActive = location.pathname.startsWith('/projects')

  // Close whenever the route changes (e.g. a submenu link was clicked).
  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  // Close whenever we cross the mobile breakpoint — the button-nav and
  // hamburger-menu open states aren't interchangeable.
  useEffect(() => {
    setOpen(false)
  }, [isMobile])

  // Close on outside click or Escape while open.
  useEffect(() => {
    if (!open) return

    function handlePointerDown(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false)
      }
    }
    function handleKeyDown(event) {
      if (event.key === 'Escape') setOpen(false)
    }

    document.addEventListener('mousedown', handlePointerDown)
    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.removeEventListener('mousedown', handlePointerDown)
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [open])

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <NavLink to="/" className={styles.wordmark}>
          Thomas Fieguth
        </NavLink>

        {isMobile ? (
          <div className={styles.dropdown} ref={dropdownRef}>
            <button
              type="button"
              className={styles.hamburger}
              aria-haspopup="true"
              aria-expanded={open}
              aria-label="Open menu"
              onClick={() => setOpen((prev) => !prev)}
            >
              <span className={styles.hamburgerLine} />
              <span className={styles.hamburgerLine} />
              <span className={styles.hamburgerLine} />
            </button>

            {open && (
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
              </ul>
            )}
          </div>
        ) : (
          <ul className={styles.links}>
            {NAV_LINKS.map(({ to, label }) => (
              <li key={to}>
                <NavLink
                  to={to}
                  end={to === '/'}
                  className={({ isActive }) =>
                    isActive ? `${styles.link} ${styles.active}` : styles.link
                  }
                >
                  {label}
                </NavLink>
              </li>
            ))}

            <li className={styles.dropdown} ref={dropdownRef}>
              <button
                type="button"
                className={isProjectsActive ? `${styles.link} ${styles.active}` : styles.link}
                aria-haspopup="true"
                aria-expanded={open}
                onClick={() => setOpen((prev) => !prev)}
              >
                Projects
              </button>

              {open && (
                <ul className={styles.submenu}>
                  {PROJECT_LINKS.map(({ to, label }) => (
                    <li key={to}>
                      <NavLink
                        to={to}
                        className={({ isActive }) =>
                          isActive ? `${styles.submenuLink} ${styles.active}` : styles.submenuLink
                        }
                      >
                        {label}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          </ul>
        )}
      </nav>
    </header>
  )
}
