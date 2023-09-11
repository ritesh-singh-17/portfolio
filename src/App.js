import React, { useEffect } from 'react'
import Home from './Home'
import Navbar from './Navbar'
import About from './About'
import Skills from './Skills'
import Education from './Education'
import Projects from './Projects'
import Contacts from './Contacts'
import Footer from './Footer'
import Error from './Error'
import GoToTop from './GoToTop'
import Experience from './Experience'

const App = () => {

  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Experience/>
      <Education />
      <Projects />
      <Contacts />
      <Footer />
      <GoToTop/>
    </div>
  )
}

export default App
