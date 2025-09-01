import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import Home from './pages/Home'
import About from './pages/About'
import Properties from './pages/Properties'
import Services from './pages/Services'
import Contact from './pages/Contact'
import Property from './pages/Property'
import ScrollToTop from './components/scrollToTop';

function App() {
  return (
    <BrowserRouter basename="/Estatein">
      <Header />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/properties" element={<Properties />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path='property/:id' element={<Property />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App