import React from 'react'
import { NavLink } from 'react-router-dom'

export default function HomeNavbar() {
  const [navbarOpen, setNavbarOpen] = React.useState(false)

  const toggleMenu = () => {
    setNavbarOpen(!navbarOpen)
  }

  const PAGES = [
    { hunter: 'FourLOM', name: '4-LOM' },
    { hunter: 'Bossk', name: 'Bossk' },
    { hunter: 'BobaFett', name: 'Boba Fett' },
    { hunter: 'IG88', name: 'IG-88' },
    { hunter: 'Zuckuss', name: 'Zuckuss' },
    { hunter: 'Dengar', name: 'Dengar' },
  ]
  return (
    <nav className="relative flex flex-col px-2 py-3 bg-bhgray sticky top-0">
      <div className="container mx-auto flex flex-row list-none justify-around landscape:hidden">
        <h2 className="text-lg font-bold leading-relaxed inline-block py-2 whitespace-nowrap uppercase text-white">
          Bounty Hunter
        </h2>
      </div>
      <div className="portrait:hidden container mx-auto flex flex-row list-none justify-around">
        {PAGES.map((page) => (
          <NavLink
            onClick={toggleMenu}
            to={`/${page.hunter}`}
            key={page.hunter}
            className="px-3 py-2 text-sm lg:text-lg uppercase font-medium text-white hover:opacity-75"
          >
            {page.name}
          </NavLink>
        ))}
      </div>
    </nav>
  )
}
