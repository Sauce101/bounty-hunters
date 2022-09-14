import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
  const [navbarOpen, setNavbarOpen] = React.useState(false)

  const toggleMenu = () => {
    setNavbarOpen(!navbarOpen)
  }
  const navLinkStyles = ({ isActive }) => ({
    fontWeight: isActive ? 'bold' : '',
    opacity: isActive ? 1 : 0.8,
  })

  const PAGES = [
    { hunter: 'FourLOM', name: '4-LOM' },
    { hunter: 'Bossk', name: 'Bossk' },
    { hunter: 'BobaFett', name: 'Boba Fett' },
    { hunter: 'IG88', name: 'IG-88' },
    { hunter: 'Zuckuss', name: 'Zuckuss' },
    { hunter: 'Dengar', name: 'Dengar' },
  ]
  return (
    <nav className="relative flex flex-col items-center justify-between px-2 py-3 bg-bhgray sticky top-0">
      <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
        <div className="w-full relative flex justify-between md:w-auto lg:static md:block lg:justify-start">
          <NavLink
            className="text-lg font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white"
            to="/landing"
          >
            BOUNTY HUNTERS
          </NavLink>
          <button
            className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block md:hidden outline-none focus:outline-none"
            type="button"
            onClick={() => setNavbarOpen(!navbarOpen)}
          >
            <i className="fas fa-bars" />
          </button>
        </div>
        <div
          className={`md:flex flex-grow items-center
            ${navbarOpen ? 'flex' : 'hidden'}`}
          id="example-navbar-danger"
        >
          <div className="flex flex-col md:flex-row list-none md:ml-auto">
            {PAGES.map((page) => (
              <NavLink
                onClick={toggleMenu}
                key={page.name}
                to={page.hunter}
                style={navLinkStyles}
                className="px-3 py-2 flex items-center text-base uppercase font-medium leading-snug text-white"
              >
                {page.name}
              </NavLink>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}
