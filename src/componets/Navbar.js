import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
  const [navbarOpen, setNavbarOpen] = React.useState(false)

  const closeMenu = () => {
    setNavbarOpen(false)
  }
  const navLinkStyles = ({ isActive }) => ({
    fontWeight: isActive ? 'bold' : '',
    opacity: isActive ? 1 : 0.8,
  })

  const PAGES = [
    { hunter: 'Dengar', name: 'Dengar' },
    { hunter: 'IG88', name: 'IG-88' },
    { hunter: 'BobaFett', name: 'Boba Fett' },
    { hunter: 'Bossk', name: 'Bossk' },
    { hunter: 'FourLOM', name: '4-LOM' },
    { hunter: 'Zuckuss', name: 'Zuckuss' },
  ]
  return (
    <nav className="px-2 py-3 bg-slate-800 top-0 z-10 mb-6 sticky">
      <div className="px-4 mx-auto flex flex-wrap items-center justify-between">
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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.8}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        </div>
        <div
          className={`md:flex flex-grow items-center
            ${navbarOpen ? 'flex' : 'hidden'}`}
          id="example-navbar-danger"
        >
          <div className="flex flex-col md:flex-row md:ml-auto">
            {PAGES.map((page) => (
              <NavLink
                onClick={closeMenu}
                key={page.name}
                to={page.hunter}
                style={navLinkStyles}
                className="px-3 py-2 items-center text-base font-medium leading-snug text-white"
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
