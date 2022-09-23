import { NavLink } from 'react-router-dom'
import HomeNavbar from '../componets/HomeNavbar'
import Footer from '../componets/Footer'
import dengar5 from '../assets/images/Dengar/dengar_5.webp'
import ig3 from '../assets/images/IG-88/ssig88_3.webp'
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
    <div className="flex flex-col w-full min-h-screen bg-slate-700">
      <HomeNavbar />
      {/* Landscape */}
      <div className="portrait:hidden mx-auto mt-auto">
        <div className="grid grid-rows-1 grid-cols-6 md:grid-rows-2 md:grid-cols-3 gap-4 justify-items-center px-2 py-2">
          {PAGES.map((page) => (
            <NavLink to={`${page.hunter}`} key={`${page.hunter}`}>
              <img
                src={`${page.imgSrc}`}
                alt="..."
                className="shadow-lg rounded h-32 w-32 lg:h-48 lg:w-48 border-none object-cover"
              />
            </NavLink>
          ))}
        </div>
      </div>
      {/* Portrait */}
      <div className="landscape:hidden mx-auto mt-auto">
        <div className="grid grid-rows-3 grid-cols-2 gap-4 justify-items-center px-4 py-4">
          {PAGES.map((page) => (
            <NavLink to={`${page.hunter}`} key={`${page.hunter}`}>
              <img
                src={`${page.imgSrc}`}
                alt="..."
                className="shadow-lg rounded h-40 w-40 sm:h-64 sm:w-64 md:h-80 md:w-80 border-none object-cover"
              />
            </NavLink>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  )
}
export default Home
