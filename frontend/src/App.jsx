import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Letter from './components/Letter'
// import Marquee from './components/Marquee'
import Services from './components/Services'
import About from './components/About'
import Team from './components/Team'
import Newsletter from './components/Newsletter'
import Blogs from './components/Blogs'
import Footer from './components/Footer'
import ServicePage from './pages/ServicePage'
import AboutPage from './pages/AboutPage'
import GalleryPage from './pages/GalleryPage'
import ContactPage from './pages/ContactPage'

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route 
          path="/" 
          element={
            <>
              <Hero />
              <Letter />
              {/* <Marquee /> */}
              <Services />
              <About />
              <Team />
              <Newsletter />
              <Blogs />
            </>
          } 
        />
        <Route path="/service" element={<ServicePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App