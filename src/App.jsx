// @/App.jsx
import React, { useEffect } from 'react'
import './App.css'
import AOS from 'aos';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    AOS.init({
      offset: 120,
      delay: 0,
      duration: 700,
      easing: 'ease',
      once: false,
      mirror: false,
      anchorPlacement: 'top-bottom',
    });
  }, []);

  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Services />
      <Footer />
      
    </>
  );
}

export default App;
