import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Modeld from './component/mode';
import Navbar from './component/navbar';
import Home from './pages/home/home';
import About from './pages/about/about';
import Portfolio from './pages/portfolio/portfolio';
import Contact from './pages/contact/contact';
import { Element } from 'react-scroll';
import './app.css';


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Modeld />
      <Routes>
        <Route
          path="/"
          element={
            <Element name="home" className="element">
              <Home />
            </Element>
          }
        />
        <Route
          path="about"
          element={
            <Element name="about" className="element">
              <About />
            </Element>
          }
        />
        <Route
          path="portfolio"
          element={
            <Element name="portfolio" className="element">
              <Portfolio />
            </Element>
          }
        />
        <Route
          path="contact"
          element={
            <Element name="contact" className="element">
              <Contact />
            </Element>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
