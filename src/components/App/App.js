import React from 'react'
import AboutMe from '../AboutMe'
import Articles from '../Articles'
import Landing from '../Landing'
import Navigation from '../Navigation'
import Projects from '../Projects'
import TechStack from '../TechStack'
import Summary from '../Summary'
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
      <Summary />
      <Parallax bgImage={fall} strength={500}>
        <Projects />
      </Parallax>
      <TechStack />
      <Parallax bgImage={winter} strength={500}>
        <Articles />
      </Parallax>

      <AboutMe />

      <Footer />
    </>
  )
}

export default App
