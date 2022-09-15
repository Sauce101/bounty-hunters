import { NavLink } from 'react-router-dom'
import HomeNavbar from '../componets/HomeNavbar'
import Footer from '../componets/Footer'
import wideScape from '../assets/images/Home/wideScape.webp'
import fourLom3 from '../assets/images/4-LOM/4lom_3.jpg'
import bossk3 from '../assets/images/Bossk/bossk_3.jpg'
import boba3 from '../assets/images/BobaFett/bobafett_3.jpg'
import ig3 from '../assets/images/IG-88/ssig88_3.jpg'
import zuck3 from '../assets/images/Zuckuss/zuck_3.jpg'
import dengar5 from '../assets/images/Dengar/dengar_5.jpg'

function Home() {
  const PAGES = [
    { hunter: 'FourLOM', imgSrc: fourLom3 },
    { hunter: 'Bossk', imgSrc: bossk3 },
    { hunter: 'BobaFett', imgSrc: boba3 },
    { hunter: 'IG88', imgSrc: ig3 },
    { hunter: 'Zuckuss', imgSrc: zuck3 },
    { hunter: 'Dengar', imgSrc: dengar5 },
  ]

  return (
    <div className="w-full flex flex-col min-h-screen bg-bhbg">
      <HomeNavbar />
      {/* Landscape */}
      <div className="portrait:hidden container mx-auto mt-auto">
        <img src={`${wideScape}`} alt="..." className="object-auto" />
      </div>
      {/* Portrait */}
      <div className="landscape:hidden container mx-auto mt-auto">
        <div className="grid grid-rows-3 grid-cols-2 gap-4 justify-items-center px-4 py-4">
          {PAGES.map((page) => (
            <NavLink to={`${page.hunter}`} key={`${page.hunter}`}>
              <img
                src={`${page.imgSrc}`}
                alt="..."
                className="shadow-lg rounded h-48 w-48 md:h-72 md:w-72 border-none object-cover"
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
