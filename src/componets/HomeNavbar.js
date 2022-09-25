import React from 'react'
import { NavLink } from 'react-router-dom'

export default function HomeNavbar() {
  const [navbarOpen, setNavbarOpen] = React.useState(false)

  const toggleMenu = () => {
    setNavbarOpen(!navbarOpen)
  }

  const PAGES = [
    { hunter: 'Dengar', name: 'Dengar' },
    { hunter: 'IG88', name: 'IG-88' },
    { hunter: 'BobaFett', name: 'Boba Fett' },
    { hunter: 'Bossk', name: 'Bossk' },
    { hunter: 'FourLOM', name: '4-LOM' },
    { hunter: 'Zuckuss', name: 'Zuckuss' },
  ]
  return (
    <nav className="relative flex flex-col px-2 py-3 bg-slate-800 sticky top-0">
      {/* Portrait */}
      <div className="container mx-auto flex flex-row list-none justify-around landscape:hidden">
        <h2 className="text-lg font-bold leading-relaxed inline-block py-2 whitespace-nowrap uppercase text-white">
          Bounty Hunters
        </h2>
      </div>
      {/* Landscape */}
      <div className="portrait:hidden lg:hidden flex flex-row list-none justify-around">
        {PAGES.map((page) => (
          <NavLink
            onClick={toggleMenu}
            to={`/${page.hunter}`}
            key={page.hunter}
            className="px-3 py-1 text-sm lg:text-lg uppercase font-medium text-white hover:opacity-75"
          >
            {page.name}
          </NavLink>
        ))}
      </div>
      <div className="portrait:hidden hidden lg:inline-flex container mx-auto flex flex-row justify-center">
        <h2 className="text-lg font-bold leading-relaxed py-2 whitespace-nowrap uppercase text-white">
          Bounty Hunters
        </h2>
      </div>
    </nav>
  )
}
