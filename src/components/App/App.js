import React from 'react'
import AboutMe from '../AboutMe'
import Articles from '../Articles'
import Landing from '../Landing'
import Navigation from '../Navigation'
import Projects from '../Projects'
import TechStack from '../TechStack'
import Footer from '../Footer'

const App = () => {
  return (
    <>
      <Navigation />
      <Landing />
      <Projects />
      <TechStack />
      <Articles />
      <AboutMe />
      <Footer />
    </>
  )
}

export default App
