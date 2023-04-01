import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import Navbar from './Navbar'

function Layout() {
  return (
    <div className="flex flex-col h-screen">
      <Navbar />
      <div className="flex-1 overflow-y-auto">
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}
export default Layout
