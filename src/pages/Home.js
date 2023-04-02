/* eslint-disable max-len */
import { NavLink } from 'react-router-dom'
import HomeNavbar from '../componets/HomeNavbar'
import Footer from '../componets/Footer'
import dengar5 from '../assets/images/Dengar/dengar_5.webp'
import ig3 from '../assets/images/IG-88/ig88-03.png'
import boba3 from '../assets/images/BobaFett/bobafett_3.webp'
import bossk3 from '../assets/images/Bossk/bossk_3.webp'
import fourLom3 from '../assets/images/4-LOM/4lom_3.webp'
import zuck3 from '../assets/images/Zuckuss/zuck_3.webp'

function Home() {
  const PAGES = [
    { hunter: 'Dengar', imgSrc: dengar5 },
    { hunter: 'IG88', imgSrc: ig3 },
    { hunter: 'BobaFett', imgSrc: boba3 },
    { hunter: 'Bossk', imgSrc: bossk3 },
    { hunter: 'FourLOM', imgSrc: fourLom3 },
    { hunter: 'Zuckuss', imgSrc: zuck3 },
  ]

  return (
    <div className="flex flex-col w-full min-h-screen bg-slate-700 pb-12">
      <HomeNavbar />
      {/* Landscape */}
      <div className="portrait:hidden mx-auto my-auto grid grid-rows-1 grid-cols-6 justify-items-center gap-4 px-2 py-2 md:gap-8 md:px-8 md:py-8 iPadW:grid iPadW:grid-rows-2 iPadW:grid-cols-3 iPadW:w-3/4 galaxyW:grid galaxyW:grid-rows-2 galaxyW:grid-cols-3 galaxyW:w-3/4 surfaceProW:grid surfaceProW:grid-rows-2 surfaceProW:grid-cols-3 surfaceProW:w-3/4">
        {PAGES.map((page) => (
          <NavLink to={`${page.hunter}`} key={`${page.hunter}`}>
            <img
              src={`${page.imgSrc}`}
              alt="..."
              className="rounded shadow-md max-w-full h-auto border-none object-cover mx-auto"
            />
          </NavLink>
        ))}
      </div>
      {/* Portrait */}
      <div className="landscape:hidden grid grid-rows-3 grid-cols-2 justify-items-center gap-6 px-6 sm:py-6 my-auto mx-auto iPadH:grid iPadH:grid-rows-2 iPadH:grid-cols-3 galaxyH:grid galaxyH:grid-rows-2 galaxyH:grid-cols-3 surfaceProH:grid surfaceProH:grid-rows-2 surfaceProH:grid-cols-3">
        {PAGES.map((page) => (
          <NavLink to={`${page.hunter}`} key={`${page.hunter}`}>
            <img
              src={`${page.imgSrc}`}
              alt="..."
              className="rounded shadow-md max-w-full h-auto border-none mx-auto iPadH:my-12 galaxyH:my-12 surfaceProH:my-12"
            />
          </NavLink>
        ))}
      </div>
      <Footer />
    </div>
  )
}
export default Home
