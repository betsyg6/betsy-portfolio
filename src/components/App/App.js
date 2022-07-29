import React from 'react'
import AboutMe from '../AboutMe'
import Articles from '../Articles'
import Landing from '../Landing'
import Navigation from '../Navigation'
import Projects from '../Projects'
import Footer from '../Footer'
import { Parallax } from 'react-parallax'

const App = () => {
  return (
    <>
      <Navigation />
      <Parallax strength={500}>
        <Landing />
      </Parallax>
      <Parallax strength={500}>
        <AboutMe />
      </Parallax>
      <Parallax strength={500}>
        <Projects />
      </Parallax>
      <Articles />
      <Footer />
    </>
  )
}

export default App
