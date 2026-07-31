import { createContext, useCallback, useContext, useRef, useState } from 'react'

const TractorEasterEggContext = createContext(null)

/**
 * TractorEasterEggProvider
 *
 * Shared on/off state for the hidden pointer-following tractor easter egg
 * (triggered from the "Autonomous Navigation" skill tag on the Experience
 * page, rendered by TractorOverlay). The seed position is kept in a ref
 * rather than state — it's only ever read once, on activation, so it
 * doesn't need to cause a render itself.
 */
export function TractorEasterEggProvider({ children }) {
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
    <TractorEasterEggContext.Provider value={{ active, activate, deactivate, seed: seedRef }}>
      {children}
    </TractorEasterEggContext.Provider>
  )
}

export function useTractorEasterEgg() {
  const ctx = useContext(TractorEasterEggContext)
  if (!ctx) {
    throw new Error('useTractorEasterEgg must be used within a TractorEasterEggProvider')
  }
  return ctx
}
