import { useState, useEffect } from 'react'
import { NavLink, Link, useLocation } from 'react-router-dom'

const links = [
  { to: '/', label: 'Home' },
  { to: '/services', label: 'Services' },
  { to: '/courses', label: 'Courses' },
  { to: '/portfolio', label: 'Portfolio' },
  { to: '/team', label: 'Our Team' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const location = useLocation()

  useEffect(() => { setOpen(false) }, [location.pathname])

  return (
    <header className="header">
      <div className="container header-inner">
        <Link to="/" className="logo" aria-label="GT Tech Consults Home">
          <img src="/logo.png" alt="GT Tech Consults logo" />
          <div className="logo-text">
            <strong>GT Tech</strong>
            <span>CONSULTS</span>
          </div>
        </Link>

        <nav className={`nav ${open ? 'open' : ''}`}>
          {links.map(l => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === '/'}
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              {l.label}
            </NavLink>
          ))}
          <Link to="/start-project" className="btn btn-primary btn-sm" style={{ marginLeft: 10 }}>
            Get Started
          </Link>
        </nav>

        <button
          className={`menu-toggle ${open ? 'open' : ''}`}
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen(o => !o)}
        >
          <span></span><span></span><span></span>
        </button>
      </div>
    </header>
  )
}