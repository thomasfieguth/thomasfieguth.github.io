import { createContext, useCallback, useContext, useRef, useState } from 'react'

const TractorQuirkContext = createContext(null)

/**
 * TractorQuirkProvider
 *
 * Shared on/off state for the hidden pointer-following tractor quirk
 * (triggered from the "Autonomous Navigation" skill tag on the Experience
 * page, rendered by TractorOverlay). The seed position is kept in a ref
 * rather than state — it's only ever read once, on activation, so it
 * doesn't need to cause a render itself.
 */
export function TractorQuirkProvider({ children }) {
  const [active, setActive] = useState(false)
  const seedRef = useRef({ x: 0, y: 0 })

  const activate = useCallback((x, y) => {
    seedRef.current = { x, y }
    setActive(true)
  }, [])

  const deactivate = useCallback(() => {
    setActive(false)
  }, [])

  return (
    <TractorQuirkContext.Provider value={{ active, activate, deactivate, seed: seedRef }}>
      {children}
    </TractorQuirkContext.Provider>
  )
}

export function useTractorQuirk() {
  const ctx = useContext(TractorQuirkContext)
  if (!ctx) {
    throw new Error('useTractorQuirk must be used within a TractorQuirkProvider')
  }
  return ctx
}
