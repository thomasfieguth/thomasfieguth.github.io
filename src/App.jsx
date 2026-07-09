import { HashRouter, Routes, Route, Navigate } from 'react-router-dom'
import Navbar from './components/layout/Navbar.jsx'
import Footer from './components/layout/Footer.jsx'
import Home from './pages/Home.jsx'
import Experience from './pages/Experience.jsx'
import Tractor from './pages/projects/Tractor.jsx'
import Capstone from './pages/projects/Capstone.jsx'
import Woodworking from './pages/projects/Woodworking.jsx'
import Code from './pages/projects/Code.jsx'
import Other from './pages/projects/Other.jsx'

export default function App() {
  return (
    <HashRouter>
      <Navbar />
      <main>
        <Routes>
          <Route path="/"                    element={<Home />} />
          <Route path="/experience"          element={<Experience />} />
          <Route path="/projects"            element={<Navigate to="/projects/tractor" replace />} />
          <Route path="/projects/tractor"    element={<Tractor />} />
          <Route path="/projects/capstone"   element={<Capstone />} />
          <Route path="/projects/woodworking" element={<Woodworking />} />
          <Route path="/projects/code"       element={<Code />} />
          <Route path="/projects/other"      element={<Other />} />
        </Routes>
      </main>
      <Footer />
    </HashRouter>
  )
}
