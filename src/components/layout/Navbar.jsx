import { useEffect, useRef, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
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

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const dropdownRef = useRef(null)
  const location = useLocation()
  const isProjectsActive = location.pathname.startsWith('/projects')

  // Close whenever the route changes (e.g. a submenu link was clicked).
  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

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
      </nav>
    </header>
  )
}
