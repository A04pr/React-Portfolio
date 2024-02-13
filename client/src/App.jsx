import { useState } from 'react';
import Header from './components/Header.jsx';
import AboutMe from './components/AboutMe.jsx';
import Projects from './components/Projects.jsx';
import Contact from './components/Contact.jsx';

function App() {
  return (
    <>
      <Header />
      <AboutMe />
      <Projects />
      <Contact />
    </>
  );
}

export default App;