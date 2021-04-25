import React from 'react'
import AboutMe from '../AboutMe'
import Articles from '../Articles'
import Landing from '../Landing'
import Navigation from '../Navigation'
import Projects from '../Projects'
import TechStack from '../TechStack'
import Footer from '../Footer'
import { Parallax } from 'react-parallax'
import winter from '../../../images/winter.jpg'
import summer from '../../../images/summer.JPG'
import fall from '../../../images/fall.jpg'

const App = () => {
  return (
    <>
      <Navigation />
      <Parallax bgImage={summer} strength={500}>
        <Landing />
      </Parallax>
      <Projects />
      <Parallax bgImage={fall} strength={500}>
        <TechStack />
      </Parallax>
      <Articles />
      <Parallax bgImage={winter} strength={500}>
        <AboutMe />
      </Parallax>
      <Footer />
    </>
  )
}

export default App
