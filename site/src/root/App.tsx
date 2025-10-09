import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom'
import '../styles/App.css'
import Home from '../views/Home'
import Outline from '../views/Outline'
import Budget from '../views/Budget'
import Team from '../views/Team'
import Timeline from '../views/Timeline'
import Portfolio from '../views/Portfolio'

function App() {
  return (
    <Router basename="/nuffield-rda-2025">
      <div className="app">
        <aside className="sidebar">
          <h2>Nuffield R&D 2025</h2>
          <nav className="nav-links">
            <NavLink to="/" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
              Home
            </NavLink>
            <NavLink to="/portfolio" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
              Portfolio
            </NavLink>
            <NavLink to="/outline" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
              Outline
            </NavLink>
            <NavLink to="/budget" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
              Budget
            </NavLink>
            <NavLink to="/team" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
              Team
            </NavLink>
            <NavLink to="/timeline" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
              Timeline
            </NavLink>
          </nav>
        </aside>
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/outline" element={<Outline />} />
            <Route path="/budget" element={<Budget />} />
            <Route path="/team" element={<Team />} />
            <Route path="/timeline" element={<Timeline />} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App
