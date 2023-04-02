import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import Navbar from './Navbar'

function Layout() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="pt-20">
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}
export default Layout
