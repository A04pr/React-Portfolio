import { useState } from 'react';
import Header from './components/Header.jsx';
import AboutMe from './components/AboutMe.jsx';
import Portfolio from './components/Portfolio.jsx';
import Contact from './components/Contact.jsx';
import Resume from './components/Resume.jsx';

function App() {
  return (
    <>
      <Header />
      <AboutMe />
      <Portfolio />
      <Contact />
      <Resume />
    </>
  );
}

export default App;