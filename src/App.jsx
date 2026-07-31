import { Suspense, lazy } from 'react'
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom'
import Navbar from './components/layout/Navbar.jsx'
import Footer from './components/layout/Footer.jsx'
import TractorOverlay from './components/easter-eggs/TractorOverlay.jsx'
import { TractorEasterEggProvider } from './context/TractorEasterEggContext.jsx'
import Home from './pages/Home.jsx'

// Every other route is code-split into its own chunk — a visitor on "/"
// (the common entry point) never downloads the Experience/Capstone/
// Woodworking/Code/Other page bundles (each with their own project data
// and, for the project pages, the GLTFViewer chunk) until they actually
// navigate there.
const Experience  = lazy(() => import('./pages/Experience.jsx'))
const Capstone    = lazy(() => import('./pages/projects/Capstone.jsx'))
const Woodworking = lazy(() => import('./pages/projects/Woodworking.jsx'))
const Code        = lazy(() => import('./pages/projects/Code.jsx'))
const Other       = lazy(() => import('./pages/projects/Other.jsx'))
const NotFound    = lazy(() => import('./pages/NotFound.jsx'))

export default function App() {
  return (
    <TractorEasterEggProvider>
      <HashRouter>
        <Navbar />
        <main>
          <Suspense fallback={null}>
            <Routes>
              <Route path="/"                    element={<Home />} />
              <Route path="/experience"          element={<Experience />} />
              <Route path="/projects"            element={<Navigate to="/projects/capstone" replace />} />
              <Route path="/projects/capstone"   element={<Capstone />} />
              <Route path="/projects/woodworking" element={<Woodworking />} />
              <Route path="/projects/code"       element={<Code />} />
              <Route path="/projects/other"      element={<Other />} />
              <Route path="*"                    element={<NotFound />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
        <TractorOverlay />
      </HashRouter>
    </TractorEasterEggProvider>
  )
}
