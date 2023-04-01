import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom'
// import ScrollToTop from './componets/ScrollToTop'
import Home from './pages/Home'
import Layout from './componets/Layout'
import Dengar from './pages/Dengar'
import IG88 from './pages/IG88'
import BobaFett from './pages/BobaFett'
import Bossk from './pages/Bossk'
import FourLOM from './pages/FourLOM'
import Zuckuss from './pages/Zuckuss'
import Error from './pages/Error'

function App() {
  return (
    <Router>
      {/* <ScrollToTop /> */}
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route element={<Layout />}>
          <Route path="Dengar" element={<Dengar />} />
          <Route path="IG88" element={<IG88 />} />
          <Route path="BobaFett" element={<BobaFett />} />
          <Route path="Bossk" element={<Bossk />} />
          <Route path="FourLOM" element={<FourLOM />} />
          <Route path="Zuckuss" element={<Zuckuss />} />
          <Route path="landing" element={<Navigate to="/" />} />
        </Route>
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  )
}

export default App
