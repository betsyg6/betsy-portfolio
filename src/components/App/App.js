import React from 'react';
import AboutMe from '../AboutMe';
import Articles from '../Articles';
import Landing from '../Landing';
import Navigation from '../Navigation';
import Projects from '../Projects';
import TechStack from '../TechStack';
import Footer from '../Footer';

const App = () => {
  return (
    <>
      <Navigation />
      <Landing />
      <AboutMe />
      <TechStack />
      <Projects />
      <Articles />
      <Footer />
    </>
  );
};

export default App;
