import React from 'react';
import AboutMe from '../AboutMe';
import Articles from '../Articles';
import ContactMe from '../ContactMe';
import Landing from '../Landing';
import Navigation from '../Navigation';
import Projects from '../Projects';
import TechStack from '../TechStack';
import Footer from '../Footer';

const App = () => {
  return (
    <div>
      <h1>App</h1>
      <Navigation />
      <Landing />
      <AboutMe />
      <TechStack />
      <Projects />
      <Articles />
      <ContactMe />
      <Footer />
    </div>
  );
};

export default App;
