import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom'
import Home from './pages/Home'
import Layout from './componets/Layout'
import Bossk from './pages/Bossk'
import Zuckuss from './pages/Zuckuss'
import BobaFett from './pages/BobaFett'
import Dengar from './pages/Dengar'
import IG88 from './pages/IG88'
import FourLOM from './pages/FourLOM'
import ScrollToTop from './componets/ScrollToTop'

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route element={<Layout />}>
          <Route path="Bossk" element={<Bossk />} />
          <Route path="BobaFett" element={<BobaFett />} />
          <Route path="IG88" element={<IG88 />} />
          <Route path="Dengar" element={<Dengar />} />
          <Route path="Zuckuss" element={<Zuckuss />} />
          <Route path="FourLOM" element={<FourLOM />} />
          <Route path="landing" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
