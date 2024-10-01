import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <div>
      <Navbar/>
      
      <section id="home">
        <Home/>
      </section>

      <section id="about">
        <About/>
      </section>

      <section id="projects">
        <Projects/>
      </section>

      <section id="contact">
        <Contact/>
      </section>
      <Footer/>
    </div>
  );
};

export default App;
