import { Outlet } from 'react-router-dom'
import Footer from './Footer'
// import NavNew from './NavNew'
import Navbar from './Navbar'

function Layout() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  )
}
export default Layout
